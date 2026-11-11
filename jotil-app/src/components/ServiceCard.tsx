import Link from "next/link";
import { Service } from "@/types";
import {
  FileCheck,
  BookOpen,
  CreditCard,
  Car,
  Baby,
  Map,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  FileCheck: <FileCheck className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  CreditCard: <CreditCard className="w-6 h-6" />,
  Car: <Car className="w-6 h-6" />,
  Baby: <Baby className="w-6 h-6" />,
  Map: <Map className="w-6 h-6" />,
};

interface ServiceCardProps {
  service: Service;
}

function getDifficultyColor(score: number): string {
  if (score <= 30) return "text-green-600";
  if (score <= 50) return "text-yellow-600";
  if (score <= 70) return "text-orange-500";
  return "text-red-500";
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/20 transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-lg bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
          {iconMap[service.icon] || <FileCheck className="w-6 h-6" />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-base font-semibold text-text-dark">
              {service.name}
            </h3>
            {service.comingSoon && (
              <span className="text-[10px] px-1.5 py-0.5 bg-bg-warm text-text-muted rounded border border-border">
                শীঘ্রই
              </span>
            )}
          </div>
          <p className="text-sm text-text-muted mb-3">{service.description}</p>

          {service.difficultyScore !== undefined && (
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1">
                <span className={`font-semibold ${getDifficultyColor(service.difficultyScore)}`}>
                  {service.difficultyScore}/100
                </span>
                <span className="text-text-muted">কঠিনতা</span>
              </span>
              {service.reportCount && (
                <span className="text-text-muted">
                  {service.reportCount} রিপোর্ট
                </span>
              )}
              {service.avgTime && (
                <span className="text-text-muted hidden sm:inline">
                  গড় সময়: {service.avgTime}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
