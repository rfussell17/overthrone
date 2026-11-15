import localFont from 'next/font/local'

// Headline — Know (single weight, set in capitals).
export const know = localFont({
  src: '../fonts/Know-Regular.woff2',
  variable: '--font-know',
  weight: '400',
  display: 'swap',
})

// Copy — JUST Sans. Light for body, Regular where more weight helps legibility, ExBold for emphasis and labels.
export const justSans = localFont({
  src: [
    { path: '../fonts/JUSTSans-Light.woff2', weight: '300', style: 'normal' },
    { path: '../fonts/JUSTSans-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/JUSTSans-ExBold.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-just-sans',
  display: 'swap',
})

// Accent — Badger. Only for the single hand-written word that overwrites part of a Know headline.
// Not preloaded: it is decorative and used once or twice per page.
export const badger = localFont({
  src: '../fonts/Badger-Regular.woff2',
  variable: '--font-badger',
  weight: '400',
  display: 'swap',
  preload: false,
})
