"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useTranslation();
  const [legalOpen, setLegalOpen] = useState(false);

  const footerLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#about", label: t.nav.about },
    { href: "#blog", label: t.nav.blog },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-primary-dark text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-heading text-2xl text-white">
              Bogura
              <span className="ml-1.5 text-accent">LLC</span>
            </h3>
            <p className="text-sm leading-relaxed text-white/50">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-white">
              {t.footer.quickLinks}
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
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>{t.footer.address1}</li>
              <li>{t.footer.address2}</li>
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
              {t.footer.legalTitle}
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
                {t.footer.legal.map((item) => (
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
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
