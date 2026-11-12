import { ScrollText } from 'lucide-react';
import StaticPage from './StaticPage';

export default function TermsOfService() {
  return (
    <StaticPage
      icon={ScrollText}
      eyebrow="Legal"
      title="Terms of Service"
      subtitle="The rules for using Jotil and contributing community reports."
    >
      <div className="space-y-6">
        <p className="text-sm text-slate-500">Last updated: 12 November 2026</p>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">1. Acceptance of these terms</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            By using Jotil, you agree to these Terms of Service and our{' '}
            <a href="/privacy-policy" className="font-medium text-primary-700 hover:text-primary-800">
              Privacy Policy
            </a>
            . If you do not agree, please do not use the platform.
          </p>
        </section>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">2. What Jotil is</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Jotil is an independent civic service review platform. It combines publicly available official
            information with anonymous reports from citizens about their experiences with government
            services in Bangladesh. Jotil is not a government agency, law firm, or consumer complaint
            authority, and it is not affiliated with any political party.
          </p>
        </section>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">3. Your reports and content</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 leading-relaxed list-disc pl-5">
            <li>Submit only experiences you personally had or directly witnessed.</li>
            <li>Do not submit personal names, NIDs, phone numbers, addresses, or private documents.</li>
            <li>Do not make threats, defamatory statements, or allegations against named individuals.</li>
            <li>Do not submit false, misleading, promotional, or unlawful content.</li>
          </ul>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            You keep ownership of your words, but you grant Jotil a non-exclusive, royalty-free licence to
            publish, summarise, and display your anonymous report to operate and improve the platform.
          </p>
        </section>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">4. Accuracy and no verification</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Reports reflect the views of individual users. Jotil does not verify every report, guarantee
            accuracy, or endorse any claim. Ratings, processing times, costs, and problem percentages are
            community estimates and may differ from your experience. Always confirm requirements with the
            relevant government office.
          </p>
        </section>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">5. Moderation</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            We may review, edit, hide, or remove content that violates these terms, risks identifying a
            person, or appears unlawful. We may also restrict access to the platform where necessary to
            protect users or the service.
          </p>
        </section>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">6. Intellectual property</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            The Jotil name, design, and original content are protected by applicable law. You may share
            links and short excerpts for non-commercial purposes with attribution. You may not copy the
            platform, scrape it at scale, or use it to build a competing service without permission.
          </p>
        </section>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">7. Disclaimers and limitation of liability</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Jotil is provided &quot;as is&quot; and &quot;as available&quot;. To the fullest extent permitted
            by law, we exclude warranties of accuracy, fitness for a particular purpose, and uninterrupted
            availability. We are not liable for decisions you make based on community reports, or for any
            indirect or consequential loss arising from use of the platform.
          </p>
        </section>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">8. Changes and governing law</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            We may update these terms from time to time. Continued use after changes are posted means you
            accept the revised terms. These terms are governed by the laws of Bangladesh, and disputes are
            subject to the jurisdiction of the courts of Bangladesh.
          </p>
        </section>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">9. Contact</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            For questions about these terms, email{' '}
            <a href="mailto:legal@jotil.org" className="font-medium text-primary-700 hover:text-primary-800">
              legal@jotil.org
            </a>{' '}
            or use our{' '}
            <a href="/contact" className="font-medium text-primary-700 hover:text-primary-800">
              contact page
            </a>
            .
          </p>
        </section>
      </div>
    </StaticPage>
  );
}
