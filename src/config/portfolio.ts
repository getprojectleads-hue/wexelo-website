export interface PortfolioProject {
  slug: string;
  title: string;
  industry: string;
  type: string;
  description: string;
  showcaseFeatures: string[];
  image: string;
  href: string;
  color: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'luxe-beauty-studio',
    title: 'Luxe Beauty Studio',
    industry: 'Salon & Beauty',
    type: 'Concept Website',
    description: 'A luxury salon website concept featuring elegant service pages, bridal section, gallery, booking CTA, testimonials, and WhatsApp integration.',
    showcaseFeatures: [
      'Luxury hero section',
      'Beauty services showcase',
      'Bridal section',
      'Photo gallery',
      'Booking CTA',
      'Testimonials',
      'Location & contact',
      'WhatsApp booking',
    ],
    image: '/images/portfolio/luxe-beauty-studio.jpg',
    href: '/work/luxe-beauty-studio',
    color: '#E91E63',
  },
  {
    slug: 'brew-bites',
    title: 'Brew & Bites',
    industry: 'CafÃ© & Restaurant',
    type: 'Concept Website',
    description: 'A modern cafÃ© and restaurant website concept with premium food imagery, interactive menu, reservations, and location integration.',
    showcaseFeatures: [
      'Premium food imagery',
      'Interactive menu',
      'Best sellers section',
      'Offers & deals',
      'Dine-in / takeaway toggle',
      'Reservation CTA',
      'Opening hours',
      'Location map',
    ],
    image: '/images/portfolio/brew-bites.jpg',
    href: '/work/brew-bites',
    color: '#F59E0B',
  },
  {
    slug: 'the-ocean-stay',
    title: 'The Ocean Stay',
    industry: 'Hotel & Hospitality',
    type: 'Concept Website',
    description: 'A cinematic hotel website concept featuring immersive hero visuals, room showcases, amenities, reviews, and booking enquiry integration.',
    showcaseFeatures: [
      'Cinematic hospitality hero',
      'Room showcase',
      'Amenities section',
      'Photo gallery',
      'Guest reviews',
      'Location & transport',
      'Booking enquiry',
      'Experience section',
    ],
    image: '/images/portfolio/the-ocean-stay.jpg',
    href: '/work/the-ocean-stay',
    color: '#0EA5E9',
  },
];
