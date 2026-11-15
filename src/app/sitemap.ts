import { site } from '@/data/site'
import type { MetadataRoute } from 'next'

// Add each new page here as it is built. /styleguide is internal and /podcast is a holding page, so both stay out.
const pages: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/contact', priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }))
}
