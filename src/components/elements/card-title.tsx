import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

/** Title for cards and tiles. `lg` is for larger cards (plans, team, events, list cards) and titles set over photos. */
export function CardTitle({
  size = 'md',
  color = 'sand-panel',
  className,
  children,
  ...props
}: { size?: 'md' | 'lg'; color?: 'sand-panel' | 'light' } & ComponentProps<'h3'>) {
  return (
    <h3
      className={clsx(
        'font-display font-semibold text-balance',
        size === 'md' && 'text-2xl/8',
        size === 'lg' && 'text-3xl/9',
        color === 'sand-panel' && 'text-ink',
        color === 'light' && 'text-white',
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  )
}
