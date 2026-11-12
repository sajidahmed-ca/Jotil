import { MessageCircleMore, ShieldCheck, ListChecks } from 'lucide-react';
import StaticPage from './StaticPage';
import ReportExperienceModal from './ReportExperienceModal';

export default function ShareExperience() {
  return (
    <StaticPage
      icon={MessageCircleMore}
      eyebrow="Community Reports"
      title="Share Your Experience"
      subtitle="Tell us what actually happened at the office. Your anonymous report helps other citizens prepare."
    >
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-accent-200 bg-accent-50 p-4">
            <div className="flex items-center gap-2 text-accent-700">
              <ShieldCheck className="h-4 w-4" />
              <h2 className="text-sm font-bold">Anonymous by design</h2>
            </div>
            <p className="mt-1.5 text-sm text-slate-600">
              No names, NIDs, or phone numbers. We only ask for the service, location, and what happened.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2 text-slate-900">
              <ListChecks className="h-4 w-4" />
              <h2 className="text-sm font-bold">Rate from 1 to 5</h2>
            </div>
            <p className="mt-1.5 text-sm text-slate-600">
              1 = very bad, 2 = bad, 3 = average, 4 = good, 5 = excellent. Higher is better.
            </p>
          </div>
        </div>

        <ReportExperienceModal
          isOpen
          embedded
          onClose={() => undefined}
        />
      </div>
    </StaticPage>
  );
}
