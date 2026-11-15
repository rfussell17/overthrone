import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'

export function PullQuote({
  quote,
  attribution,
  className,
  ...props
}: {
  quote: ReactNode
  attribution?: ReactNode
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('my-6 bg-ink py-24 sm:my-16 sm:py-32', className)} {...props}>
      <Container>
        <blockquote className="max-w-4xl text-3xl/snug text-white uppercase sm:text-6xl/snug">{quote}</blockquote>
        {attribution && (
          <p className="mt-10 font-mono text-xs font-normal tracking-widest text-stone uppercase">{attribution}</p>
        )}
      </Container>
    </section>
  )
}
