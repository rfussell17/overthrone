import { ContactForm } from '@/components/contact-form'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Text } from '@/components/elements/text'
import { site } from '@/data/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Tell Overthrone about your band, what you need and your monthly budget, and we will reply by email.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <Container className="grid gap-14 py-16 sm:py-24 lg:grid-cols-5 lg:gap-20">
      <div className="flex flex-col gap-6 lg:col-span-2">
        <Heading>Work with us</Heading>
        <Text size="lg" className="flex flex-col gap-4">
          <p>
            Tell us who you are, what you need and what you have to spend. The more we know up front, the more useful
            our first reply will be.
          </p>
          <p>
            Prefer email? Write to{' '}
            <a href={`mailto:${site.email}`} className="font-extrabold text-torchlight underline">
              {site.email}
            </a>
            .
          </p>
        </Text>
        <p className="text-sm/6 text-ink/70">
          {site.city}, {site.region}
        </p>
      </div>
      <div className="lg:col-span-3">
        <ContactForm />
      </div>
    </Container>
  )
}
