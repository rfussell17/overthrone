import { Wordmark } from '@/components/brand/logo'
import { ButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { nav, site } from '@/data/site'
import Link from 'next/link'

const linkClass = 'font-sans text-xs/6 font-extrabold tracking-widest text-ink uppercase hover:text-torchlight'

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone/40 bg-base/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0 text-torchlight">
          <Wordmark className="h-3.5 w-auto sm:h-4" />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-7 max-lg:hidden">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ButtonLink href="/contact" className="max-sm:hidden">
            Get in touch
          </ButtonLink>
          {/* Mobile menu: a native <details>, so it works without JavaScript */}
          <details className="group lg:hidden">
            <summary
              aria-label="Menu"
              className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full border border-stone text-ink [&::-webkit-details-marker]:hidden"
            >
              <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 fill-none stroke-current stroke-2">
                <path d="M3 6h14M3 10h14M3 14h14" className="group-open:hidden" />
                <path d="M5 5l10 10M15 5L5 15" className="hidden group-open:block" />
              </svg>
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute inset-x-0 top-16 flex flex-col border-b border-stone/40 bg-base px-6 py-4"
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${linkClass} border-t border-stone/40 py-4 first:border-t-0`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className={`${linkClass} border-t border-stone/40 py-4 text-torchlight`}>
                Get in touch
              </Link>
            </nav>
          </details>
        </div>
      </Container>
    </header>
  )
}
