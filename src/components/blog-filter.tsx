'use client'

import { CardTitle } from '@/components/elements/card-title'
import { clsx } from 'clsx/lite'
import Link from 'next/link'
import { useMemo, useState } from 'react'

import { categoryTheme, type Category } from '@/lib/blog-categories'
import { formatDate } from '@/lib/format-date'
import type { PostMeta } from '@/lib/post-metadata'

type Post = PostMeta & { slug: string }

export function BlogFilter({ posts }: { posts: Post[] }) {
  const categories = useMemo(() => Array.from(new Set(posts.map((post) => post.category))), [posts])
  const [active, setActive] = useState<string>('All')

  const visible = active === 'All' ? posts : posts.filter((post) => post.category === active)

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap gap-2">
        {['All', ...categories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={clsx(
              'rounded-sm px-3 py-1.5 font-mono text-xs font-normal tracking-widest uppercase transition',
              active === category
                ? (categoryTheme[category as Category]?.pill ?? 'bg-ink text-base')
                : 'bg-stone/30 text-ink/70 hover:bg-stone/50',
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex flex-col gap-4 rounded-2xl border border-ink/10 p-6 transition hover:border-ink/30"
          >
            <span
              className={clsx(
                'inline-block w-fit rounded-sm px-2.5 py-1 font-mono text-[10px] tracking-widest uppercase',
                categoryTheme[post.category as Category]?.pill ?? 'bg-stone text-ink',
              )}
            >
              {post.category}
            </span>
            <CardTitle>{post.title}</CardTitle>
            <p className="text-sm/6 text-ink/70">{post.description}</p>
            <time dateTime={post.date} className="font-mono text-xs text-ink/50">
              {formatDate(post.date)}
            </time>
          </Link>
        ))}
      </div>
    </div>
  )
}
