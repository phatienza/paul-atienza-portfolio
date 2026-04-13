import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  metadataBase: new URL("https://paulatienza.dev"),
  title: "Paul Henry Atienza | Enterprise Software Engineer",
  description:
    "Enterprise software engineer specializing in backend systems, performance optimization, and data engineering.",
  keywords: [
    "Paul Henry Atienza",
    "Software Engineer",
    "Backend Engineer",
    "Java Developer",
    "Enterprise Systems",
    "Data Engineering",
  ],
  openGraph: {
    title: "Paul Henry Atienza | Enterprise Software Engineer",
    description:
      "Enterprise software engineer building scalable backend and data-driven systems.",
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
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Analytics />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}