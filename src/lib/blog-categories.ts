// Blog categories. They mirror the content clusters in the keyword plan; change them there first.
export const CATEGORIES = ['Paid Ads', 'Social Media', 'Strategy'] as const

export type Category = (typeof CATEGORIES)[number]

// Adding a category means adding an entry here, or it renders unstyled.
export const categoryTheme: Record<Category, { pill: string; card: string }> = {
  'Paid Ads': { pill: 'bg-torchlight text-black', card: 'bg-torchlight text-black' },
  'Social Media': { pill: 'bg-sand text-black', card: 'bg-sand text-black' },
  Strategy: { pill: 'bg-stone text-white', card: 'bg-stone text-white' },
}
