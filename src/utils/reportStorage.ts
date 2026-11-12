export interface StoredExperienceReport {
  serviceId: string;
  division: string;
  district: string;
  days?: number;
  visits: number;
  cost: number;
  rating: number;
  ratingScore: number;
  problems: string[];
  comment: string;
  timestamp: string;
}

interface LegacyExperienceReport extends Partial<StoredExperienceReport> {
  clarityScore?: number;
  difficultyScore?: number;
}

const STORAGE_KEY = 'jotil-reports';
const MIGRATION_VERSION = 'v2';
const MIGRATION_KEY = `jotil-rating-migration-${MIGRATION_VERSION}`;

function migrateReport(report: LegacyExperienceReport): StoredExperienceReport {
  if (typeof report.rating === 'number' && typeof report.ratingScore === 'number') {
    return report as StoredExperienceReport;
  }

  const legacyRating =
    typeof report.clarityScore === 'number'
      ? report.clarityScore
      : typeof report.difficultyScore === 'number'
        ? Math.round(report.difficultyScore / 20)
        : 0;

  const rating = legacyRating > 0 ? 6 - Math.min(5, Math.max(1, legacyRating)) : 0;

  return {
    serviceId: report.serviceId || '',
    division: report.division || '',
    district: report.district || '',
    days: report.days,
    visits: report.visits || 0,
    cost: report.cost || 0,
    rating,
    ratingScore: rating * 20,
    problems: report.problems || [],
    comment: report.comment || '',
    timestamp: report.timestamp || new Date().toISOString(),
  };
}

export function loadStoredReports(): StoredExperienceReport[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (!Array.isArray(parsed)) return [];

    const migrationComplete = Boolean(localStorage.getItem(MIGRATION_KEY));
    if (migrationComplete) {
      return parsed as StoredExperienceReport[];
    }

    const reports = parsed.map((report: LegacyExperienceReport) => migrateReport(report));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
    localStorage.setItem(MIGRATION_KEY, MIGRATION_VERSION);
    return reports;
  } catch {
    return [];
  }
}

export function saveStoredReport(report: StoredExperienceReport) {
  const reports = loadStoredReports();
  reports.push(report);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
}

export function migrateStoredReports() {
  try {
    if (localStorage.getItem(MIGRATION_KEY)) return false;

    loadStoredReports();
    localStorage.setItem(MIGRATION_KEY, MIGRATION_VERSION);
    return true;
  } catch {
    return false;
  }
}
