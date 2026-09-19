import { Smartphone, Zap, Search, Monitor, Settings } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

const trustItems = [
  { label: 'Responsive Design', icon: Smartphone },
  { label: 'Fast Performance', icon: Zap },
  { label: 'SEO Ready', icon: Search },
  { label: 'Mobile First', icon: Monitor },
  { label: 'Easy to Manage', icon: Settings },
];

export function TrustStrip() {
  return (
    <section className="py-8 border-y border-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-14">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-secondary-text"
                >
                  <Icon className="w-4 h-4 text-electric/60" />
                  <span className="text-sm font-medium whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
