export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  badge?: string;
  description: string;
  features: string[];
  bestFor: string;
  urgency: string;
  cta: string;
  href: string;
  highlighted?: boolean;
}

export const packages: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹2,499',
    priceValue: 2499,
    description: 'Get your business professionally online.',
    features: [
      'Up to 3 Pages',
      'Responsive Mobile Design',
      'WhatsApp + Contact Form',
      'Google Maps & Social Links',
      'Basic SEO Setup',
      '1 Revision Round',
    ],
    bestFor: 'New businesses, freelancers & small local brands.',
    urgency: 'Only a few Starter projects accepted each month.',
    cta: 'Start My Website',
    href: '/start-project?package=starter',
  },
  {
    id: 'grow',
    name: 'Grow',
    price: '₹4,999',
    priceValue: 4999,
    badge: 'MOST POPULAR',
    description: 'Built for businesses that want more enquiries and a stronger online presence.',
    features: [
      'Up to 6 Pages',
      'Premium Responsive Design',
      'Smooth Animations & Interactions',
      'Lead / Enquiry Form',
      'Services + Testimonials Sections',
      'Basic SEO & Performance Setup',
      'Google Analytics Setup',
      '2 Revision Rounds',
    ],
    bestFor: 'Salons, cafés, restaurants, consultants & growing businesses.',
    urgency: 'Monthly onboarding slots are kept limited to maintain quality.',
    cta: 'Grow My Business',
    href: '/start-project?package=grow',
    highlighted: true,
  },
  {
    id: 'scale',
    name: 'Scale',
    price: '₹6,999',
    priceValue: 6999,
    description: 'A premium website for businesses ready to stand out.',
    features: [
      'Up to 10 Pages',
      'Custom Premium Design',
      'Advanced Animations & Micro-Interactions',
      'Booking / Advanced Enquiry Integration',
      'Portfolio / Gallery / Service Showcase',
      'Blog or CMS Setup',
      'SEO + Performance Optimization',
      '3 Revision Rounds',
    ],
    bestFor: 'Hotels, premium salons, established restaurants, creators & growing brands.',
    urgency: 'Priority projects only — limited development slots each month.',
    cta: 'Build My Premium Website',
    href: '/start-project?package=scale',
  },
];

export const includedWithEvery = [
  'Mobile Responsive',
  'WhatsApp Integration',
  'Basic SEO Structure',
  'SSL / HTTPS Setup',
  'Launch Support',
];