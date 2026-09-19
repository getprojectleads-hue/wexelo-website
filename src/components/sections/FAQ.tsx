import { Accordion } from '@/components/ui/Accordion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { faqs } from '@/config/faq';

export function FAQ() {
  return (
    <section id="faq" className="py-12 lg:py-24 bg-light-bg">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3 lg:mb-4 text-primary-text leading-tight">
            Questions Before We Start?
          </h2>
          <p className="text-base lg:text-lg text-secondary-text leading-relaxed max-w-sm lg:max-w-none mx-auto">
            Everything you need to know before starting your website with WEXELO.
          </p>
        </div>

        <ScrollReveal>
          <Accordion items={faqs} />
        </ScrollReveal>
      </div>
    </section>
  );
}