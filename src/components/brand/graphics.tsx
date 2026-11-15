import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

/** Know text inside a rounded outline — nav items, section tags, small buttons. */
export function PillLabel({ className, children, ...props }: ComponentProps<'span'>) {
  return (
    <span
      className={clsx(
        'inline-flex w-fit items-center rounded-full border-2 border-current px-4 py-1.5 font-display text-[0.6875rem]/4 text-torchlight sand:text-black',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

const rotations = { right: 'rotate-0', down: 'rotate-90', left: 'rotate-180', up: '-rotate-90' }

/** The triple chevron from the graphic system. Inherits the text colour. */
export function Chevrons({
  direction = 'right',
  className,
  ...props
}: { direction?: keyof typeof rotations } & ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 52 22"
      fill="currentColor"
      aria-hidden="true"
      className={clsx('h-[0.7em] w-auto shrink-0', rotations[direction], className)}
      {...props}
    >
      {[0, 17, 34].map((x) => (
        <path key={x} d={`M${x} 0h8.5l9.5 11-9.5 11H${x}l9.5-11z`} />
      ))}
    </svg>
  )
}
