"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";
import type { ServiceDetailItem } from "@/i18n/types";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";

function AccordionItem({
  detail,
  index,
}: {
  detail: ServiceDetailItem;
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
  const { t } = useTranslation();

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <ScrollReveal>
          <SectionDivider />
          <h2 className="mt-8 mb-12 text-center font-heading text-3xl text-primary md:text-4xl">
            {t.serviceDetails.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="border-t border-primary/[0.08]">
            {t.serviceDetails.items.map((detail, index) => (
              <AccordionItem key={detail.title} detail={detail} index={index} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
