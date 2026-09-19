'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import {
  footerServices,
  footerIndustries,
  footerQuickLinks,
  footerConnect,
  footerLegal,
} from '@/config/navigation';

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) {
    return null;
  }
  return (
    <footer className="bg-[#050e1d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 min-[390px]:pt-16 pb-12 md:pb-8 pr-12 min-[390px]:pr-14 md:pr-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 mb-10 min-[390px]:mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1 mb-2 md:mb-0">
            <Link href="/">
              <Image
                src="/images/logo/wexelo-logo-white.png"
                alt="WEXELO"
                width={160}
                height={44}
                className="h-8 min-[390px]:h-9 w-auto mb-3 min-[390px]:mb-4"
              />
            </Link>
            <p className="text-[13px] min-[390px]:text-sm font-semibold text-white/90 mb-2 font-heading">
              {siteConfig.tagline}
            </p>
            <p className="text-[13px] min-[390px]:text-sm text-dark-secondary">
              {siteConfig.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-[13px] min-[390px]:text-sm text-white mb-3 min-[390px]:mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 md:space-y-2.5">
              {footerServices.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] min-[390px]:text-sm text-dark-secondary hover:text-white transition-colors duration-200 block py-1 md:py-0"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-heading font-semibold text-[13px] min-[390px]:text-sm text-white mb-3 min-[390px]:mb-4 uppercase tracking-wider">Industries</h4>
            <ul className="space-y-3 md:space-y-2.5">
              {footerIndustries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] min-[390px]:text-sm text-dark-secondary hover:text-white transition-colors duration-200 block py-1 md:py-0"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-[13px] min-[390px]:text-sm text-white mb-3 min-[390px]:mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 md:space-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] min-[390px]:text-sm text-dark-secondary hover:text-white transition-colors duration-200 block py-1 md:py-0"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-semibold text-[13px] min-[390px]:text-sm text-white mb-3 min-[390px]:mb-4 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3 md:space-y-2.5">
              {footerConnect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13.5px] min-[390px]:text-sm text-dark-secondary hover:text-white transition-colors duration-200 block py-1 md:py-0"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 pb-[env(safe-area-inset-bottom)]">
          <p className="text-[11px] min-[390px]:text-xs text-dark-secondary text-center sm:text-left">
            &copy; 2026 WEXELO. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-2">
            {footerLegal.map((link, i) => (
              <span key={link.label} className="flex items-center gap-4">
                <Link
                  href={link.href}
                  className="text-[11px] min-[390px]:text-xs text-dark-secondary hover:text-white transition-colors duration-200 block py-1 md:py-0"
                >
                  {link.label}
                </Link>
                {i < footerLegal.length - 1 && (
                  <span className="text-white/20">&bull;</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}