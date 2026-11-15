import { Analytics } from '@/components/analytics'
import { Main } from '@/components/elements/main'
import { SiteFooter } from '@/components/site-footer'
import { SiteNavbar } from '@/components/site-navbar'
import { site } from '@/data/site'
import type { Metadata } from 'next'
import { badger, justSans, know } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Music Marketing Agency`, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: site.name, locale: 'en_CA', title: site.name, description: site.description },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  slogan: site.tagline,
  address: { '@type': 'PostalAddress', addressLocality: site.city, addressRegion: 'AB', addressCountry: site.country },
  sameAs: [site.instagram.url],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={`${know.variable} ${justSans.variable} ${badger.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-torchlight focus:px-4 focus:py-2 focus:font-extrabold focus:text-black"
        >
          Skip to content
        </a>
        <SiteNavbar />
        <Main id="main">{children}</Main>
        <SiteFooter />
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </body>
    </html>
  )
}
