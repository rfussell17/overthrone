import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function Eyebrow({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'font-sans text-sm/7 font-extrabold tracking-widest text-torchlight uppercase sand:text-black',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
