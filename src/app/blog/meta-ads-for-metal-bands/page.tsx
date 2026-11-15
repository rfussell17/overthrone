import { BlogPost } from '@/components/blog-post'
import { createMetadata, type Faq, type PostMeta } from '@/lib/post-metadata'
import Link from 'next/link'

/*
 * DRAFT article, written for the site and awaiting Overthrone's approval.
 * Search target: "Meta ads for metal bands" (see overthrone-sitemap-keywords.csv).
 * It makes no claims about Overthrone's results and quotes no prices or budgets.
 * No external sources are linked yet; add them where Overthrone wants a claim backed up.
 */
const slug = 'meta-ads-for-metal-bands'

export const postMeta: PostMeta = {
  title: 'Meta Ads for Metal Bands: How to Find Real Fans on Instagram and Facebook',
  description:
    'A practical guide to Meta ads for metal and heavy bands: picking one goal, targeting fans of similar bands, making the ad, and checking the results in Spotify for Artists.',
  date: '2026-11-15',
  category: 'Paid Ads',
  keywords: [
    'meta ads for metal bands',
    'facebook ads for bands',
    'instagram ads for musicians',
    'how to promote a metal band',
    'spotify growth ads',
    'music marketing for heavy bands',
  ],
}

export const metadata = createMetadata(slug, postMeta)

const faqs: Faq[] = [
  {
    question: 'Are Meta ads worth it for a small metal band?',
    answer:
      'They can be, if the song and the video are strong and the campaign has one clear goal. Ads put your music in front of people who already like similar bands. They cannot make those people care about a song that does not land.',
  },
  {
    question: 'Should the ad send people to Spotify or to Instagram?',
    answer:
      'It depends on the goal. For more listeners, send people toward the song on Spotify. For more followers, keep them on Instagram and send them to your profile. Trying to do both in one ad usually does neither well.',
  },
  {
    question: 'Can Meta show me how many streams an ad produced?',
    answer:
      'No. Meta can report clicks, but it cannot see what happens inside Spotify. Check Spotify for Artists during the campaign and compare listeners, saves and followers with the weeks before it.',
  },
  {
    question: 'How long should a campaign run before I judge it?',
    answer:
      'Longer than a weekend. Meta needs time to learn who responds, and Spotify needs time to react to new listeners. A few weeks of steady spend tells you far more than a few days of heavy spend.',
  },
  {
    question: 'Is it safe to pay for guaranteed streams or playlist placement?',
    answer:
      'Be careful. Spotify does not allow artificial streams and can remove music that has them. Advertising your music to real people on Instagram and Facebook is a different thing from buying a stream count.',
  },
  {
    question: 'Do Meta ads work for selling tickets?',
    answer:
      'Yes. Ads can be shown only to people near each venue, which makes them a good fit for a tour. Send people straight to the ticket page for that date.',
  },
]

const goals = [
  ['More followers', 'Your Instagram profile', 'New followers during the campaign'],
  ['More listeners', 'The song on Spotify', 'Listeners, saves and followers in Spotify for Artists'],
  ['A mailing list', 'A sign-up page', 'New sign-ups'],
  ['Ticket sales', 'The ticket page for that date', 'Tickets sold'],
]

export default function MetaAdsForMetalBandsPage() {
  return (
    <BlogPost
      slug={slug}
      post={postMeta}
      faqs={faqs}
      subtitle="Heavy music fans are easy to find online because they organize themselves around bands. That is exactly what Meta ads are good at."
      readTime="7 min read"
      tldr="Meta ads work for metal bands when each campaign has one job, targets fans of comparable bands and leads with the strongest seconds of the song. Judge the results in Spotify for Artists and your Instagram insights, not in the ad dashboard alone."
      tldrPoints={[
        'Pick one goal per campaign: followers, listeners, sign-ups or tickets.',
        'Target fans of bands that sound like you, not everyone who likes metal.',
        'Use vertical video and put the heaviest moment first.',
        'Meta cannot see Spotify streams, so check Spotify for Artists yourself.',
        'Run it for weeks, not days, before deciding whether it worked.',
      ]}
      ctaTitle="Want this run for you?"
      ctaSub="Tell us about your band, what you want to grow and your monthly budget. We will tell you what is realistic."
      keepReading={[
        { href: '/digital-marketing/meta-ads', label: 'Meta Ads for musicians: how we run campaigns' },
        { href: '/digital-marketing', label: 'Digital marketing for bands' },
        { href: '/social-media', label: 'Social media for bands' },
      ]}
    >
      <p>
        Most advice about advertising music is written for pop and hip-hop. Heavy music works a little differently. The
        audience is smaller, more loyal and far more specific about what it likes. A fan of one metalcore band can
        usually name ten more, and that habit is what makes Instagram and Facebook advertising useful for bands like
        yours.
      </p>
      <p>
        This guide covers how to set up Meta ads for a metal or heavy band: what to aim for, who to show the ad to, what
        the ad should look like and how to tell whether it worked.
      </p>

      <h2 id="do-meta-ads-work">Do Meta ads work for metal and heavy music?</h2>
      <p>
        Yes. Meta ads let you show a song, a video or a tour date to people who already follow bands like yours on
        Instagram and Facebook. Because heavy music fans gather around specific bands and subgenres, that targeting is
        unusually precise. What ads cannot do is rescue a weak song or a dull video.
      </p>
      <p>
        Think of an ad as an introduction. It gets your music in front of someone who has never heard of you. What
        happens next depends on the first few seconds they hear and on what they find when they reach your profile. That
        is why paid ads and <Link href="/social-media">what you post day to day</Link> work best together.
      </p>

      <h2 id="first-campaign-goal">What should a band&apos;s first campaign be for?</h2>
      <p>
        One thing. A campaign built to gain followers looks different from one built to gain listeners, and both look
        different from one that sells tickets. Choose the single result that matters most right now, send people to the
        one place where that result happens, and measure only that.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[32rem] border-collapse text-left text-[0.9375rem]">
          <caption className="sr-only">Campaign goals, where the ad sends people and what to measure</caption>
          <thead>
            <tr className="border-b-2 border-torchlight text-white">
              <th scope="col" className="py-3 pr-4 font-extrabold">
                If you want
              </th>
              <th scope="col" className="py-3 pr-4 font-extrabold">
                Send people to
              </th>
              <th scope="col" className="py-3 font-extrabold">
                Measure
              </th>
            </tr>
          </thead>
          <tbody>
            {goals.map(([goal, destination, measure]) => (
              <tr key={goal} className="border-b border-stone/60">
                <th scope="row" className="py-3 pr-4 font-extrabold text-white">
                  {goal}
                </th>
                <td className="py-3 pr-4">{destination}</td>
                <td className="py-3">{measure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        A release is the usual moment to start, but it is not the only one. A tour announcement, a new video or a back
        catalogue song that suddenly picks up are all good reasons to run a campaign.
      </p>

      <h2 id="who-to-target">Who should the ads target?</h2>
      <p>
        Fans of bands that sound like you. Meta lets you target people by interest, including interest in specific
        bands, so list the artists a listener would name alongside yours. Smaller bands are often not available as an
        interest, so mix a few larger names with the closest matches you can find, and leave out anything that only
        shares the word metal.
      </p>
      <p>There are three groups worth building, in this order:</p>
      <ol>
        <li>
          <strong>Fans of comparable bands.</strong> This is where new listeners come from. Be honest about who you
          sound like. A deathcore band and a power metal band share very few fans.
        </li>
        <li>
          <strong>People who have already engaged with you.</strong> Anyone who watched your videos or visited your
          profile is far more likely to follow, save or buy a ticket. These audiences are small but respond well.
        </li>
        <li>
          <strong>People near a show.</strong> For ticket sales, limit the ad to the area around each venue.
        </li>
      </ol>

      <aside aria-label="Work with us" className="rounded-md border border-torchlight p-7">
        <p className="text-xl font-extrabold text-white">Not sure which bands to target?</p>
        <p className="mt-2">
          That choice decides most of a campaign&apos;s result. Tell us who you sound like and what you want to grow,
          and we will tell you what is realistic.
        </p>
        <p className="mt-4">
          <Link href="/contact">Tell us about your band</Link>
        </p>
      </aside>

      <h2 id="what-the-ad-looks-like">What should the ad look like?</h2>
      <p>
        Vertical video with the song playing, and the strongest moment first. People decide in a second or two whether
        to keep watching, so open on the riff, the breakdown or the chorus, not on a logo or a slow build. Performance
        footage and live clips tend to feel more natural in a feed than a polished advert.
      </p>
      <p>A few things that help:</p>
      <ul>
        <li>Make several versions with different opening moments and let the results pick the winner.</li>
        <li>Keep text on screen short. The band name and the song title are enough.</li>
        <li>Make sure the clip works with the sound off for the first second, then rewards turning it on.</li>
        <li>Use the same song the ad is sending people to. A mismatch loses listeners at the click.</li>
      </ul>

      <h2 id="how-much-to-spend">How much should a band spend?</h2>
      <p>
        Meta lets you start with a few dollars a day, so the amount matters less than how long you can keep it running.
        A modest daily budget held steady for several weeks teaches you more than a large one spent over a weekend,
        because both Meta and Spotify need time to respond.
      </p>
      <p>
        Decide on a total you are comfortable spending before you start, split it across a few weeks, and do not change
        everything at once when the first days look slow. If you would like a view on what your budget can do, that is
        the first thing we cover when a band <Link href="/contact">gets in touch</Link>.
      </p>

      <h2 id="is-it-working">How do you know if it is working?</h2>
      <p>
        Look in the places where the result actually happens. Meta reports clicks and cost, but it cannot see inside
        Spotify. Open Spotify for Artists and compare listeners, saves and followers with the weeks before the campaign.
        For a follower campaign, check your Instagram insights instead.
      </p>
      <p>
        Saves and follows matter more than raw streams. A listener who saves the song is telling Spotify they want more
        of it, which is widely understood to be one of the signals behind its recommendations. A campaign that produces
        plays but no saves is probably reaching the wrong people.
      </p>

      <h2 id="common-mistakes">What are the most common mistakes?</h2>
      <p>
        Most wasted ad money comes from the same few habits: boosting a post with no goal, targeting everyone who likes
        metal, sending new listeners to a page with ten links, and stopping after two days. Each one is easy to fix once
        you know to look for it.
      </p>
      <ul>
        <li>
          <strong>No single goal.</strong> A boosted post collects likes. It rarely produces listeners or followers.
        </li>
        <li>
          <strong>Targeting too wide.</strong> Fans of the biggest bands in the genre are not automatically fans of
          yours.
        </li>
        <li>
          <strong>Too many choices after the click.</strong> Send people to one place with one thing to do.
        </li>
        <li>
          <strong>Judging too early.</strong> The first days of any campaign are the least reliable.
        </li>
        <li>
          <strong>Paying for a stream count.</strong> Spotify does not allow artificial streams and can remove music
          that has them.
        </li>
      </ul>

      <h2 id="diy-or-hire">Should you run the ads yourself or hire someone?</h2>
      <p>
        You can run them yourself, and plenty of bands do. It costs time more than anything: building the audiences,
        making the versions, checking the numbers every few days and adjusting. Hiring someone makes sense when that
        time is better spent writing, rehearsing and playing shows.
      </p>
      <p>
        Overthrone runs{' '}
        <Link href="/digital-marketing/meta-ads">Meta ad campaigns for heavy and alternative artists</Link>, alongside{' '}
        <Link href="/digital-marketing">the rest of our digital marketing work</Link>. If you would rather keep it
        in-house, we also offer one-on-one coaching for bands who want to run their own.
      </p>
    </BlogPost>
  )
}
