import React from "react";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "What distinguishes a typical employee from a virtual assistant?", a: "A virtual assistant works remotely and provides services on a flexible or part-time basis, unlike traditional employees." },
  { q: "Can virtual assistants handle confidential data?", a: "Yes, strict security measures are followed to ensure data confidentiality." },
  { q: "Are virtual assistant services affordable for small businesses?", a: "Absolutely! Services are cost-effective and tailored to your needs." },
  { q: "How can I contact my virtual assistant?", a: "Via email, video calls, or project management tools for seamless communication." },
  { q: "Can I customize the tasks assigned to my virtual assistant?", a: "Yes, all services are fully customizable to fit your business needs." },
];

export default function VirtualAssistantNewYork() {
  return (
    <ServiceLayout
      seo={{
        title: "Professional Virtual Assistants Service in New York, USA",
        description:
          "Struggling with admin tasks? Our virtual assistant service helps with finances and more! Trusted virtual assistant for small businesses in NY.",
        keywords:
          "virtual assistants service in new york, virtual assistant service, best virtual assistant companies, virtual assistant for small business, virtual bookkeeping service, virtual assistant ny",
        author: "Milta Accounting",
        canonical: "https://www.milta.com/us/services/virtual-assistant-service-in-newyork/",
      }}
      hero={{
        titleLead: "Boost Your Business Efficiency with",
        highlight: "Virtual Assistant Services in New York",
        subtitle:
          "Looking for top-notch virtual assistant services in New York? Our virtual assistant for small businesses provides reliable, cost-effective solutions that free up your time and allow you to focus on what matters most.",
        breadcrumb: "Virtual Assistant Services in New York",
      }}
      intro={{
        overline: "VIRTUAL ASSISTANT",
        titleLead: "Unlock Rewarding Opportunities with Virtual Assistant Services in",
        highlight: "New York",
        paragraphs: [
          "Pursuing a career in virtual assistant services in New York opens up flexible and rewarding opportunities. As businesses embrace remote work, virtual assistants for small businesses are crucial in enhancing efficiency and supporting growth.",
          "At Milta, we recognize the challenges small business owners face with administrative tasks, finances, and daily operations. Our virtual assistant services offer expert assistance to streamline workflows and boost productivity.",
        ],
        ctaLabel: "Book a Free Consultation",
        imageAlt: "Virtual assistant services in New York",
      }}
      whyEssential={{
        overline: "THE BENEFITS",
        titleLead: "Benefits of Virtual Assistant Services in",
        highlight: "New York",
        items: [
          "Cost Savings",
          "Increased Productivity",
          "Flexibility & Scalability",
          "Expert Support",
        ],
      }}
      cardGroups={[
        {
          overline: "OUR SERVICES",
          titleLead: "Our Virtual Assistant Services in",
          highlight: "New York",
          bg: "paper",
          columns: 3,
          items: [
            { title: "Real Estate Virtual Assistant NY", desc: "Manage property listings, client databases, virtual tours, showings, market research, and reporting." },
            { title: "Data Entry", desc: "Ensure accurate and organized business records for spreadsheets and software." },
            { title: "Event Planning", desc: "Handle RSVPs, vendor coordination, scheduling, and logistics for virtual or in-person events." },
            { title: "Internet Research", desc: "Conduct market research, competitor analysis, and trend tracking for actionable insights." },
            { title: "Business Card Scanning", desc: "Digitize, upload, and organize contacts for seamless communication." },
            { title: "Appointment Scheduling", desc: "Manage calendars, appointments, reminders, and time-zone adjustments." },
            { title: "Accounting & Virtual Bookkeeping", desc: "Maintain accurate financial records, reconciliations, and statements for compliance." },
            { title: "Call Answering", desc: "Handle inquiries, appointments, and client calls professionally." },
            { title: "Correspondence Management", desc: "Manage emails, draft professional messages, and keep your inbox organized." },
            { title: "Desktop Publishing Services", desc: "Create brochures, flyers, newsletters, and professional documents." },
            { title: "Presentations & Spreadsheets", desc: "Design visually engaging presentations and spreadsheets for business use." },
            { title: "Travel, Airline & Hotel Reservations", desc: "Plan flights, hotels, and itineraries efficiently for hassle-free travel." },
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
