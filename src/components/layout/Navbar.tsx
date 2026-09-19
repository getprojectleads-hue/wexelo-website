'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNavLinks } from '@/config/navigation';
import { useScrollDirection } from '@/hooks/useScrollDirection';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScrollDirection();
  
  const forceWhiteBg = pathname === '/work' || (pathname ?? '').startsWith('/work/');
  const isScrolled = scrollY > 50 || forceWhiteBg;

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  // Prevent body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href === '/services') return pathname === '/services' || (pathname ?? '').startsWith('/services/');
    if (href === '/work') return pathname === '/work' || (pathname ?? '').startsWith('/work/');
    if (href === '/pricing') return pathname === '/pricing';
    if (href === '/about') return pathname === '/about';
    if (href === '/#industries' || href === '/industries') return pathname === '/industries' || (pathname ?? '').startsWith('/industries/');
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[90000] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg border-b border-border shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-[90001] rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-4">
            <Image
              src="/images/logo/wexelo-logo-dark.png"
              alt="WEXELO"
              width={160}
              height={44}
              className="h-8 min-[390px]:h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {mainNavLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-[15px] font-medium transition-colors duration-200 group ${active ? 'text-electric' : 'text-primary-text/80 hover:text-primary-text'}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-electric rounded-full transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/start-project"
              className="btn-gradient inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-4"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden relative z-[90001] p-2 -mr-2 text-primary-text min-w-[44px] min-h-[44px] flex items-center justify-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[99999] bg-white overflow-y-auto"
          >
            <style>{`
              /* Aggressively hide any external floating widgets when mobile menu is open */
              iframe[src*="chat"], 
              .whatsapp-widget, 
              [id*="chat"], 
              [class*="widget"], 
              [id*="widget"], 
              [class*="tawk"], 
              [class*="intercom"], 
              [class*="drift"],
              [id*="WAButton"] {
                display: none !important;
                opacity: 0 !important;
                visibility: hidden !important;
                z-index: -1 !important;
              }
            `}</style>

            {/* Restored Overlay Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-5 fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-10">
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-4"
              >
                <Image
                  src="/images/logo/wexelo-logo-dark.png"
                  alt="WEXELO"
                  width={160}
                  height={44}
                  className="h-8 min-[390px]:h-9 w-auto"
                  priority
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 text-primary-text min-w-[44px] min-h-[44px] flex items-center justify-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links moved upwards */}
            <div className="flex flex-col items-center justify-start min-h-[100dvh] gap-6 min-[390px]:gap-7 pt-28 pb-12 px-4">
              {mainNavLinks.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-[1.35rem] min-[390px]:text-[1.5rem] font-semibold transition-colors font-heading block py-1 px-4 text-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-electric ${active ? 'text-electric' : 'text-primary-text hover:text-electric'}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-6 min-[390px]:mt-8"
              >
                <Link
                  href="/start-project"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-gradient inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[15px] min-[390px]:text-base font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 shadow-lg shadow-electric/20"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 min-[390px]:w-5 min-[390px]:h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}