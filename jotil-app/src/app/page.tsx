import { Metadata } from "next";
import Link from "next/link";
import { ServiceSearch } from "@/components/ServiceSearch";
import { ServiceCard } from "@/components/ServiceCard";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { ProblemBreakdown } from "@/components/ProblemBreakdown";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { services } from "@/data/services";
import { tradeLicenseStats } from "@/data/statistics";
import {
  ArrowRight,
  Clock,
  MapPin,
  AlertTriangle,
  Users,
  Search,
  BarChart3,
  Lightbulb,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="relative bg-white border-b border-border overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark leading-tight mb-6">
              সরকারি সেবা, বাস্তবে কতটা সহজ?
            </h1>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-8 max-w-2xl mx-auto">
              Jotil সাধারণ মানুষের বাস্তব অভিজ্ঞতার মাধ্যমে দেখায়—কোনো সরকারি
              সেবা নিতে কত সময় লাগতে পারে, কয়বার যেতে হতে পারে, কী ধরনের
              সমস্যা হতে পারে এবং প্রক্রিয়াটি বাস্তবে কতটা জটিল।
            </p>

            <div className="flex justify-center mb-8">
              <ServiceSearch />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-primary rounded-xl hover:bg-primary-light transition-colors shadow-sm"
              >
                সেবাগুলো দেখুন
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/report"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary border border-primary/20 rounded-xl hover:bg-primary/5 transition-colors"
              >
                আপনার অভিজ্ঞতা শেয়ার করুন
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center px-3 py-4 bg-bg-warm rounded-xl border border-border-light">
              <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-xl font-bold text-primary">৮ দিন</p>
              <p className="text-xs text-text-muted mt-0.5">গড় সময়কাল</p>
            </div>
            <div className="text-center px-3 py-4 bg-bg-warm rounded-xl border border-border-light">
              <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-xl font-bold text-primary">২.৬</p>
              <p className="text-xs text-text-muted mt-0.5">গড় অফিস ভিজিট</p>
            </div>
            <div className="text-center px-3 py-4 bg-bg-warm rounded-xl border border-border-light">
              <AlertTriangle className="w-5 h-5 text-warning mx-auto mb-2" />
              <p className="text-xl font-bold text-primary">৬২/১০০</p>
              <p className="text-xs text-text-muted mt-0.5">কঠিনতা স্কোর</p>
            </div>
            <div className="text-center px-3 py-4 bg-bg-warm rounded-xl border border-border-light">
              <Users className="w-5 h-5 text-accent mx-auto mb-2" />
              <p className="text-xl font-bold text-primary">২৪৩</p>
              <p className="text-xs text-text-muted mt-0.5">কমিউনিটি রিপোর্ট</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT IS JOTIL */}
      <section className="py-16 sm:py-20 bg-bg-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-3">
                Jotil কী?
              </h2>
              <p className="text-text-muted max-w-xl mx-auto">
                সরকারি সেবা সম্পর্কে দুই ধরনের তথ্য একসাথে দেখুন
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <AnimateOnScroll>
              <div className="bg-white border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">
                  সরকারি প্রক্রিয়া
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  সরকারি প্রক্রিয়া কী বলে—প্রয়োজনীয় কাগজপত্র, ফি, সময়সীমা এবং
                  আনুষ্ঠানিক ধাপ।
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-white border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">
                  কমিউনিটির বাস্তবতা
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  মানুষ বাস্তবে কী অভিজ্ঞতা পায়—গড় সময়কাল, খরচ, ভিজিট সংখ্যা
                  এবং সমস্যা।
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-white border border-border rounded-xl p-6 text-center relative">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">
                  Jotil দেখায়
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  দুই ধরনের তথ্য একসাথে—ফিল্টার করা, সাজানো এবং তুলনামূলকভাবে
                  প্রদর্শিত।
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="flex justify-center mt-8">
            <div className="hidden md:flex items-center gap-2 text-text-light text-sm">
              <div className="w-8 h-px bg-border" />
              <span>সংযুক্ত</span>
              <div className="w-8 h-px bg-border" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED SERVICE — TRADE LICENSE */}
      <section className="py-16 sm:py-20 bg-white border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                  Sample Community Data — Demo
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-2">
                ট্রেড লাইসেন্স
              </h2>
              <p className="text-text-muted">
                কালিগঞ্জ, গাজীপুর — কমিউনিটি ডেটা থেকে প্রাপ্ত
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <AnimateOnScroll>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="bg-bg-warm rounded-xl p-4 border border-border-light">
                    <p className="text-xs text-text-muted mb-1">কমিউনিটি রিপোর্ট</p>
                    <p className="text-xl font-bold text-primary">
                      {tradeLicenseStats.totalReports}
                    </p>
                  </div>
                  <div className="bg-bg-warm rounded-xl p-4 border border-border-light">
                    <p className="text-xs text-text-muted mb-1">গড় সময়কাল</p>
                    <p className="text-xl font-bold text-primary">
                      {tradeLicenseStats.avgCompletionTime}
                    </p>
                  </div>
                  <div className="bg-bg-warm rounded-xl p-4 border border-border-light">
                    <p className="text-xs text-text-muted mb-1">গড় অফিস ভিজিট</p>
                    <p className="text-xl font-bold text-primary">
                      {tradeLicenseStats.avgOfficeVisits}
                    </p>
                  </div>
                  <div className="bg-bg-warm rounded-xl p-4 border border-border-light">
                    <p className="text-xs text-text-muted mb-1">প্রতিবেদিত খরচ</p>
                    <p className="text-lg font-bold text-primary">
                      {tradeLicenseStats.costRange}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll>
                <div className="flex items-center gap-3 mb-6">
                  <DifficultyBadge
                    score={tradeLicenseStats.difficultyScore}
                    label={tradeLicenseStats.difficultyLabel}
                  />
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-2">
              <AnimateOnScroll>
                <div className="bg-bg-warm rounded-xl p-5 border border-border-light">
                  <h3 className="text-sm font-semibold text-text-dark mb-4">
                    সবচেয়ে বেশি প্রতিবেদিত সমস্যা
                  </h3>
                  <ProblemBreakdown problems={tradeLicenseStats.problems} />
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          <AnimateOnScroll>
            <div className="mt-8">
              <Link
                href="/services/trade-license"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-xl hover:bg-primary-light transition-colors"
              >
                বিস্তারিত দেখুন
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 4: HOW JOTIL WORKS */}
      <section id="how-it-works" className="py-16 sm:py-20 bg-bg-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-3">
                Jotil কিভাবে কাজ করে
              </h2>
              <p className="text-text-muted">তিনটি সহজ ধাপ</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "একটি সেবা বেছে নিন",
                desc: "আপনার প্রয়োজনীয় সরকারি সেবাটি খুঁজে বের করুন।",
                icon: <Search className="w-6 h-6" />,
              },
              {
                num: "02",
                title: "বাস্তব অভিজ্ঞতা ও তথ্য দেখুন",
                desc: "কমিউনিটির বাস্তব অভিজ্ঞতা এবং সরকারি তথ্য একসাথে দেখুন।",
                icon: <BarChart3 className="w-6 h-6" />,
              },
              {
                num: "03",
                title: "নিজের অভিজ্ঞতা শেয়ার করুন",
                desc: "আপনার অভিজ্ঞতা অন্যদের জন্য শেয়ার করুন।",
                icon: <Users className="w-6 h-6" />,
              },
            ].map((step, i) => (
              <AnimateOnScroll key={step.num}>
                <div className="relative bg-white border border-border rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary/10 mb-3">
                    {step.num}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted">{step.desc}</p>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 w-6 h-px bg-border" />
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: EXPLORE SERVICES */}
      <section id="services" className="py-16 sm:py-20 bg-white border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-3">
                সেবাসমূহ অনুসন্ধান করুন
              </h2>
              <p className="text-text-muted">
                কমিউনিটির বাস্তব অভিজ্ঞতা থেকে তথ্য দেখুন
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <AnimateOnScroll key={service.id}>
                <ServiceCard service={service} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY REAL EXPERIENCE MATTERS */}
      <section className="py-16 sm:py-20 bg-bg-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-4">
                বাস্তব অভিজ্ঞতা কেন গুরুত্বপূর্ণ?
              </h2>
              <p className="text-lg sm:text-xl text-text-muted leading-relaxed italic mb-10">
                &ldquo;একজন মানুষের অভিজ্ঞতা শুধু একটি গল্প। হাজার মানুষের
                অভিজ্ঞতা একটি বাস্তব চিত্র।&rdquo;
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "বারবার বিলম্ব",
              "জটিল প্রক্রিয়া",
              "অনাবশ্যক অফিস ভিজিট",
              "আঞ্চলিক পার্থক্য",
              "সাধারণ সমস্যা",
              "পরিষ্কার তথ্যের অভাব",
            ].map((item) => (
              <AnimateOnScroll key={item}>
                <div className="flex items-center gap-3 bg-white border border-border rounded-xl p-4">
                  <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="text-sm text-text-dark">{item}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="py-16 sm:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-relaxed">
              আপনার অভিজ্ঞতা অন্য কাউকে প্রস্তুত হতে সাহায্য করতে পারে।
            </h2>
            <Link
              href="/report"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-primary bg-white rounded-xl hover:bg-white/90 transition-colors shadow-lg"
            >
              অভিজ্ঞতা শেয়ার করুন
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
