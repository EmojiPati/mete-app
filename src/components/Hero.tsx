"use client";

import { useTranslation } from "@/i18n/LanguageProvider";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="hero-pattern relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute top-32 right-[10%] h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-20 left-[5%] h-[300px] w-[300px] rounded-full bg-accent/[0.03] blur-[80px]" />

      <div className="pointer-events-none absolute top-1/2 right-[5%] h-[400px] w-[400px] -translate-y-1/2 opacity-[0.04] lg:h-[550px] lg:w-[550px]">
        <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
          <circle
            cx="100"
            cy="100"
            r="85"
            fill="none"
            stroke="#1B4D3E"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-40 lg:px-8">
        <div className="max-w-4xl">
          <ScrollReveal>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              {t.hero.subtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="mb-8 font-heading text-[2.75rem] leading-[1.1] text-primary md:text-[4rem] lg:text-[5rem]">
              {t.hero.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mb-6 max-w-2xl text-xl leading-relaxed text-text-secondary md:text-2xl">
              {t.hero.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="mb-10 max-w-3xl text-base leading-[1.8] text-foreground/60">
              {t.hero.longDescription}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="btn-primary inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold tracking-wide text-white"
              >
                {t.hero.servicesBtn}
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="btn-outline inline-flex items-center justify-center rounded-full border-2 border-accent px-8 py-4 text-sm font-semibold tracking-wide text-accent hover:bg-accent hover:text-white"
              >
                {t.hero.contactBtn}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
