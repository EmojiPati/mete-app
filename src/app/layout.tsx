import type { Metadata } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bogura LLC — Health Support & Services",
  description:
    "A comprehensive support company providing health management support, quasi-drug sales, translation/interpretation, E-commerce, and medical tourism services in Japan.",
  keywords: [
    "health support",
    "medical tourism Japan",
    "translation services",
    "quasi-drugs",
    "health products",
    "Bogura LLC",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${dmSerifDisplay.variable} ${outfit.variable} font-sans antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
