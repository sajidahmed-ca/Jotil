import { useState, useEffect } from 'react';
import { X, Star, Send, ShieldCheck } from 'lucide-react';
import clsx from 'clsx';
import { bangladeshDivisions, problemOptions, services, CORE_SERVICES, type CoreServiceId } from '../data/jotilData';

interface ReportExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ratingLevels = [
  { label: 'Very Easy', emoji: '😊', color: 'text-emerald-500' },
  { label: 'Easy', emoji: '🙂', color: 'text-green-500' },
  { label: 'Moderate', emoji: '😐', color: 'text-amber-500' },
  { label: 'Difficult', emoji: '😟', color: 'text-orange-500' },
  { label: 'Very Hard', emoji: '😫', color: 'text-red-500' },
];

export default function ReportExperienceModal({ isOpen, onClose }: ReportExperienceModalProps) {
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

  const canSubmit = division && district && privacyAccepted;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const report = {
      serviceId,
      division,
      district,
      cost: cost ? parseInt(cost) : 0,
      visits: visits ? parseInt(visits) : 1,
      clarityScore: rating,
      difficultyScore: rating * 20,
      problems: selectedProblems,
      comment,
      timestamp: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem('jotil-reports') || '[]');
    existing.push(report);
    localStorage.setItem('jotil-reports', JSON.stringify(existing));

    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
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
    }, 300);
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => handleClose(), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  if (!isOpen) return null;

  const activeRating = hoverRating || rating;
  const activeLevel = activeRating > 0 ? ratingLevels[activeRating - 1] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
          <h2 className="text-base font-bold text-slate-900">Share Your Experience</h2>
          <button
            onClick={handleClose}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {submitted ? (
          <div className="px-5 py-6">
            <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <ShieldCheck className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-sm font-semibold text-green-800">
                Thank you! Your anonymous experience has been recorded.
              </p>
            </div>
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
            <FieldGroup label="Overall Difficulty Rating">
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="group transition-transform hover:scale-110"
                    >
                      <Star
                        className={clsx(
                          'h-7 w-7 transition-colors',
                          star <= activeRating
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-slate-200 text-slate-300 group-hover:fill-amber-200 group-hover:text-amber-300'
                        )}
                      />
                    </button>
                  ))}
                </div>
                {activeLevel && (
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg leading-none">{activeLevel.emoji}</span>
                    <span className={clsx('text-sm font-medium', activeLevel.color)}>
                      {activeLevel.label}
                    </span>
                  </div>
                )}
              </div>
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
                          ? 'border-teal-500 bg-teal-50 text-teal-700 shadow-sm'
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
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-xs font-medium text-slate-700">
                  I confirm this report contains no personal identification data.
                </span>
              </label>
            </div>

            {/* Row 6: Buttons */}
            <div className="flex items-center justify-end gap-2 pt-1 pb-1">
              <button
                type="button"
                onClick={handleClose}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!canSubmit}
                className={clsx(
                  'inline-flex items-center gap-2 rounded-lg px-6 py-2 text-sm font-medium shadow-sm transition-all',
                  canSubmit
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
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
