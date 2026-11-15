import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function Document({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'space-y-4 font-sans text-sm/7 text-ink sand:text-base/70 [&_a]:font-normal [&_a]:text-torchlight [&_a]:underline [&_a]:underline-offset-4 sand:[&_a]:text-torchlight [&_h2]:font-display [&_h2]:font-semibold [&_h2]:text-[1rem]/8 [&_h2]:text-ink [&_h2]:not-first:mt-8 sand:[&_h2]:text-white [&_li]:pl-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_strong]:font-normal [&_strong]:text-ink sand:[&_strong]:text-white [&_ul]:list-[square] [&_ul]:pl-6 [&_ul]:marker:text-torchlight sand:[&_ul]:marker:text-torchlight',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
