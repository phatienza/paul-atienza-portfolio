import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Paul Henry Atienza",
  description:
    "Enterprise Software Engineer expanding into Data & AI Engineering",
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