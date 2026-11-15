import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Section } from '../elements/section'

export function BrandCard({
  image,
  logo,
  text,
  footnote,
  className,
  ...props
}: {
  image?: ReactNode
  logo: ReactNode
  text: ReactNode
  footnote: ReactNode
} & ComponentProps<'div'>) {
  return (
    <div
      className={clsx('flex flex-col justify-between gap-6 rounded-xl bg-stone/45 p-6 sand:bg-base/5', className)}
      {...props}
    >
      <div className="flex flex-col items-start gap-2">
        {image && <div className="mb-4 self-stretch">{image}</div>}
        <div className="flex h-8 shrink-0">{logo}</div>
        <p className="text-sm/7 text-ink/75 sand:text-base/70">{text}</p>
      </div>
      <p className="text-xs/6 text-ink sand:text-base/70">{footnote}</p>
    </div>
  )
}

export function BrandsCardsMultiColumn({ children, ...props }: ComponentProps<typeof Section>) {
  return (
    <Section {...props}>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:has-[>:last-child:nth-child(3)]:grid-cols-1 md:has-[>:last-child:nth-child(3)]:grid-cols-3 md:has-[>:nth-child(5)]:grid-cols-3 lg:has-[>:last-child:nth-child(4n)]:grid-cols-4 lg:has-[>:last-child:nth-child(4n-1):not(:nth-child(3n))]:grid-cols-4">
        {children}
      </div>
    </Section>
  )
}
