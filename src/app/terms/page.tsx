import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms of service for WEXELO \u2014 Web Design & Development Studio.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <section className="pt-40 lg:pt-48 pb-20 lg:pb-28 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-text mb-4">Terms & Conditions</h1>
        <p className="text-secondary-text mb-12 pb-8 border-b border-border">Last updated: September 2026</p>

        <div className="prose prose-lg prose-slate max-w-none text-primary-text/80 space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">1. General Services</h2>
            <p className="text-secondary-text">
              WEXELO provides professional web design and development services. By engaging our services, you agree to these Terms & Conditions, which govern the relationship between WEXELO and the client.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">2. Proposals & Confirmation</h2>
            <p className="text-secondary-text">
              Any proposal validity period will be stated in the individual proposal. A project is officially confirmed and scheduled only after the scope of work is mutually agreed upon and any required initial payment is received.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">3. Payment Terms</h2>
            <p className="text-secondary-text">
              Payment terms and project-start requirements will be clearly stated and agreed upon in the individual project proposal before work begins.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">4. Additional Costs</h2>
            <p className="text-secondary-text">
              Unless explicitly stated in the package or proposal, domain registration, hosting fees, premium plugins, third-party software licenses, and paid fonts are the responsibility of the client.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">5. Intellectual Property & Ownership</h2>
            <p className="text-secondary-text">
              Upon receipt of full and final payment, the client assumes ownership of the completed website and its files. WEXELO retains the right to display the final project in our portfolio, case studies, and marketing materials unless a non-disclosure agreement is specifically requested and signed.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">6. Limitation of Liability</h2>
            <p className="text-secondary-text">
              WEXELO is not liable for any indirect, incidental, or consequential damages resulting from the use of our services or the launched website, including lost profits or business interruptions.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">7. Contact</h2>
            <p className="text-secondary-text">
              For any questions regarding our terms, please contact us at: <a href="mailto:hello@wexelo.com" className="text-electric font-medium hover:underline">hello@wexelo.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}