import React, { useMemo, useState } from 'react';
import { Send, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const NETLIFY_FORM_NAME = 'lead-inquiry';

function getFormAction(): string {
  const base = import.meta.env.BASE_URL || '/';
  if (base === '/') return '/';
  return base.endsWith('/') ? base : `${base}/`;
}

function encodeNetlifyBody(data: Record<string, string>): string {
  return new URLSearchParams(data).toString();
}

type LeadFormData = {
  fullName: string;
  clinicName: string;
  email: string;
  phone: string;
  clinicType: string;
  monthlyNewPatients: string;
  growthGoal: string;
  primaryChallenge: string;
  interestedServices: string[];
  timeline: string;
  budgetRange: string;
  notes: string;
};

const stepTitles = ['About You', 'Growth Goals', 'Needs & Priorities', 'Project Details'];

const clinicTypeOptions = ['General Dentistry', 'Orthodontics', 'Cosmetic / Implants', 'Multi-Location Group'];
const patientGoalOptions = ['+10 / month', '+20 / month', '+35 / month', '+50+ / month'];
const challengeOptions = [
  'Not enough qualified leads',
  'Low local visibility',
  'Poor website conversion',
  'Inconsistent marketing results',
];
const serviceOptions = [
  'Website redesign',
  'Local SEO & GEO',
  'Paid ads',
  'Social media content',
  'AI receptionist / automation',
  'Reviews & reputation growth',
];
const timelineOptions = ['Immediately', 'Within 30 days', '1-3 months', 'Exploring options'];
const budgetOptions = ['< $1,500/mo', '$1,500-$2,500/mo', '$2,500-$5,000/mo', '$5,000+/mo'];

export type LeadInquiryFormProps = {
  /** Shown above the step progress */
  formTitle?: string;
  /** Merged onto the outer card (e.g. `h-full w-full` on Contact page) */
  className?: string;
};

const initialFormData = (): LeadFormData => ({
  fullName: '',
  clinicName: '',
  email: '',
  phone: '',
  clinicType: '',
  monthlyNewPatients: '',
  growthGoal: '',
  primaryChallenge: '',
  interestedServices: [],
  timeline: '',
  budgetRange: '',
  notes: '',
});

export default function LeadInquiryForm({
  formTitle = 'Request a Free Audit',
  className = '',
}: LeadInquiryFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [botField, setBotField] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<LeadFormData>(initialFormData);

  const progressPercent = useMemo(
    () => ((currentStep + 1) / stepTitles.length) * 100,
    [currentStep]
  );

  const updateField = <K extends keyof LeadFormData>(field: K, value: LeadFormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const alreadySelected = prev.interestedServices.includes(service);
      return {
        ...prev,
        interestedServices: alreadySelected
          ? prev.interestedServices.filter((item) => item !== service)
          : [...prev.interestedServices, service],
      };
    });
  };

  const canGoNext = useMemo(() => {
    if (currentStep === 0) {
      return Boolean(formData.fullName.trim() && formData.clinicName.trim() && formData.email.trim());
    }
    if (currentStep === 1) {
      return Boolean(formData.clinicType && formData.monthlyNewPatients && formData.growthGoal.trim());
    }
    if (currentStep === 2) {
      return Boolean(formData.primaryChallenge && formData.interestedServices.length > 0);
    }
    if (currentStep === 3) {
      return Boolean(formData.timeline && formData.budgetRange);
    }
    return false;
  }, [currentStep, formData]);

  const nextStep = () => {
    if (!canGoNext) return;
    setCurrentStep((prev) => Math.min(stepTitles.length - 1, prev + 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canGoNext) return;
    if (botField.trim()) return;

    setSubmitError(null);
    setIsSubmitting(true);
    const body = encodeNetlifyBody({
      'form-name': NETLIFY_FORM_NAME,
      'bot-field': '',
      fullName: formData.fullName.trim(),
      clinicName: formData.clinicName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      clinicType: formData.clinicType,
      monthlyNewPatients: formData.monthlyNewPatients,
      growthGoal: formData.growthGoal.trim(),
      primaryChallenge: formData.primaryChallenge,
      interestedServices: formData.interestedServices.join('; '),
      timeline: formData.timeline,
      budgetRange: formData.budgetRange,
      notes: formData.notes.trim(),
    });

    try {
      const res = await fetch(getFormAction(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setIsSubmitted(true);
    } catch {
      setSubmitError(
        'We could not send your message. Please try again in a moment, call us, or email hello@dentech.digital.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const cardClass =
    `relative flex h-full min-h-[28rem] flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-800 md:min-h-[32rem] md:p-10 ${className}`.trim();

  return (
    <div className={cardClass}>
            {isSubmitted ? (
              <div className="flex min-h-[24rem] flex-1 flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500 md:min-h-[28rem]">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-blue-950 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for reaching out. One of our growth specialists will contact you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setSubmitError(null);
                    setCurrentStep(0);
                    setFormData(initialFormData());
                    setBotField('');
                  }}
                  className="mt-8 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFinalSubmit} className="flex min-h-0 flex-1 flex-col" noValidate>
                <p className="sr-only" aria-hidden="true">
                  <label htmlFor="lead-inquiry-bot">Leave blank</label>
                  <input
                    id="lead-inquiry-bot"
                    name="bot-field"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={botField}
                    onChange={(ev) => setBotField(ev.target.value)}
                  />
                </p>
                <div className="shrink-0">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-blue-950 dark:text-white">{formTitle}</h3>
                    <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                      Step {currentStep + 1} / {stepTitles.length}
                    </span>
                  </div>
                  <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">{stepTitles[currentStep]}</p>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-slate-700">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                <div className="mt-6 min-h-0 flex-1 space-y-6">
                {currentStep === 0 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          value={formData.fullName}
                          onChange={(e) => updateField('fullName', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700/50 text-blue-950 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                          placeholder="Dr. Jane Smith"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="clinic" className="text-sm font-medium text-gray-700 dark:text-gray-300">Clinic Name</label>
                        <input
                          type="text"
                          id="clinic"
                          value={formData.clinicName}
                          onChange={(e) => updateField('clinicName', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700/50 text-blue-950 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                          placeholder="The Smile Doctors"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700/50 text-blue-950 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                          placeholder="jane@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700/50 text-blue-950 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">What best describes your clinic?</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {clinicTypeOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => updateField('clinicType', option)}
                            className={`text-left px-4 py-3 rounded-xl border transition-all ${
                              formData.clinicType === option
                                ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-500/10'
                                : 'border-gray-200 bg-white dark:border-slate-700 dark:bg-slate-800/50'
                            }`}
                          >
                            <span className="text-sm font-medium text-blue-950 dark:text-white">{option}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">What is your new-patient growth target?</p>
                      <div className="grid grid-cols-2 gap-3">
                        {patientGoalOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => updateField('monthlyNewPatients', option)}
                            className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                              formData.monthlyNewPatients === option
                                ? 'border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-500/10 dark:text-blue-200'
                                : 'border-gray-200 bg-white text-gray-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-200'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="goal" className="text-sm font-medium text-gray-700 dark:text-gray-300">Primary growth goal</label>
                      <input
                        type="text"
                        id="goal"
                        value={formData.growthGoal}
                        onChange={(e) => updateField('growthGoal', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700/50 text-blue-950 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                        placeholder="Example: Increase Invisalign consults and high-value cases"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">What is your biggest challenge right now?</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {challengeOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => updateField('primaryChallenge', option)}
                            className={`text-left px-4 py-3 rounded-xl border transition-all ${
                              formData.primaryChallenge === option
                                ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-500/10'
                                : 'border-gray-200 bg-white dark:border-slate-700 dark:bg-slate-800/50'
                            }`}
                          >
                            <span className="text-sm font-medium text-blue-950 dark:text-white">{option}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">What are you interested in? (Select all that apply)</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {serviceOptions.map((option) => {
                          const isSelected = formData.interestedServices.includes(option);
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => toggleService(option)}
                              className={`text-left px-4 py-3 rounded-xl border transition-all ${
                                isSelected
                                  ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-500/10'
                                  : 'border-gray-200 bg-white dark:border-slate-700 dark:bg-slate-800/50'
                              }`}
                            >
                              <span className="text-sm font-medium text-blue-950 dark:text-white">{option}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">When do you want to start?</p>
                      <div className="grid grid-cols-2 gap-3">
                        {timelineOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => updateField('timeline', option)}
                            className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                              formData.timeline === option
                                ? 'border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-500/10 dark:text-blue-200'
                                : 'border-gray-200 bg-white text-gray-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-200'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Monthly growth budget range</p>
                      <div className="grid grid-cols-2 gap-3">
                        {budgetOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => updateField('budgetRange', option)}
                            className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                              formData.budgetRange === option
                                ? 'border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-500/10 dark:text-blue-200'
                                : 'border-gray-200 bg-white text-gray-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-200'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Anything else we should know?</label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.notes}
                        onChange={(e) => updateField('notes', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700/50 text-blue-950 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none resize-none"
                        placeholder="Share context about your goals, team, or current marketing setup..."
                      />
                    </div>
                  </div>
                )}
                </div>

                {submitError ? (
                  <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200" role="alert">
                    {submitError}
                  </p>
                ) : null}

                <div className="mt-auto flex shrink-0 items-center justify-between gap-3 border-t border-gray-100 pt-6 dark:border-slate-700/80">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 px-4 py-2.5 text-gray-600 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:text-gray-300 dark:hover:bg-slate-700/50"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Back</span>
                  </button>

                  {currentStep < stepTitles.length - 1 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!canGoNext}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <span>Next</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!canGoNext || isSubmitting}
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send Request'}</span>
                      <Send className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </form>
            )}
    </div>
  );
}
