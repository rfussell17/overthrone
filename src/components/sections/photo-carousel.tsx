'use client'

import { clsx } from 'clsx/lite'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { GalleryPhoto } from './photo-gallery'

/**
 * One large photo at a time, with prev/next arrows, a counter, and a thumbnail strip.
 * Arrow keys work while the carousel has focus; swipe works on touch screens.
 */
export function PhotoCarousel({ photos }: { photos: Omit<GalleryPhoto, 'group'>[] }) {
  const [index, setIndex] = useState(0)
  const touchX = useRef<number | null>(null)
  const strip = useRef<HTMLDivElement>(null)

  const step = useCallback((dir: 1 | -1) => setIndex((i) => (i + dir + photos.length) % photos.length), [photos.length])

  // Keep the active thumbnail in view as the main photo changes
  useEffect(() => {
    const thumb = strip.current?.children[index] as HTMLElement | undefined
    thumb?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [index])

  if (photos.length === 0) return null
  // Mount only the current photo and its neighbours, so the rest load on demand
  const near = (i: number) => {
    const d = Math.abs(i - index)
    return d <= 1 || d === photos.length - 1
  }

  return (
    <div
      className="flex flex-col gap-4"
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') step(1)
        if (e.key === 'ArrowLeft') step(-1)
      }}
    >
      <div
        className="relative aspect-3/2 w-full overflow-hidden rounded-sm bg-ink"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return
          const dx = e.changedTouches[0].clientX - touchX.current
          if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1)
          touchX.current = null
        }}
      >
        {photos.map((p, i) =>
          near(i) ? (
            <Image
              key={p.src}
              src={p.src}
              alt={p.alt}
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              preload={i === 0}
              aria-hidden={i !== index}
              className={clsx(
                'object-cover transition-opacity duration-500',
                i === index ? 'opacity-100' : 'opacity-0',
              )}
            />
          ) : null,
        )}

        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="absolute top-1/2 left-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="absolute top-1/2 right-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
            >
              →
            </button>
            <div
              aria-live="polite"
              className="absolute right-4 bottom-4 rounded-full bg-black/40 px-3 py-1 font-mono text-xs/6 tracking-widest text-white backdrop-blur-sm"
            >
              {index + 1} / {photos.length}
            </div>
          </>
        )}
      </div>

      {photos.length > 1 && (
        <div ref={strip} className="flex gap-2 overflow-x-auto pb-1">
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1} of ${photos.length}`}
              aria-current={i === index}
              className={clsx(
                'relative aspect-3/2 w-24 shrink-0 overflow-hidden rounded-sm transition-opacity sm:w-28',
                i === index ? 'opacity-100 ring-2 ring-torchlight' : 'opacity-60 hover:opacity-100',
              )}
            >
              <Image src={p.src} alt="" fill sizes="112px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
