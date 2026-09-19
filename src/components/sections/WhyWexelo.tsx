'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Target, Smartphone, MessageSquare, MousePointerClick, HeartHandshake, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerChildren, StaggerItem } from '@/components/animations/StaggerChildren';

const benefits = [
  {
    icon: Target,
    title: 'Business-First Approach',
    description: 'Understand what the website needs to achieve before designing it.',
  },
  {
    icon: Smartphone,
    title: 'Modern Responsive Design',
    description: 'Every site should look polished across mobile, tablet, and desktop.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'Simple process, clear updates, no unnecessary technical confusion.',
  },
  {
    icon: MousePointerClick,
    title: 'Conversion-Focused Structure',
    description: 'Pages planned around enquiries, bookings, sales, and actions.',
  },
  {
    icon: HeartHandshake,
    title: 'Support Beyond Launch',
    description: 'Help with launch, updates, and ongoing Website Care when needed.',
  },
];

export function WhyWexelo() {
  return (
    <section className="pt-16 pb-8 md:pb-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
          {/* Left: Statement */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-32 pr-12 min-[390px]:pr-14 md:pr-0">
              <p className="text-sm font-semibold tracking-widest uppercase text-electric mb-2 md:mb-4">Why Choose Us</p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-text mb-4 md:mb-6">
                Why WEXELO
              </h2>
              <p className="text-[1.05rem] min-[390px]:text-lg md:text-xl lg:text-2xl text-secondary-text leading-relaxed mb-6 md:mb-8">
                We don't just make websites look good. We build them around your business goals.
              </p>
              <Link href="/start-project" className="inline-flex items-center gap-2 text-[15px] md:text-base text-electric font-semibold hover:text-electric/80 active:text-electric/80 transition-colors group">
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Right: Benefit Cards */}
          <StaggerChildren className="space-y-3 min-[390px]:space-y-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <StaggerItem key={benefit.title}>
                  <motion.div
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="group flex gap-4 md:gap-5 p-4 min-[390px]:p-5 rounded-xl border border-border hover:border-electric/30 bg-white hover:bg-light-bg transition-all duration-300"
                  >
                    <div className="w-10 h-10 min-[390px]:w-11 min-[390px]:h-11 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0 group-hover:bg-electric/20 transition-colors">
                      <Icon className="w-5 h-5 text-electric" />
                    </div>
                    <div className="flex-grow pr-8 min-[390px]:pr-10 md:pr-0">
                      <h3 className="font-heading font-semibold text-[15px] min-[390px]:text-base text-primary-text mb-0.5 md:mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-[13px] min-[390px]:text-sm text-secondary-text leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}