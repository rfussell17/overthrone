import { IconMark } from '@/components/brand/logo'
import { clsx } from 'clsx/lite'
import Image from 'next/image'
import type { ComponentProps } from 'react'

const tones = {
  // On the Black page background
  dark: {
    box: 'bg-[color-mix(in_srgb,var(--color-stone)_28%,var(--color-black))] outline-stone/70 text-sand/60',
    lines: 'rgba(245,232,220,0.045)',
    icon: 'text-stone',
  },
  // On a Sand panel
  sand: {
    box: 'bg-[color-mix(in_srgb,var(--color-stone)_14%,var(--color-sand))] outline-black/15 text-black/60',
    lines: 'rgba(20,21,21,0.05)',
    icon: 'text-black/25',
  },
  // On a Torchlight panel
  torch: {
    box: 'bg-[color-mix(in_srgb,var(--color-black)_14%,var(--color-torchlight))] outline-black/25 text-black/75',
    lines: 'rgba(20,21,21,0.07)',
    icon: 'text-black/35',
  },
}

const ratios = {
  square: 'aspect-square',
  landscape: 'aspect-4/3',
  wide: 'aspect-video',
  portrait: 'aspect-3/4',
  logo: 'aspect-3/2',
  none: '',
}

/**
 * Standard stand-in for any image that has not been supplied yet.
 * Use it anywhere a photo, artwork, logo or portrait will go, with a label saying what belongs there.
 * `shape="capsule"` matches the icon-shaped portrait frame from the brand guide.
 */
export function Placeholder({
  label = 'Image',
  ratio = 'landscape',
  tone = 'dark',
  shape = 'rect',
  className,
  ...props
}: {
  label?: string
  ratio?: keyof typeof ratios
  tone?: keyof typeof tones
  shape?: 'rect' | 'capsule'
} & Omit<ComponentProps<'div'>, 'children'>) {
  const t = tones[tone]
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      data-placeholder
      className={clsx(
        'relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden p-4 outline-1 -outline-offset-1',
        shape === 'capsule' ? 'rounded-full' : 'rounded-md',
        ratios[ratio],
        t.box,
        className,
      )}
      style={{
        backgroundImage: `repeating-linear-gradient(135deg, ${t.lines} 0 2px, transparent 2px 14px)`,
      }}
      {...props}
    >
      <IconMark title="" aria-hidden="true" className={clsx('h-[22%] max-h-14 min-h-6 w-auto shrink-0', t.icon)} />
      <span className="max-w-full text-center font-sans text-[0.625rem]/4 font-extrabold tracking-[0.2em] text-balance uppercase">
        {label}
      </span>
    </div>
  )
}

/**
 * An image slot. Pass `src` once the real image exists; until then it renders the standard placeholder.
 */
export function Photo({
  src,
  alt,
  label,
  ratio = 'landscape',
  tone,
  shape = 'rect',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  priority,
  className,
}: {
  src?: string
  alt: string
  label?: string
  ratio?: keyof typeof ratios
  tone?: keyof typeof tones
  shape?: 'rect' | 'capsule'
  sizes?: string
  priority?: boolean
  className?: string
}) {
  if (!src) return <Placeholder label={label ?? alt} ratio={ratio} tone={tone} shape={shape} className={className} />
  return (
    <div
      className={clsx(
        'relative w-full overflow-hidden',
        shape === 'capsule' ? 'rounded-full' : 'rounded-md',
        ratios[ratio],
        className,
      )}
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  )
}
