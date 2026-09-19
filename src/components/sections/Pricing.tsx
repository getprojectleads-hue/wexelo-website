'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { packages, includedWithEvery } from '@/config/pricing';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerChildren, StaggerItem } from '@/components/animations/StaggerChildren';

function PricingCard({ pkg, index }: { pkg: typeof packages[0]; index: number }) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`relative rounded-2xl p-5 min-[390px]:p-6 lg:p-8 transition-all duration-300 h-full flex flex-col ${
        pkg.highlighted
          ? 'bg-white border-2 border-electric shadow-xl shadow-electric/10 lg:scale-105 z-10'
          : 'bg-white border border-border hover:border-electric/30 hover:shadow-lg'
      }`}
    >
      {/* Badge */}
      {pkg.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="btn-gradient px-3 min-[390px]:px-4 py-1 rounded-full text-[10px] min-[390px]:text-xs font-bold text-white tracking-wider uppercase whitespace-nowrap">
            {pkg.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-4 min-[390px]:mb-5 lg:mb-6 pr-8 min-[390px]:pr-10 lg:pr-0">
        <h3 className="font-heading font-bold text-xl text-primary-text mb-1 min-[390px]:mb-2">
          {pkg.name}
        </h3>
        <p className="text-secondary-text text-[14px] min-[390px]:text-[15px] leading-relaxed mb-3 lg:mb-4">
          {pkg.description}
        </p>
        <div className="flex items-baseline gap-1">
          <span className={`font-heading font-extrabold text-[1.85rem] min-[390px]:text-4xl lg:text-5xl ${
            pkg.highlighted ? 'gradient-text' : 'text-primary-text'
          }`}>
            {pkg.price}
          </span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-2 min-[390px]:space-y-2.5 lg:space-y-3 mb-4 min-[390px]:mb-5 lg:mb-6 flex-1 pr-10 min-[390px]:pr-12 lg:pr-0">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 min-[390px]:gap-2.5">
            <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
              pkg.highlighted ? 'text-electric' : 'text-teal'
            }`} />
            <span className="text-[13.5px] min-[390px]:text-[14px] lg:text-[15px] text-secondary-text leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Best For */}
      <div className="mb-3 lg:mb-4 p-2.5 min-[390px]:p-3 rounded-lg bg-light-bg pr-10 min-[390px]:pr-12 lg:pr-3">
        <p className="text-[12px] min-[390px]:text-[13px] font-medium text-secondary-text leading-relaxed">
          <span className="text-primary-text font-semibold">Best for:</span> {pkg.bestFor}
        </p>
      </div>

      {/* Urgency */}
      <p className="text-[12px] min-[390px]:text-[13px] text-secondary-text italic mb-4 lg:mb-5 leading-relaxed pr-10 min-[390px]:pr-12 lg:pr-0">
        {pkg.urgency}
      </p>

      {/* CTA */}
      <div className="w-full pr-12 min-[390px]:pr-14 lg:pr-0">
        <Button
          href={pkg.href}
          variant={pkg.highlighted ? 'primary' : 'secondary'}
          size="lg"
          className="w-full !py-2.5 min-[390px]:!py-3 lg:!py-3.5 text-[12.5px] min-[390px]:text-[13.5px] lg:text-base leading-none"
        >
          {pkg.cta}
        </Button>
      </div>
    </motion.div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Simple Packages. Serious Websites."
          description="Choose the right starting point for your business. Every WEXELO website is responsive, modern, and built with growth in mind."
        />

        {/* Pricing Cards */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 mb-16 items-start">
          {packages.map((pkg, index) => (
            <StaggerItem key={pkg.id}>
              <PricingCard pkg={pkg} index={index} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Included with Every Package */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-[1.1rem] min-[390px]:text-xl text-primary-text mb-4 min-[390px]:mb-6">
              Included with Every Package
            </h3>
            <div className="flex flex-wrap justify-center gap-3 min-[390px]:gap-4 mb-4">
              {includedWithEvery.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 min-[390px]:gap-2 px-3 min-[390px]:px-4 py-1.5 min-[390px]:py-2 rounded-full bg-light-bg border border-border text-[12px] min-[390px]:text-sm text-secondary-text"
                >
                  <Check className="w-3.5 h-3.5 text-teal" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-[12px] min-[390px]:text-[13px] text-secondary-text mt-4 leading-relaxed max-w-2xl mx-auto">
              Domain, hosting, premium plugins and paid third-party tools are charged separately where required.
            </p>
          </div>
        </ScrollReveal>

        {/* Limited Projects */}
        <ScrollReveal>
          {/* Protected with right padding on mobile to avoid overlapping fixed widget */}
          <div className="text-center bg-light-bg rounded-2xl p-6 min-[390px]:p-8 lg:p-12 border border-border">
            <Sparkles className="w-6 h-6 min-[390px]:w-8 min-[390px]:h-8 text-electric mx-auto mb-3 min-[390px]:mb-4" />
            <h3 className="font-heading font-bold text-[1.35rem] min-[390px]:text-2xl text-primary-text mb-2 min-[390px]:mb-3">
              Limited Monthly Projects
            </h3>
            <p className="text-[13px] min-[390px]:text-sm text-secondary-text mb-5 min-[390px]:mb-6 max-w-lg mx-auto leading-relaxed">
              To maintain quality and proper communication, WEXELO accepts a limited number of new website projects each month.
            </p>
            <div className="pr-12 min-[390px]:pr-14 sm:pr-0">
              <Button href="/start-project" size="lg" className="w-full sm:w-auto !py-2.5 min-[390px]:!py-3 lg:!py-3.5">
                Reserve Your Slot
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}