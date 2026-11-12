import { Users, Eye, ShieldCheck, HeartHandshake, MessageCircleMore, Info, ArrowRight } from 'lucide-react';
import StaticPage from './StaticPage';
import type { Page } from '../types';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const values = [
    {
      icon: Users,
      title: 'Citizen voices first',
      desc: 'Every report comes from someone who actually went through the process. Their experience is the starting point.',
    },
    {
      icon: Eye,
      title: 'Transparency without blame',
      desc: 'We show patterns in delays, costs, and confusion without accusing individuals or making legal claims.',
    },
    {
      icon: ShieldCheck,
      title: 'Privacy by default',
      desc: 'Reports are anonymous. We do not ask for names, NIDs, or phone numbers, and we keep personal data to a minimum.',
    },
    {
      icon: HeartHandshake,
      title: 'Public interest, not politics',
      desc: 'Jotil is independent and not affiliated with any government agency or political party. The goal is better services for everyone.',
    },
  ];

  return (
    <StaticPage
      icon={Info}
      eyebrow="About Jotil"
      title="A clearer picture of public services in Bangladesh"
      subtitle="Jotil turns everyday citizen experiences into practical, community-powered guidance."
    >
      <div className="space-y-6">
        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">Why we built Jotil</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Government service information is often scattered, outdated, or written in a way that does not
            match what people actually face at the office. A website may list three documents; the queue may
            tell a different story. Jotil exists to close that gap.
          </p>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            We collect anonymous experience reports about services such as trade licenses, passports, NID
            cards, driving licenses, birth certificates, and land mutation. We combine those reports with
            official information so citizens can plan their time, money, and visits more realistically.
          </p>
        </section>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">What you can do on Jotil</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900">See the real picture</h3>
              <p className="mt-1 text-sm text-slate-600">
                Compare official steps with community-reported times, visits, costs, and common problems.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900">Check regional differences</h3>
              <p className="mt-1 text-sm text-slate-600">
                Understand how experiences vary between Dhaka, Chattogram, Sylhet, Gazipur, and other areas.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900">Rate a service</h3>
              <p className="mt-1 text-sm text-slate-600">
                Share a 1–5 rating where 1 is very bad and 5 is excellent, so higher scores mean better
                experiences.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-900">Help the next person</h3>
              <p className="mt-1 text-sm text-slate-600">
                Your anonymous report can save someone else a wasted trip, an unexpected fee, or weeks of
                waiting.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-4">What we stand for</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="card-base p-5">
                  <div className="inline-flex items-center justify-center rounded-xl bg-primary-100 p-2.5 text-primary-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-slate-900">{value.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">How the rating works</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Every report includes a simple rating: 1 star means very bad, 2 bad, 3 average, 4 good, and 5
            excellent. Higher ratings are better. We use these ratings to show community scores out of five
            and to colour service indicators from red (poor) to green (good).
          </p>
        </section>

        <section className="rounded-2xl border border-accent-200 bg-accent-50 p-6">
          <h2 className="text-lg font-bold text-slate-900">Add your experience</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            The platform gets useful when people share what actually happened. It takes a couple of minutes,
            and your report is anonymous.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button onClick={() => onNavigate('share-experience')} className="btn-accent">
              <MessageCircleMore className="mr-2 h-4 w-4" />
              Share Your Experience
            </button>
            <button onClick={() => onNavigate('contact')} className="btn-outline">
              Contact us
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </section>
      </div>
    </StaticPage>
  );
}
