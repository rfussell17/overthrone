// The deck's four case studies were withdrawn on 15 Nov 2026: Quinn is sending a new list and fresh figures.
// Until then this stays empty and the homepage shows placeholder cards. Do not paste the old numbers back in.
export type CaseStudy = {
  slug: string // URL: /case-studies/<slug>
  artist: string
  genre: string
  period: string
  stats: { label: string; value: string }[]
  photo?: string
  summary?: string // one or two sentences for the case-study page
  work?: string[] // what Overthrone did, as short lines
}

export const caseStudies: CaseStudy[] = []

// Must accompany any figure marked with an asterisk.
export const caseStudyFootnote =
  '*Includes organic growth and algorithmic traffic for marketed assets after the campaign period.'
