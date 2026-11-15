import { Wordmark } from '@/components/brand/logo'
import { ButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { nav, site } from '@/data/site'
import Link from 'next/link'

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone/40 bg-base/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0 text-torchlight">
          <Wordmark className="h-3.5 w-auto sm:h-4" />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-7 max-lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-xs/6 font-extrabold tracking-widest text-ink uppercase hover:text-torchlight"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink href="/contact">Get in touch</ButtonLink>
      </Container>
    </header>
  )
}
