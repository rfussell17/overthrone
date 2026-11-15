import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { CardTitle } from '../elements/card-title'
import { Section } from '../elements/section'
import { CheckmarkIcon } from '../icons/checkmark-icon'

export function Plan({
  name,
  price,
  period,
  subheadline,
  badge,
  features,
  cta,
  featured = false,
  tone = 'warm',
  className,
}: {
  name: ReactNode
  price: ReactNode
  period?: ReactNode
  subheadline: ReactNode
  badge?: ReactNode
  features: ReactNode[]
  cta: ReactNode
  featured?: boolean
  tone?: 'default' | 'warm'
} & ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'flex flex-col justify-between gap-6 rounded-xl p-6 sm:items-start',
        featured ? 'bg-ink' : tone === 'warm' ? 'bg-stone/45' : 'bg-ink/5',
        className,
      )}
    >
      <div className="self-stretch">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          {badge && (
            <div
              className={clsx(
                'order-last inline-flex rounded-full px-2 font-mono text-xs/6 font-normal tracking-widest uppercase',
                featured ? 'bg-white/20 text-white' : 'bg-ink/10 text-ink',
              )}
            >
              {badge}
            </div>
          )}
          <CardTitle size="lg" color={featured ? 'light' : 'sand-panel'} className="tracking-tight">
            {name}
          </CardTitle>
        </div>
        <p className={clsx('inline-flex gap-1', tone === 'warm' ? 'mt-2' : 'mt-1 text-[1rem]/7')}>
          <span
            className={clsx(
              tone === 'warm'
                ? 'font-mono text-xs/6 tracking-widest text-torchlight uppercase'
                : clsx('font-display font-light', featured ? 'text-white' : 'text-ink'),
            )}
          >
            {price}
          </span>
          {period && <span className={featured ? 'text-white/60' : 'text-ink/60'}>{period}</span>}
        </p>
        <div
          className={clsx(
            'mt-4 flex flex-col gap-4 text-sm/6',
            featured ? 'text-white/80' : tone === 'warm' ? 'text-ink/70' : 'text-ink',
          )}
        >
          {subheadline}
        </div>
        <ul className={clsx('mt-4 space-y-2 text-sm/6', featured ? 'text-white/80' : 'text-ink')}>
          {features.map((feature, index) => (
            <li key={index} className="flex gap-4">
              <CheckmarkIcon
                className={clsx(
                  'h-lh shrink-0',
                  tone === 'warm' ? 'stroke-torchlight' : featured ? 'stroke-white' : 'stroke-ink',
                )}
              />
              <p>{feature}</p>
            </li>
          ))}
        </ul>
      </div>
      {cta}
    </div>
  )
}

export function PricingMultiTier({
  plans,
  ...props
}: {
  plans: ReactNode
} & ComponentProps<typeof Section>) {
  return (
    <Section {...props}>
      <div className="grid grid-cols-1 gap-2 sm:has-[>:nth-child(5)]:grid-cols-2 sm:max-lg:has-[>:last-child:nth-child(even)]:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none lg:has-[>:nth-child(5)]:grid-flow-row lg:has-[>:nth-child(5)]:grid-cols-3">
        {plans}
      </div>
    </Section>
  )
}
