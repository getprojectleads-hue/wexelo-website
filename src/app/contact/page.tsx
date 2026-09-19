import { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { siteConfig } from '@/config/site';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with WEXELO. Start a project, ask a question, or chat on WhatsApp.',
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-20 lg:pb-28 bg-light-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Talk"
          description="Have a question or ready to start? Reach out and we'll get back to you."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <ScrollReveal delay={0}>
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 border border-border hover:border-electric/30 hover:shadow-lg transition-all duration-300 text-center block"
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-heading font-semibold text-base text-primary-text mb-1">WhatsApp</h3>
              <p className="text-sm text-secondary-text">{siteConfig.links.whatsappNumber}</p>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <a
              href={siteConfig.links.email}
              className="group bg-white rounded-2xl p-6 border border-border hover:border-electric/30 hover:shadow-lg transition-all duration-300 text-center block"
            >
              <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-electric" />
              </div>
              <h3 className="font-heading font-semibold text-base text-primary-text mb-1">Email</h3>
              <p className="text-sm text-secondary-text">{siteConfig.links.emailAddress}</p>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-2xl p-6 border border-border text-center">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-heading font-semibold text-base text-primary-text mb-1">Remote Studio</h3>
              <p className="text-sm text-secondary-text">Working with businesses everywhere.</p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="text-center">
            <p className="text-secondary-text mb-6">Ready to start a project?</p>
            <Button href="/start-project" size="lg">
              Start Your Project
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
