export interface Service {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  icon: string;
  slug: string;
  comingSoon: boolean;
  difficultyScore?: number;
  reportCount?: number;
  avgTime?: string;
  avgVisits?: number;
  costRange?: string;
  difficultyLabel?: string;
}

export interface LocationData {
  name: string;
  avgTime: string;
  avgVisits: number;
  difficulty: number;
}

export interface CommunityReport {
  id: string;
  text: string;
  date: string;
}

export interface ServiceStatistics {
  totalReports: number;
  avgCompletionTime: string;
  avgOfficeVisits: number;
  costRange: string;
  difficultyScore: number;
  difficultyLabel: string;
  problems: ProblemItem[];
  locations: LocationData[];
  reports: CommunityReport[];
}

export interface ProblemItem {
  percentage: number;
  label: string;
}

export interface DifficultyBreakdown {
  label: string;
  score: number;
  maxScore: number;
}

export interface ReportFormData {
  service: string;
  division: string;
  district: string;
  upazila: string;
  businessCategory: string;
  duration: string;
  durationUnit: string;
  officeVisits: string;
  totalCost: string;
  processClarity: string;
  problems: string[];
  overallRating: number;
  comment: string;
  consent: boolean;
}
