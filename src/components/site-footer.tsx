import { Flourish } from '@/components/brand/logo'
import { Container } from '@/components/elements/container'
import { footerNav, site } from '@/data/site'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-stone/40 py-14">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Flourish className="h-7 w-auto text-torchlight sm:h-9" />
        <p className="font-sans text-sm/6 font-extrabold tracking-widest text-ink uppercase">{site.slogan}</p>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-7 gap-y-2">
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm/7 text-ink/80 hover:text-torchlight">
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm/7 text-ink/80">
          <a href={site.instagram.url} rel="noopener" className="hover:text-torchlight">
            Instagram {site.instagram.handle}
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-torchlight">
            {site.email}
          </a>
        </p>
        <p className="text-xs/6 text-ink/60">
          {site.city}, {site.region} · © {new Date().getFullYear()} Overthrone. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
