"use client";

import { useTranslation } from "@/i18n/LanguageProvider";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";

export default function CompanyProfile() {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <SectionDivider />
            <h2 className="mt-8 mb-8 font-heading text-4xl text-primary md:text-5xl">
              {t.companyProfile.title}
            </h2>
            <div className="mx-auto max-w-2xl">
              <p className="font-heading text-lg italic leading-[1.9] text-foreground/70 md:text-xl">
                &ldquo;{t.companyProfile.quote}&rdquo;
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="overflow-hidden rounded-2xl border border-primary/[0.06] bg-white">
            {t.companyProfile.info.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col md:flex-row ${
                  index < t.companyProfile.info.length - 1
                    ? "border-b border-primary/[0.06]"
                    : ""
                }`}
              >
                <div className="bg-primary/[0.02] px-6 py-4 md:w-1/3 md:py-5">
                  <span className="text-sm font-semibold tracking-wide text-primary">
                    {item.label}
                  </span>
                </div>
                <div className="px-6 py-4 md:w-2/3 md:py-5">
                  {item.value && (
                    <span className="text-foreground/70">{item.value}</span>
                  )}
                  {item.list && (
                    <ul className="space-y-1.5">
                      {item.list.map((activity) => (
                        <li
                          key={activity}
                          className="flex items-start gap-2 text-foreground/70"
                        >
                          <span className="mt-1 text-xs text-accent-gold">
                            ●
                          </span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
