import { PillLabel } from '@/components/brand/graphics'
import { CaseStudyGrid } from '@/components/case-study-grid'
import { CtaBand } from '@/components/cta-band'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Text } from '@/components/elements/text'
import { caseStudies } from '@/data/case-studies'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Music marketing case studies from Overthrone: what we ran for each artist and the growth it produced.',
  alternates: { canonical: '/case-studies' },
  // Placeholder cards only, so keep this page out of search until real case studies are added.
  robots: caseStudies.length === 0 ? { index: false, follow: true } : undefined,
}

export default function CaseStudiesPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container className="flex flex-col gap-12">
          <div className="flex flex-col items-start gap-7">
            <PillLabel>Results</PillLabel>
            <Heading className="max-w-5xl">Case studies</Heading>
            <Text size="lg" className="max-w-2xl">
              <p>What we ran for each artist, over what period, and the growth it produced.</p>
            </Text>
          </div>
          <CaseStudyGrid />
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
