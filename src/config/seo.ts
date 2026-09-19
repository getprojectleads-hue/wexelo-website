import { Metadata } from 'next';
import { getSiteUrl } from './site';

export const defaultSEO: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'WEXELO \u2014 Websites Built to Grow.',
    template: '%s | WEXELO',
  },
  description: 'WEXELO builds modern, responsive websites for businesses ready to look better, connect with more customers, and grow online.',
  keywords: ['web design', 'website development', 'business website', 'responsive design', 'landing page', 'e-commerce website', 'booking website', 'website redesign'],
  authors: [{ name: 'WEXELO' }],
  creator: 'WEXELO',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'WEXELO',
    title: 'WEXELO \u2014 Websites Built to Grow.',
    description: 'WEXELO builds modern, responsive websites for businesses ready to look better, connect with more customers, and grow online.',
    images: [
      {
        url: '/images/logo/wexelo-icon.png',
        width: 1200,
        height: 630,
        alt: 'WEXELO \u2014 Web Design & Development Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEXELO \u2014 Websites Built to Grow.',
    description: 'WEXELO builds modern, responsive websites for businesses ready to look better, connect with more customers, and grow online.',
    images: ['/images/logo/wexelo-icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  }
};