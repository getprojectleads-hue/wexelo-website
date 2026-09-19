import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Policy',
  description: 'Project guidelines and policies for WEXELO \u2014 Web Design & Development Studio.',
  alternates: {
    canonical: '/project-policy',
  },
};

export default function ProjectPolicyPage() {
  return (
    <section className="pt-40 lg:pt-48 pb-20 lg:pb-28 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary-text mb-4">Project Policy</h1>
        <p className="text-secondary-text mb-12 pb-8 border-b border-border">Last updated: September 2026</p>

        <div className="prose prose-lg prose-slate max-w-none text-primary-text/80 space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">1. Scope & Package Inclusions</h2>
            <p className="text-secondary-text">
              Project scope is defined exclusively by the selected package and the confirmed project proposal. Any features or requirements not explicitly outlined in the agreed proposal fall outside the scope of work.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">2. Client Content Responsibilities</h2>
            <p className="text-secondary-text">
              Clients must provide all necessary business information, text copy, images, branding assets, and specific media required for the website. While WEXELO assists in structuring and laying out this content, delays in providing these assets directly impact the project timeline.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">3. Timelines & Dependencies</h2>
            <p className="text-secondary-text">
              Estimated timelines are provided during the project discussion. These timelines depend heavily on prompt feedback, timely content delivery, and clear communication. WEXELO is not responsible for delays caused by missing client materials.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">4. Revisions</h2>
            <p className="text-secondary-text">
              Each package includes a defined number of structured revision rounds. These rounds are designed for refining the agreed-upon design. Broad redesigns or structural shifts requested after approval may be subject to additional fees.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">5. Change Requests</h2>
            <p className="text-secondary-text">
              If new features, additional pages, or significant scope changes are requested after the project has commenced, these will be reviewed as separate requirements and may incur additional costs, which will be discussed transparently before proceeding.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">6. Launch & Hand-off</h2>
            <p className="text-secondary-text">
              The project is considered complete upon final review and approval. Once the final payment is settled, WEXELO will execute the launch process or hand over the website files, successfully concluding the project phase.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-text mb-4">7. Contact</h2>
            <p className="text-secondary-text">
              For any questions regarding our project policies, please contact us at: <a href="mailto:hello@wexelo.com" className="text-electric font-medium hover:underline">hello@wexelo.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}