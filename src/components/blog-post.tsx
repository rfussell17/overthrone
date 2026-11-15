import NextLink from 'next/link'
import type { ReactNode } from 'react'

import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { categoryTheme, type Category } from '@/lib/blog-categories'
import { formatDate } from '@/lib/format-date'
import {
  createArticleJsonLd,
  createBreadcrumbJsonLd,
  createFaqJsonLd,
  type Faq,
  type PostMeta,
} from '@/lib/post-metadata'

type KeepReadingLink = { href: string; label: string }

export function BlogPost({
  slug,
  post,
  faqs,
  subtitle,
  readTime,
  tldr,
  tldrPoints,
  ctaTitle,
  ctaSub,
  ctaHref = '/inquire',
  ctaLabel = 'Inquire',
  keepReading,
  faqHeadingId = 'faq',
  children,
}: {
  slug: string
  post: PostMeta
  faqs: Faq[]
  subtitle: ReactNode
  readTime: string
  tldr: ReactNode
  tldrPoints: ReactNode[]
  ctaTitle: ReactNode
  ctaSub?: ReactNode
  ctaHref?: string
  ctaLabel?: string
  keepReading: KeepReadingLink[]
  faqHeadingId?: string
  children: ReactNode
}) {
  const articleJsonLd = createArticleJsonLd(slug, post)
  const breadcrumbJsonLd = createBreadcrumbJsonLd(slug, post.title)
  const faqJsonLd = createFaqJsonLd(faqs)
  const theme = categoryTheme[post.category as Category]

  return (
    <article className="relative py-16 sm:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <NextLink
          href="/blog"
          className="inline-flex items-center gap-2 font-sans text-sm/7 text-ink/70 transition hover:text-torchlight"
        >
          <span aria-hidden="true">←</span> Back to blog
        </NextLink>

        <header className="article-measure mt-10">
          <span
            className={`inline-block rounded-sm px-3 py-1.5 font-mono text-[11px] font-normal tracking-widest uppercase ${theme?.pill ?? 'bg-stone text-ink'}`}
          >
            {post.category}
          </span>
          <h1 className="mt-6 font-display text-4xl leading-[1.1] font-semibold tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 font-sans text-xl leading-relaxed text-pretty text-ink/80 italic">{subtitle}</p>
          <div className="mt-8 flex items-center gap-4 border-t border-ink/10 pt-6">
            <div>
              <div className="font-sans text-sm font-medium text-ink">Overthrone</div>
              <div className="mt-0.5 flex items-center gap-2 font-mono text-xs text-ink/60">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="opacity-50">•</span>
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </header>

        <aside className="article-measure tldr-callout mt-16">
          <div className="tldr-label">TL;DR</div>
          <p className="tldr-summary">{tldr}</p>
          <ul>
            {tldrPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </aside>

        <div className="article-measure article-prose mt-14">
          {children}

          <h2 id={faqHeadingId}>Frequently Asked Questions</h2>
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.node ?? faq.answer}</p>
            </div>
          ))}
        </div>

        <aside className="article-measure article-cta mt-20">
          <div className="cta-label">Plan your visit</div>
          <h3 className="cta-title">{ctaTitle}</h3>
          {ctaSub && <p className="cta-sub">{ctaSub}</p>}
          <a className="cta-btn" href={ctaHref}>
            {ctaLabel} <ArrowNarrowRightIcon />
          </a>
        </aside>

        {keepReading.length > 0 && (
          <section className="article-measure tldr-callout mt-20">
            <div className="tldr-label">Keep reading</div>
            <ul style={{ margin: 0 }}>
              {keepReading.map((link) => (
                <li key={link.href}>
                  <NextLink href={link.href} className="hover:underline">
                    {link.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  )
}
