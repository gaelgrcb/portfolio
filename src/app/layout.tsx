import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import { BackgroundGrid } from "@/components/layout/BackgroundGrid";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { profile } from "@/lib/data/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gaelgarcia.dev"),
  title: {
    default: `${profile.handle} — ${profile.role} · ${profile.roleSecondary}`,
    template: `%s — ${profile.handle}`,
  },
  description: profile.tagline,
  keywords: [
    "Gael García",
    "Desarrollador de Software",
    "Software Developer",
    "Backend Developer",
    "PHP",
    "Laravel",
    "Java",
    "Spring Boot",
    "Spring Batch",
    "Python",
    "FastAPI",
    "TypeScript",
    "Docker",
    "CCNA",
    "Mazatlán",
  ],
  alternates: {
    canonical: "https://gaelgarcia.dev",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://gaelgarcia.dev",
    siteName: profile.handle,
    title: `${profile.handle} — ${profile.role} · ${profile.roleSecondary}`,
    description: profile.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.handle} — ${profile.role}`,
    description: profile.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.handle,
  jobTitle: `${profile.role} · ${profile.roleSecondary}`,
  url: "https://gaelgarcia.dev",
  email: `mailto:${profile.email}`,
  sameAs: profile.socials
    .filter((s) => !s.href.startsWith("mailto") && !s.href.startsWith("tel"))
    .map((s) => s.href),
  knowsAbout: [
    "PHP",
    "Laravel",
    "Java 21",
    "Spring Boot",
    "Spring Batch",
    "Python",
    "FastAPI",
    "Applied AI (RAG & OCR)",
    "TypeScript",
    "Angular",
    "React Native",
    "MySQL",
    "PostgreSQL",
    "SQL Server",
    "Docker",
    "CCNA (Network Security)",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-dvh font-sans">
        <LanguageProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <BackgroundGrid />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:border focus:border-terminal-green/40 focus:bg-noir-900 focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-terminal-green"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
