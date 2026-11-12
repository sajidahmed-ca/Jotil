export type RatingTone = 'good' | 'average' | 'poor';

export interface RatingLevel {
  value: number;
  label: string;
  textClass: string;
  fillClass: string;
}

export const RATING_LEVELS: RatingLevel[] = [
  { value: 1, label: 'Very Bad', textClass: 'text-accent-700', fillClass: 'fill-accent-500 text-accent-500' },
  { value: 2, label: 'Bad', textClass: 'text-accent-700', fillClass: 'fill-accent-500 text-accent-500' },
  { value: 3, label: 'Average', textClass: 'text-amber-700', fillClass: 'fill-amber-600 text-amber-600' },
  { value: 4, label: 'Good', textClass: 'text-primary-700', fillClass: 'fill-primary-500 text-primary-500' },
  { value: 5, label: 'Excellent', textClass: 'text-primary-700', fillClass: 'fill-primary-600 text-primary-600' },
];

export function clampRating(rating: number) {
  return Math.min(5, Math.max(1, Math.round(rating)));
}

export function ratingFromScore(score: number) {
  return clampRating(score / 20);
}

export function scoreFromRating(rating: number) {
  return clampRating(rating) * 20;
}

export function getRatingTone(score: number): RatingTone {
  if (score >= 70) return 'good';
  if (score >= 50) return 'average';
  return 'poor';
}

export function getRatingLabel(score: number): 'Good' | 'Average' | 'Poor' {
  if (score >= 70) return 'Good';
  if (score >= 50) return 'Average';
  return 'Poor';
}

export function getRatingTextClass(score: number) {
  const tone = getRatingTone(score);
  if (tone === 'good') return 'text-primary-700';
  if (tone === 'average') return 'text-amber-700';
  return 'text-accent-700';
}

export function getRatingBadgeClasses(score: number) {
  const tone = getRatingTone(score);
  if (tone === 'good') return 'text-primary-800 bg-primary-50 border-primary-200';
  if (tone === 'average') return 'text-amber-800 bg-amber-50 border-amber-200';
  return 'text-accent-800 bg-accent-50 border-accent-200';
}

export function getRatingPillClasses(score: number) {
  const tone = getRatingTone(score);
  if (tone === 'good') return 'bg-primary-100 text-primary-800';
  if (tone === 'average') return 'bg-amber-100 text-amber-800';
  return 'bg-accent-100 text-accent-800';
}

export function getRatingBarClass(score: number) {
  const tone = getRatingTone(score);
  if (tone === 'good') return 'bg-primary-500';
  if (tone === 'average') return 'bg-amber-500';
  return 'bg-accent-500';
}

export function getRatingFillClass(score: number) {
  const tone = getRatingTone(score);
  if (tone === 'good') return 'fill-primary-500 text-primary-500';
  if (tone === 'average') return 'fill-amber-600 text-amber-600';
  return 'fill-accent-500 text-accent-500';
}

export function getRatingLevel(rating: number) {
  return RATING_LEVELS[clampRating(rating) - 1];
}

export function formatRating(score: number) {
  return (Math.min(100, Math.max(0, score)) / 20).toFixed(1);
}
