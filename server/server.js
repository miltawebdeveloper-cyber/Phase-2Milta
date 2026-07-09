require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { createClient } = require("@supabase/supabase-js");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize Supabase Client
const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase env vars in server");
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Multer for memory storage (file handling for application resumes)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Both values may hold a comma-separated list, so split either one.
const parseRecipients = (recipientsValue, fallbackEmail, fallbackName) => {
  const source = recipientsValue || fallbackEmail;
  if (!source) return [];

  return source
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => ({ email: entry, name: fallbackName || "Team" }));
};

const sendBrevoTemplateEmail = async ({ templateId, params, recipients, replyTo, senderName }) => {
  const brevoApiKey = process.env.BREVO_API_KEY;

  if (!brevoApiKey || !templateId || !recipients.length) {
    return {
      success: false,
      message: "Brevo email skipped because BREVO_API_KEY, templateId, or recipients are missing.",
    };
  }

  const payload = {
    to: recipients,
    templateId,
    params,
  };

  if (replyTo && replyTo.email) {
    payload.replyTo = replyTo;
  }

  // Use a verified sender email, but display the applicant's name in the inbox
  let verifiedSenderEmail = process.env.BREVO_SENDER_EMAIL || process.env.BREVO_TO_EMAIL;
  if (verifiedSenderEmail) {
    // Ensure we only use a single email for the sender, in case a comma-separated list was provided
    verifiedSenderEmail = verifiedSenderEmail.split(',')[0].trim();
    
    payload.sender = {
      email: verifiedSenderEmail,
      name: senderName || process.env.BREVO_SENDER_NAME || "Milta Website",
    };
  }

  const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": brevoApiKey,
    },
    body: JSON.stringify(payload),
  });

  if (!brevoResponse.ok) {
    const errorText = await brevoResponse.text();
    throw new Error(`Brevo API Error: ${brevoResponse.status} ${errorText}`);
  }

  const result = await brevoResponse.json().catch(() => ({}));

  return {
    success: true,
    message: "Brevo email notification sent successfully.",
    result,
  };
};

const jobRecipients = () =>
  parseRecipients(
    process.env.BREVO_JOB_TO_EMAILS,
    process.env.BREVO_TO_EMAIL,
    process.env.BREVO_TO_NAME || "HR Team"
  );

const contactRecipients = () =>
  parseRecipients(
    process.env.BREVO_CONTACT_TO_EMAILS || process.env.BREVO_NOTIFICATION_TO_EMAILS,
    process.env.BREVO_TO_EMAIL,
    process.env.BREVO_CONTACT_TO_NAME || "Team"
  );

const newsletterRecipients = () =>
  parseRecipients(
    process.env.BREVO_NEWSLETTER_TO_EMAILS || process.env.BREVO_NOTIFICATION_TO_EMAILS,
    process.env.BREVO_TO_EMAIL,
    process.env.BREVO_NEWSLETTER_TO_NAME || "Team"
  );

/* =========================================
   1. BLOG ENDPOINTS
   ========================================= */

// Get Blogs (with filtering, ordering, limit options)
app.get("/api/blogs", async (req, res) => {
  try {
    const { featured, editors_pick, limit, order, ascending, table } = req.query;
    const tableName = table || "blogs";

    let query = supabase.from(tableName).select("*");

    if (featured === "true") {
      query = query.eq("featured", true);
    }
    if (editors_pick === "true") {
      query = query.eq("editors_pick", true);
    }

    if (order) {
      const isAsc = ascending === "true";
      query = query.order(order, { ascending: isAsc });
    }

    if (limit) {
      query = query.limit(parseInt(limit, 10));
    }

    const { data, error } = await query;
    if (error) throw error;

    res.json(data);
  } catch (error) {
    console.error("GET /api/blogs error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Get Single Blog by slug
app.get("/api/blogs/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const { table } = req.query;
    const tableName = table || "blogs";

    const { data, error } = await supabase
      .from(tableName)
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

    if (error) throw error;
    if (!data) return res.status(404).json({ error: "Blog not found" });

    // Also get latest posts for the sidebar, similar to BlogDetails.jsx
    const { data: latest, error: latestErr } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5);

    if (latestErr) throw latestErr;

    res.json({ blog: data, latestPosts: latest || [] });
  } catch (error) {
    console.error(`GET /api/blogs/${req.params.slug} error:`, error);
    res.status(500).json({ error: error.message });
  }
});

// Update Blog Content (Admin)
app.post("/api/blogs/:id/update", async (req, res) => {
  try {
    const { id } = req.params;
    const { content, table } = req.body;
    const tableName = table || "blogs";

    const { data, error } = await supabase
      .from(tableName)
      .update({ content })
      .eq("id", id);

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    console.error(`POST /api/blogs/${req.params.id}/update error:`, error);
    res.status(500).json({ error: error.message });
  }
});

/* =========================================
   2. CONTACT FORM ENDPOINT
   ========================================= */

app.post("/api/contact", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      companyName,
      email,
      phoneNumber,
      howDidYouFind,
      serviceInterest,
      message,
    } = req.body;

    let emailNotification;

    try {
      const senderFullName = `${firstName || ""} ${lastName || ""}`.trim() || "User";
      emailNotification = await sendBrevoTemplateEmail({
        templateId: Number(process.env.BREVO_CONTACT_TEMPLATE_ID),
        recipients: contactRecipients(),
        replyTo: email ? { email, name: senderFullName } : undefined,
        senderName: `${senderFullName} (Contact Form)`,
        params: {
          form_type: "contact",
          first_name: firstName || "",
          last_name: lastName || "",
          company_name: companyName || "",
          email: email || "",
          phone_number: phoneNumber || "",
          how_did_you_find: howDidYouFind || "",
          service_interest: serviceInterest || "",
          message: message || "",
        },
      });
    } catch (emailError) {
      console.error("Brevo contact email send error:", emailError);
      emailNotification = {
        success: false,
        message: "Brevo email notification failed.",
        error: emailError.message,
      };
    }

    // Email is the only record of this submission, so a failed send must not
    // report success — the visitor would think we received the enquiry.
    if (!emailNotification.success) {
      return res.status(500).json({
        error: "Could not deliver your message. Please try again.",
        emailNotification,
      });
    }

    res.json({ success: true, emailNotification });
  } catch (error) {
    console.error("POST /api/contact error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/newsletter", async (req, res) => {
  try {
    const { email } = req.body;

    let emailNotification;

    try {
      emailNotification = await sendBrevoTemplateEmail({
        templateId: Number(process.env.BREVO_NEWSLETTER_TEMPLATE_ID),
        recipients: newsletterRecipients(),
        senderName: "New Newsletter Subscriber",
        params: {
          form_type: "newsletter",
          email: email || "",
          subscriber_email: email || "",
        },
      });
    } catch (emailError) {
      console.error("Brevo newsletter email send error:", emailError);
      emailNotification = {
        success: false,
        message: "Brevo email notification failed.",
        error: emailError.message,
      };
    }

    if (!emailNotification.success) {
      return res.status(500).json({
        error: "Could not complete your subscription. Please try again.",
        emailNotification,
      });
    }

    res.json({ success: true, emailNotification });
  } catch (error) {
    console.error("POST /api/newsletter error:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

/* =========================================
   3. JOB APPLICATION ENDPOINT
   ========================================= */

app.post("/api/apply", upload.single("resume"), async (req, res) => {
  try {
    const { firstName, phone, jobType, position, email, reference } = req.body;
    const file = req.file;

    let resumeURL = "Resume not uploaded";

    if (file) {
      // Create a unique file name
      const originalName = file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, ""); // sanitize
      const fileName = `resume_${Date.now()}_${originalName}`;

      // Upload to Supabase Storage
      const { data: _uploadData, error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(fileName, file.buffer, {
          contentType: file.mimetype,
          upsert: true
        });

      if (uploadError) {
        console.error("Supabase Storage Upload Error:", uploadError);
        return res.status(500).json({ error: `Storage Error: ${uploadError.message}` });
      }

      // Get public URL
      const { data: publicUrlData } = supabase.storage
        .from("resumes")
        .getPublicUrl(fileName);

      resumeURL = publicUrlData.publicUrl;
    }

    const brevoParams = {
      form_type: "job application",
      firstName: firstName || "",
      email: email || "",
      phone: phone || "",
      jobType: jobType || "",
      position: position || "",
      reference: reference || "",
      resumeURL,
    };

    let emailNotification;

    try {
      emailNotification = await sendBrevoTemplateEmail({
        templateId: Number(process.env.BREVO_JOB_TEMPLATE_ID),
        recipients: jobRecipients(),
        replyTo: email ? { email, name: firstName || "Applicant" } : undefined,
        senderName: firstName ? `${firstName} (Job Application)` : "New Job Application",
        params: brevoParams,
      });
    } catch (emailError) {
      console.error("Brevo email send error:", emailError);
      emailNotification = {
        success: false,
        message: "Brevo email notification failed.",
        error: emailError.message,
      };
    }

    // The resume survives in storage, but nobody is notified — treat as a failure.
    if (!emailNotification.success) {
      return res.status(500).json({
        error: "Could not submit your application. Please try again.",
        resumeURL,
        emailNotification,
      });
    }

    res.json({ success: true, resumeURL, emailNotification });
  } catch (error) {
    console.error("POST /api/apply critical error:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

/* =========================================
   SERVER START
   ========================================= */

app.listen(port, () => {
  console.log(`Backend Express Server running on port ${port}`);
});
