import { Chevrons, PillLabel } from '@/components/brand/graphics'
import { StackedHeadline } from '@/components/brand/stacked-headline'
import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { Photo, Placeholder } from '@/components/elements/placeholder'
import { Subheading } from '@/components/elements/subheading'
import { Text } from '@/components/elements/text'
import { caseStudies, caseStudyFootnote } from '@/data/case-studies'
import { clients } from '@/data/clients'
import { pillars } from '@/data/services'
import { site } from '@/data/site'
import { team } from '@/data/team'
import Image from 'next/image'
import Link from 'next/link'

/*
 * SCAFFOLD HOMEPAGE
 * Structure follows Quinn's answers of 15 Nov 2026: marketing only, two service pillars, the list of 40 clients,
 * and every call to action leading to the inquiry form at /contact.
 * Copy marked DRAFT was written for the site and still needs Overthrone's approval.
 */

function Hero() {
  return (
    <section id="hero" className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
      {/* Static hero image. Swap the file at public/img/hero/overthrone-hero.jpg to change it. */}
      <Image src="/img/hero/overthrone-hero.jpg" alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/85 via-black/45 to-black/10" />
      <Container className="flex flex-col gap-8 py-20">
        <StackedHeadline as="h1" lines={['For', 'Those', 'Who', 'Refuse', 'To', 'Blend', 'In']} accent={3} withIcon />
        <Text size="lg" className="max-w-xl text-white">
          <p>{site.positioning}</p>
        </Text>
        <div className="flex flex-wrap items-center gap-4">
          <ButtonLink href="/contact" size="lg">
            Work with us
          </ButtonLink>
          <PlainButtonLink href="#what-we-do" size="lg" color="light">
            What we do
          </PlainButtonLink>
        </div>
      </Container>
    </section>
  )
}

function ValueStrip() {
  const steps = ['Tell your story', 'Find your audience', 'Expand your reach']
  return (
    <section aria-label="What we help you do" className="bg-torchlight py-8 text-black">
      <Container className="flex flex-col gap-y-3 font-display text-sm whitespace-nowrap sm:text-base lg:flex-row lg:items-center lg:justify-between lg:gap-x-6 lg:text-sm xl:text-base">
        {steps.map((step, i) => (
          <span key={step} className="contents">
            <span>{step}</span>
            {i < steps.length - 1 && <Chevrons className="hidden shrink-0 lg:block" />}
          </span>
        ))}
      </Container>
    </section>
  )
}

function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <div className="flex max-w-3xl flex-col gap-6">
          <PillLabel>What we do</PillLabel>
          <Subheading>Find your audience</Subheading>
          {/* DRAFT copy, awaiting approval. The deck's paragraphs described design services that are no longer offered. */}
          <Text size="lg">
            <p>
              Two things, done properly: paid campaigns that put your music in front of new listeners, and social
              content that gives them a reason to stay.
            </p>
          </Text>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {pillars.map((pillar) => (
            <article key={pillar.name} className="flex flex-col gap-5 rounded-md border border-stone/60 p-7">
              <h3 className="font-display text-lg/6 text-torchlight">{pillar.name}</h3>
              <p className="font-extrabold text-white">{pillar.summary}</p>
              <ul className="flex flex-col gap-2 text-sm/6 text-ink">
                {pillar.services.map((service) => (
                  <li key={service} className="flex gap-3">
                    <Chevrons className="mt-[0.45em] text-torchlight" />
                    {service}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Results() {
  return (
    <section id="results" className="border-y border-stone/40 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <div className="flex max-w-3xl flex-col gap-6">
          <PillLabel>Results</PillLabel>
          <Subheading>Growth you can count</Subheading>
        </div>
        {caseStudies.length === 0 ? (
          /* Placeholder cards until the new case studies arrive. Fill src/data/case-studies.ts and these disappear. */
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2, 3, 4].map((n) => (
              <article key={n} className="grid overflow-hidden rounded-md border border-stone/60 sm:grid-cols-5">
                <Placeholder label="Artist photo" ratio="none" className="min-h-56 rounded-none sm:col-span-2" />
                <div className="flex flex-col gap-4 p-6 sm:col-span-3">
                  <div>
                    <p className="text-xs/5 font-extrabold tracking-widest text-torchlight uppercase">
                      Digital Marketing | Case Study
                    </p>
                    <h3 className="mt-2 font-display text-xl/6 text-white">Case study {n}</h3>
                    <p className="mt-1 text-sm/6 text-ink/80">Genre · Campaign period</p>
                  </div>
                  <dl className="flex flex-col gap-2">
                    {['Streaming growth', 'Listener growth', 'Follower growth'].map((label) => (
                      <div
                        key={label}
                        className="flex items-baseline justify-between gap-4 border-t border-stone/50 pt-2"
                      >
                        <dt className="text-sm/6 text-torchlight">{label}</dt>
                        <dd className="text-lg/6 font-extrabold text-ink/40">To come</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2">
              {caseStudies.map((study) => (
                <article
                  key={study.artist}
                  className="grid overflow-hidden rounded-md border border-stone/60 sm:grid-cols-5"
                >
                  <Photo
                    src={study.photo}
                    alt={`${study.artist} press photo`}
                    label={`${study.artist} photo`}
                    ratio="none"
                    sizes="(min-width: 768px) 20vw, 100vw"
                    className="min-h-56 rounded-none sm:col-span-2"
                  />
                  <div className="flex flex-col gap-4 p-6 sm:col-span-3">
                    <div>
                      <p className="text-xs/5 font-extrabold tracking-widest text-torchlight uppercase">
                        Digital Marketing | Case Study
                      </p>
                      <h3 className="mt-2 font-display text-xl/6 text-white">{study.artist}</h3>
                      <p className="mt-1 text-sm/6 text-ink/80">
                        {study.genre} · {study.period}
                      </p>
                    </div>
                    <dl className="flex flex-col gap-2">
                      {study.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="flex items-baseline justify-between gap-4 border-t border-stone/50 pt-2"
                        >
                          <dt className="text-sm/6 text-torchlight">{stat.label}</dt>
                          <dd className="text-lg/6 font-extrabold text-white">{stat.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              ))}
            </div>
            <p className="text-xs/5 text-ink/70">{caseStudyFootnote}</p>
          </>
        )}
      </Container>
    </section>
  )
}

function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <div className="flex max-w-3xl flex-col gap-6">
          <PillLabel>Who we are</PillLabel>
          <Subheading>By musicians, for musicians</Subheading>
          {/* DRAFT copy, written at Quinn's request and awaiting his approval. */}
          <Text size="lg">
            <p>
              Overthrone is a digital marketing agency built by musicians, for musicians. We work with heavy and
              alternative artists who want a real audience, not a borrowed trend. We run the ad campaigns, shape the
              content and grow the following, then report back in numbers you can check: streams, listeners, followers,
              tickets.
            </p>
          </Text>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person) => (
            <article key={person.name} className="flex flex-col gap-5">
              <Photo
                src={person.photo}
                alt={`Portrait of ${person.name}`}
                label="Portrait"
                ratio="portrait"
                shape="capsule"
                sizes="160px"
                className="w-32"
              />
              <div>
                <h3 className="text-2xl/8 font-extrabold text-torchlight">{person.name}</h3>
                <p className="text-ink">{person.title}</p>
              </div>
              {person.bio && <p className="text-sm/6 text-ink/90">{person.bio}</p>}
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Clients() {
  return (
    <section id="clients" className="sand-panel bg-sand py-20 text-black sm:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex max-w-3xl flex-col gap-6">
          <PillLabel>Meet our clients</PillLabel>
          <Subheading>All hail the underground</Subheading>
        </div>
        {/* The definitive list of 40. Each thumbnail is a placeholder until a `photo` is set in src/data/clients.ts. */}
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client) => {
            const card = (
              <>
                <Photo
                  src={client.photo}
                  alt={`${client.name} press photo`}
                  label="Client photo"
                  ratio="square"
                  tone="sand"
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 46vw"
                />
                <span className="mt-3 block text-[1rem]/6 font-extrabold underline-offset-4 group-hover:underline">
                  {client.name}
                </span>
              </>
            )
            return (
              <li key={client.name}>
                {client.instagram ? (
                  <a href={client.instagram} rel="noopener" className="group block">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}

function CallToAction() {
  return (
    <section id="contact" className="bg-torchlight py-20 text-black sm:py-24">
      <Container className="flex flex-col items-start gap-8">
        <StackedHeadline lines={['Ready', 'to take', 'the next', 'step?']} color="black" />
        <p className="max-w-xl text-lg/8 font-normal">Let us know how we can help you.</p>
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center rounded-full bg-black px-6 py-2.5 text-sm/7 font-extrabold tracking-wide text-white hover:bg-stone"
        >
          Tell us about your band
        </Link>
      </Container>
    </section>
  )
}

export default function Page() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <WhatWeDo />
      <Results />
      <WhoWeAre />
      <Clients />
      <CallToAction />
    </>
  )
}
