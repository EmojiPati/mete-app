"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <SectionDivider />
            <h2 className="mt-8 mb-4 font-heading text-4xl text-primary md:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mb-4 max-w-2xl text-lg text-text-secondary">
              Please feel free to contact us for health consultations, product
              inquiries, translation/interpretation requests, or OEM
              consultations.
            </p>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <a
                href="mailto:bughra2023@gmail.com"
                className="inline-flex items-center gap-2 font-medium text-accent transition-colors hover:text-accent/80"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="2"
                    y="4"
                    width="16"
                    height="12"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M2 6l8 5 8-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                bughra2023@gmail.com
              </a>
              <span className="hidden text-text-secondary/30 sm:inline">|</span>
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="14"
                    height="14"
                    rx="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M7 10h6M10 7v6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                LINE
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <div className="overflow-hidden rounded-xl border border-primary/10 bg-white p-2 shadow-sm">
                <Image
                  src="/qr.webp"
                  alt="LINE QR Code — Scan to connect with Bughra LLC on LINE"
                  width={160}
                  height={160}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <form
            className="rounded-2xl border border-primary/[0.06] bg-cream p-8 md:p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-primary/10 bg-white px-4 py-3 text-foreground transition-all placeholder:text-text-secondary/40 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-primary/10 bg-white px-4 py-3 text-foreground transition-all placeholder:text-text-secondary/40 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-sm font-semibold text-primary"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                placeholder="Subject of your inquiry"
                className="w-full rounded-xl border border-primary/10 bg-white px-4 py-3 text-foreground transition-all placeholder:text-text-secondary/40 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-semibold text-primary"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="How can we help you?"
                className="w-full resize-none rounded-xl border border-primary/10 bg-white px-4 py-3 text-foreground transition-all placeholder:text-text-secondary/40 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full rounded-full bg-primary px-10 py-4 text-sm font-semibold tracking-wide text-white md:w-auto"
            >
              Send Message
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
