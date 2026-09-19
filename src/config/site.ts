export const getSiteUrl = () => {
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
};

export const siteConfig = {
  name: 'WEXELO',
  descriptor: 'Web Design & Development Studio',
  tagline: 'Websites Built to Grow.',
  description: 'Modern websites for growing businesses.',
  url: 'https://wexelo.com',
  ogImage: '/images/logo/wexelo-icon.png',
  links: {
    whatsapp: 'https://wa.me/919999999999',
    instagram: 'https://instagram.com/wexelo',
    linkedin: 'https://linkedin.com/company/wexelo',
    email: 'mailto:hello@wexelo.com',
    emailAddress: 'hello@wexelo.com',
    whatsappNumber: '+91 99999 99999',
  },
};

export const leadStatuses = [
  'New',
  'Contacted',
  'Follow-up',
  'Proposal Sent',
  'Won',
  'Lost',
] as const;

export type LeadStatus = (typeof leadStatuses)[number];
