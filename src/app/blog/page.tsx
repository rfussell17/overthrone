import fs from 'node:fs'
import path from 'node:path'

import type { Metadata } from 'next'

import { BlogFilter } from '@/components/blog-filter'
import { PillLabel } from '@/components/brand/graphics'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Text } from '@/components/elements/text'
import type { PostMeta } from '@/lib/post-metadata'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Practical music marketing guides for heavy and alternative artists: paid ads, social media and release strategy.',
  alternates: { canonical: '/blog' },
}

// Every folder in src/app/blog with a page.tsx that exports `postMeta` is listed here automatically.
async function getPosts() {
  const dir = path.join(process.cwd(), 'src/app/blog')
  const slugs = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(dir, entry.name, 'page.tsx')))
    .map((entry) => entry.name)

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`@/app/blog/${slug}/page`)
      const postMeta = mod.postMeta as PostMeta | undefined
      return postMeta ? { slug, ...postMeta } : null
    }),
  )

  return posts
    .filter((post): post is PostMeta & { slug: string } => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export default async function BlogIndex() {
  const posts = await getPosts()

  return (
    <section className="py-16 sm:py-24">
      <Container className="flex flex-col gap-14">
        <div className="flex flex-col items-start gap-7">
          <PillLabel>Blog</PillLabel>
          <Heading className="max-w-5xl">Marketing for heavy music</Heading>
          <Text size="lg" className="max-w-2xl">
            <p>Practical guides on paid ads, social media and release strategy for heavy and alternative artists.</p>
          </Text>
        </div>
        <BlogFilter posts={posts} />
      </Container>
    </section>
  )
}
