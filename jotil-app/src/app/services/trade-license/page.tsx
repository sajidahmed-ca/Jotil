import { Metadata } from "next";
import Link from "next/link";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { ProblemBreakdown } from "@/components/ProblemBreakdown";
import { CommunityReportCard } from "@/components/CommunityReportCard";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { tradeLicenseStats, tradeLicenseDifficultyBreakdown } from "@/data/statistics";
import { services } from "@/data/services";
import {
  ChevronRight,
  Clock,
  MapPin,
  AlertTriangle,
  Users,
  FileText,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ট্রেড লাইসেন্স — Jotil",
  description:
    "ট্রেড লাইসেন্স প্রক্রিয়ার কমিউনিটির বাস্তব অভিজ্ঞতা দেখুন। গড় সময়কাল, খরচ, অফিস ভিজিট এবং সাধারণ সমস্যা।",
};

function getBarColor(score: number): string {
  if (score <= 30) return "bg-green-500";
  if (score <= 50) return "bg-yellow-500";
  if (score <= 70) return "bg-orange-500";
  return "bg-red-500";
}

export default function TradeLicensePage() {
  const service = services.find((s) => s.slug === "trade-license");

  return (
    <div className="bg-bg-warm min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-text-muted">
            <Link href="/" className="hover:text-primary transition-colors">
              হোম
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/#services" className="hover:text-primary transition-colors">
              সেবাসমূহ
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-text-dark font-medium">
              {service?.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
              Sample Community Data — Demo
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-dark mb-3">
            ট্রেড লাইসেন্স
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl">
            কমিউনিটির বাস্তব অভিজ্ঞতা থেকে প্রক্রিয়াটি বুঝুন
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <AnimateOnScroll>
              <section className="bg-white border border-border rounded-xl p-6">
                <h2 className="text-lg font-semibold text-text-dark mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  সারসংক্ষেপ
                </h2>
                <p className="text-sm text-text-muted leading-relaxed">
                  ট্রেড লাইসেন্স হলো বাংলাদেশে ব্যবসায়িক কার্যক্রম পরিচালনার জন্য
                  প্রয়োজনীয় একটি আইনি দলিল। এটি সাধারণত স্থানীয় পৌরসভা বা ইউনিয়ন
                  পরিষদ থেকে প্রাপ্ত হয়। নিচের তথ্যগুলো কমিউনিটির প্রতিবেদন থেকে
                  প্রাপ্ত এবং নমুনা/ডেমো ডেটা হিসেবে চিহ্নিত।
                </p>
              </section>
            </AnimateOnScroll>

            {/* Official Information */}
            <AnimateOnScroll>
              <section className="bg-white border border-border rounded-xl p-6">
                <h2 className="text-lg font-semibold text-text-dark mb-4">
                  সরকারি তথ্য
                </h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                  <p className="text-xs text-yellow-800">
                    ⚠️ সরকারি তথ্য সর্বদা সংশ্লিষ্ট কর্তৃপক্ষ থেকে যাচাই করে
                    নেওয়া উচিত।
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3 bg-bg-warm rounded-lg border border-border-light">
                    <p className="text-xs text-text-muted mb-1">আবেদন ফি (সরকারি)</p>
                    <p className="text-sm font-medium text-text-dark">
                      পৌরসভা অনুযায়ী ভিন্ন
                    </p>
                  </div>
                  <div className="p-3 bg-bg-warm rounded-lg border border-border-light">
                    <p className="text-xs text-text-muted mb-1">প্রয়োজনীয় কাগজপত্র</p>
                    <p className="text-sm font-medium text-text-dark">
                      NID, বাসার ভাড়া চুক্তিপত্র, ছবি
                    </p>
                  </div>
                  <div className="p-3 bg-bg-warm rounded-lg border border-border-light">
                    <p className="text-xs text-text-muted mb-1">বৈধতা</p>
                    <p className="text-sm font-medium text-text-dark">
                      সাধারণত ১ বছর
                    </p>
                  </div>
                  <div className="p-3 bg-bg-warm rounded-lg border border-border-light">
                    <p className="text-xs text-text-muted mb-1">নবায়ন</p>
                    <p className="text-sm font-medium text-text-dark">
                      বার্ষিক নবায়ন প্রয়োজন
                    </p>
                  </div>
                </div>
              </section>
            </AnimateOnScroll>

            {/* Community Reality Dashboard */}
            <AnimateOnScroll>
              <section className="bg-white border border-border rounded-xl p-6">
                <h2 className="text-lg font-semibold text-text-dark mb-4">
                  কমিউনিটির বাস্তবতা
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-bg-warm rounded-lg border border-border-light">
                    <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-xl font-bold text-primary">
                      {tradeLicenseStats.totalReports}
                    </p>
                    <p className="text-xs text-text-muted">রিপোর্ট</p>
                  </div>
                  <div className="text-center p-3 bg-bg-warm rounded-lg border border-border-light">
                    <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-xl font-bold text-primary">
                      {tradeLicenseStats.avgCompletionTime}
                    </p>
                    <p className="text-xs text-text-muted">গড় সময়</p>
                  </div>
                  <div className="text-center p-3 bg-bg-warm rounded-lg border border-border-light">
                    <MapPin className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-xl font-bold text-primary">
                      {tradeLicenseStats.avgOfficeVisits}
                    </p>
                    <p className="text-xs text-text-muted">গড় ভিজিট</p>
                  </div>
                  <div className="text-center p-3 bg-bg-warm rounded-lg border border-border-light">
                    <AlertTriangle className="w-5 h-5 text-warning mx-auto mb-1" />
                    <p className="text-sm font-bold text-primary">
                      {tradeLicenseStats.costRange}
                    </p>
                    <p className="text-xs text-text-muted">খরচের পরিসীমা</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DifficultyBadge
                    score={tradeLicenseStats.difficultyScore}
                    label={tradeLicenseStats.difficultyLabel}
                    size="lg"
                  />
                </div>
              </section>
            </AnimateOnScroll>

            {/* Difficulty Breakdown */}
            <AnimateOnScroll>
              <section className="bg-white border border-border rounded-xl p-6">
                <h2 className="text-lg font-semibold text-text-dark mb-2">
                  কঠিনতা বিশ্লেষণ
                </h2>
                <p className="text-xs text-text-muted mb-6">
                  Jotil Score কোনো সরকারি rating নয়। এটি community-reported
                  experience থেকে তৈরি একটি indicator, যা একটি service-এর perceived
                  difficulty বুঝতে সাহায্য করে।
                </p>
                <div className="space-y-4">
                  {tradeLicenseDifficultyBreakdown.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-text-dark">{item.label}</span>
                        <span className="text-sm font-semibold text-primary">
                          {item.score}/{item.maxScore}
                        </span>
                      </div>
                      <div className="w-full h-3 bg-border-light rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${getBarColor(item.score)}`}
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border-light">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-text-dark">
                      Jotil Difficulty Score
                    </span>
                    <span className="text-lg font-bold text-primary">
                      {tradeLicenseStats.difficultyScore}/100
                    </span>
                  </div>
                  <div className="w-full h-4 bg-border-light rounded-full overflow-hidden mt-2">
                    <div
                      className={`h-full rounded-full ${getBarColor(tradeLicenseStats.difficultyScore)} transition-all duration-1000 ease-out`}
                      style={{ width: `${tradeLicenseStats.difficultyScore}%` }}
                    />
                  </div>
                </div>
              </section>
            </AnimateOnScroll>

            {/* Common Problems */}
            <AnimateOnScroll>
              <section className="bg-white border border-border rounded-xl p-6">
                <h2 className="text-lg font-semibold text-text-dark mb-4">
                  সবচেয়ে বেশি প্রতিবেদিত সমস্যা
                </h2>
                <ProblemBreakdown problems={tradeLicenseStats.problems} />
              </section>
            </AnimateOnScroll>

            {/* Community Experience Feed */}
            <AnimateOnScroll>
              <section>
                <h2 className="text-lg font-semibold text-text-dark mb-4">
                  কমিউনিটি অভিজ্ঞতা
                </h2>
                <div className="space-y-3">
                  {tradeLicenseStats.reports.map((report) => (
                    <CommunityReportCard key={report.id} report={report} />
                  ))}
                </div>
              </section>
            </AnimateOnScroll>

            {/* CTA */}
            <AnimateOnScroll>
              <section className="bg-primary rounded-xl p-6 text-center">
                <h2 className="text-lg font-semibold text-white mb-3">
                  আপনার অভিজ্ঞতা শেয়ার করুন
                </h2>
                <p className="text-sm text-white/70 mb-4">
                  আপনার অভিজ্ঞতা অন্যদের প্রস্তুত হতে সাহায্য করবে
                </p>
                <Link
                  href="/report?service=trade-license"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-primary bg-white rounded-xl hover:bg-white/90 transition-colors"
                >
                  অভিজ্ঞতা শেয়ার করুন
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </section>
            </AnimateOnScroll>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <AnimateOnScroll>
              <div className="bg-white border border-border rounded-xl p-5 sticky top-20">
                <h3 className="text-sm font-semibold text-text-dark mb-4">
                  দ্রুত তথ্য
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-border-light">
                    <span className="text-xs text-text-muted">সেবা</span>
                    <span className="text-xs font-medium text-text-dark">
                      ট্রেড লাইসেন্স
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border-light">
                    <span className="text-xs text-text-muted">রিপোর্ট সংখ্যা</span>
                    <span className="text-xs font-medium text-text-dark">
                      {tradeLicenseStats.totalReports}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border-light">
                    <span className="text-xs text-text-muted">গড় সময়</span>
                    <span className="text-xs font-medium text-text-dark">
                      {tradeLicenseStats.avgCompletionTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border-light">
                    <span className="text-xs text-text-muted">গড় ভিজিট</span>
                    <span className="text-xs font-medium text-text-dark">
                      {tradeLicenseStats.avgOfficeVisits}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border-light">
                    <span className="text-xs text-text-muted">খরচ</span>
                    <span className="text-xs font-medium text-text-dark">
                      {tradeLicenseStats.costRange}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-xs text-text-muted">কঠিনতা</span>
                    <DifficultyBadge
                      score={tradeLicenseStats.difficultyScore}
                      label={tradeLicenseStats.difficultyLabel}
                      size="sm"
                    />
                  </div>
                </div>
                <Link
                  href="/report?service=trade-license"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-primary rounded-xl hover:bg-primary-light transition-colors"
                >
                  অভিজ্ঞতা শেয়ার করুন
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
