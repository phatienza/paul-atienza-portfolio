import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Paul Henry Atienza | Enterprise Java Developer",
  description:
    "Backend engineer specializing in enterprise systems, performance optimization, and data engineering.",
  keywords: [
    "Paul Henry Atienza",
    "Backend Engineer",
    "Java Developer",
    "Enterprise Systems",
    "Data Engineering",
  ],
  openGraph: {
    title: "Paul Henry Atienza | Enterprise Java Developer",
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