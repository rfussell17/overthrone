import type { NextConfig } from 'next'

/**
 * Redirects from the old Squarespace site (www.overthrone.ca) so no existing links break.
 * /podcast keeps its path on the new site, so it needs no redirect. /about is a TODO until that page exists.
 */
const legacyRedirects: { source: string; destination: string }[] = [
  { source: '/cart', destination: '/' }, // no shop at launch; a shop.overthrone.ca subdomain may come later
  // { source: '/about', destination: '/about' }, // keep the same path when the about page is built
]

const nextConfig: NextConfig = {
  images: {
    // AVIF first (smallest), WebP fallback for browsers without AVIF
    formats: ['image/avif', 'image/webp'],
    // Photos in /public rarely change; keep optimized copies cached for 31 days instead of the default 4 hours
    minimumCacheTTL: 2678400,
  },
  async redirects() {
    return legacyRedirects.map((r) => ({ ...r, permanent: true }))
  },
}

export default nextConfig
