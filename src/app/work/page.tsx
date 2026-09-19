import { Metadata } from 'next';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Web Design Portfolio & Concept Work',
  description: 'Explore website concepts and digital experiences created by WEXELO for salons, restaurants, hotels, and modern businesses.',
  alternates: {
    canonical: '/work',
  },
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-32 pb-4 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Our Work"
            description="A glimpse of the digital experiences we design for modern businesses."
            light
          />
        </div>
      </section>
      <SelectedWork />
      <FinalCTA />
    </>
  );
}
