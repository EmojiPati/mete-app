"use client";

import { useState } from "react";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const legalItems = [
  { label: "Seller", value: "Bughra LLC" },
  { label: "Operations Representative", value: "Hidetoshi Imamura" },
  {
    label: "Address",
    value: "3-4-43 Shinsuna, Koto-ku, Tokyo, 136-0075, Japan",
  },
  { label: "Phone Number", value: "+81-70-9112-3139" },
  { label: "Email", value: "bughra2023@gmail.com" },
  {
    label: "Sales Price",
    value: "Prices are displayed on each product page (tax included).",
  },
  {
    label: "Additional Charges",
    value:
      "Consumption tax, shipping fees (varies by product/region), bank transfer fees (for bank transfers), and other applicable payment processing fees.",
  },
  {
    label: "Payment Methods",
    value:
      "Credit card, bank transfer, and other payment methods designated by the company.",
  },
  {
    label: "Payment Timing",
    value:
      "Credit Card: Processed at the time of order. Bank Transfer: Within the designated period after placing an order.",
  },
  {
    label: "Delivery Time",
    value:
      "Orders are typically shipped within 3\u20137 business days after order confirmation. Delivery times for pre-orders, OEM products, and made-to-order items will be communicated separately.",
  },
  {
    label: "Delivery Method",
    value: "Shipped via our designated carrier.",
  },
  {
    label: "Returns, Exchanges, and Cancellations",
    value:
      "Customer Convenience: In principle, we do not accept returns, exchanges, or cancellations after the product has been shipped. Defective or Incorrect Items: If there is an issue with the product, please contact us by email within 7 days of arrival. We will handle returns or exchanges at our expense.",
  },
  {
    label: "Return Shipping Costs",
    value:
      "Defective/Incorrect Items: Covered by the company. Customer Convenience: Covered by the customer.",
  },
  {
    label: "Sales Restrictions",
    value: "Limitations on sales quantity may apply to certain products.",
  },
  {
    label: "Subscriptions/Recurring Billing",
    value:
      "If applicable, the contract period, cancellation policy, and renewal terms will be clearly stated on each product page.",
  },
  {
    label: "Precautions for Quasi-drugs & Health Products",
    value:
      "We do not guarantee specific effects or efficacy. Results may vary by individual. If you have concerns regarding your constitution or health condition, please consult a professional.",
  },
  {
    label: "Disclaimer Regarding Expressions & Products",
    value:
      "The information on this site is for general informational purposes only and is not intended for medical acts, diagnosis, or treatment.",
  },
];

export default function Footer() {
  const [legalOpen, setLegalOpen] = useState(false);

  return (
    <footer className="bg-primary-dark text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-heading text-2xl text-white">
              Bughra
              <span className="ml-1.5 text-accent">LLC</span>
            </h3>
            <p className="text-sm leading-relaxed text-white/50">
              A comprehensive service provider supporting health and wellness
              through trusted products and expert multilingual support.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-white">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>3-4-43 Shinsuna, Koto-ku</li>
              <li>Tokyo, 136-0075, Japan</li>
              <li>
                <a
                  href="mailto:bughra2023@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  bughra2023@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <button
            type="button"
            onClick={() => setLegalOpen(!legalOpen)}
            className="flex w-full items-center justify-between py-4 text-white/40 transition-colors hover:text-white/60"
          >
            <span className="text-xs uppercase tracking-[0.1em]">
              Notation Based on the Act on Specified Commercial Transactions
            </span>
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${
                legalOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className={`accordion-content ${legalOpen ? "open" : ""}`}>
            <div className="accordion-inner">
              <div className="grid grid-cols-1 gap-x-8 gap-y-3 pb-8 md:grid-cols-2">
                {legalItems.map((item) => (
                  <div key={item.label} className="flex flex-col py-2">
                    <span className="mb-1 text-xs font-semibold uppercase tracking-wide text-white/30">
                      {item.label}
                    </span>
                    <span className="text-sm text-white/60">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <p className="text-center text-xs text-white/30">
            &copy; 2026 Bughra LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
