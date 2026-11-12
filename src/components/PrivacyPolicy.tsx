import { ShieldCheck } from 'lucide-react';
import StaticPage from './StaticPage';

export default function PrivacyPolicy() {
  return (
    <StaticPage
      icon={ShieldCheck}
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="How Jotil collects, uses, and protects the information you share with us."
    >
      <div className="space-y-6">
        <p className="text-sm text-slate-500">Last updated: 12 November 2026</p>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">1. Our approach to privacy</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Jotil is a civic service review platform for Bangladesh. We collect anonymous reports about
            people&apos;s experiences with government services so that citizens can prepare better and
            public services can improve. We aim to collect as little personal information as possible.
          </p>
        </section>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">2. Information we collect</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 leading-relaxed list-disc pl-5">
            <li>
              <strong>Experience reports:</strong> the service you used, your division and district,
              processing time, number of office visits, cost, your rating, problems you selected, and any
              comment you choose to write.
            </li>
            <li>
              <strong>Technical data:</strong> reports are stored in your browser&apos;s local storage in this
              version of Jotil. We do not require an account and do not collect names, NIDs, phone numbers,
              or exact addresses as part of a report.
            </li>
            <li>
              <strong>Contact details:</strong> if you email us or use the contact form, we receive the name,
              email address, and message you choose to send.
            </li>
          </ul>
        </section>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">3. How we use information</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            We use reports to calculate community ratings, show processing times and costs, highlight common
            problems, and help other citizens understand what to expect. Contact information is used only to
            respond to your message, investigate a concern, or improve the platform.
          </p>
        </section>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">4. Anonymous reports and public content</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Reports are intended to be anonymous. Please do not include personal names, identification
            numbers, phone numbers, addresses, or allegations against named individuals in your comments.
            Comments may be edited, shortened, or removed to protect privacy or comply with law.
          </p>
        </section>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">5. Storage, cookies, and retention</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Jotil currently stores submitted reports in your browser&apos;s local storage. Clearing your
            browser data will remove them from your device. We do not use advertising cookies or sell data.
            Contact messages are kept only as long as needed to handle your request and maintain records.
          </p>
        </section>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">6. Sharing and third parties</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            We may publish aggregated, non-identifying findings about service performance. We do not sell
            personal information. Links to government or third-party websites are provided for convenience;
            their privacy practices are governed by their own policies.
          </p>
        </section>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">7. Your choices and rights</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            You can choose not to submit a report, leave fields optional, or clear locally stored reports in
            your browser. To ask about, correct, or delete information you sent us by email, contact us at{' '}
            <a href="mailto:privacy@jotil.org" className="font-medium text-primary-700 hover:text-primary-800">
              privacy@jotil.org
            </a>
            .
          </p>
        </section>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">8. Children&apos;s privacy</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Jotil is not directed at children. We ask that anyone under 18 use the platform only with the
            guidance of a parent or guardian and avoid submitting personal information.
          </p>
        </section>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">9. Changes to this policy</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            We may update this policy as the platform develops. The revised version will be posted on this
            page with a new &quot;last updated&quot; date. Continued use of Jotil means you accept the updated
            policy.
          </p>
        </section>

        <section className="card-base p-6">
          <h2 className="text-lg font-bold text-slate-900">10. Contact</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Questions about this policy can be sent to{' '}
            <a href="mailto:privacy@jotil.org" className="font-medium text-primary-700 hover:text-primary-800">
              privacy@jotil.org
            </a>{' '}
            or through our{' '}
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
