import { DocumentCentered } from '@/components/sections/document-centered'
import { site } from '@/data/site'
import type { Metadata } from 'next'

/*
 * DRAFT privacy policy. It describes what the site actually does (inquiry form through Netlify, analytics and a
 * Meta pixel that are planned but not yet installed). It has NOT been reviewed by a lawyer.
 * TODO before launch: have Overthrone review it, and update the "Analytics and advertising" section to match the
 * tools that are really installed.
 */
export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Overthrone collects, uses and protects personal information submitted through this website.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <DocumentCentered headline="Privacy policy" subheadline={<p>Last updated November 2026.</p>}>
      <p>
        This policy explains what personal information {site.name} collects through this website, why, and what you can
        do about it. {site.name} is based in {site.city}, {site.region}, Canada.
      </p>

      <h2>What we collect</h2>
      <p>When you send the inquiry form, we collect what you enter:</p>
      <ul>
        <li>your name and email address</li>
        <li>your band or artist name and Spotify link</li>
        <li>the services you are interested in and your monthly budget</li>
        <li>anything you write in the message field</li>
      </ul>
      <p>If you email us directly, we receive your email address and whatever you send.</p>

      <h2>How we use it</h2>
      <p>
        We use this information to reply to your inquiry and, if we work together, to plan and deliver that work. We do
        not sell personal information, and we do not add you to a mailing list unless you ask us to.
      </p>

      <h2>Who else handles it</h2>
      <p>
        The website is hosted by Netlify, which also receives and stores form submissions on our behalf. Our email is
        provided by Google Workspace. These providers may store data outside Canada.
      </p>

      <h2>Analytics and advertising</h2>
      <p>
        We may use analytics to see how the site is used, and a Meta pixel to measure and improve our own advertising on
        Instagram and Facebook. These tools can set cookies in your browser. You can block or delete cookies in your
        browser settings.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep inquiries for as long as needed to respond and to maintain a record of our dealings with you, and delete
        them when they are no longer needed.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask to see the personal information we hold about you, ask us to correct it, or ask us to delete it.
        Email <a href={`mailto:${site.email}`}>{site.email}</a> and we will respond.
      </p>

      <h2>Changes</h2>
      <p>If this policy changes, the new version will be posted on this page with a new date.</p>
    </DocumentCentered>
  )
}
