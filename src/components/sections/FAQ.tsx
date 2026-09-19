import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion } from '@/components/ui/Accordion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { faqs } from '@/config/faq';

export function FAQ() {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-light-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Questions Before We Start?"
          description="Everything you need to know before starting your website with WEXELO."
        />

        <ScrollReveal>
          <Accordion items={faqs} className="pr-10 min-[390px]:pr-14 md:pr-0" />
        </ScrollReveal>
      </div>
    </section>
  );
}
