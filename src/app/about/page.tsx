import { PillLabel } from '@/components/brand/graphics'
import { Flourish } from '@/components/brand/logo'
import { CtaBand } from '@/components/cta-band'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Subheading } from '@/components/elements/subheading'
import { Text } from '@/components/elements/text'
import { TeamGrid } from '@/components/team-grid'
import { site } from '@/data/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Overthrone is a digital marketing agency by musicians, for musicians, based in Edmonton, Alberta and working with heavy and alternative artists.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-start gap-7">
          <PillLabel>Who we are</PillLabel>
          <Heading className="max-w-5xl">By musicians, for musicians</Heading>
          {/* DRAFT copy, awaiting Overthrone's approval. Same text as the homepage. */}
          <Text size="lg" className="flex max-w-3xl flex-col gap-5">
            <p>
              Overthrone is a digital marketing agency built by musicians, for musicians. We work with heavy and
              alternative artists who want a real audience, not a borrowed trend.
            </p>
            <p>
              We run the ad campaigns, shape the content and grow the following, then report back in numbers you can
              check: streams, listeners, followers, tickets.
            </p>
            <p>
              We are based in {site.city}, {site.region}, and work with artists across Canada and the United States.
            </p>
          </Text>
        </Container>
      </section>

      <section className="border-t border-stone/40 py-16 sm:py-24">
        <Container className="flex flex-col gap-12">
          <Subheading>The team</Subheading>
          <TeamGrid />
        </Container>
      </section>

      <section className="sand-panel bg-sand py-16 text-black sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Flourish className="h-8 w-auto sm:h-10" />
          <p className="font-display text-xl/7 sm:text-3xl/10">{site.slogan}</p>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
