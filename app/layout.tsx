import type { Metadata } from "next";
import { Fraunces, Archivo } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
});
const sans = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Amil Malik — Design Strategy Lead",
  description:
    "Cognitive Task Analysis and AI-informed design, for decisions that carry real risk.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
