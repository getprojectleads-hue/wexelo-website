import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for WEXELO \u2014 Web Design & Development Studio.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-40 lg:pt-48 pb-20 lg:pb-28 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-text mb-4">Privacy Policy</h1>
        <p className="text-secondary-text mb-12 pb-8 border-b border-border">Last updated: September 2026</p>

        <div className="prose prose-lg prose-slate max-w-none text-primary-text/80 space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">1. Information We Collect</h2>
            <p>When you submit a project enquiry through our website, we collect the following information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-secondary-text">
              <li>Full name and business name</li>
              <li>Email address and WhatsApp number</li>
              <li>Industry and project details</li>
              <li>Selected package and website requirements</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">2. How We Use Your Information</h2>
            <p>We use the information you provide exclusively to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-secondary-text">
              <li>Review your project enquiry</li>
              <li>Contact you via email or WhatsApp to discuss your project</li>
              <li>Prepare and deliver project proposals</li>
              <li>Enhance and improve our service offerings</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">3. Data Storage</h2>
            <p className="text-secondary-text">
              Your data is securely stored using industry-standard security practices. We do not sell, rent, or distribute your personal information to third parties unless explicitly required by law.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">4. Cookies</h2>
            <p className="text-secondary-text">
              Our website may use essential cookies to ensure proper technical functionality. We do not use aggressive tracking cookies or share visitor data with advertising networks.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">5. Your Rights</h2>
            <p className="text-secondary-text">
              You have the right to request access to, correction of, or deletion of your personal data at any time. Simply contact us with your request, and we will promptly assist you.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">6. Contact</h2>
            <p className="text-secondary-text">
              For any privacy-related questions or requests, please contact us at: <a href="mailto:hello@wexelo.com" className="text-electric font-medium hover:underline">hello@wexelo.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}