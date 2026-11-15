export type TestimonialData = { quote: string[]; name: string; byline: string }
import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Section } from '../elements/section'
import { TestimonialSlider } from './testimonial-slider'

export function Testimonial({
  quote,
  img,
  name,
  byline,
  className,
  ...props
}: {
  quote: ReactNode
  img?: ReactNode
  name: ReactNode
  byline: ReactNode
} & ComponentProps<'blockquote'>) {
  return (
    <figure
      className={clsx(
        'flex flex-col justify-between gap-10 rounded-md bg-stone/45 p-6 text-lg text-ink sm:text-xl',
        className,
      )}
      {...props}
    >
      <blockquote className="testimonial-quote relative flex flex-col gap-4">{quote}</blockquote>
      <figcaption className="flex items-center gap-4">
        {img && (
          <div className="flex size-12 overflow-hidden rounded-full outline -outline-offset-1 outline-black/5 *:size-full *:object-cover sand:outline-base/5">
            {img}
          </div>
        )}
        <div>
          <p className="font-sans font-semibold text-base">{name}</p>
          <p className="font-mono text-xs font-normal tracking-widest text-torchlight uppercase">{byline}</p>
        </div>
      </figcaption>
    </figure>
  )
}

/** Three or fewer: the static grid. More than three: an auto-rotating slider with the same cards per view. */
export function TestimonialThreeColumnGrid({
  testimonials,
  ...props
}: { testimonials: TestimonialData[] } & Omit<ComponentProps<typeof Section>, 'children'>) {
  const cards = testimonials.map((t) => (
    <Testimonial
      key={t.name + t.quote[0]}
      quote={t.quote.map((p) => (
        <p key={p}>{p}</p>
      ))}
      name={t.name}
      byline={t.byline}
    />
  ))
  return (
    <Section {...props}>
      {cards.length > 3 ? (
        <TestimonialSlider slides={cards} />
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">{cards}</div>
      )}
    </Section>
  )
}
