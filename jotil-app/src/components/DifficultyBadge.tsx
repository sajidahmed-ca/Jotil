interface DifficultyBadgeProps {
  score: number;
  label: string;
  size?: "sm" | "md" | "lg";
}

function getDifficultyColor(score: number): string {
  if (score <= 30) return "bg-green-100 text-green-800 border-green-200";
  if (score <= 50) return "bg-yellow-100 text-yellow-800 border-yellow-200";
  if (score <= 70) return "bg-orange-100 text-orange-800 border-orange-200";
  return "bg-red-100 text-red-800 border-red-200";
}

export function DifficultyBadge({ score, label, size = "md" }: DifficultyBadgeProps) {
  const colorClass = getDifficultyColor(score);
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border ${colorClass} ${sizeClasses[size]}`}
    >
      <span>{score}/100</span>
      <span className="opacity-70">—</span>
      <span>{label}</span>
    </span>
  );
}
