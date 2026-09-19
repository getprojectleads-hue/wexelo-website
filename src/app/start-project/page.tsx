import { Metadata } from 'next';
import { StartProjectForm } from '@/components/forms/StartProjectForm';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Check, Clock, MessageSquare, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Start Your Website Project',
  description: 'Tell WEXELO about your business, website requirements, preferred package, and project timeline to start your website project.',
  alternates: {
    canonical: '/start-project',
  },
};

const reassurances = [
  {
    icon: MessageSquare,
    title: 'Quick Response',
    description: 'We review every project request and get back to you promptly.',
  },
  {
    icon: Clock,
    title: 'Simple Process',
    description: 'Submit your details, discuss scope, confirm, and we start building.',
  },
  {
    icon: Shield,
    title: 'No Hidden Charges',
    description: 'Package pricing is transparent. Any extras are discussed upfront.',
  },
  {
    icon: Check,
    title: 'Quality Focused',
    description: 'Limited monthly projects to ensure proper attention to every client.',
  },
];

export default function StartProjectPage() {
  return (
    <section className="pt-28 pb-20 lg:pb-28 bg-light-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-text mb-4">
            Start Your Project
          </h1>
          <p className="text-lg text-secondary-text max-w-xl mx-auto">
            Tell us a little about your business and what you need. We'll review your request and get back to you with the next steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: Reassurance */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <ScrollReveal>
              <div className="lg:sticky lg:top-32 space-y-6">
                {reassurances.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-electric" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-sm text-primary-text mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-sm text-secondary-text leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}

                <div className="mt-8 p-5 rounded-xl bg-white border border-border">
                  <p className="text-sm text-secondary-text italic">
                    "We keep things simple. Submit your details, we'll review, discuss scope, and get started."
                  </p>
                  <p className="text-xs text-electric font-medium mt-2">â€” WEXELO Team</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <StartProjectForm />
          </div>
        </div>
      </div>
    </section>
  );
}