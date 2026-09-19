'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { FloatingIcons } from '@/components/ui/FloatingIcons';
import { BrowserMockup } from '@/components/ui/BrowserMockup';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  // Unified Master Typewriter State
  const fullText = "Websites Built to Grow.";
  const firstLineText = "Websites Built";
  const secondLineText = "to Grow.";
  
  const totalLength = fullText.length;
  const firstLineLength = firstLineText.length;

  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'paused' | 'deleting'>('typing');

  useEffect(() => {
    if (prefersReducedMotion) {
      setCharIndex(totalLength);
      return;
    }

    let timeout: NodeJS.Timeout;

    if (phase === 'typing') {
      if (charIndex < totalLength) {
        timeout = setTimeout(() => {
          setCharIndex((c) => c + 1);
        }, Math.random() * 20 + 70); // 70-90ms
      } else {
        timeout = setTimeout(() => {
          setPhase('deleting');
        }, 3000); // 3 second pause at end
      }
    } else if (phase === 'deleting') {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCharIndex((c) => c - 1);
        }, Math.random() * 15 + 40); // 40-55ms
      } else {
        timeout = setTimeout(() => {
          setPhase('typing');
        }, 1000); // 1 second empty pause
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, phase, prefersReducedMotion, totalLength]);

  // Derive visible lines dynamically from the master string
  const visibleFirstLine = fullText.slice(0, Math.min(charIndex, firstLineLength));
  
  // The space is at index `firstLineLength` (14). 
  // "to Grow." starts at index `firstLineLength + 1` (15).
  const visibleSecondLine = charIndex > firstLineLength + 1
    ? fullText.slice(firstLineLength + 1, charIndex)
    : "";

  const isLine1Cursor = charIndex <= firstLineLength;
  const isLine2Cursor = charIndex > firstLineLength;

  // Entrance Variants for other static elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" as const } 
    },
  };

  const mockupEntrance = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.96 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, ease: "easeOut" as const } 
    },
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-16 lg:pt-24 lg:pb-24">
      
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-teal/5 rounded-full blur-[100px]" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingIcons section="hero" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid min-h-[620px] lg:min-h-[680px] grid-cols-1 lg:grid-cols-[48fr_52fr] items-center gap-8 lg:gap-16">
          
          {/* LEFT COLUMN: STATIC WRAPPER */}
          <div className="relative z-10 max-w-xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Eyebrow */}
              <motion.p
                variants={itemFadeUp}
                className="text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-electric mb-5 sm:mb-6 leading-relaxed"
              >
                Modern Websites. Real Growth.
              </motion.p>

              {/* Headline Stagger Dummies to maintain sequence */}
              <motion.div variants={itemFadeUp} className="hidden" />
              <motion.div variants={itemFadeUp} className="hidden" />

              {/* Headline */}
              <h1 className="font-heading text-[2.1rem] min-[390px]:text-[2.35rem] sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-extrabold leading-[1.08] tracking-tight mb-5 sm:mb-6 flex flex-col">
                
                {/* Line 1 */}
                <div className="h-[1.15em] flex items-end">
                  <span className="whitespace-nowrap text-primary-text flex items-baseline">
                    <span>{prefersReducedMotion ? firstLineText : visibleFirstLine}</span>
                    {isLine1Cursor && !prefersReducedMotion && (
                      <span className="animate-[pulse_1s_ease-in-out_infinite] font-light ml-[2px] -translate-y-[0.02em] inline-block">|</span>
                    )}
                  </span>
                </div>
                
                {/* Line 2 */}
                <div className="h-[1.25em] flex items-end">
                  <span className="whitespace-nowrap flex items-baseline">
                    <motion.span
                      animate={{ 
                        backgroundPosition: prefersReducedMotion ? '0% 50%' : ['0% 50%', '100% 50%', '0% 50%'] 
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-cyan to-teal bg-[length:200%_auto] pb-2 inline-block"
                    >
                      {prefersReducedMotion ? secondLineText : visibleSecondLine}
                    </motion.span>
                    {isLine2Cursor && !prefersReducedMotion && (
                      <motion.span 
                        animate={{ 
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        className="animate-[pulse_1s_ease-in-out_infinite] font-light ml-[2px] pb-2 text-transparent bg-clip-text bg-gradient-to-r from-electric via-cyan to-teal bg-[length:200%_auto] inline-block -translate-y-[0.02em]"
                      >
                        |
                      </motion.span>
                    )}
                  </span>
                </div>

              </h1>

              {/* Description */}
              <motion.p
                variants={itemFadeUp}
                className="text-lg sm:text-xl text-secondary-text mb-8 leading-relaxed max-w-[500px]"
              >
                Modern, responsive websites for businesses ready to look better,
                connect with more customers, and grow online.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemFadeUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  href="/start-project" 
                  size="lg" 
                  className="group w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                >
                  Start Your Project
                </Button>
                <Button 
                  href="/work" 
                  variant="secondary" 
                  size="lg" 
                  className="group w-full sm:w-auto hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                >
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: VISUAL CLUSTER */}
          <div className="relative hidden lg:flex items-center justify-center w-full h-full">
            
            {/* BOUNDED CLUSTER CONTAINER */}
            <div className="relative w-[500px] h-[480px] xl:w-[540px] xl:h-[500px]">
              
              {/* Luxe Beauty (Back, Upper Right, Largest) */}
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={mockupEntrance} 
                transition={{ delay: 0.2 }}
                className="absolute top-0 right-0 z-10 w-[360px] xl:w-[400px]"
              >
                <motion.div 
                  animate={{ y: prefersReducedMotion ? 0 : [-5, 5, -5] }} 
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <BrowserMockup url="luxebeautystudio.com" className="shadow-2xl border border-border/50 bg-white">
                    <div className="h-64 bg-gradient-to-br from-pink-100 via-rose-50 to-pink-50 flex items-center justify-center">
                      <div className="text-center">
                        <span className="inline-block px-2 py-0.5 rounded-full bg-white/50 border border-black/5 text-[9px] font-bold tracking-wider text-black/50 mb-3 uppercase">Concept Project</span>
                        <p className="text-xs text-pink-400 font-medium tracking-wider uppercase mb-1">Luxury Beauty</p>
                        <p className="font-heading font-bold text-xl text-gray-800">Luxe Beauty Studio</p>
                        <p className="text-xs text-gray-500 mt-1">Book Your Appointment</p>
                      </div>
                    </div>
                  </BrowserMockup>
                </motion.div>
              </motion.div>

              {/* Brew & Bites (Front, Lower Left, Smaller) */}
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={mockupEntrance} 
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-4 z-20 w-[240px] xl:w-[260px]"
              >
                <motion.div 
                  animate={{ 
                    y: prefersReducedMotion ? 0 : [-4, 4, -4],
                    x: prefersReducedMotion ? 0 : [-2, 2, -2]
                  }} 
                  transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <BrowserMockup url="brewandbites.com" className="shadow-xl shadow-black/10 border border-white/80 bg-white">
                    <div className="h-40 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-50 flex items-center justify-center">
                      <div className="text-center">
                        <span className="inline-block px-2 py-0.5 rounded-full bg-white/50 border border-black/5 text-[9px] font-bold tracking-wider text-black/50 mb-2 uppercase">Concept Project</span>
                        <p className="text-xs text-amber-500 font-medium tracking-wider uppercase mb-1">CAFÃƒâ€° & RESTAURANT</p>
                        <p className="font-heading font-bold text-base text-gray-800">Brew & Bites</p>
                      </div>
                    </div>
                  </BrowserMockup>
                </motion.div>
              </motion.div>

              {/* The Ocean Stay (Front, Lower Right, Smaller) */}
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={mockupEntrance} 
                transition={{ delay: 0.6 }}
                className="absolute bottom-0 right-10 z-30 w-[220px] xl:w-[240px]"
              >
                <motion.div 
                  animate={{ y: prefersReducedMotion ? 0 : [5, -5, 5] }} 
                  transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <BrowserMockup url="theoceanstay.com" className="shadow-xl shadow-black/10 border border-white/80 bg-white">
                    <div className="h-36 bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-50 flex items-center justify-center">
                      <div className="text-center">
                        <span className="inline-block px-2 py-0.5 rounded-full bg-white/50 border border-black/5 text-[9px] font-bold tracking-wider text-black/50 mb-2 uppercase">Concept Project</span>
                        <p className="text-xs text-sky-500 font-medium tracking-wider uppercase mb-1">Hotel & Hospitality</p>
                        <p className="font-heading font-bold text-base text-gray-800">The Ocean Stay</p>
                      </div>
                    </div>
                  </BrowserMockup>
                </motion.div>
              </motion.div>

            </div>
          </div>

          {/* MOBILE MOCKUP STACK */}
          <div className="w-full lg:hidden -mt-2 sm:mt-4">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={mockupEntrance}
            >
              <motion.div 
                animate={{ y: prefersReducedMotion ? 0 : [-4, 4, -4] }} 
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <BrowserMockup url="luxebeautystudio.com" className="max-w-sm mx-auto shadow-xl">
                  <div className="h-48 bg-gradient-to-br from-pink-100 via-rose-50 to-pink-50 flex items-center justify-center">
                    <div className="text-center">
                      <span className="inline-block px-2 py-0.5 rounded-full bg-white/50 border border-black/5 text-[9px] font-bold tracking-wider text-black/50 mb-2 uppercase">Concept Project</span>
                      <p className="text-xs text-pink-400 font-medium tracking-wider uppercase mb-1">Luxury Beauty</p>
                      <p className="font-heading font-bold text-xl text-gray-800">Luxe Beauty Studio</p>
                      <p className="text-xs text-gray-500 mt-1">Book Your Appointment</p>
                    </div>
                  </div>
                </BrowserMockup>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}