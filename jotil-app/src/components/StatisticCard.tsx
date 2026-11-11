interface StatisticCardProps {
  label: string;
  value: string | number;
  sublabel?: string;
}

export function StatisticCard({ label, value, sublabel }: StatisticCardProps) {
  return (
    <div className="text-center px-4 py-3">
      <p className="text-2xl sm:text-3xl font-bold text-primary">{value}</p>
      <p className="text-sm font-medium text-text-dark mt-1">{label}</p>
      {sublabel && <p className="text-xs text-text-muted mt-0.5">{sublabel}</p>}
    </div>
  );
}
