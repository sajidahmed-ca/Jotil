import { useState, useEffect } from 'react';
import { X, Star, Send, ShieldCheck } from 'lucide-react';
import clsx from 'clsx';
import { bangladeshDivisions, problemOptions, services, CORE_SERVICES, type CoreServiceId } from '../data/jotilData';
import { getRatingLevel, scoreFromRating } from '../utils/rating';
import { saveStoredReport } from '../utils/reportStorage';

interface ReportExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  embedded?: boolean;
}

export default function ReportExperienceModal({ isOpen, onClose, embedded = false }: ReportExperienceModalProps) {
  const [serviceId, setServiceId] = useState('trade-license');
  const [division, setDivision] = useState('');
  const [district, setDistrict] = useState('');
  const [days, setDays] = useState('');
  const [visits, setVisits] = useState('');
  const [cost, setCost] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);
  const [comment, setComment] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectedDivision = bangladeshDivisions.find((d) => d.name === division);
  const districts = selectedDivision?.districts || [];

  const toggleProblem = (value: string) => {
    setSelectedProblems((prev) =>
      prev.includes(value) ? prev.filter((p) => p !== value) : [...prev, value]
    );
  };

  const canSubmit = Boolean(division && district && privacyAccepted);

  const resetForm = () => {
    setSubmitted(false);
    setServiceId('trade-license');
    setDivision('');
    setDistrict('');
    setDays('');
    setVisits('');
    setCost('');
    setRating(0);
    setHoverRating(0);
    setSelectedProblems([]);
    setComment('');
    setPrivacyAccepted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const report = {
      serviceId,
      division,
      district,
      days: days ? parseInt(days) : undefined,
      cost: cost ? parseInt(cost) : 0,
      visits: visits ? parseInt(visits) : 1,
      rating,
      ratingScore: rating > 0 ? scoreFromRating(rating) : 0,
      problems: selectedProblems,
      comment,
      timestamp: new Date().toISOString(),
    };

    saveStoredReport(report);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetForm, 300);
  };

  useEffect(() => {
    if (submitted && !embedded) {
      const timer = setTimeout(() => handleClose(), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted, embedded]);

  if (!isOpen && !embedded) return null;

  const activeRating = hoverRating || rating;
  const activeLevel = activeRating > 0 ? getRatingLevel(activeRating) : null;

  const content = (
    <div
      className={clsx(
        'w-full max-w-2xl rounded-2xl bg-white overflow-hidden',
        embedded ? 'border border-slate-200 shadow-sm' : 'relative shadow-2xl'
      )}
    >
      {!embedded && (
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
          <h2 className="text-base font-bold text-slate-900">Share Your Experience</h2>
          <button
            onClick={handleClose}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {submitted ? (
        <div className="px-5 py-6">
          <div className="rounded-xl border border-primary-200 bg-primary-50 p-4 text-center">
            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
              <ShieldCheck className="h-5 w-5 text-primary-700" />
            </div>
            <p className="text-sm font-semibold text-primary-800">
              Thank you! Your anonymous experience has been recorded.
            </p>
          </div>
          {embedded && (
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
              >
                Submit another report
              </button>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="px-5 py-4 space-y-4">
          {/* Row 1: Service + Metrics */}
          <div className="grid gap-3 sm:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-3">
              <FieldGroup label="Service">
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="input-field !py-2 text-sm"
                >
                  {services.filter((s) => CORE_SERVICES.includes(s.id as CoreServiceId)).map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </FieldGroup>

              <FieldGroup label="Division">
                <select
                  value={division}
                  onChange={(e) => { setDivision(e.target.value); setDistrict(''); }}
                  className="input-field !py-2 text-sm"
                >
                  <option value="">Select Division</option>
                  {bangladeshDivisions.map((d) => (
                    <option key={d.name} value={d.name}>{d.name}</option>
                  ))}
                </select>
              </FieldGroup>

              <FieldGroup label="District">
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  disabled={!division}
                  className="input-field !py-2 text-sm"
                >
                  <option value="">Select District</option>
                  {districts.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </FieldGroup>
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              <FieldGroup label="Total Days Taken">
                <input
                  type="number"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  placeholder="e.g., 5"
                  min="1"
                  className="input-field !py-2 text-sm"
                />
              </FieldGroup>

              <FieldGroup label="Total Office Visits">
                <input
                  type="number"
                  value={visits}
                  onChange={(e) => setVisits(e.target.value)}
                  placeholder="e.g., 3"
                  min="1"
                  className="input-field !py-2 text-sm"
                />
              </FieldGroup>

              <FieldGroup label="Total Cost (BDT)">
                <input
                  type="number"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  placeholder="e.g., 1500"
                  min="0"
                  className="input-field !py-2 text-sm"
                />
              </FieldGroup>
            </div>
          </div>

          {/* Row 2: Star Rating */}
          <FieldGroup label="Rating">
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="group rounded-md transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                    aria-label={`${star} star${star > 1 ? 's' : ''}`}
                  >
                    <Star
                      className={clsx(
                        'h-7 w-7 transition-colors',
                        star <= activeRating
                          ? activeLevel?.fillClass
                          : 'fill-slate-200 text-slate-300 group-hover:fill-amber-200 group-hover:text-amber-300'
                      )}
                    />
                  </button>
                ))}
              </div>
              {activeLevel && (
                <span className={clsx('text-sm font-semibold', activeLevel.textClass)}>
                  {activeLevel.label}
                </span>
              )}
            </div>
            <p className="mt-1 text-xs text-slate-400">
              1 = Very Bad · 5 = Excellent. Higher is better.
            </p>
          </FieldGroup>

          {/* Row 3: Problem Chips */}
          <FieldGroup label="Select Problems (Optional)">
            <div className="flex flex-wrap gap-2">
              {problemOptions.map((opt) => {
                const active = selectedProblems.includes(opt.value);
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => toggleProblem(opt.value)}
                    className={clsx(
                      'rounded-full border px-3 py-1.5 text-xs font-medium transition-all',
                      active
                        ? 'border-primary-600 bg-primary-50 text-primary-800 shadow-sm'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                    )}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </FieldGroup>

          {/* Row 4: Comment */}
          <FieldGroup label="Describe your experience">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Briefly describe your experience..."
              rows={2}
              className="input-field !py-2 text-sm resize-none"
            />
          </FieldGroup>

          {/* Row 5: Privacy Notice */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs text-slate-600 leading-relaxed">
              <span className="mr-1">🔒</span>
              <strong>Anonymous Report:</strong> No personal names, NIDs, or phone numbers will be collected or published.
            </p>
            <label className="mt-2 flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-600"
              />
              <span className="text-xs font-medium text-slate-700">
                I confirm this report contains no personal identification data.
              </span>
            </label>
          </div>

          {/* Row 6: Buttons */}
          <div className="flex items-center justify-end gap-2 pt-1 pb-1">
            {!embedded && (
              <button
                type="button"
                onClick={handleClose}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              disabled={!canSubmit}
              className={clsx(
                'inline-flex items-center gap-2 rounded-lg px-6 py-2 text-sm font-medium shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2',
                canSubmit
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              )}
            >
              <Send className="h-4 w-4" />
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );

  if (embedded) return content;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
      {content}
    </div>
  );
}

function FieldGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-600 mb-1">{label}</label>
      {children}
    </div>
  );
}
