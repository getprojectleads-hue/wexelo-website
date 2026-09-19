'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { industries } from '@/config/industries';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StaggerChildren, StaggerItem } from '@/components/animations/StaggerChildren';

export function Industries() {
  return (
    <section id="industries" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Built for Businesses Like Yours"
          description="Industry-focused websites designed around how your customers discover, trust, and choose your business."
          className="[&>h2]:text-[1.65rem] [&>h2]:min-[390px]:text-3xl [&>h2]:sm:text-4xl [&>p]:leading-relaxed [&>p]:text-[15px] [&>p]:sm:text-lg"
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {industries.map((industry) => (
            <StaggerItem key={industry.id}>
              <Link href={industry.href}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative rounded-2xl overflow-hidden h-[280px] min-[390px]:h-[300px] md:h-72 cursor-pointer"
                >
                  {/* Background gradient as placeholder for image */}
                  <div className={`absolute inset-0 transition-transform duration-500 group-hover:scale-105 ${
                    industry.id === 'salon' ? 'bg-gradient-to-br from-pink-200 via-rose-100 to-pink-100' :
                    industry.id === 'cafe' ? 'bg-gradient-to-br from-amber-200 via-orange-100 to-yellow-100' :
                    industry.id === 'hotel' ? 'bg-gradient-to-br from-sky-200 via-blue-100 to-cyan-100' :
                    industry.id === 'creator' ? 'bg-gradient-to-br from-violet-200 via-purple-100 to-fuchsia-100' :
                    industry.id === 'realestate' ? 'bg-gradient-to-br from-emerald-200 via-green-100 to-teal-100' :
                    'bg-gradient-to-br from-slate-200 via-gray-100 to-zinc-100'
                  }`} />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/40 to-transparent" />

                  {/* Content - with right padding to protect against overlapping floating widgets */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 pb-6 pr-12 min-[390px]:pr-14 md:p-6 md:pb-6 md:pr-6">
                    <h3 className="font-heading font-bold text-xl text-white mb-1.5">
                      {industry.title}
                    </h3>
                    <p className="text-white/80 text-[13px] min-[390px]:text-sm leading-relaxed mb-3">
                      {industry.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[13px] min-[390px]:text-sm font-medium text-cyan group-hover:gap-2.5 active:gap-2.5 active:opacity-80 transition-all duration-300">
                      Explore Solutions
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}