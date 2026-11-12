import { Star } from 'lucide-react';
import clsx from 'clsx';
import { formatRating, getRatingFillClass, ratingFromScore } from '../utils/rating';

interface RatingStarsProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
}

const starSizes = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
};

const valueSizes = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

export default function RatingStars({ score, size = 'sm', showValue = true, className }: RatingStarsProps) {
  const filledStars = score > 0 ? ratingFromScore(score) : 0;

  return (
    <div className={clsx('flex items-center gap-1', className)}>
      <div className="flex items-center gap-0.5" aria-label={`Rating: ${formatRating(score)} out of 5`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={clsx(
              starSizes[size],
              star <= filledStars ? getRatingFillClass(score) : 'fill-slate-200 text-slate-300'
            )}
          />
        ))}
      </div>
      {showValue && (
        <span className={clsx('font-bold text-slate-700', valueSizes[size])}>
          {formatRating(score)}
        </span>
      )}
    </div>
  );
}
