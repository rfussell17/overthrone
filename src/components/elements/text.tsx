import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function Text({ children, className, size = 'md', ...props }: ComponentProps<'div'> & { size?: 'md' | 'lg' }) {
  return (
    <div
      className={clsx(
        size === 'md' && 'text-[1rem]/7',
        size === 'lg' && 'text-lg/8',
        'font-sans text-ink sand:text-black',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
