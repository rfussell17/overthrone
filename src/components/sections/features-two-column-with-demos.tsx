import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { CardTitle } from '../elements/card-title'
import { Section } from '../elements/section'

export function Feature({
  demo,
  headline,
  subheadline,
  cta,
  overlayHeadline = false,
  tone = 'warm',
  className,
}: {
  demo: ReactNode
  headline: ReactNode
  subheadline: ReactNode
  cta: ReactNode
  overlayHeadline?: boolean
  tone?: 'default' | 'warm'
} & Omit<ComponentProps<'div'>, 'children'>) {
  return (
    <div className={clsx('rounded-lg bg-ink/5 p-2', className)}>
      <div className="relative overflow-hidden rounded-sm">
        {demo}
        {overlayHeadline && (
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/40 to-transparent px-6 pt-16 pb-5">
            <CardTitle size="lg" color="light">
              {headline}
            </CardTitle>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 p-6 sm:p-10 lg:p-6">
        <div>
          {!overlayHeadline && <CardTitle>{headline}</CardTitle>}
          <div
            className={clsx(
              'flex flex-col gap-4 text-sm/7',
              tone === 'warm' ? 'text-ink/75' : 'text-ink',
              !overlayHeadline && 'mt-2',
            )}
          >
            {subheadline}
          </div>
        </div>
        {cta}
      </div>
    </div>
  )
}

export function FeaturesTwoColumnWithDemos({
  features,
  ...props
}: { features: ReactNode } & Omit<ComponentProps<typeof Section>, 'children'>) {
  return (
    <Section {...props}>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">{features}</div>
    </Section>
  )
}
