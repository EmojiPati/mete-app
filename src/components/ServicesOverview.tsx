"use client";

import type { ReactNode } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";

const serviceIcons: ReactNode[] = [
  <svg
    key="health-mgmt"
    viewBox="0 0 32 32"
    fill="none"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <path
      d="M16 28S3 18.5 3 11a6.5 6.5 0 0 1 13 0 6.5 6.5 0 0 1 13 0c0 7.5-13 17-13 17z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 14l2.5 2.5L19 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg
    key="health-consult"
    viewBox="0 0 32 32"
    fill="none"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <path
      d="M16 3l3.09 6.26L26 10.27l-5 4.87 1.18 6.88L16 18.77l-6.18 3.25L11 15.14l-5-4.87 6.91-1.01L16 3z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg
    key="quasi-drugs"
    viewBox="0 0 32 32"
    fill="none"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <rect
      x="8"
      y="4"
      width="16"
      height="24"
      rx="8"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M8 16h16" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="16" cy="22" r="1.5" fill="currentColor" opacity="0.4" />
  </svg>,
  <svg
    key="translation"
    viewBox="0 0 32 32"
    fill="none"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M4 16h24M16 4c-4 4-6 8-6 12s2 8 6 12c4-4 6-8 6-12s-2-8-6-12z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>,
  <svg
    key="medical-tourism"
    viewBox="0 0 32 32"
    fill="none"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <path
      d="M26 13H6l4-9h12l4 9zM6 13v12a2 2 0 002 2h16a2 2 0 002-2V13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 17v4M13 19h6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>,
  <svg
    key="sightseeing"
    viewBox="0 0 32 32"
    fill="none"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <circle cx="16" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M16 8v6l4 2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 26l6-4 6 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg
    key="ecommerce"
    viewBox="0 0 32 32"
    fill="none"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <rect
      x="4"
      y="8"
      width="24"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M4 14h24" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 4v4M20 4v4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M10 20h4M18 20h4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>,
];

export default function ServicesOverview() {
  const { t } = useTranslation();

  return (
    <section id="services" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <SectionDivider />
            <h2 className="mt-8 mb-4 font-heading text-4xl text-primary md:text-5xl">
              {t.services.title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              {t.services.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {t.services.items.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 80}>
              <div className="service-card h-full rounded-2xl border border-primary/[0.06] bg-white p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-light-teal text-primary">
                  {serviceIcons[index]}
                </div>
                <h3 className="mb-3 font-heading text-xl text-primary">
                  {service.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-text-secondary">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
