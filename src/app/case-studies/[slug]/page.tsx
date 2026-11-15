import { ArrowLink } from '@/components/arrow-link'
import { PillLabel } from '@/components/brand/graphics'
import { CtaBand } from '@/components/cta-band'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Photo } from '@/components/elements/placeholder'
import { Subheading } from '@/components/elements/subheading'
import { Text } from '@/components/elements/text'
import { caseStudies, caseStudyFootnote } from '@/data/case-studies'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

/*
 * One page per entry in src/data/case-studies.ts, at /case-studies/<slug>.
 * Nothing is generated while that list is empty. Add each new page's path to src/app/sitemap.ts.
 */
type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)
  if (!study) return {}
  return {
    title: `${study.artist}: ${study.genre} Marketing Case Study`,
    description: study.summary ?? `How Overthrone marketed ${study.artist} (${study.genre}), ${study.period}.`,
    alternates: { canonical: `/case-studies/${study.slug}` },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)
  if (!study) notFound()

  return (
    <>
      <section className="py-16 sm:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-7">
            <PillLabel>Digital Marketing | Case Study</PillLabel>
            <Heading>{study.artist}</Heading>
            <p className="text-lg/8 text-ink">
              {study.genre} · {study.period}
            </p>
            {study.summary && (
              <Text size="lg">
                <p>{study.summary}</p>
              </Text>
            )}
          </div>
          <Photo
            src={study.photo}
            alt={`${study.artist} press photo`}
            label={`${study.artist} photo`}
            ratio="landscape"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </Container>
      </section>

      <section className="border-t border-stone/40 py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <Subheading>The numbers</Subheading>
            <dl>
              {study.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-baseline justify-between gap-6 border-t border-stone/60 py-5 last:border-b"
                >
                  <dt className="text-lg/7 text-torchlight">{stat.label}</dt>
                  <dd className="text-3xl/9 font-extrabold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <p className="text-xs/5 text-ink/70">{caseStudyFootnote}</p>
          </div>
          {study.work && (
            <div className="flex flex-col gap-8">
              <Subheading>What we did</Subheading>
              <ul>
                {study.work.map((line) => (
                  <li key={line} className="border-t border-stone/60 py-5 text-lg/8 text-ink last:border-b">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
        <Container className="mt-12">
          <ArrowLink href="/case-studies">All case studies</ArrowLink>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
