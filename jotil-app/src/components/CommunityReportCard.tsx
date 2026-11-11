import { CommunityReport } from "@/types";

interface CommunityReportCardProps {
  report: CommunityReport;
}

export function CommunityReportCard({ report }: CommunityReportCardProps) {
  return (
    <div className="bg-white border border-border rounded-xl p-5 hover:shadow-sm transition-shadow">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-full bg-bg-warm border border-border flex items-center justify-center shrink-0">
          <span className="text-xs font-medium text-text-muted">অজ্ঞাত</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-text-dark leading-relaxed">{report.text}</p>
          <p className="text-xs text-text-muted mt-2">{report.date}</p>
        </div>
      </div>
    </div>
  );
}
