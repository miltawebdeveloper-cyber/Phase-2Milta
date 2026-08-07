import React from "react";
import useFullSEO from "../../utils/useFullSEO";
import {
  StatePageShell,
  StateHero,
  Prose,
  HighlightStrip,
  FeatureCards,
  FAQBlock,
} from "../_shared/StatePageKit";

const SERVICES = [
  { title: "Real Estate Virtual Assistant SC", desc: "Manage property listings, client databases, virtual tours, scheduling, market research, and reporting so you can focus on closing deals." },
  { title: "Data Entry", desc: "Accurate data entry services ensuring organized, consistent, and easily accessible business records." },
  { title: "Event Planning", desc: "Handle RSVPs, vendor coordination, scheduling, and logistics for seamless virtual or in-person events." },
  { title: "Internet Research", desc: "Conduct market research, competitor analysis, and trend tracking to support informed decision-making." },
  { title: "Business Card Scanning", desc: "Digitize, categorize, and organize contacts to keep your database current and accessible." },
  { title: "Appointment Scheduling", desc: "Calendar management, reminders, and rescheduling across time zones so you never miss a meeting." },
  { title: "Accounting & Virtual Bookkeeping Service", desc: "Maintain accurate financial records, reconcile accounts, and generate compliant financial statements." },
  { title: "Call Answering", desc: "Professional call answering services to manage inquiries, appointments, and client interactions." },
  { title: "Correspondence Management", desc: "Inbox organization, email drafting, and timely communication handled with professionalism." },
  { title: "Desktop Publishing Services", desc: "Design brochures, flyers, newsletters, and reports customized to your business branding." },
  { title: "Presentations & Spreadsheets Creation", desc: "Create visually engaging presentations and detailed spreadsheets for impactful communication." },
  { title: "Travel, Airline & Hotel Reservations", desc: "Flight bookings, hotel arrangements, and itinerary planning for stress-free business travel." },
];

const FAQS = [
  { q: "What distinguishes a typical employee from a virtual assistant?", a: "Virtual assistants work remotely and provide flexible, scalable support without the overhead of full-time employees." },
  { q: "Can virtual assistants handle confidential data?", a: "Yes. Our virtual assistants follow strict security protocols to protect your business data." },
  { q: "Are virtual assistant services affordable for small businesses?", a: "Absolutely. Our services are cost-effective and eliminate expenses associated with full-time staff." },
  { q: "How can I contact my virtual assistant?", a: "We offer email, video calls, and project management tools for seamless communication." },
  { q: "Can I customize the tasks assigned to my virtual assistant?", a: "Yes. All services are fully customizable to meet your business needs." },
];

export default function VirtualAssistantCalifornia() {
  useFullSEO({
    title: "Professional Virtual Assistant Services in California",
    description:
      "Simplify your daily operations with Milta’s virtual assistant services in California, delivering reliable support for admin, data, and business tasks.",
    keywords:
      "virtual assistants service in california, virtual assistant service, best virtual assistant companies, virtual assistant for small business, virtual bookkeeping service, virtual assistant sc",
    author: "Milta Accounting",
    canonical:
      "https://www.miltafs.com/us/services/virtual-assistant-service-in-california/",
  });

  return (
    <StatePageShell>
      <StateHero
        lead="Supercharge Your Business with"
        highlight="Premier Virtual Assistant Services"
        subtitle="We provide skilled professionals to handle administrative work, bookkeeping, and more—so you can focus on scaling your business."
        breadcrumb="Virtual Assistant Services in California"
        ctaText="Take Your Business To The Next Level"
      />

      <Prose
        overline="VIRTUAL ASSISTANCE"
        title="Unlock Limitless Potential with Virtual Assistant Services in"
        highlight="California"
        paragraphs={[
          "We understand the daily grind of small business owners—from managing administrative overload to juggling financial tasks. Our virtual assistant services in California provide expert support designed to streamline operations and increase efficiency.",
          "Whether you're a solopreneur or leading a fast-growing company, Milta delivers tailored solutions—from virtual bookkeeping services to executive-level administrative support—so you can scale with confidence.",
        ]}
      />

      <HighlightStrip
        overline="THE ADVANTAGES"
        title="Unlock the Advantages of Virtual Assistant Services in"
        highlight="California"
        items={[
          "Smart, Cost-Effective Solutions",
          "Maximized Productivity & Efficiency",
          "Expertise at Your Fingertips",
          "Scalability for Business Growth",
        ]}
      />

      <FeatureCards
        dark
        overline="WHAT WE OFFER"
        title="Our Virtual Assistant Services in"
        highlight="California"
        items={SERVICES}
        columns={3}
      />

      <FAQBlock faqs={FAQS} />
    </StatePageShell>
  );
}
