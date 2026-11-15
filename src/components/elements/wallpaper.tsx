import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

const html = String.raw

const noisePattern = `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  html`
    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 100 100">
      <filter id="n">
        <feTurbulence type="turbulence" baseFrequency="1.4" numOctaves="1" seed="2" stitchTiles="stitch" result="n" />
        <feComponentTransfer result="g">
          <feFuncR type="linear" slope="4" intercept="1" />
          <feFuncG type="linear" slope="4" intercept="1" />
          <feFuncB type="linear" slope="4" intercept="1" />
        </feComponentTransfer>
        <feColorMatrix type="saturate" values="0" in="g" />
      </filter>
      <rect width="100%" height="100%" filter="url(#n)" />
    </svg>
  `.replace(/\s+/g, ' '),
)}")`

export function Wallpaper({
  children,
  color,
  className,
  ...props
}: { color: 'green' | 'blue' | 'purple' | 'brown' } & ComponentProps<'div'>) {
  return (
    <div
      data-color={color}
      className={clsx(
        'relative overflow-hidden bg-linear-to-b data-[color=blue]:from-[#637c86] data-[color=blue]:to-[#778599] data-[color=brown]:from-[#8d7359] data-[color=brown]:to-[#765959] data-[color=green]:from-stone data-[color=green]:to-ink data-[color=purple]:from-[#7b627d] data-[color=purple]:to-[#8f6976] sand:data-[color=blue]:from-[#243a42] sand:data-[color=blue]:to-[#232f40] sand:data-[color=brown]:from-[#382d23] sand:data-[color=brown]:to-[#3d2323] sand:data-[color=green]:from-ink sand:data-[color=green]:to-black sand:data-[color=purple]:from-[#412c42] sand:data-[color=purple]:to-[#3c1a26]',
        className,
      )}
      {...props}
    >
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay sand:opacity-25"
        style={{
          backgroundPosition: 'center',
          backgroundImage: noisePattern,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
