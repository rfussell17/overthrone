import { Photo, Placeholder } from '@/components/elements/placeholder'
import { caseStudies, caseStudyFootnote } from '@/data/case-studies'
import Link from 'next/link'

/** Case-study cards. Shows four placeholder cards while src/data/case-studies.ts is empty. */
export function CaseStudyGrid() {
  return (
    <>
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
                    <h3 className="mt-2 font-display text-xl/6 text-white">
                      <Link href={`/case-studies/${study.slug}`} className="hover:text-torchlight">
                        {study.artist}
                      </Link>
                    </h3>
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
    </>
  )
}
