"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import {
  AlertTriangle,
  CheckCircle,
  ChevronRight,
  Star,
} from "lucide-react";

const problemOptions = [
  "তথ্য পরিষ্কার ছিল না",
  "একাধিকবার অফিসে যেতে হয়েছে",
  "অপ্রত্যাশিত দেরি",
  "Online system problem",
  "প্রয়োজনীয় তথ্য খুঁজে পাওয়া কঠিন ছিল",
  "অতিরিক্ত সহায়তার প্রয়োজন হয়েছে",
  "Other",
];

const clarityOptions = [
  "বেশ পরিষ্কার",
  "মাঝারি পরিষ্কার",
  "বোঝা কঠিন ছিল",
  "অনেক বিভ্রান্তিকর",
];

const divisions = [
  "ঢাকা",
  "চট্টগ্রাম",
  "রাজশাহী",
  "খুলনা",
  "সিলেট",
  "বরিশাল",
  "রংপুর",
  "ময়মনসিংহ",
];

function ReportForm() {
  const searchParams = useSearchParams();
  const defaultService = searchParams.get("service") || "trade-license";

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    service: defaultService,
    division: "",
    district: "",
    upazila: "",
    businessCategory: "",
    duration: "",
    durationUnit: "দিন",
    officeVisits: "",
    totalCost: "",
    processClarity: "",
    problems: [] as string[],
    overallRating: 0,
    comment: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = (field: string, value: string | boolean | number | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const toggleProblem = (problem: string) => {
    const current = formData.problems;
    if (current.includes(problem)) {
      updateField(
        "problems",
        current.filter((p) => p !== problem)
      );
    } else {
      updateField("problems", [...current, problem]);
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.division) newErrors.division = "বিভাগ নির্বাচন করুন";
    if (!formData.district) newErrors.district = "জেলা নির্বাচন করুন";
    if (!formData.duration) newErrors.duration = "সময়কাল লিখুন";
    if (!formData.officeVisits) newErrors.officeVisits = "ভিজিট সংখ্যা লিখুন";
    if (!formData.processClarity) newErrors.processClarity = "প্রক্রিয়ার স্বচ্ছতা নির্বাচন করুন";
    if (formData.overallRating === 0) newErrors.overallRating = "রেটিং দিন";
    if (!formData.consent) newErrors.consent = "সম্মতি প্রদান করুন";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const reports = JSON.parse(localStorage.getItem("jotil-reports") || "[]");
    reports.push({ ...formData, id: Date.now(), createdAt: new Date().toISOString() });
    localStorage.setItem("jotil-reports", JSON.stringify(reports));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-16">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-text-dark mb-3">
          ধন্যবাদ!
        </h2>
        <p className="text-text-muted leading-relaxed">
          আপনার অভিজ্ঞতা গ্রহণ করা হয়েছে। প্রকাশের আগে এটি privacy ও community
          rules অনুযায়ী review করা হতে পারে।
        </p>
        <p className="text-xs text-text-light mt-4">
          (MVP সংস্করণে রিপোর্ট স্থানীয়ভাবে সংরক্ষিত হয়েছে।)
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Service */}
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">
          সেবা
        </label>
        <select
          value={formData.service}
          onChange={(e) => updateField("service", e.target.value)}
          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-text-dark focus:ring-2 focus:ring-accent focus:border-accent"
        >
          <option value="trade-license">ট্রেড লাইসেন্স</option>
          <option value="passport">পাসপোর্ট</option>
          <option value="nid">জাতীয় পরিচয়পত্র</option>
          <option value="driving-license">ড্রাইভিং লাইসেন্স</option>
          <option value="birth-certificate">জন্ম নিবন্ধন</option>
          <option value="land-mutation">জমির মিউটেশন</option>
        </select>
      </div>

      {/* Location */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-text-dark mb-2">
            বিভাগ *
          </label>
          <select
            value={formData.division}
            onChange={(e) => updateField("division", e.target.value)}
            className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-text-dark focus:ring-2 focus:ring-accent focus:border-accent"
          >
            <option value="">নির্বাচন করুন</option>
            {divisions.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          {errors.division && <p className="text-xs text-danger mt-1">{errors.division}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-text-dark mb-2">
            জেলা *
          </label>
          <input
            type="text"
            value={formData.district}
            onChange={(e) => updateField("district", e.target.value)}
            placeholder="যেমন: গাজীপুর"
            className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-text-dark placeholder:text-text-light focus:ring-2 focus:ring-accent focus:border-accent"
          />
          {errors.district && <p className="text-xs text-danger mt-1">{errors.district}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-text-dark mb-2">
            উপজেলা/সিটি (ঐচ্ছিক)
          </label>
          <input
            type="text"
            value={formData.upazila}
            onChange={(e) => updateField("upazila", e.target.value)}
            placeholder="যেমন: কালিগঞ্জ"
            className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-text-dark placeholder:text-text-light focus:ring-2 focus:ring-accent focus:border-accent"
          />
        </div>
      </div>

      {/* Business Category */}
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">
          ব্যবসায়ের ধরন (ঐচ্ছিক)
        </label>
        <input
          type="text"
          value={formData.businessCategory}
          onChange={(e) => updateField("businessCategory", e.target.value)}
          placeholder="যেমন: ছোট দোকান, মাঝারি উদ্যোগ"
          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-text-dark placeholder:text-text-light focus:ring-2 focus:ring-accent focus:border-accent"
        />
      </div>

      {/* Duration & Visits */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-text-dark mb-2">
            প্রক্রিয়ায় কত সময় লেগেছে? *
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={formData.duration}
              onChange={(e) => updateField("duration", e.target.value)}
              placeholder="সংখ্যা"
              min="0"
              className="flex-1 px-4 py-3 bg-white border border-border rounded-xl text-sm text-text-dark placeholder:text-text-light focus:ring-2 focus:ring-accent focus:border-accent"
            />
            <select
              value={formData.durationUnit}
              onChange={(e) => updateField("durationUnit", e.target.value)}
              className="px-3 py-3 bg-white border border-border rounded-xl text-sm text-text-dark focus:ring-2 focus:ring-accent focus:border-accent"
            >
              <option value="দিন">দিন</option>
              <option value="সপ্তাহ">সপ্তাহ</option>
              <option value="মাস">মাস</option>
            </select>
          </div>
          {errors.duration && <p className="text-xs text-danger mt-1">{errors.duration}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-text-dark mb-2">
            অফিস ভিজিট সংখ্যা *
          </label>
          <input
            type="number"
            value={formData.officeVisits}
            onChange={(e) => updateField("officeVisits", e.target.value)}
            placeholder="সংখ্যা"
            min="0"
            className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-text-dark placeholder:text-text-light focus:ring-2 focus:ring-accent focus:border-accent"
          />
          {errors.officeVisits && <p className="text-xs text-danger mt-1">{errors.officeVisits}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-text-dark mb-2">
            আনুমানিক মোট খরচ
          </label>
          <input
            type="text"
            value={formData.totalCost}
            onChange={(e) => updateField("totalCost", e.target.value)}
            placeholder="৳"
            className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-text-dark placeholder:text-text-light focus:ring-2 focus:ring-accent focus:border-accent"
          />
        </div>
      </div>

      {/* Process Clarity */}
      <div>
        <label className="block text-sm font-medium text-text-dark mb-3">
          প্রক্রিয়াটি কতটা পরিষ্কার ছিল? *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {clarityOptions.map((option) => (
            <label
              key={option}
              className={`flex items-center gap-3 px-4 py-3 border rounded-xl cursor-pointer transition-colors text-sm ${
                formData.processClarity === option
                  ? "border-accent bg-accent/5 text-accent"
                  : "border-border bg-white text-text-dark hover:border-border"
              }`}
            >
              <input
                type="radio"
                name="clarity"
                value={option}
                checked={formData.processClarity === option}
                onChange={(e) => updateField("processClarity", e.target.value)}
                className="sr-only"
              />
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  formData.processClarity === option
                    ? "border-accent"
                    : "border-border"
                }`}
              >
                {formData.processClarity === option && (
                  <div className="w-2 h-2 rounded-full bg-accent" />
                )}
              </div>
              {option}
            </label>
          ))}
        </div>
        {errors.processClarity && (
          <p className="text-xs text-danger mt-1">{errors.processClarity}</p>
        )}
      </div>

      {/* Problems */}
      <div>
        <label className="block text-sm font-medium text-text-dark mb-3">
          কোন সমস্যা হয়েছে?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {problemOptions.map((problem) => (
            <label
              key={problem}
              className={`flex items-center gap-3 px-4 py-3 border rounded-xl cursor-pointer transition-colors text-sm ${
                formData.problems.includes(problem)
                  ? "border-accent bg-accent/5"
                  : "border-border bg-white hover:border-border"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.problems.includes(problem)}
                onChange={() => toggleProblem(problem)}
                className="sr-only"
              />
              <div
                className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 ${
                  formData.problems.includes(problem)
                    ? "border-accent bg-accent"
                    : "border-border"
                }`}
              >
                {formData.problems.includes(problem) && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              {problem}
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <label className="block text-sm font-medium text-text-dark mb-3">
          সামগ্রিক অভিজ্ঞতা *
        </label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => updateField("overallRating", star)}
              className="p-1 transition-colors"
              aria-label={`${star} তারকা`}
            >
              <Star
                className={`w-8 h-8 ${
                  star <= formData.overallRating
                    ? "text-warning fill-warning"
                    : "text-border"
                }`}
              />
            </button>
          ))}
        </div>
        {errors.overallRating && (
          <p className="text-xs text-danger mt-1">{errors.overallRating}</p>
        )}
      </div>

      {/* Comment */}
      <div>
        <label className="block text-sm font-medium text-text-dark mb-2">
          মতামত (ঐচ্ছিক, সর্বোচ্চ ৫০০ অক্ষর)
        </label>
        <textarea
          value={formData.comment}
          onChange={(e) => {
            if (e.target.value.length <= 500) {
              updateField("comment", e.target.value);
            }
          }}
          rows={4}
          placeholder="আপনার অভিজ্ঞতা সংক্ষেপে লিখুন..."
          className="w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-text-dark placeholder:text-text-light focus:ring-2 focus:ring-accent focus:border-accent resize-none"
        />
        <p className="text-xs text-text-light text-right mt-1">
          {formData.comment.length}/৫০০
        </p>
      </div>

      {/* Privacy Notice */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
          <p className="text-sm text-yellow-800">
            আপনার নাম, ফোন নম্বর, NID বা ব্যক্তিগত পরিচয় লিখবেন না।
          </p>
        </div>
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => updateField("consent", e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-border text-accent focus:ring-accent"
          />
          <span className="text-sm text-text-muted leading-relaxed">
            আমি নিশ্চিত করছি যে আমার দেওয়া তথ্য আমার ব্যক্তিগত অভিজ্ঞতার ভিত্তিতে
            এবং আমি কোনো ব্যক্তির ব্যক্তিগত তথ্য প্রকাশ করছি না।
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-danger mt-1">{errors.consent}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-medium text-white bg-primary rounded-xl hover:bg-primary-light transition-colors shadow-sm"
      >
        Anonymousভাবে জমা দিন
        <ChevronRight className="w-4 h-4" />
      </button>
    </form>
  );
}

export default function ReportPage() {
  return (
    <div className="bg-bg-warm min-h-screen">
      <div className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-text-muted">
            <a href="/" className="hover:text-primary transition-colors">
              হোম
            </a>
            <ChevronRight className="w-3 h-3" />
            <span className="text-text-dark font-medium">
              অভিজ্ঞতা শেয়ার করুন
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <AnimateOnScroll>
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-text-dark mb-2">
              অভিজ্ঞতা শেয়ার করুন
            </h1>
            <p className="text-text-muted">
              আপনার সরকারি সেবা অভিজ্ঞতা anonymousভাবে শেয়ার করুন। এটি অন্যদের
              প্রস্তুত হতে সাহায্য করবে।
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="bg-white border border-border rounded-xl p-6 sm:p-8">
            <Suspense
              fallback={
                <div className="text-center py-12">
                  <p className="text-text-muted">লোড হচ্ছে...</p>
                </div>
              }
            >
              <ReportForm />
            </Suspense>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
