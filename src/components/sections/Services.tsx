'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/config/services';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FloatingIcons } from '@/components/ui/FloatingIcons';
import { StaggerChildren, StaggerItem } from '@/components/animations/StaggerChildren';

export function Services() {
  return (
    <section id="services" className="relative py-16 lg:py-24 bg-light-bg">
      <FloatingIcons section="services" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          title="What We Build"
          description="Modern websites designed around how your business attracts, engages, and converts customers."
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <Link href={service.href}>
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group bg-white rounded-2xl p-7 border border-border hover:border-electric/30 transition-all duration-300 hover:shadow-lg h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-5 group-hover:bg-electric/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-electric" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-primary-text mb-2">
                      {service.title}
                    </h3>
                    <p className="text-secondary-text text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-electric group-hover:gap-2.5 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </motion.div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
