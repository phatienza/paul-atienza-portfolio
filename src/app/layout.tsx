import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Lora, DM_Sans } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://paulatienza.dev"),
  title: "Paul Henry Atienza | Senior Software Engineer",
  description:
    "Senior software engineer with 10 years in enterprise systems, freelance web builder for therapists, and data/AI engineering learner. Based in the Philippines.",
  keywords: [
    "Paul Henry Atienza",
    "Software Engineer",
    "Backend Engineer",
    "Java Developer",
    "Enterprise Systems",
    "Data Engineering",
  ],
  openGraph: {
    title: "Paul Henry Atienza | Senior Software Engineer",
    description:
      "Ten years building enterprise systems. Now expanding into data and AI engineering.",
    url: "https://paulatienza.dev",
    siteName: "Paul Henry Atienza",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable}`}>
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}