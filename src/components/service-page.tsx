import { ArrowLink } from '@/components/arrow-link'
import { PillLabel } from '@/components/brand/graphics'
import { CtaBand } from '@/components/cta-band'
import { ButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Subheading } from '@/components/elements/subheading'
import { Text } from '@/components/elements/text'
import type { ServicePage as ServicePageData } from '@/data/service-pages'
import { site } from '@/data/site'
import type { Metadata } from 'next'
import Link from 'next/link'

export function serviceMetadata(page: ServicePageData): Metadata {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: page.path },
    openGraph: { title: `${page.metaTitle} | ${site.name}`, description: page.metaDescription, url: page.path },
  }
}

/** Shared layout for the service pages. Content comes from src/data/service-pages.ts. */
export function ServicePage({ page }: { page: ServicePageData }) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.metaTitle,
      description: page.metaDescription,
      url: `${site.url}${page.path}`,
      provider: { '@type': 'ProfessionalService', name: site.name, url: site.url },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ]

  return (
    <>
      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-start gap-7">
          <PillLabel>{page.eyebrow}</PillLabel>
          <Heading className="max-w-5xl">{page.heading}</Heading>
          <Text size="lg" className="max-w-2xl">
            <p>{page.intro}</p>
          </Text>
          <ButtonLink href="/contact" size="lg">
            Work with us
          </ButtonLink>
        </Container>
      </section>

      <section className="border-t border-stone/40 py-16 sm:py-24">
        <Container className="flex flex-col gap-12">
          <Subheading>{page.includedTitle}</Subheading>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {page.included.map((item) => (
              <li key={item.title} className="flex flex-col gap-3 rounded-md border border-stone/60 p-7">
                <h3 className="text-xl/7 font-extrabold text-white">
                  {item.href ? (
                    <Link href={item.href} className="underline-offset-4 hover:underline">
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="text-[1rem]/7 text-ink">{item.body}</p>
                {item.href && (
                  <ArrowLink href={item.href} className="mt-auto pt-2">
                    More on {item.title}
                  </ArrowLink>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {page.steps && (
        <section className="sand-panel bg-sand py-16 text-black sm:py-24">
          <Container className="flex flex-col gap-12">
            <Subheading>How it works</Subheading>
            <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {page.steps.map((step, i) => (
                <li key={step.title} className="flex flex-col gap-3 border-t-2 border-black pt-5">
                  <span className="font-display text-sm/5">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-xl/7 font-extrabold">{step.title}</h3>
                  <p className="text-[1rem]/7">{step.body}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      {page.straightTalk && (
        <section className="py-16 sm:py-24">
          <Container className="grid gap-10 lg:grid-cols-5">
            <Subheading className="lg:col-span-2">{page.straightTalk.title}</Subheading>
            <ul className="flex flex-col lg:col-span-3">
              {page.straightTalk.points.map((point) => (
                <li key={point} className="border-t border-stone/60 py-5 text-lg/8 text-ink last:border-b">
                  {point}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="border-t border-stone/40 py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-5">
          <Subheading className="lg:col-span-2">Questions</Subheading>
          <div className="lg:col-span-3">
            {page.faqs.map((faq) => (
              <details key={faq.q} className="group border-t border-stone/60 last:border-b">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg/8 font-extrabold text-white [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span aria-hidden="true" className="text-torchlight group-open:hidden">
                    +
                  </span>
                  <span aria-hidden="true" className="hidden text-torchlight group-open:inline">
                    −
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 text-[1rem]/7 text-ink">{faq.a}</p>
              </details>
            ))}
            {page.related && (
              <ul className="mt-10 flex flex-col gap-2">
                {page.related.map((link) => (
                  <li key={link.href}>
                    <ArrowLink href={link.href}>{link.label}</ArrowLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </section>

      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
