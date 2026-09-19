'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { processSteps } from '@/config/process';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

function TimelineStep({ step, index }: { step: typeof processSteps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const Icon = step.icon;

  return (
    <div ref={ref} className="relative flex gap-5 min-[390px]:gap-6 lg:gap-10 pb-6 lg:pb-8 last:pb-0">
      {/* Timeline line */}
      {index < processSteps.length - 1 && (
        <div className="absolute left-[19px] min-[390px]:left-[23px] lg:left-[27px] top-11 min-[390px]:top-14 bottom-0 w-0.5">
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="w-full bg-gradient-to-b from-electric via-cyan to-teal"
          />
          <div className="absolute inset-0 w-full bg-border -z-10" />
        </div>
      )}

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="relative flex-shrink-0"
      >
        <div className={`w-10 h-10 min-[390px]:w-12 min-[390px]:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
          isInView
            ? 'border-electric bg-electric/10'
            : 'border-border bg-white'
        }`}>
          <Icon className={`w-4 h-4 min-[390px]:w-5 min-[390px]:h-5 lg:w-6 lg:h-6 transition-colors duration-500 ${
            isInView ? 'text-electric' : 'text-secondary-text'
          }`} />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="pt-1 min-[390px]:pt-2 pb-2 flex-grow pr-10 min-[390px]:pr-12 md:pr-0"
      >
        <div className="flex items-center gap-2.5 min-[390px]:gap-3 mb-1 lg:mb-2">
          <span className={`text-[13px] min-[390px]:text-sm font-bold transition-colors duration-500 ${
            isInView ? 'gradient-text' : 'text-secondary-text'
          }`}>
            {step.number}
          </span>
          <span className="text-border">{'\u2014'}</span>
          <h3 className="font-heading font-bold text-[1.1rem] min-[390px]:text-lg lg:text-xl text-primary-text leading-tight">
            {step.title}
          </h3>
        </div>
        <p className="text-secondary-text text-[13.5px] min-[390px]:text-sm lg:text-base leading-relaxed max-w-md">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}

export function ProcessTimeline() {
  return (
    <section className="pt-12 pb-8 md:pt-16 md:pb-16 lg:py-24 bg-light-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="From Idea to Launch"
          description="A simple, transparent process designed to keep your project clear, collaborative, and moving forward."
        />

        <div className="mb-8 md:mb-12">
          {processSteps.map((step, index) => (
            <TimelineStep key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Reassurance */}
        <ScrollReveal>
          {/* Added right padding to text and wrapper to protect against floating widgets, 
              but using pl-10 too to keep the text optically centered on mobile */}
          <div className="text-center px-6 sm:px-0 md:pr-0">
            <p className="text-secondary-text text-[14px] min-[390px]:text-base mb-5 md:mb-6 italic max-w-lg mx-auto">
              You stay informed at every stage. No confusing process. No disappearing after payment.
            </p>
            {/* Added defensive padding wrapper for the CTA */}
            <div className="pr-12 min-[390px]:pr-16 sm:pr-0">
              <Button href="/start-project" size="lg" className="w-full sm:w-auto shadow-md">
                Start Your Project
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}