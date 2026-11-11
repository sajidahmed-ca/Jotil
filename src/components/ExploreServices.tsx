import {
  FileText, BookOpen, IdCard, Car, Baby, Map, ShieldCheck, Award, ArrowRight, Zap,
} from 'lucide-react';
import clsx from 'clsx';
import { services } from '../data/jotilData';

interface ExploreServicesProps {
  onSelectService: (serviceId: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  BookOpen,
  IdCard, Car, Baby, Map, ShieldCheck, Award,
};

export default function ExploreServices({ onSelectService }: ExploreServicesProps) {
  const coreServices = services.filter((s) => s.active);

  const getDifficultyColor = (score: number) => {
    if (score <= 40) return 'bg-green-500';
    if (score <= 65) return 'bg-amber-500';
    return 'bg-red-500';
  };

  const getDifficultyLabelColor = (score: number) => {
    if (score <= 40) return 'text-green-600';
    if (score <= 65) return 'text-amber-600';
    return 'text-red-600';
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 border border-accent-200 px-4 py-1.5 text-sm font-medium text-accent-700 mb-4">
            <Zap className="h-4 w-4" />
            {coreServices.length} Active Services
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900">Explore Service Data</h2>
          <p className="mt-3 text-slate-600 text-lg">
            Real citizen reports on {coreServices.length} government services.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service) => {
            const Icon = iconMap[service.icon] || FileText;
            return (
              <button
                key={service.id}
                onClick={() => onSelectService(service.id)}
                className="card-base p-5 text-left transition-all cursor-pointer hover:border-accent-300 hover:shadow-lg group"
              >
                <div className="flex items-start justify-between">
                  <div className="inline-flex items-center justify-center rounded-xl p-3 bg-accent-100 text-accent-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                    Active
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-bold text-primary-900">{service.name}</h3>
                <p className="mt-1 text-sm text-slate-500 line-clamp-2">{service.shortDescription}</p>

                <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-slate-500">
                  <div>
                    <span className="font-semibold text-slate-700 block">{service.reportsCount}</span>
                    Reports
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700 block">{service.avgDays}d</span>
                    Avg. Time
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700 block">{service.avgVisits}</span>
                    Avg. Visits
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <div className="h-2 w-20 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className={clsx('difficulty-bar', getDifficultyColor(service.difficultyScore))}
                          style={{ width: `${service.difficultyScore}%` }}
                        />
                      </div>
                    </div>
                    <span className={clsx('text-xs font-bold', getDifficultyLabelColor(service.difficultyScore))}>
                      {service.difficultyScore}/100
                    </span>
                  </div>
                  <span className={clsx(
                    'text-xs font-semibold px-2 py-0.5 rounded-full',
                    service.difficultyScore <= 40 ? 'bg-green-100 text-green-700' :
                    service.difficultyScore <= 65 ? 'bg-amber-100 text-amber-700' :
                    'bg-red-100 text-red-700'
                  )}>
                    {service.difficultyLabel}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-accent-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Explore Service <ArrowRight className="h-4 w-4" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
