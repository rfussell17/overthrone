import { Chevrons } from '@/components/brand/graphics'
import { clsx } from 'clsx/lite'
import Link from 'next/link'
import type { ComponentProps } from 'react'

/** Text link with the brand chevrons. Torchlight on dark, Black on Sand panels. */
export function ArrowLink({ className, children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={clsx(
        'inline-flex w-fit items-center gap-3 text-sm/7 font-extrabold tracking-wide text-torchlight underline-offset-4 hover:underline sand:text-black',
        className,
      )}
      {...props}
    >
      {children}
      <Chevrons />
    </Link>
  )
}
