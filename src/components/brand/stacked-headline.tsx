import { clsx } from 'clsx/lite'
import type { ElementType } from 'react'
import { IconMark } from './logo'

/**
 * The signature headline: Know capitals, one word per line, with one word overwritten in Badger.
 * `accent` is the zero-based index of the line that gets the hand-written overwrite.
 * The Badger word must contrast with the Know letters it crosses: White (default) over Torchlight or Black
 * letters, Black (`accentColor`) only over White letters.
 * Set the headline colour with `color` and its scale with `size`; do not pass text colour or size in `className`.
 */
export function StackedHeadline({
  lines,
  accent,
  as: Tag = 'h2',
  withIcon = false,
  accentColor = 'white',
  color = 'torchlight',
  size = 'lg',
  className,
}: {
  lines: string[]
  accent?: number
  as?: ElementType
  withIcon?: boolean
  accentColor?: 'white' | 'black'
  color?: 'torchlight' | 'black' | 'white'
  size?: 'md' | 'lg'
  className?: string
}) {
  return (
    <Tag
      aria-label={lines.join(' ')}
      className={clsx(
        'font-display leading-[0.98]',
        size === 'lg' ? 'text-[clamp(1.9rem,6.2vw,5rem)]' : 'text-[clamp(1.5rem,3.6vw,3rem)]',
        color === 'torchlight' && 'text-torchlight',
        color === 'black' && 'text-black',
        color === 'white' && 'text-white',
        className,
      )}
    >
      {lines.map((line, i) => (
        <span key={i} aria-hidden="true" className="relative block w-fit">
          {line}
          {i === accent && (
            <span
              className={clsx(
                'pointer-events-none absolute inset-x-0 top-1/2 -translate-y-[58%] -rotate-3 text-center font-accent text-[1.35em] leading-none whitespace-nowrap normal-case',
                accentColor === 'white' ? 'text-white' : 'text-black',
              )}
            >
              {line}
            </span>
          )}
          {withIcon && i === lines.length - 1 && (
            <IconMark title="" className="ml-[0.12em] inline-block h-[0.74em] w-auto align-baseline" />
          )}
        </span>
      ))}
    </Tag>
  )
}
