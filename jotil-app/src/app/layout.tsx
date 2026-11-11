import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jotil — সরকারি সেবার বাস্তব অভিজ্ঞতা",
  description:
    "Jotil সাধারণ মানুষের বাস্তব অভিজ্ঞতার মাধ্যমে দেখায়—কোনো সরকারি সেবা নিতে কত সময় লাগতে পারে, কয়বার যেতে হতে পারে এবং প্রক্রিয়াটি বাস্তবে কতটা জটিল।",
  openGraph: {
    title: "Jotil — সরকারি সেবার বাস্তব অভিজ্ঞতা",
    description:
      "সরকারি সেবা, বাস্তবে কতটা সহজ? Jotil-এ কমিউনিটির বাস্তব অভিজ্ঞতা দেখুন।",
    type: "website",
    locale: "bn_BD",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
