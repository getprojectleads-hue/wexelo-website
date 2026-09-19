import { Metadata } from 'next';
import { portfolioProjects } from '@/config/portfolio';
import { BrowserMockup } from '@/components/ui/BrowserMockup';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Brew & Bites | Website Concept Project',
  description: 'A modern website concept project created by WEXELO for a cafe and restaurant.',
  alternates: {
    canonical: '/work/brew-bites',
  },
};

export default function BrewBitesPage() {
  const project = portfolioProjects[1];

  return (
    <>
      <section className="pt-32 pb-20 lg:pb-28 bg-dark-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-medium text-cyan tracking-widest uppercase mb-3 inline-block">
                {project.type} &bull; {project.industry}
              </span>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-dark-secondary max-w-xl mx-auto">
                {project.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <BrowserMockup url="brewandbites.com" variant="dark" className="max-w-3xl mx-auto mb-16">
              <div className="h-80 sm:h-96 bg-gradient-to-br from-amber-900/40 via-orange-800/30 to-yellow-900/20 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-amber-300 font-medium tracking-wider uppercase mb-2">CafÃ© & Restaurant</p>
                  <p className="font-heading font-extrabold text-4xl text-white mb-2">Brew & Bites</p>
                  <p className="text-amber-200/60">Freshly Brewed. Always Delicious.</p>
                  <div className="mt-6 flex gap-3 justify-center">
                    <span className="inline-block px-5 py-2 rounded-full bg-amber-500/20 text-amber-200 text-sm font-medium border border-amber-400/30">
                      View Menu
                    </span>
                    <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20">
                      Reserve Table
                    </span>
                  </div>
                </div>
              </div>
            </BrowserMockup>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-[#0c1e38] rounded-2xl p-8 lg:p-12 border border-white/10">
              <h2 className="font-heading font-bold text-2xl text-white mb-6">Concept Showcase Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.showcaseFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-cyan flex-shrink-0" />
                    <span className="text-dark-secondary text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="text-center mt-12">
            <Button href="/start-project?industry=cafe" variant="white" size="lg">
              Start a Similar Project
            </Button>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
