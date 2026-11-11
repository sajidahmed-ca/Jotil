import { ProblemItem } from "@/types";

interface ProblemBreakdownProps {
  problems: ProblemItem[];
}

export function ProblemBreakdown({ problems }: ProblemBreakdownProps) {
  return (
    <div className="space-y-3">
      {problems.map((problem) => (
        <div key={problem.label}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-text-dark">{problem.label}</span>
            <span className="text-sm font-semibold text-primary">
              {problem.percentage}%
            </span>
          </div>
          <div className="w-full h-2 bg-border-light rounded-full overflow-hidden">
            <div
              className="h-full bg-primary/70 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${problem.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
