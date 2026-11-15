import fs from 'node:fs'
import path from 'node:path'

import type { Metadata } from 'next'

import { site } from '@/data/site'

export const SITE_URL = site.url
export const SITE_NAME = site.name
export const LOCALE = 'en_CA'
export const LANGUAGE = 'en-CA'
// TODO: add a branded 1200x630 share image at this path.
export const DEFAULT_OG_IMAGE = '/img/og-default.jpg'

const OG_SUFFIX = 'overthrone'

// TODO: set a named author per post once Overthrone decides who the blog is written as.
const AUTHOR = { '@type': 'Organization', name: SITE_NAME, url: SITE_URL }

const PUBLISHER = {
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.png` },
}

export type Faq = {
  question: string
  answer: string
  node?: React.ReactNode
}

export type PostMeta = {
  title: string
  description: string
  date: string
  category: string
  keywords: string[]
}

const postPath = (slug: string) => `/blog/${slug}`
const postUrl = (slug: string) => `${SITE_URL}${postPath(slug)}`

export function ogImageUrl(slug: string) {
  const rel = `/images/blog/${slug}_${OG_SUFFIX}.jpg`
  const exists = fs.existsSync(path.join(process.cwd(), 'public', rel))
  return exists ? rel : DEFAULT_OG_IMAGE
}

export function createMetadata(slug: string, { title, description, date, keywords = [] }: PostMeta): Metadata {
  const image = ogImageUrl(slug)
  return {
    title,
    description,
    keywords,
    alternates: { canonical: postPath(slug) },
    authors: [{ name: AUTHOR.name }],
    openGraph: {
      type: 'article',
      url: postPath(slug),
      title,
      description,
      siteName: SITE_NAME,
      locale: LOCALE,
      publishedTime: date,
      authors: [AUTHOR.name],
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      tags: keywords,
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  }
}

export function createArticleJsonLd(slug: string, { title, description, date, category, keywords = [] }: PostMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl(slug) },
    url: postUrl(slug),
    image: [`${SITE_URL}${ogImageUrl(slug)}`],
    author: AUTHOR,
    publisher: PUBLISHER,
    keywords: keywords.join(', '),
    inLanguage: LANGUAGE,
    articleSection: category,
    isPartOf: { '@type': 'Blog', name: `${SITE_NAME} Blog`, url: `${SITE_URL}/blog` },
  }
}

export function createBreadcrumbJsonLd(slug: string, title: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: title, item: postUrl(slug) },
    ],
  }
}

export function createFaqJsonLd(faqs: Faq[] = []) {
  if (!faqs.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}
