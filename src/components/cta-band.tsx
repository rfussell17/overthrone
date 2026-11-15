import { StackedHeadline } from '@/components/brand/stacked-headline'
import { Container } from '@/components/elements/container'
import Link from 'next/link'

/** Full-width Torchlight call to action that closes every page. Wording from the Agency Overview. */
export function CtaBand() {
  return (
    <section className="bg-torchlight py-20 text-black sm:py-24">
      <Container className="flex flex-col items-start gap-8">
        <StackedHeadline lines={['Ready', 'to take', 'the next', 'step?']} color="black" />
        <p className="max-w-xl text-lg/8 font-normal">Let us know how we can help you.</p>
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center rounded-full bg-black px-6 py-2.5 text-sm/7 font-extrabold tracking-wide text-white hover:bg-stone"
        >
          Tell us about your band
        </Link>
      </Container>
    </section>
  )
}
