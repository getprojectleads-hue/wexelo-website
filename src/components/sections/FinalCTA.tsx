import { Button } from '@/components/ui/Button';
import { FloatingIcons } from '@/components/ui/FloatingIcons';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { siteConfig } from '@/config/site';
import { MessageCircle } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative py-20 lg:py-28 bg-navy overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal/5 rounded-full blur-3xl" />
      </div>

      <FloatingIcons section="cta" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pr-12 min-[390px]:pr-14 md:pr-8 text-center relative z-10">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Ready to Build Something Better?
          </h2>
          <p className="text-lg text-dark-secondary mb-8 max-w-xl mx-auto">
            Tell us about your business and let{'\u2019'}s build a website that looks better, works harder, and helps you grow online.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/start-project" variant="white" size="lg" className="w-full sm:w-auto">
              Start Your Project
            </Button>
            <Button
              href={siteConfig.links.whatsapp}
              variant="ghost"
              size="lg"
              external
              className="text-white border border-white/20 hover:bg-white/10 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
