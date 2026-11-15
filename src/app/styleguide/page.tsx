import { Chevrons, PillLabel } from '@/components/brand/graphics'
import { Flourish, IconMark, Wordmark } from '@/components/brand/logo'
import { StackedHeadline } from '@/components/brand/stacked-headline'
import { ArrowButtonLink, ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { Eyebrow } from '@/components/elements/eyebrow'
import { Heading } from '@/components/elements/heading'
import { Placeholder } from '@/components/elements/placeholder'
import { Subheading } from '@/components/elements/subheading'
import { Text } from '@/components/elements/text'
import type { Metadata } from 'next'

// Internal reference page for the build. Not linked from the site and hidden from search engines.
export const metadata: Metadata = { title: 'Style guide', robots: { index: false, follow: false } }

const colours = [
  { name: 'Black', hex: '#141515', className: 'bg-black text-white outline-1 outline-stone' },
  { name: 'Torchlight', hex: '#ff4c39', className: 'bg-torchlight text-black' },
  { name: 'White', hex: '#ffffff', className: 'bg-white text-black' },
  { name: 'Stone', hex: '#4c4645', className: 'bg-stone text-white' },
  { name: 'Sand', hex: '#f5e8dc', className: 'bg-sand text-black' },
]

const surfaces = [
  { name: 'On Black', panel: 'bg-black outline-1 outline-stone', marks: ['text-torchlight', 'text-white'] },
  { name: 'On Torchlight', panel: 'bg-torchlight', marks: ['text-black', 'text-white'] },
  { name: 'On White', panel: 'bg-white', marks: ['text-torchlight', 'text-black'] },
]

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-8 border-t border-stone/50 py-14">
      <Eyebrow>{title}</Eyebrow>
      {children}
    </section>
  )
}

export default function Page() {
  return (
    <Container className="py-16">
      <Heading>Style guide</Heading>
      <Text className="mt-4 max-w-2xl">
        <p>Colours, type, logos and building blocks for the Overthrone site, taken from the 2026 Brand Overview.</p>
      </Text>

      <div className="mt-12">
        <Block title="Colour">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
            {colours.map((c) => (
              <div key={c.name} className={`flex aspect-square flex-col justify-end rounded-md p-4 ${c.className}`}>
                <span className="font-extrabold">{c.name}</span>
                <span className="text-sm">{c.hex}</span>
              </div>
            ))}
          </div>
          <Text className="max-w-2xl text-sm/6">
            <p>
              Body copy on Torchlight is set in Black. White on Torchlight is 3.31:1, so keep it for large headings and
              the logo only.
            </p>
          </Text>
        </Block>

        <Block title="Typography">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="text-sm text-ink/70">Headline: Know</span>
              <span className="font-display text-3xl text-torchlight">Know</span>
              <span className="font-display text-xl text-ink">ABCDEFGHIJ 0123</span>
              <span className="know-95 font-display text-base text-ink">95% width</span>
              <span className="know-75 font-display text-base text-ink">75% width</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-ink/70">Copy: JUST Sans</span>
              <span className="text-3xl font-extrabold text-white">ExBold 800</span>
              <span className="text-3xl font-normal text-white">Regular 400</span>
              <span className="text-3xl font-light text-white">Light 300</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-ink/70">Accent: Badger</span>
              <span className="font-accent text-5xl text-white">Refuse</span>
              <span className="text-sm/6 text-ink/70">Only as the overwritten word in a Know headline.</span>
            </div>
          </div>
          <Heading>Page heading</Heading>
          <Subheading>Section subheading</Subheading>
          <Text size="lg" className="max-w-2xl">
            <p>
              Large body text. Our work extends across storytelling-driven social media campaigns, email marketing, and
              content strategy.
            </p>
          </Text>
          <Text className="max-w-2xl">
            <p>Standard body text. Every project begins with understanding your story and goals.</p>
          </Text>
        </Block>

        <Block title="Signature headline">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-md p-8 outline-1 outline-stone">
              <StackedHeadline
                lines={['For', 'Those', 'Who', 'Refuse', 'To', 'Blend', 'In']}
                accent={3}
                size="md"
                withIcon
              />
            </div>
            <div className="rounded-md bg-torchlight p-8">
              <StackedHeadline
                lines={['Punchy', 'Headline', 'Quote']}
                accent={1}
                color="black"
                size="md"
              />
            </div>
          </div>
        </Block>

        <Block title="Logos">
          <div className="grid gap-6 lg:grid-cols-3">
            {surfaces.map((s) => (
              <div key={s.name} className={`flex flex-col gap-8 rounded-md p-8 ${s.panel}`}>
                {s.marks.map((mark) => (
                  <div key={mark} className={`flex flex-col gap-5 ${mark}`}>
                    <Wordmark className="h-4 w-auto self-start" />
                    <div className="flex items-center gap-6">
                      <IconMark className="h-14 w-auto" />
                      <Flourish className="h-5 w-auto" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Block>

        <Block title="Graphic system">
          <div className="flex flex-wrap items-center gap-4">
            <PillLabel>Who we are</PillLabel>
            <PillLabel>What we do</PillLabel>
            <PillLabel>Meet our clients</PillLabel>
          </div>
          <div className="flex flex-wrap items-center gap-8 text-3xl text-torchlight">
            <Chevrons />
            <Chevrons direction="down" />
            <Chevrons direction="left" />
            <Chevrons direction="up" />
          </div>
          <p className="flex flex-wrap items-center gap-5 font-display text-lg text-torchlight">
            Shape <Chevrons /> Create <Chevrons /> Narrate
          </p>
        </Block>

        <Block title="Buttons">
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href="#">Primary</ButtonLink>
            <ButtonLink href="#" size="lg">
              Primary large
            </ButtonLink>
            <ArrowButtonLink href="#">With arrow</ArrowButtonLink>
            <ArrowButtonLink href="#" variant="secondary">
              Secondary
            </ArrowButtonLink>
            <PlainButtonLink href="#">Plain</PlainButtonLink>
          </div>
        </Block>

        <Block title="Image placeholders">
          <Text className="max-w-2xl text-sm/6">
            <p>
              Use the Placeholder wherever an image has not been supplied, with a label naming what belongs there. The
              Photo component shows it automatically until it is given a file.
            </p>
          </Text>
          <div className="grid grid-cols-2 items-start gap-4 lg:grid-cols-4">
            <Placeholder label="Artist photo" ratio="landscape" />
            <Placeholder label="Cover artwork" ratio="square" />
            <Placeholder label="Video still" ratio="wide" />
            <Placeholder label="Portrait" ratio="portrait" shape="capsule" className="w-32" />
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-md bg-sand p-6">
              <div className="grid grid-cols-3 gap-4">
                <Placeholder label="Client logo" ratio="logo" tone="sand" />
                <Placeholder label="Client logo" ratio="logo" tone="sand" />
                <Placeholder label="Client logo" ratio="logo" tone="sand" />
              </div>
            </div>
            <div className="rounded-md bg-torchlight p-6">
              <div className="grid grid-cols-3 gap-4">
                <Placeholder label="Merch" ratio="logo" tone="torch" />
                <Placeholder label="Merch" ratio="logo" tone="torch" />
                <Placeholder label="Merch" ratio="logo" tone="torch" />
              </div>
            </div>
          </div>
        </Block>
      </div>
    </Container>
  )
}
