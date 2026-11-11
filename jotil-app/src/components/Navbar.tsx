"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "হোম" },
  { href: "/#services", label: "সেবাসমূহ" },
  { href: "/#how-it-works", label: "কিভাবে কাজ করে" },
  { href: "/about", label: "আমাদের সম্পর্কে" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="text-xl font-bold text-primary tracking-tight">
              JOTIL
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-text-muted hover:text-primary transition-colors flex items-center gap-1">
              ভাষা <ChevronDown className="w-3 h-3" />
            </button>
            <Link
              href="/report"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-light transition-colors"
            >
              অভিজ্ঞতা শেয়ার করুন
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-text-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border-light animate-fade-in">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-text-muted hover:text-primary hover:bg-bg-warm rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-border-light" />
              <Link
                href="/report"
                className="mx-3 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-light transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                অভিজ্ঞতা শেয়ার করুন
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
