import {
  ArrowLeft,
  AlertTriangle,
  TrendingUp,
  MapPin,
  Clock,
  DollarSign,
  Users,
  MessageCircle,
  Star,
  BarChart3,
  Shield,
  ChevronRight,
} from 'lucide-react';
import clsx from 'clsx';
import { services, CORE_SERVICES, type Service, type CoreServiceId } from '../data/jotilData';

interface ServiceDetailProps {
  serviceId: CoreServiceId;
  onBack: () => void;
  onReport: () => void;
  onSwitchService: (id: CoreServiceId) => void;
}

export default function ServiceDetail({ serviceId, onBack, onReport, onSwitchService }: ServiceDetailProps) {
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="section-padding bg-slate-50">
        <div className="container-custom text-center py-20">
          <p className="text-slate-500 text-lg">Service not found.</p>
          <button onClick={onBack} className="btn-primary mt-4">Go Back</button>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (score: number) => {
    if (score <= 40) return 'text-green-600 bg-green-50 border-green-200';
    if (score <= 65) return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getDifficultyBarColor = (score: number) => {
    if (score <= 40) return 'bg-green-500';
    if (score <= 65) return 'bg-amber-500';
    return 'bg-red-500';
  };

  const getRegionDifficultyBg = (d: number) => {
    if (d <= 40) return 'bg-green-100 text-green-800';
    if (d <= 65) return 'bg-amber-100 text-amber-800';
    return 'bg-red-100 text-red-800';
  };

  const coreServices = services.filter((s) => CORE_SERVICES.includes(s.id as CoreServiceId));

  return (
    <div className="section-padding bg-slate-50">
      <div className="container-custom">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary-600 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all services
        </button>

        {/* Service Selector Tabs */}
        <div className="mb-8 -mx-4 px-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            {coreServices.map((s) => (
              <button
                key={s.id}
                onClick={() => onSwitchService(s.id as CoreServiceId)}
                className={clsx(
                  'flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all whitespace-nowrap',
                  s.id === serviceId
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-primary-300 hover:text-primary-600'
                )}
              >
                {s.name}
                {s.id === serviceId && <ChevronRight className="h-3.5 w-3.5" />}
              </button>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-primary-900">
                {service.name}
              </h1>
              <span className={clsx(
                'rounded-full px-3 py-1 text-xs font-bold border',
                getDifficultyColor(service.difficultyScore)
              )}>
                {service.difficultyLabel}
              </span>
            </div>
            <p className="mt-2 text-slate-600 max-w-xl">
              {service.description}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Category: {service.category}
            </p>
          </div>
          <button
            onClick={onReport}
            className="btn-accent"
          >
            Share My Experience
          </button>
        </div>

        {/* Official Information Disclaimer */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-800">
                Official Information — Disclaimer
              </h3>
              <p className="mt-1 text-sm text-amber-700">
                The information below is gathered from government websites and published guidelines. Actual experiences may differ. Jotil does not guarantee the accuracy of this information.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <InfoItem
              label="Required Documents"
              items={service.officialInfo.requiredDocs}
            />
            <div>
              <h4 className="text-sm font-semibold text-amber-800 mb-2">
                Official Steps
              </h4>
              <ol className="space-y-1.5">
                {service.officialInfo.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-amber-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-800 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-amber-700">
            <span><strong>Fee:</strong> {service.officialInfo.fee}</span>
            <span><strong>Time:</strong> {service.officialInfo.processingTime}</span>
          </div>
        </div>

        {/* Community Dashboard */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-accent-600" />
            Community Dashboard
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <DashCard
              icon={<Shield className="h-5 w-5" />}
              label="Difficulty Score"
              value={`${service.difficultyScore}/100`}
              sub={service.difficultyLabel}
              className={getDifficultyColor(service.difficultyScore)}
            />
            <DashCard
              icon={<Users className="h-5 w-5" />}
              label="Total Reports"
              value={`${service.reportsCount}`}
              sub="Experiences submitted"
              className="text-blue-600 bg-blue-50 border-blue-200"
            />
            <DashCard
              icon={<Clock className="h-5 w-5" />}
              label="Avg. Time"
              value={`${service.avgDays} days`}
              sub="at office"
              className="text-purple-600 bg-purple-50 border-purple-200"
            />
            <DashCard
              icon={<DollarSign className="h-5 w-5" />}
              label="Avg. Visits"
              value={`${service.avgVisits}`}
              sub="office visits"
              className="text-emerald-600 bg-emerald-50 border-emerald-200"
            />
          </div>

          {/* Difficulty Score Visual */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-primary-900">
                Jotil Difficulty Score
              </h3>
              <span className={clsx('text-2xl font-bold px-3 py-1 rounded-lg border', getDifficultyColor(service.difficultyScore))}>
                {service.difficultyScore}
              </span>
            </div>
            <div className="h-4 w-full rounded-full bg-slate-100 overflow-hidden">
              <div
                className={clsx('difficulty-bar', getDifficultyBarColor(service.difficultyScore))}
                style={{ width: `${service.difficultyScore}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-xs text-slate-500">
              <span>Easy (0)</span>
              <span>Medium (50)</span>
              <span>Very Hard (100)</span>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              This score is calculated based on user reports — considering cost, visits, time, and types of problems encountered.
            </p>
          </div>
        </div>

        {/* Official vs Community Reality */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            Official Steps vs Community Reality
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                <Shield className="h-4 w-4" />
                What They Say
              </h3>
              <ul className="space-y-2">
                {service.officialSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-blue-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-200 text-xs font-bold text-blue-800 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                What Actually Happens
              </h3>
              <ul className="space-y-2">
                {service.communityReality.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-700">
                    <span className="text-red-400 mt-0.5 shrink-0">!</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Common Problems */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-red-500" />
            Common Problems
          </h2>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
            {service.topProblems.map((problem, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-slate-700">
                    {problem.label}
                  </span>
                  <span className="text-sm font-bold text-slate-600">{problem.percentage}%</span>
                </div>
                <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={clsx(
                      'difficulty-bar',
                      problem.percentage >= 60 ? 'bg-red-400' :
                      problem.percentage >= 40 ? 'bg-amber-400' : 'bg-green-400'
                    )}
                    style={{ width: `${problem.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Comparison */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary-600" />
            Regional Comparison
          </h2>

          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-5 py-3 text-left font-semibold text-slate-700">
                      Region
                    </th>
                    <th className="px-5 py-3 text-center font-semibold text-slate-700">
                      Difficulty
                    </th>
                    <th className="px-5 py-3 text-center font-semibold text-slate-700">
                      Avg. Cost
                    </th>
                    <th className="px-5 py-3 text-center font-semibold text-slate-700">
                      Avg. Visits
                    </th>
                    <th className="px-5 py-3 text-center font-semibold text-slate-700">
                      Avg. Days
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {service.regionalComparison.map((region, i) => (
                    <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-3.5 font-medium text-slate-900">
                        {region.name}
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        <span className={clsx('inline-block rounded-full px-3 py-1 text-xs font-bold', getRegionDifficultyBg(region.difficulty))}>
                          {region.difficulty}/100
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-center text-slate-600">{region.avgCost}</td>
                      <td className="px-5 py-3.5 text-center text-slate-600">{region.avgVisits}</td>
                      <td className="px-5 py-3.5 text-center text-slate-600">{region.avgDays}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Anonymous Experience Feed */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-primary-900 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-accent-600" />
              Anonymous Experiences
            </h2>
            <button onClick={onReport} className="text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors">
              + Share yours
            </button>
          </div>

          <div className="space-y-4">
            {service.experiences.map((exp) => (
              <div key={exp.id} className="card-base p-5">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      <MapPin className="h-3 w-3" />
                      {exp.region}
                    </span>
                    <span className="text-xs text-slate-400">
                      {exp.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />
                      {exp.cost.toLocaleString()} BDT
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {exp.visits} visits
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Clarity: {exp.clarityScore}/5
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">{exp.comment}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.problems.map((p, pi) => (
                    <span key={pi} className="rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-600">
                      {p}
                    </span>
                  ))}
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs text-slate-500">Difficulty:</span>
                  <div className="h-2 w-24 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className={clsx('difficulty-bar', getDifficultyBarColor(exp.difficultyScore))}
                      style={{ width: `${exp.difficultyScore}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-600">{exp.difficultyScore}/100</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DashCard({
  icon,
  label,
  value,
  sub,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  className: string;
}) {
  return (
    <div className={clsx('rounded-2xl border p-5', className)}>
      <div className="flex items-center gap-2 mb-2">{icon}<span className="text-sm font-medium opacity-80">{label}</span></div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs opacity-60 mt-1">{sub}</div>
    </div>
  );
}

function InfoItem({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-amber-800 mb-2">{label}</h4>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-amber-700">
            <span className="text-amber-400 mt-0.5">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
