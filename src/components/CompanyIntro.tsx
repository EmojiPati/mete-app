"use client";

import { useTranslation } from "@/i18n/LanguageProvider";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";

export default function CompanyIntro() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionDivider />

        <ScrollReveal>
          <div className="mt-12 space-y-8 text-center">
            <p className="text-lg leading-[1.9] text-foreground/70 md:text-xl">
              {t.companyIntro.p1}
            </p>
            <p className="text-lg leading-[1.9] text-foreground/70 md:text-xl">
              {t.companyIntro.p2}
            </p>
            <p className="pt-4 text-sm italic text-text-secondary">
              {t.companyIntro.disclaimer}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
