'use client'

import { clsx } from 'clsx/lite'
import Image from 'next/image'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export type GalleryPhoto = { src: string; width: number; height: number; alt: string; group?: string }

/**
 * Masonry photo grid with a keyboard-navigable lightbox.
 * Pass `groups` to show a filter row (photos are matched on `photo.group`); `pageSize` adds "Show more" paging.
 */
export function PhotoGallery({
  photos,
  groups,
  groupLabel = (g) => g,
  pageSize,
  columns = 4,
}: {
  photos: GalleryPhoto[]
  groups?: string[]
  groupLabel?: (group: string) => string
  pageSize?: number
  columns?: 3 | 4
}) {
  const [group, setGroup] = useState('all')
  const [shown, setShown] = useState(pageSize ?? photos.length)
  const [open, setOpen] = useState<number | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)

  const filtered = useMemo(() => (group === 'all' ? photos : photos.filter((p) => p.group === group)), [photos, group])
  const visible = filtered.slice(0, shown)

  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + filtered.length) % filtered.length)),
    [filtered.length],
  )

  useEffect(() => {
    const d = dialog.current
    if (!d) return
    if (open !== null && !d.open) d.showModal()
    if (open === null && d.open) d.close()
  }, [open])

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, step])

  const current = open === null ? null : filtered[open]

  return (
    <div className="flex flex-col gap-10">
      {groups && (
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos">
          {['all', ...groups].map((g) => (
            <button
              key={g}
              type="button"
              aria-pressed={group === g}
              onClick={() => {
                setGroup(g)
                setShown(pageSize ?? photos.length)
              }}
              className={clsx(
                'rounded-full px-4 py-1.5 font-mono text-xs/6 tracking-widest uppercase transition-colors',
                group === g ? 'bg-ink text-base' : 'bg-ink/5 text-ink hover:bg-ink/10',
              )}
            >
              {g === 'all' ? `All (${photos.length})` : groupLabel(g)}
            </button>
          ))}
        </div>
      )}

      <div className={clsx('columns-2 gap-3 sm:columns-3', columns === 4 && 'lg:columns-4')}>
        {visible.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setOpen(i)}
            className="mb-3 block w-full overflow-hidden rounded-sm bg-stone/40 focus-visible:outline-2 focus-visible:outline-torchlight"
            aria-label={`Open photo ${i + 1} of ${filtered.length}: ${p.alt}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={p.width}
              height={p.height}
              sizes={
                columns === 4
                  ? '(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw'
                  : '(min-width: 640px) 33vw, 50vw'
              }
              className="h-auto w-full transition-transform duration-300 hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {shown < filtered.length && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setShown((n) => n + (pageSize ?? filtered.length))}
            className="rounded-full bg-ink/10 px-6 py-2.5 font-sans text-sm/7 font-medium text-ink hover:bg-ink/15"
          >
            Show more photos ({filtered.length - shown} remaining)
          </button>
        </div>
      )}

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === dialog.current && setOpen(null)}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/85"
      >
        {current && (
          <div className="flex flex-col items-center gap-4">
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="90vw"
              className="max-h-[80vh] w-auto max-w-[92vw] rounded-sm object-contain"
            />
            <div className="flex items-center gap-6 font-mono text-xs/6 tracking-widest text-white/80 uppercase">
              <button type="button" onClick={() => step(-1)} className="px-3 py-1 hover:text-white">
                ← Prev
              </button>
              <span>
                {(open ?? 0) + 1} / {filtered.length}
                {current.group ? ` · ${groupLabel(current.group)}` : ''}
              </span>
              <button type="button" onClick={() => step(1)} className="px-3 py-1 hover:text-white">
                Next →
              </button>
              <button type="button" onClick={() => setOpen(null)} className="px-3 py-1 hover:text-white">
                Close
              </button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  )
}
