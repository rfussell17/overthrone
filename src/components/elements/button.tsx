import Link from 'next/link'

import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'
import { ArrowNarrowRightIcon } from '../icons/arrow-narrow-right-icon'

const sizes = {
  md: 'px-3.5 py-1.5',
  lg: 'px-5 py-2.5',
}

export function Button({
  size = 'md',
  type = 'button',
  color = 'dark/light',
  className,
  ...props
}: {
  size?: keyof typeof sizes
  color?: 'dark/light' | 'light' | 'green'
} & ComponentProps<'button'>) {
  return (
    <button
      type={type}
      className={clsx(
        'inline-flex shrink-0 items-center justify-center gap-1 rounded-full font-sans text-sm/7 font-extrabold tracking-wide',
        color === 'dark/light' &&
          'bg-torchlight text-black hover:bg-white sand:bg-black sand:text-white sand:hover:bg-stone',
        color === 'light' && 'hover bg-white text-black hover:bg-sand',
        color === 'green' && 'bg-ink text-base hover:bg-ink/90',
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}

export function ButtonLink({
  size = 'md',
  color = 'dark/light',
  className,
  href,
  ...props
}: {
  href: string
  size?: keyof typeof sizes
  color?: 'dark/light' | 'light' | 'green'
} & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex shrink-0 items-center justify-center gap-1 rounded-full font-sans text-sm/7 font-extrabold tracking-wide',
        color === 'dark/light' &&
          'bg-torchlight text-black hover:bg-white sand:bg-black sand:text-white sand:hover:bg-stone',
        color === 'light' && 'hover bg-white text-black hover:bg-sand',
        color === 'green' && 'bg-ink text-base hover:bg-ink/90',
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}

export function SoftButton({
  size = 'md',
  type = 'button',
  className,
  ...props
}: {
  size?: keyof typeof sizes
} & ComponentProps<'button'>) {
  return (
    <button
      type={type}
      className={clsx(
        'inline-flex shrink-0 items-center justify-center gap-1 rounded-full bg-ink/10 text-sm/7 font-medium text-ink hover:bg-ink/15 sand:bg-base/10 sand:text-base sand:hover:bg-white/20',
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}

export function SoftButtonLink({
  size = 'md',
  href,
  className,
  ...props
}: {
  href: string
  size?: keyof typeof sizes
} & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex shrink-0 items-center justify-center gap-1 rounded-full bg-ink/10 text-sm/7 font-medium text-ink hover:bg-ink/15 sand:bg-base/10 sand:text-base sand:hover:bg-white/20',
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}

export function PlainButton({
  size = 'md',
  color = 'dark/light',
  type = 'button',
  className,
  ...props
}: {
  size?: keyof typeof sizes
  color?: 'dark/light' | 'light'
} & ComponentProps<'button'>) {
  return (
    <button
      type={type}
      className={clsx(
        'inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-sans text-sm/7 font-extrabold tracking-wide',
        color === 'dark/light' && 'text-ink hover:bg-ink/10 sand:text-base sand:hover:bg-white/10',
        color === 'light' && 'text-white hover:bg-white/15 sand:hover:bg-white/10',
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}

export function PlainButtonLink({
  size = 'md',
  color = 'dark/light',
  href,
  className,
  ...props
}: {
  href: string
  size?: keyof typeof sizes
  color?: 'dark/light' | 'light'
} & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-sans text-sm/7 font-extrabold tracking-wide',
        color === 'dark/light' && 'text-ink hover:bg-ink/10 sand:text-base sand:hover:bg-white/10',
        color === 'light' && 'text-white hover:bg-white/15 sand:hover:bg-white/10',
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}

const arrowVariants = {
  primary: 'border-torchlight bg-torchlight text-black hover:border-white hover:bg-white',
  secondary: 'border-torchlight bg-transparent text-torchlight hover:bg-torchlight/10',
}

/**
 * A link styled as a button, with a trailing arrow. A lone button — including the single link on a card — is
 * `primary`; use `secondary` only for a second button beside a primary. Inline links inside paragraphs, the nav and
 * the footer stay plain text links.
 */
export function ArrowButtonLink({
  variant = 'primary',
  href,
  className,
  children,
  ...props
}: {
  href: string
  variant?: keyof typeof arrowVariants
} & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <Link
      href={href}
      className={clsx(
        'group inline-flex min-h-11 w-fit shrink-0 items-center justify-center gap-2 rounded-full border px-5 py-2.25 font-sans text-sm/7 font-extrabold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-torchlight',
        arrowVariants[variant],
        className,
      )}
      {...props}
    >
      {children}
      <ArrowNarrowRightIcon aria-hidden="true" className="shrink-0 transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}
