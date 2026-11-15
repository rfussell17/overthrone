// Single source for site-wide facts. Values come from the Overthrone source-of-truth sheets.
export const site = {
  name: 'Overthrone',
  url: 'https://www.overthrone.ca', // TODO: confirm www vs bare domain before launch
  email: 'contact@overthrone.ca',
  tagline: 'For Those Who Refuse To Blend In.',
  // Quinn's wording, 15 Nov 2026
  positioning: 'A digital marketing agency by musicians, for musicians.',
  description:
    'Overthrone is a digital marketing agency by musicians, for musicians. Meta and Google ad campaigns and social media for heavy and alternative artists.',
  slogan: 'All Hail The Underground',
  cta: 'Ready to take the next step? Let us know how we can help you.',
  city: 'Edmonton',
  region: 'Alberta',
  country: 'CA',
  // "@overthrone.ca is our social handle". Instagram assumed; TODO: confirm other platforms.
  instagram: { handle: '@overthrone.ca', url: 'https://www.instagram.com/overthrone.ca/' },
  // No phone number anywhere on the site, at Overthrone's request.
}

export const nav = [
  { label: 'What we do', href: '/#what-we-do' },
  { label: 'Results', href: '/#results' },
  { label: 'Who we are', href: '/#who-we-are' },
  { label: 'Clients', href: '/#clients' },
]

// Shown in the footer only
export const footerNav = [...nav, { label: 'Podcast', href: '/podcast' }, { label: 'Contact', href: '/contact' }]
