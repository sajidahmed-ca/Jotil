import { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import StaticPage from './StaticPage';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('General question');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = Boolean(name.trim() && email.trim() && message.trim());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const subject = encodeURIComponent(`[Jotil] ${topic}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    setSubmitted(true);
    window.location.href = `mailto:hello@jotil.org?subject=${subject}&body=${body}`;
  };

  return (
    <StaticPage
      icon={MessageSquare}
      eyebrow="Get in touch"
      title="Contact Jotil"
      subtitle="Questions, feedback, corrections, or partnership ideas — we would like to hear from you."
    >
      <div className="grid gap-6 md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="card-base p-6">
            <h2 className="text-lg font-bold text-slate-900">Send us a message</h2>
            <p className="mt-1 text-sm text-slate-500">
              This form opens your email app with a pre-filled message. You can also email us directly.
            </p>

            {submitted ? (
              <div className="mt-5 rounded-xl border border-primary-200 bg-primary-50 p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary-700 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-primary-800">Your email draft is ready.</p>
                    <p className="mt-1 text-sm text-primary-700">
                      If your email app did not open, write to{' '}
                      <a href="mailto:hello@jotil.org" className="font-semibold underline">
                        hello@jotil.org
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-3 text-sm font-medium text-primary-800 underline hover:text-primary-900"
                    >
                      Write another message
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-slate-600 mb-1">
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Rahim Ahmed"
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-slate-600 mb-1">
                      Email address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="input-field"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-topic" className="block text-xs font-medium text-slate-600 mb-1">
                    Topic
                  </label>
                  <select
                    id="contact-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="input-field"
                  >
                    <option>General question</option>
                    <option>Report a problem</option>
                    <option>Correction request</option>
                    <option>Privacy concern</option>
                    <option>Partnership or media</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-slate-600 mb-1">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us how we can help..."
                    rows={5}
                    className="input-field resize-none"
                    required
                  />
                </div>

                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs text-slate-400">
                    We only use your email to reply. Please do not include NIDs or other sensitive data.
                  </p>
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
                  >
                    <Send className="h-4 w-4" />
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="space-y-4 md:col-span-2">
          <div className="card-base p-5">
            <div className="inline-flex items-center justify-center rounded-xl bg-primary-100 p-2.5 text-primary-700">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-sm font-bold text-slate-900">Email</h3>
            <a
              href="mailto:hello@jotil.org"
              className="mt-1 block text-sm font-medium text-primary-700 hover:text-primary-800"
            >
              hello@jotil.org
            </a>
          </div>

          <div className="card-base p-5">
            <div className="inline-flex items-center justify-center rounded-xl bg-primary-100 p-2.5 text-primary-700">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-sm font-bold text-slate-900">Based in</h3>
            <p className="mt-1 text-sm text-slate-600">Dhaka, Bangladesh</p>
          </div>

          <div className="card-base p-5">
            <div className="inline-flex items-center justify-center rounded-xl bg-primary-100 p-2.5 text-primary-700">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-sm font-bold text-slate-900">Response time</h3>
            <p className="mt-1 text-sm text-slate-600">
              We usually reply within 2–3 working days.
            </p>
          </div>
        </div>
      </div>
    </StaticPage>
  );
}
