import { Metadata } from 'next';
import { services } from '@/config/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Website Design & Development Services',
  description: 'Explore WEXELO website services including business websites, landing pages, e-commerce, booking websites, redesigns, and ongoing website care.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pb-28 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="What We Build"
            description="Modern websites designed around how your business attracts, engages, and converts customers."
          />

          <div className="space-y-12 md:space-y-16">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.id} delay={i * 0.1}>
                  <div
                    id={service.id}
                    className="grid md:grid-cols-2 gap-5 min-[390px]:gap-6 md:gap-8 items-center scroll-mt-32"
                  >
                    {/* Text & CTA Container with right padding on mobile to avoid floating widget */}
                    <div className={`${i % 2 === 1 ? 'md:order-2' : ''} pr-12 min-[390px]:pr-14 md:pr-0`}>
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-electric/10 flex items-center justify-center mb-3 min-[390px]:mb-4 md:mb-5">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-electric" />
                      </div>
                      
                      <h2 className="font-heading font-bold text-[1.35rem] min-[390px]:text-2xl lg:text-3xl text-primary-text mb-2 md:mb-3 leading-tight">
                        {service.title}
                      </h2>
                      
                      <p className="text-secondary-text text-[13px] min-[390px]:text-sm md:text-base leading-relaxed mb-4 min-[390px]:mb-5 md:mb-6">
                        {service.description}
                      </p>
                      
                      <Button 
                        href="/start-project" 
                        size="md"
                        className="w-[85%] min-[390px]:w-[75%] md:w-auto !py-2 md:!py-2.5 text-[13px] md:text-sm shadow-md md:shadow-lg"
                      >
                        Start a Project
                      </Button>
                    </div>
                    
                    {/* Visual Container */}
                    <div className={`rounded-2xl overflow-hidden bg-gradient-to-br from-electric/5 via-cyan/5 to-teal/5 h-[220px] min-[390px]:h-[240px] md:h-64 flex items-center justify-center border border-border ${
                      i % 2 === 1 ? 'md:order-1' : ''
                    }`}>
                      <Icon className="w-16 h-16 md:w-20 md:h-20 text-electric/20" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}