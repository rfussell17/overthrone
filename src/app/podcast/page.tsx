import { ButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Placeholder } from '@/components/elements/placeholder'
import { Text } from '@/components/elements/text'
import type { Metadata } from 'next'

// Holding page. Overthrone is launching a new podcast (name to come); Make Art & Die is not carried over.
// TODO: when the show is named, add its title, description, artwork and episode embeds, then remove `robots`
// below and add '/podcast' to src/app/sitemap.ts.
export const metadata: Metadata = {
  title: 'Podcast',
  description: 'A new podcast from Overthrone is on the way.',
  alternates: { canonical: '/podcast' },
  robots: { index: false, follow: true },
}

export default function PodcastPage() {
  return (
    <Container className="grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-2">
      <div className="flex flex-col items-start gap-6">
        <Heading>New podcast coming soon</Heading>
        <Text size="lg">
          <p>We are building a new show. Episodes will live here once it launches.</p>
        </Text>
        <ButtonLink href="/contact" size="lg">
          Get in touch
        </ButtonLink>
      </div>
      <Placeholder label="Podcast artwork" ratio="square" className="max-w-md" />
    </Container>
  )
}
