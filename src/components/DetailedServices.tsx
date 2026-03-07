"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";

interface ServiceDetail {
  title: string;
  paragraphs: string[];
  disclaimer?: string;
  listTitle?: string;
  listItems?: string[];
}

const serviceDetails: ServiceDetail[] = [
  {
    title: "Health Management Support Business",
    paragraphs: [
      "We support the realization of a healthy life by providing general health information and lifestyle advice aimed at maintaining health in daily life. This service focuses on providing information tailored to individual lifestyles.",
    ],
  },
  {
    title: "Health Consultation & Preventive Support (Non-Medical)",
    paragraphs: [
      "We provide general information and consultation useful for maintaining health and improving preventive awareness from the perspectives of lifestyle habits, nutrition, exercise, and stress management.",
    ],
    disclaimer:
      "\u203BThis service does not include medical acts (diagnosis, treatment, etc.). For detailed medical consultations, please visit a medical institution.",
  },
  {
    title: "Sale of Quasi-drugs & Health-Related Products",
    paragraphs: [
      "We sell products focused on safety and quality, primarily quasi-drugs and health-related items. We carefully select products that assist in health maintenance and daily self-care.",
    ],
    listTitle: "Product Categories",
    listItems: [
      "Skincare products",
      "Healthcare products",
      "Health supplement-related products",
    ],
  },
  {
    title: "Translation & Interpretation Services (Medical & Health Screening)",
    paragraphs: [
      "We provide multilingual translation and interpretation to support smooth communication regarding medical care, checkups, and daily life for international clients.",
    ],
    listTitle: "Key Services",
    listItems: [
      "On-site interpretation for health checkups and hospital visits",
      "Translation of medical documents and health records",
      "Various interpretation and translation support for daily life",
    ],
  },
  {
    title: "Medical Tourism Planning, Operation & Sightseeing Information",
    paragraphs: [
      "We provide comprehensive support for overseas clients who wish to undergo health screenings and medical services in Japan. We plan and operate tours that combine medical care with sightseeing so that clients can have a safe and fulfilling experience.",
      "We also provide tourism information, lifestyle tips, and local guides for visitors staying in Japan, ensuring a comfortable stay.",
    ],
    disclaimer:
      "\u203BRegarding Travel Agency Business: Our company does not hold a travel agency license. Tour planning and arrangements are carried out through partner travel agencies, and our company acts as an intermediary or provides support.",
  },
  {
    title: "E-commerce Business",
    paragraphs: [
      "We operate online product sales and information services, providing convenient digital services for both domestic and international customers.",
    ],
  },
  {
    title: "OEM, Product Planning & Sales Business",
    paragraphs: [
      "We support new business development and brand building through OEM product manufacturing, original product planning, and private brand development.",
    ],
  },
];

function AccordionItem({
  detail,
  index,
}: {
  detail: ServiceDetail;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-primary/[0.08] last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center justify-between py-6 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span className="w-8 font-heading text-lg text-accent-gold/60">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-heading text-lg text-primary transition-colors group-hover:text-primary-light md:text-xl">
            {detail.title}
          </h3>
        </div>
        <svg
          className={`h-5 w-5 shrink-0 text-text-secondary transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 4v12M4 10h12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <div className="accordion-inner">
          <div className="space-y-4 pb-6 pr-8 pl-12">
            {detail.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-[1.8] text-foreground/70">
                {paragraph}
              </p>
            ))}

            {detail.listTitle && detail.listItems && (
              <div className="mt-4">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary/80">
                  {detail.listTitle}
                </p>
                <ul className="space-y-2">
                  {detail.listItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-foreground/70"
                    >
                      <span className="mt-1.5 text-xs text-accent-gold">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {detail.disclaimer && (
              <p className="mt-4 border-l-2 border-accent-gold/30 pl-4 text-sm italic text-text-secondary/70">
                {detail.disclaimer}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DetailedServices() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionDivider />
          <h2 className="mt-8 mb-12 text-center font-heading text-3xl text-primary md:text-4xl">
            Service Details
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="border-t border-primary/[0.08]">
            {serviceDetails.map((detail, index) => (
              <AccordionItem key={detail.title} detail={detail} index={index} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
