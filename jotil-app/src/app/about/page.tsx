import { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে — Jotil",
  description: "Jotil সম্পর্কে জানুন। আমরা কী করি এবং কেন।",
};

export default function AboutPage() {
  return (
    <div className="bg-bg-warm min-h-screen">
      <div className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-text-muted">
            <Link href="/" className="hover:text-primary transition-colors">
              হোম
            </Link>
            <span className="text-text-dark font-medium ml-2">
              আমাদের সম্পর্কে
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <AnimateOnScroll>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-dark mb-6">
            Jotil সম্পর্কে
          </h1>
        </AnimateOnScroll>

        <div className="space-y-8">
          <AnimateOnScroll>
            <section className="bg-white border border-border rounded-xl p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-text-dark mb-3">
                আমরা কারা
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                Jotil একটি civic-tech প্ল্যাটফরম যা বাংলাদেশের সাধারণ মানুষের
                সরকারি সেবা অভিজ্ঞতা সংগ্রহ ও প্রদর্শন করে। আমরা বিশ্বাস করি যে
                তথ্যভিত্তিক পর্যবেক্ষণ সেবা উন্নয়নে সহায়ক হতে পারে।
              </p>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <section className="bg-white border border-border rounded-xl p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-text-dark mb-3">
                আমাদের উদ্দেশ্য
              </h2>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                সরকারি সেবা পাওয়ার প্রক্রিয়া সবার জন্য সহজ হওয়া উচিত। কিন্তু
                বাস্তবতা অনেক সময় ভিন্ন। Jotil এই পার্থক্য তুলে ধরে:
              </p>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  সরকারি তথ্য ও বাস্তব অভিজ্ঞতার তুলনা
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  কমিউনিটি-রিপোর্টেড ডেটা থেকে সমস্যার চিত্র
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  আঞ্চলিক তুলনা ও প্যাটার্ন শনাক্তকরণ
                </li>
              </ul>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <section className="bg-white border border-border rounded-xl p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-text-dark mb-3">
                দায়মুক্তি
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                Jotil ব্যবহারকারীদের দেওয়া অভিজ্ঞতার তথ্য aggregate করে
                প্রদর্শন করে। কোনো ব্যক্তির বিরুদ্ধে অভিযোগ বা অপরাধ প্রমাণ
                করার উদ্দেশ্যে এই platform ব্যবহার করা হয় না।
              </p>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <section className="bg-white border border-border rounded-xl p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-text-dark mb-3">
                Jotil Score কী?
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                Jotil Score কোনো সরকারি rating নয়। এটি community-reported
                experience থেকে তৈরি একটি indicator, যা একটি service-এর perceived
                difficulty বুঝতে সাহায্য করে। বর্তমানে সমস্ত ডেটা sample/demo
                ডেটা।
              </p>
            </section>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="text-center pt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-primary rounded-xl hover:bg-primary-light transition-colors"
              >
                হোমে ফিরুন
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
