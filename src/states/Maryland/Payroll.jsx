import React from "react";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PaymentsIcon from "@mui/icons-material/Payments";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import GppGoodIcon from "@mui/icons-material/GppGood";
import ServiceLayout from "../_ServiceLayout";

const faqs = [
  { q: "What are payroll management services?", a: "Payroll management services handle employee salary calculations, tax deductions, payroll processing, pay slip generation, and compliance with federal, state, and local regulations — ensuring employees are paid accurately and on time." },
  { q: "How do payroll management services ensure compliance and accuracy?", a: "We use advanced payroll systems and experienced specialists to calculate wages, manage deductions, file payroll taxes, and follow current labor laws, with regular audits to maintain accuracy." },
  { q: "Why should businesses outsource payroll management services in Maryland?", a: "Outsourcing saves time, reduces compliance risk, minimizes errors, and protects sensitive employee data — while keeping you current on changing tax laws and filing deadlines." },
  { q: "Is payroll outsourcing suitable for small and growing businesses?", a: "Yes. It's ideal for businesses that lack in-house payroll expertise or are expanding their workforce, since our services scale with you without the cost of dedicated payroll staff or software." },
];

export default function PayrollManagementMaryland() {
  return (
    <ServiceLayout
      seo={{
        title: "Payroll Solutions in Maryland | Milta",
        description:
          "Boost payroll efficiency and manage costs effectively with Milta's professional payroll management services in Maryland.",
        keywords:
          "payroll management services in maryland, payroll management system, payroll management company, payroll management services, payroll management",
        author: "Milta Accounting",
        canonical: "https://www.miltafs.com/us/services/payroll-management-services-in-the-maryland/",
      }}
      hero={{
        titleLead: "Professional Payroll Solutions in",
        highlight: "Maryland",
        subtitle:
          "Boost payroll efficiency and manage costs effectively with Milta's professional payroll management services in Maryland. Accurate, on-time, and fully compliant — every pay period.",
        breadcrumb: "Payroll Management Services in Maryland",
      }}
      intro={{
        overline: "PAYROLL MANAGEMENT",
        titleLead: "Payroll Management Services",
        highlight: "in Maryland",
        paragraphs: [
          "Precise payroll management is essential to smooth business operations, yet it remains one of the most complex, regulation-heavy tasks a business handles. Milta provides dependable payroll management services in Maryland that simplify the process, minimize errors, and ensure full compliance with federal, state, and local regulations.",
          "As your dedicated payroll partner, we manage every step — from calculating wages and deductions to handling tax filings — making sure every payment and submission is accurate and on schedule, every time.",
        ],
        ctaLabel: "Book a Free 30-Minute Zoom Consultation",
        imageAlt: "Payroll management services in Maryland",
      }}
      whyEssential={{
        overline: "END-TO-END SUPPORT",
        titleLead: "Payroll Management You Can",
        highlight: "Rely On",
        subtitle:
          "Our payroll administration services deliver a technologically advanced, well-organized solution for companies of every size — from timesheets through to tax filings.",
        items: [
          "Employee Timesheet Management",
          "Accurate Calculation of Wages & Overtime",
          "Payroll Tax Calculation, Payment & Filing",
          "Payslip Generation & Reporting",
          "Compliance with US Payroll Laws & Labor Regulations",
        ],
      }}
      solutions={{
        overline: "HOW IT WORKS",
        titleLead: "How Our Payroll Management",
        highlight: "System Works",
        subtitle: "A structured, four-part process that keeps every pay run accurate and on time.",
        items: [
          { icon: ScheduleIcon, title: "Time & Wage Calculation", desc: "Working hours, paid leave, holidays, overtime, and gross pay are calculated accurately for every employee." },
          { icon: PaymentsIcon, title: "Payroll Processing & Payments", desc: "Automated payroll runs with direct deposits or paper checks, ensuring on-time salary disbursement." },
          { icon: AssessmentIcon, title: "Payroll Reporting & Insights", desc: "Labor cost analysis, headcount tracking, and leave balances, reported clearly for every pay period." },
          { icon: ReceiptLongIcon, title: "Payroll Tax Processing & Deductions", desc: "Federal, state, and local tax calculations, automated payments, and voluntary deductions handled correctly." },
        ],
      }}
      checklists={[
        {
          overline: "WHY IT MATTERS",
          titleLead: "Why Payroll Management Is Essential",
          highlight: "for US Businesses",
          subtitle: "Effective payroll management has a direct impact on compliance, employee satisfaction, and business stability.",
          items: ["Employee Satisfaction", "Time Efficiency", "Data Security", "Scalability", "Money Savings"],
        },
        {
          overline: "WHY OUTSOURCE",
          titleLead: "Why Choose Outsourced",
          highlight: "Payroll Management",
          subtitle:
            "As organizations scale, payroll grows more detailed and regulation-heavy — especially with payroll tax rules and labor laws that shift constantly. Outsourcing reduces compliance exposure and operational strain.",
          items: ["More Time for Growth", "Regulatory Confidence", "Higher Accuracy", "Enhanced Data Protection"],
        },
      ]}
      advantages={{
        titleLead: "Trusted Payroll Data",
        highlight: "Security & Compliance",
        intro:
          "Protecting payroll data is critical. Our systems are built with strong security and compliance controls at every level.",
        panelStats: [
          { num: "4", label: "Processing Steps" },
          { num: "10y+", label: "Experience" },
          { num: "100%", label: "Compliance Focus" },
          { num: "24/7", label: "Monitoring" },
        ],
        items: [
          { icon: LockPersonIcon, title: "Role-Based Access", desc: "Payroll data is only visible to the people who need it, when they need it." },
          { icon: VerifiedUserIcon, title: "Routine Security Protocols", desc: "Regular reviews and protocol checks keep your systems protected over time." },
          { icon: FingerprintIcon, title: "Identity Protection", desc: "Safeguards that keep employee identities and personal data secure." },
          { icon: GppGoodIcon, title: "Fraud Prevention & Monitoring", desc: "Continuous monitoring designed to catch irregularities before they become problems." },
        ],
      }}
      industries={{
        overline: "WHO WE SERVE",
        titleLead: "Payroll Support Across",
        highlight: "Every Industry",
        items: ["Small Business", "Retail", "Healthcare", "Construction", "Professional Services", "Hospitality", "Nonprofits"],
      }}
      faqs={faqs}
    />
  );
}
