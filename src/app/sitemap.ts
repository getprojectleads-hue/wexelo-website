import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  const routes = [
    '',
    '/services',
    '/work',
    '/pricing',
    '/about',
    '/start-project',
    '/privacy',
    '/terms',
    '/project-policy',
    '/work/luxe-beauty-studio',
    '/work/brew-bites',
    '/work/the-ocean-stay',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return routes;
}