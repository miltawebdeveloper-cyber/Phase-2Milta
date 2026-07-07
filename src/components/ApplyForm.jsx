// src/components/ApplyForm.jsx
import React, { useState } from "react";
import { submitApplicationForm } from "../api/client";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    jobType: "",
    position: "",
    email: "",
    reference: "",
    resume: null,
  });

  const [resumePreview, setResumePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.jobType) {
      newErrors.jobType = "Select job type";
    }

    if (!formData.position) {
      newErrors.position = "Select position";
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length <= 10) {
        setFormData({ ...formData, [name]: numericValue });
      }
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
    setResumePreview(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatusMessage("");
    setStatusType("");

    const payload = new FormData();
    payload.append("firstName", formData.firstName);
    payload.append("phone", formData.phone);
    payload.append("jobType", formData.jobType);
    payload.append("position", formData.position);
    payload.append("email", formData.email);
    payload.append("reference", formData.reference || "");
    if (formData.resume) {
      payload.append("resume", formData.resume);
    }

    const response = await submitApplicationForm(payload);

    if (response.error) {
      console.error("API ERROR:", response.error);
      alert(`Failed to save the application: ${response.error}`);
      setLoading(false);
      setStatusType("error");
      setStatusMessage("Failed to submit application. Please try again.");
      return;
    }

    setFormData({
      firstName: "",
      phone: "",
      jobType: "",
      position: "",
      email: "",
      reference: "",
      resume: null,
    });
    setResumePreview(null);
    setLoading(false);

    if (response.emailNotification && !response.emailNotification.success) {
      setStatusType("warning");
      setStatusMessage(
        "Application submitted successfully, but the email notification was skipped or failed."
      );
      return;
    }

    setStatusType("success");
    setStatusMessage("Application submitted successfully. We will contact you soon.");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Build Your Career with Confidence</h2>

        <p style={styles.subtitle}>
          Join a team that works with U.S.-based clients, follows global accounting
          standards, and values accuracy, growth, and professional development at
          every stage.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.row}>
            <div style={styles.fieldBox}>
              <input
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                style={styles.input}
              />
              {errors.firstName && <p style={styles.error}>{errors.firstName}</p>}
            </div>

            <div style={styles.fieldBox}>
              <input
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
              />
              {errors.phone && <p style={styles.error}>{errors.phone}</p>}
            </div>
          </div>

          <div style={styles.row}>
            <div style={styles.fieldBox}>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                style={styles.input}
              >
                <option value="">Select Job Type *</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Internship</option>
              </select>
              {errors.jobType && <p style={styles.error}>{errors.jobType}</p>}
            </div>

            <div style={styles.fieldBox}>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                style={styles.input}
              >
                <option value="">Select Position *</option>
                <option>Associate US Accountant</option>
                <option>Junior US Accountant</option>
                <option>Senior US Accountant</option>
                <option>US Accounts Reviewer</option>
                <option>Junior US Tax preparer</option>
                <option>Senior US Tax preparer</option>
                <option>Business Development Associate</option>
                <option>Business Development Executive</option>
                <option>Virtual Assistant</option>
              </select>
              {errors.position && <p style={styles.error}>{errors.position}</p>}
            </div>
          </div>

          <div style={styles.row}>
            <div style={styles.fieldBox}>
              <input
                name="email"
                placeholder="Email ID *"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
              {errors.email && <p style={styles.error}>{errors.email}</p>}
            </div>

            <div style={styles.fieldBox}>
              <input
                name="reference"
                placeholder="Reference"
                value={formData.reference}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>

          <label style={styles.uploadBtn}>
            Upload Resume
            <input type="file" onChange={handleFile} style={{ display: "none" }} />
          </label>
          {errors.resume && <p style={styles.error}>{errors.resume}</p>}

          {resumePreview && (
            <a
              href={resumePreview}
              target="_blank"
              rel="noreferrer"
              style={styles.resumePreview}
            >
              View Resume
            </a>
          )}

          <button type="submit" style={styles.submitBtn} disabled={loading}>
            {loading ? "Submitting..." : "SUBMIT YOUR APPLICATION"}
          </button>

          {statusMessage && (
            <div
              style={
                statusType === "success"
                  ? {
                      marginTop: "10px",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1px solid #ffffff",
                      backgroundColor: "rgba(16, 185, 129, 0.12)",
                      color: "#f8fffd",
                      fontWeight: 700,
                      textAlign: "center",
                      fontSize: "0.95rem",
                    }
                  : {
                      marginTop: "10px",
                      color: "#ffffff",
                      fontWeight: 700,
                      textAlign: "center",
                      fontSize: "0.95rem",
                    }
              }
            >
              {statusMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 20px",
    background: "linear-gradient(135deg, #0b1a12, #143425, #0a0a0a)",
    width: "100%",
  },
  card: {
    background: "#fafafa07",
    padding: "40px 30px",
    maxWidth: "650px",
    width: "100%",
    borderRadius: "15px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
    color: "white",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "10px",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "14px",
    color: "#cfcfcf",
    marginBottom: "30px",
    lineHeight: "1.6",
  },
  row: { display: "flex", gap: "15px", flexWrap: "wrap" },
  fieldBox: {
    flex: 1,
    minWidth: "250px",
    display: "flex",
    flexDirection: "column",
  },
  form: { display: "flex", flexDirection: "column", gap: "20px" },
  input: {
    padding: "10px 0",
    border: "none",
    borderBottom: "1px solid #bbb",
    background: "transparent",
    color: "#c0b2b2ff",
    fontSize: "15px",
    outline: "none",
  },
  uploadBtn: {
    background: "#f69600",
    padding: "14px",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "6px",
    cursor: "pointer",
    width: "fit-content",
  },
  submitBtn: {
    background: "#ff9800",
    padding: "14px",
    color: "white",
    fontWeight: "bold",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
  error: { color: "#ff6b6b", fontSize: "13px" },
  resumePreview: { color: "#fff", fontWeight: "bold" },
};

export default ApplyForm;
