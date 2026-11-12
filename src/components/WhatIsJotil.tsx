import { Building2, Users, Lightbulb } from 'lucide-react';

export default function WhatIsJotil() {
  const cards = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Official Information',
      desc: 'What the government website says you need — documents, fees, and processing time.',
      color: 'bg-primary-50 border-primary-200 text-primary-800',
      iconBg: 'bg-primary-100 text-primary-700',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Reality',
      desc: 'What people actually experience — real reports from real citizens across Bangladesh.',
      color: 'bg-accent-50 border-accent-200 text-accent-700',
      iconBg: 'bg-accent-100 text-accent-700',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'A Clearer Picture',
      desc: 'We combine both to give you the real story — so you can prepare better and waste less time.',
      color: 'bg-amber-50 border-amber-200 text-amber-700',
      iconBg: 'bg-amber-100 text-amber-600',
    },
  ];

  return (
    <section className="section-padding bg-slate-50" id="how-it-works">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            What is Jotil?
          </h2>
          <p className="mt-3 text-slate-600 text-lg">
            We collect and share real experiences of government services.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 ${card.color}`}
            >
              <div className={`inline-flex items-center justify-center rounded-xl p-3 ${card.iconBg}`}>
                {card.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
