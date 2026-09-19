'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe, MonitorSmartphone, Code2, MousePointerClick,
  Sparkles, TrendingUp, MessageCircle, MapPin,
  ShoppingBag, CalendarCheck, BarChart3, Pencil,
} from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const iconPool = [
  Globe, MonitorSmartphone, Code2, MousePointerClick,
  Sparkles, TrendingUp, MessageCircle, MapPin,
  ShoppingBag, CalendarCheck, BarChart3, Pencil,
];

interface FloatingIconConfig {
  icon: typeof Globe;
  x: string;
  y: string;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
  blur?: boolean;
}

interface FloatingIconsProps {
  count?: number;
  section?: 'hero' | 'services' | 'cta';
  className?: string;
}

const sectionConfigs: Record<string, FloatingIconConfig[]> = {
  hero: [
    { icon: Globe, x: '5%', y: '15%', size: 28, opacity: 0.06, duration: 15, delay: 0, color: '#2563EB' },
    { icon: Code2, x: '90%', y: '20%', size: 24, opacity: 0.04, duration: 20, delay: 1, color: '#06B6D4', blur: true },
    { icon: MousePointerClick, x: '15%', y: '75%', size: 20, opacity: 0.07, duration: 18, delay: 0.5, color: '#14B8A6' },
    { icon: MonitorSmartphone, x: '85%', y: '70%', size: 26, opacity: 0.05, duration: 22, delay: 2, color: '#2563EB' },
    { icon: Sparkles, x: '50%', y: '10%', size: 18, opacity: 0.06, duration: 16, delay: 1.5, color: '#06B6D4' },
    { icon: TrendingUp, x: '75%', y: '85%', size: 22, opacity: 0.04, duration: 19, delay: 3, color: '#14B8A6', blur: true },
    { icon: CalendarCheck, x: '8%', y: '45%', size: 20, opacity: 0.03, duration: 25, delay: 0.8, color: '#2563EB' },
  ],
  services: [
    { icon: Globe, x: '3%', y: '10%', size: 24, opacity: 0.05, duration: 16, delay: 0, color: '#2563EB' },
    { icon: Code2, x: '95%', y: '30%', size: 20, opacity: 0.04, duration: 20, delay: 1, color: '#06B6D4', blur: true },
    { icon: Sparkles, x: '92%', y: '80%', size: 18, opacity: 0.06, duration: 18, delay: 2, color: '#14B8A6' },
    { icon: ShoppingBag, x: '5%', y: '70%', size: 22, opacity: 0.05, duration: 15, delay: 1.5, color: '#2563EB', blur: true },
  ],
  cta: [
    { icon: Globe, x: '8%', y: '20%', size: 26, opacity: 0.08, duration: 15, delay: 0, color: '#2563EB' },
    { icon: Code2, x: '88%', y: '25%', size: 22, opacity: 0.06, duration: 18, delay: 1, color: '#06B6D4' },
    { icon: Sparkles, x: '15%', y: '75%', size: 18, opacity: 0.05, duration: 17, delay: 0.5, color: '#14B8A6', blur: true },
    { icon: MousePointerClick, x: '80%', y: '70%', size: 24, opacity: 0.07, duration: 14, delay: 2, color: '#06B6D4' },
    { icon: TrendingUp, x: '50%', y: '15%', size: 20, opacity: 0.05, duration: 20, delay: 1.5, color: '#14B8A6', blur: true },
  ],
};

export function FloatingIcons({ section = 'hero', className = '' }: FloatingIconsProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (prefersReducedMotion) return null;

  const icons = sectionConfigs[section] || sectionConfigs.hero;
  const displayIcons = isMobile ? icons.slice(0, 3) : icons;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {displayIcons.map((config, i) => {
        const IconComponent = config.icon;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: config.x,
              top: config.y,
              filter: config.blur ? 'blur(1px)' : undefined,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: config.duration,
              delay: config.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <IconComponent
              style={{
                width: config.size,
                height: config.size,
                color: config.color,
                opacity: config.opacity,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
