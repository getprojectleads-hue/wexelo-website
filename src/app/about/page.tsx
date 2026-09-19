import { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { WhyWexelo } from '@/components/sections/WhyWexelo';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Target, Sparkles, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About WEXELO',
  description: 'Learn about WEXELO, a modern web design and development studio focused on responsive websites, clear communication, and business growth.',
  alternates: {
    canonical: '/about',
  },
};

const values = [
  {
    icon: Target,
    title: 'Purpose-Driven Design',
    description: 'Every design decision starts with your business goals. We build websites that serve a clear purpose \u2014 not just fill space.',
  },
  {
    icon: Sparkles,
    title: 'Modern Standards',
    description: 'We use current technologies, responsive frameworks, and clean code to ensure your website works well today and tomorrow.',
  },
  {
    icon: Users,
    title: 'Honest Communication',
    description: 'We keep things simple, transparent, and straightforward. No jargon, no surprises, no hidden charges.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 lg:pt-48 pb-20 lg:pb-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="About WEXELO" title="Websites Built to Grow" description="A modern web design and development studio helping businesses look better, connect with more customers, and grow online." as="h1" />

          <ScrollReveal>
            <div className="prose prose-lg max-w-none text-secondary-text mb-16">
              <p>
                WEXELO is a web design and development studio focused on building modern, responsive websites for growing businesses. From salons and caf&eacute;s to hotels and local service businesses &mdash; we design websites that are clear, professional, and built around real business goals.
              </p>
              <p>
                We believe a website should do more than look good. It should help your business attract visitors, build trust, and convert them into customers, bookings, or enquiries. That's why we take a business-first approach to every project.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-electric/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-electric" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-primary-text mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-secondary-text leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
      <WhyWexelo />
      <ProcessTimeline />
      <FinalCTA />
    </>
  );
}