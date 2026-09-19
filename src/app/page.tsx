import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { Services } from '@/components/sections/Services';
import { Industries } from '@/components/sections/Industries';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { WhyWexelo } from '@/components/sections/WhyWexelo';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { getSiteUrl } from '@/config/site';

export const metadata: Metadata = {
  title: { absolute: 'WEXELO \u2014 Websites Built to Grow.' },
  description: 'WEXELO builds modern, responsive websites for businesses ready to look better, connect with more customers, and grow online.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'WEXELO',
    description: 'WEXELO builds modern, responsive websites for businesses ready to look better, connect with more customers, and grow online.',
    url: getSiteUrl(),
    logo: `${getSiteUrl()}/images/logo/wexelo-icon.png`,
    image: `${getSiteUrl()}/images/logo/wexelo-icon.png`,
    serviceType: [
      'Business Websites',
      'Landing Pages',
      'E-commerce Websites',
      'Booking Websites',
      'Website Redesign',
      'Website Care'
    ],
    areaServed: 'Worldwide'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustStrip />
      <Services />
      <Industries />
      <SelectedWork />
      <WhyWexelo />
      <ProcessTimeline />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}