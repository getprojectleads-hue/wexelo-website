import { Metadata } from 'next';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Website Design Packages & Pricing',
  description: 'Explore WEXELO website packages for new businesses, growing brands, and businesses looking for a premium responsive website.',
  alternates: {
    canonical: '/pricing',
  },
};

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 bg-white">
        <Pricing />
      </section>
      <FAQ />
      <FinalCTA />
    </>
  );
}
