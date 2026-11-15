import { clsx } from 'clsx/lite'
import { type ComponentProps } from 'react'

export function Subheading({ children, className, ...props }: ComponentProps<'h2'>) {
  return (
    <h2
      className={clsx('font-display text-2xl/8 text-balance text-torchlight sm:text-4xl/11 sand:text-black', className)}
      {...props}
    >
      {children}
    </h2>
  )
}
