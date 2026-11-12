import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

interface StaticPageProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
  icon: LucideIcon;
  children: ReactNode;
}

export default function StaticPage({ title, subtitle, eyebrow = 'Jotil', icon: Icon, children }: StaticPageProps) {
  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-600 to-primary-900 text-white">
        <div className="container-custom relative py-14 sm:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-primary-50">
              <Icon className="h-4 w-4" />
              {eyebrow}
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-balance">{title}</h1>
            <p className="mt-3 text-lg text-primary-50 max-w-2xl text-balance">{subtitle}</p>
          </div>
        </div>
      </section>

      <section className="container-custom py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">{children}</div>
      </section>
    </div>
  );
}
