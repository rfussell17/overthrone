// TODO: provisional categories — replace once the blog plan is agreed.
export const CATEGORIES = ['Marketing', 'Design', 'Industry'] as const

export type Category = (typeof CATEGORIES)[number]

// Adding a category means adding an entry here, or it renders unstyled.
export const categoryTheme: Record<Category, { pill: string; card: string }> = {
  Marketing: { pill: 'bg-torchlight text-black', card: 'bg-torchlight text-black' },
  Design: { pill: 'bg-sand text-black', card: 'bg-sand text-black' },
  Industry: { pill: 'bg-stone text-white', card: 'bg-stone text-white' },
}
