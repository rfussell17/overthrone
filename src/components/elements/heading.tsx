import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function Heading({
  children,
  color = 'dark/light',
  className,
  ...props
}: { color?: 'dark/light' | 'light' } & ComponentProps<'h1'>) {
  return (
    <h1
      className={clsx(
        'font-display text-3xl/9 text-balance sm:text-5xl/14 lg:text-6xl/16',
        color === 'dark/light' && 'text-torchlight sand:text-black',
        color === 'light' && 'text-white',
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  )
}
