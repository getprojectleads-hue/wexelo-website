import { Button } from '@/components/ui/Button';
import { FloatingIcons } from '@/components/ui/FloatingIcons';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { siteConfig } from '@/config/site';
import { MessageCircle } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative pt-16 pb-14 lg:py-28 bg-navy overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal/5 rounded-full blur-3xl" />
      </div>

      <FloatingIcons section="cta" className="hidden sm:block" />

      <div className="w-full max-w-full md:max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-[1.15] font-bold text-white text-center max-w-sm md:max-w-none mx-auto tracking-tight mb-5">
            Ready to Build Something Better?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-dark-secondary text-center max-w-sm md:max-w-xl mx-auto mb-8">
            Tell us about your business and let{'\u2019'}s build a website that looks better, works harder, and helps you grow online.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full max-w-sm sm:max-w-none mx-auto">
            <Button href="/start-project" variant="white" size="lg" className="w-full sm:w-auto min-h-[56px]">
              Start Your Project
            </Button>
            <Button
              href={siteConfig.links.whatsapp}
              variant="ghost"
              size="lg"
              external
              className="text-white border border-white/20 hover:bg-white/10 w-full sm:w-auto min-h-[56px]"
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