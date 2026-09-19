'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { portfolioProjects } from '@/config/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { BrowserMockup } from '@/components/ui/BrowserMockup';

export function SelectedWork({ hideHeading = false }: { hideHeading?: boolean }) {
  const [salon, cafe, hotel] = portfolioProjects;

  return (
    <section id="work" className="py-16 lg:py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeading && (<SectionHeading title="Selected Work" description="A glimpse of the digital experiences we design for modern businesses." light />)}
        <p className={`text-center text-dark-secondary text-sm mb-12 ${!hideHeading ? '-mt-8' : ''}`}>
          Concept projects shown until client work goes live.
        </p>

        {/* Editorial Layout */}
        <div className="space-y-6 lg:space-y-8">
          {/* Salon - Large/Full Width */}
          <ScrollReveal>
            <Link href={salon.href}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl overflow-hidden bg-[#0c1e38]/80 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-5 pt-4 min-[390px]:p-6 lg:p-12 flex flex-col justify-center order-2 lg:order-1 pr-12 min-[390px]:pr-14 lg:pr-12">
                    <span className="text-[11px] min-[390px]:text-xs font-medium text-cyan tracking-wider lg:tracking-widest uppercase mb-2 min-[390px]:mb-3 leading-relaxed">
                      {salon.type} &bull; {salon.industry}
                    </span>
                    <h3 className="font-heading font-bold text-[1.35rem] min-[390px]:text-2xl lg:text-3xl text-white mb-2 min-[390px]:mb-3 leading-tight">
                      {salon.title}
                    </h3>
                    <p className="text-dark-secondary text-[13px] min-[390px]:text-sm leading-relaxed mb-4 min-[390px]:mb-6 max-w-md">
                      {salon.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[13px] min-[390px]:text-sm font-medium text-electric group-hover:gap-3 active:gap-3 active:opacity-80 transition-all duration-300">
                      View Concept
                      <ArrowRight className="w-3.5 h-3.5 min-[390px]:w-4 min-[390px]:h-4" />
                    </span>
                  </div>
                  <div className="p-5 pb-0 min-[390px]:p-6 min-[390px]:pb-0 lg:p-12 lg:pb-12 flex items-center justify-center order-1 lg:order-2">
                    <BrowserMockup url="luxebeautystudio.com" variant="dark" className="w-full max-w-md shadow-2xl shadow-black/50">
                      <div className="h-[180px] min-[390px]:h-[200px] lg:h-52 bg-gradient-to-br from-pink-900/40 via-rose-800/30 to-pink-900/20 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-[10px] min-[390px]:text-xs text-pink-300 font-medium tracking-wider uppercase mb-1">Luxury Salon</p>
                          <p className="font-heading font-bold text-lg min-[390px]:text-2xl text-white">Luxe Beauty Studio</p>
                          <p className="text-[10px] min-[390px]:text-xs text-pink-200/60 mt-1 min-[390px]:mt-2">Elegance in Every Detail</p>
                        </div>
                      </div>
                    </BrowserMockup>
                  </div>
                </div>
                {/* Edge glow */}
                <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </Link>
          </ScrollReveal>

          {/* Cafe + Hotel - Two column */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <ScrollReveal delay={0.1}>
              <Link href={cafe.href}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative rounded-2xl overflow-hidden bg-[#0c1e38]/80 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="p-5 pb-0 min-[390px]:p-6 min-[390px]:pb-0 lg:p-10 lg:pb-0">
                    <BrowserMockup url="brewandbites.com" variant="dark" className="shadow-2xl shadow-black/50">
                      <div className="h-[180px] min-[390px]:h-[200px] lg:h-40 bg-gradient-to-br from-amber-900/40 via-orange-800/30 to-yellow-900/20 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-[10px] min-[390px]:text-xs text-amber-300 font-medium tracking-wider uppercase mb-1">CafÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â© & Restaurant</p>
                          <p className="font-heading font-bold text-lg min-[390px]:text-xl text-white">Brew & Bites</p>
                        </div>
                      </div>
                    </BrowserMockup>
                  </div>
                  <div className="p-5 pt-4 min-[390px]:p-6 lg:p-10 lg:pt-6 flex flex-col justify-between flex-grow pr-12 min-[390px]:pr-14 lg:pr-10">
                    <div>
                      <span className="text-[11px] min-[390px]:text-xs font-medium text-cyan tracking-wider lg:tracking-widest uppercase mb-2 block leading-relaxed">
                        {cafe.type} &bull; {cafe.industry}
                      </span>
                      <h3 className="font-heading font-bold text-[1.25rem] min-[390px]:text-xl lg:text-2xl text-white mb-2 leading-tight">
                        {cafe.title}
                      </h3>
                      <p className="text-dark-secondary text-[13px] min-[390px]:text-sm leading-relaxed mb-4">
                        {cafe.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[13px] min-[390px]:text-sm font-medium text-electric group-hover:gap-3 active:gap-3 active:opacity-80 transition-all duration-300">
                        View Concept
                        <ArrowRight className="w-3.5 h-3.5 min-[390px]:w-4 min-[390px]:h-4" />
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link href={hotel.href}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative rounded-2xl overflow-hidden bg-[#0c1e38]/80 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="p-5 pb-0 min-[390px]:p-6 min-[390px]:pb-0 lg:p-10 lg:pb-0">
                    <BrowserMockup url="theoceanstay.com" variant="dark" className="shadow-2xl shadow-black/50">
                      <div className="h-[180px] min-[390px]:h-[200px] lg:h-40 bg-gradient-to-br from-sky-900/40 via-blue-800/30 to-cyan-900/20 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-[10px] min-[390px]:text-xs text-sky-300 font-medium tracking-wider uppercase mb-1">Hotel & Resort</p>
                          <p className="font-heading font-bold text-lg min-[390px]:text-xl text-white">The Ocean Stay</p>
                        </div>
                      </div>
                    </BrowserMockup>
                  </div>
                  <div className="p-5 pt-4 min-[390px]:p-6 lg:p-10 lg:pt-6 flex flex-col justify-between flex-grow pr-12 min-[390px]:pr-14 lg:pr-10">
                    <div>
                      <span className="text-[11px] min-[390px]:text-xs font-medium text-cyan tracking-wider lg:tracking-widest uppercase mb-2 block leading-relaxed">
                        {hotel.type} &bull; {hotel.industry}
                      </span>
                      <h3 className="font-heading font-bold text-[1.25rem] min-[390px]:text-xl lg:text-2xl text-white mb-2 leading-tight">
                        {hotel.title}
                      </h3>
                      <p className="text-dark-secondary text-[13px] min-[390px]:text-sm leading-relaxed mb-4">
                        {hotel.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[13px] min-[390px]:text-sm font-medium text-electric group-hover:gap-3 active:gap-3 active:opacity-80 transition-all duration-300">
                        View Concept
                        <ArrowRight className="w-3.5 h-3.5 min-[390px]:w-4 min-[390px]:h-4" />
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}