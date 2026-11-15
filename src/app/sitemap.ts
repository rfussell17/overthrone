import { site } from '@/data/site'
import type { MetadataRoute } from 'next'

// Add each new page here as it is built. /styleguide is internal and /podcast is a holding page, so both stay out.
const pages: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/digital-marketing', priority: 0.9 },
  { path: '/digital-marketing/meta-ads', priority: 0.9 },
  { path: '/social-media', priority: 0.9 },
  { path: '/about', priority: 0.7 },
  { path: '/contact', priority: 0.8 },
  { path: '/privacy', priority: 0.2 },
  // '/case-studies' and each case study: add once real case studies exist
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }))
}
