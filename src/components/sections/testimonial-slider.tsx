'use client'

import { clsx } from 'clsx/lite'
import { useEffect, useRef, useState, type ReactNode } from 'react'

const INTERVAL_MS = 7000

/** Cards per view — matches the static grid: 1 on mobile, 2 from `sm`, 3 from `lg`. */
function usePerView() {
  const [perView, setPerView] = useState(1)
  useEffect(() => {
    const sm = window.matchMedia('(min-width: 40rem)')
    const lg = window.matchMedia('(min-width: 64rem)')
    const update = () => setPerView(lg.matches ? 3 : sm.matches ? 2 : 1)
    update()
    sm.addEventListener('change', update)
    lg.addEventListener('change', update)
    return () => {
      sm.removeEventListener('change', update)
      lg.removeEventListener('change', update)
    }
  }, [])
  return perView
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return reduced
}

const controlClass =
  'flex size-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-torchlight'

/**
 * Auto-rotating testimonial slider, used when there are more testimonials than fit the grid. Advances one card
 * every ~7s; pauses on hover, on keyboard focus, or with the pause button; never auto-advances under reduced motion.
 */
export function TestimonialSlider({ slides, label = 'Guest testimonials' }: { slides: ReactNode[]; label?: string }) {
  const perView = usePerView()
  const reducedMotion = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [stopped, setStopped] = useState(false)
  const root = useRef<HTMLDivElement>(null)

  const positions = Math.max(1, slides.length - perView + 1)
  const current = Math.min(index, positions - 1)
  const go = (i: number) => setIndex((i + positions) % positions)

  const rotating = !reducedMotion && !stopped && !hovered && !focused

  // One timer per position, so manual navigation restarts the countdown
  useEffect(() => {
    if (!rotating) return
    const t = window.setTimeout(() => setIndex((i) => (Math.min(i, positions - 1) + 1) % positions), INTERVAL_MS)
    return () => window.clearTimeout(t)
  }, [rotating, current, positions])

  return (
    <div
      ref={root}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className="flex flex-col gap-8"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={(e) => {
        // Pause for keyboard focus only, not for a mouse click on a control
        if (e.target.matches(':focus-visible')) setFocused(true)
      }}
      onBlur={(e) => {
        if (!root.current?.contains(e.relatedTarget as Node | null)) setFocused(false)
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(current + 1)
        if (e.key === 'ArrowLeft') go(current - 1)
      }}
    >
      <div className="overflow-hidden">
        <div
          aria-live={rotating ? 'off' : 'polite'}
          className="flex gap-8 motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out"
          style={{ transform: `translateX(calc(-${current} * (100% + 2rem) / ${perView}))` }}
        >
          {slides.map((slide, i) => {
            const visible = i >= current && i < current + perView
            return (
              <div
                key={i}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${slides.length}`}
                aria-hidden={!visible}
                inert={!visible}
                className="flex shrink-0 basis-full *:w-full sm:basis-[calc((100%-2rem)/2)] lg:basis-[calc((100%-4rem)/3)]"
              >
                {slide}
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-1" role="group" aria-label="Choose testimonials">
          {Array.from({ length: positions }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show testimonials starting at ${i + 1} of ${slides.length}`}
              aria-current={i === current}
              className="group flex size-11 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-torchlight"
            >
              <span
                className={clsx(
                  'block size-2 rounded-full transition-colors',
                  i === current ? 'bg-torchlight' : 'bg-ink/25 group-hover:bg-ink/50',
                )}
              />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {!reducedMotion && (
            <button
              type="button"
              onClick={() => setStopped((s) => !s)}
              aria-label={stopped ? 'Start automatic rotation' : 'Stop automatic rotation'}
              className={controlClass}
            >
              <span aria-hidden="true" className="text-sm">
                {stopped ? '▶' : '❚❚'}
              </span>
            </button>
          )}
          <button
            type="button"
            onClick={() => go(current - 1)}
            aria-label="Previous testimonials"
            className={controlClass}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" onClick={() => go(current + 1)} aria-label="Next testimonials" className={controlClass}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  )
}
