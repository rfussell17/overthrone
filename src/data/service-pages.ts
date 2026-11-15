/*
 * Content for the service pages. ALL COPY HERE IS DRAFT, written for the site and awaiting Overthrone's approval.
 * Facts used: the service lists and "plus ad spend" pricing model from the Agency Overview, and Quinn's answers of
 * 15 Nov 2026. Search targets are in overthrone-sitemap-keywords.csv.
 */
export type ServicePage = {
  path: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  heading: string
  intro: string
  includedTitle: string
  included: { title: string; body: string; href?: string }[]
  steps?: { title: string; body: string }[]
  straightTalk?: { title: string; points: string[] }
  faqs: { q: string; a: string }[]
  related?: { label: string; href: string }[]
}

const steps = [
  {
    title: 'Tell us about the band',
    body: 'Fill in the inquiry form: who you are, what you need and your monthly budget.',
  },
  {
    title: 'Agree a goal',
    body: 'We settle on one thing to move first, such as followers, listeners, sign-ups or tickets.',
  },
  { title: 'Run the campaign', body: 'We build it, launch it and adjust it as the results come in.' },
  { title: 'See the numbers', body: 'You get a plain report of what was spent and what it produced.' },
]

export const digitalMarketing: ServicePage = {
  path: '/digital-marketing',
  metaTitle: 'Digital Marketing for Bands and Artists',
  metaDescription:
    'Ad campaigns and marketing strategy for heavy and alternative artists: Meta Ads, YouTube ads through Google, organic content strategy, social audits and coaching.',
  eyebrow: 'Digital Marketing',
  heading: 'Digital marketing for bands',
  intro:
    'Ad campaigns and strategy for heavy and alternative artists, built around numbers you can check: followers, listeners, sign-ups and tickets.',
  includedTitle: 'What we do',
  included: [
    {
      title: 'Meta Ads',
      body: 'Instagram and Facebook campaigns for followers, listeners, mailing list sign-ups and ticket sales.',
      href: '/digital-marketing/meta-ads',
    },
    { title: 'Google Ads for YouTube', body: 'Campaigns that grow views and subscribers on your YouTube channel.' },
    {
      title: 'Organic content strategy',
      body: 'A plan for what to post and when, so paid and unpaid work pull the same way.',
    },
    { title: 'Social audits', body: 'A review of your profiles and content, with a short list of what to fix first.' },
    {
      title: 'Calls and coaching',
      body: 'One-on-one calls for artists who want to run their own marketing with guidance.',
    },
  ],
  steps,
  straightTalk: {
    title: 'What to expect',
    points: [
      'We do not promise a stream count. Nobody honest can. We promise a clear goal and a full account of the results.',
      'Ad spend is separate from our fee, so you always know how much went into the ads themselves.',
      'Individual campaigns and monthly retainers are both available.',
    ],
  },
  faqs: [
    {
      q: 'What kind of artists do you work with?',
      a: 'Mostly heavy and alternative: metalcore, hard rock, metal, pop-punk and the music around them. If you are not sure you fit, ask.',
    },
    {
      q: 'How much does it cost?',
      a: 'It depends on the goal and the length of the campaign. Tell us your monthly budget in the inquiry form and we will say what is realistic for it. Prices are in US dollars.',
    },
    {
      q: 'Do you work with bands outside Canada?',
      a: 'Yes. We are based in Edmonton, Alberta, and most of our clients are in Canada and the United States.',
    },
    {
      q: 'Can you guarantee results?',
      a: 'No. We can show you what similar campaigns have done and report every number from yours, but we will not guarantee streams or followers.',
    },
  ],
  related: [
    { label: 'Meta Ads for bands', href: '/digital-marketing/meta-ads' },
    { label: 'Social media for bands', href: '/social-media' },
    { label: 'Case studies', href: '/case-studies' },
  ],
}

export const metaAds: ServicePage = {
  path: '/digital-marketing/meta-ads',
  metaTitle: 'Meta Ads for Musicians and Bands',
  metaDescription:
    'Instagram and Facebook ad campaigns for heavy and alternative artists. Grow followers and Spotify listeners, build your mailing list and sell tickets.',
  eyebrow: 'Digital Marketing',
  heading: 'Meta Ads for musicians',
  intro:
    'Instagram and Facebook ad campaigns for bands and artists. Each campaign has one job: more followers, more listeners, more sign-ups or more tickets sold.',
  includedTitle: 'What a campaign can do',
  included: [
    { title: 'Followers', body: 'Grow your Instagram following with people who actually like your kind of music.' },
    { title: 'Listeners', body: 'Send new listeners from Instagram and Facebook to your music on Spotify.' },
    {
      title: 'Mailing list',
      body: 'Build an email list you own, so you can reach fans without paying for it each time.',
    },
    { title: 'Ticket sales', body: 'Put your shows in front of people near each venue.' },
    { title: 'Retargeting', body: 'Follow up with people who have already watched, clicked or listened.' },
  ],
  steps,
  straightTalk: {
    title: 'What to expect',
    points: [
      'No guaranteed streams or followers. Results depend on the music, the creative and the budget.',
      'You can check the results yourself in Spotify for Artists and your Instagram insights.',
      'Ad spend is billed on top of our fee and is always shown separately.',
    ],
  },
  faqs: [
    {
      q: 'What are Meta Ads?',
      a: 'Paid adverts on Instagram and Facebook, both owned by Meta. For musicians they are the most direct way to put a song, a video or a show in front of people who do not follow you yet.',
    },
    {
      q: 'Do Meta Ads work for metal and heavy music?',
      a: 'Yes. Heavy and alternative artists are most of who we work with, and ads can be aimed at fans of similar bands.',
    },
    {
      q: 'How much should I budget?',
      a: 'It depends on the goal. Tell us your monthly budget, including ad spend, in the inquiry form and we will tell you what it can realistically do.',
    },
    {
      q: 'Can you guarantee streams?',
      a: 'No, and you should be wary of anyone who does. We report what was spent and what it produced.',
    },
    {
      q: 'Do you run YouTube ads too?',
      a: 'Yes. We run Google Ads campaigns to grow YouTube views and subscribers.',
    },
  ],
  related: [
    { label: 'All digital marketing services', href: '/digital-marketing' },
    { label: 'Case studies', href: '/case-studies' },
  ],
}

export const socialMedia: ServicePage = {
  path: '/social-media',
  metaTitle: 'Social Media for Bands and Artists',
  metaDescription:
    'Social media for heavy and alternative artists: Trial Reels campaigns, community management and content creation, including on-site shoots.',
  eyebrow: 'Social Media',
  heading: 'Social media for bands',
  intro:
    'Content and community for heavy and alternative artists. Ads bring new listeners in; what you post is what gives them a reason to stay.',
  includedTitle: 'What we do',
  // TODO: confirm with Quinn exactly what sits under Social Media.
  included: [
    {
      title: 'Trial Reels campaigns',
      body: 'Testing reels with people who do not follow you yet, to find what earns new fans.',
    },
    { title: 'Community management', body: 'Looking after the comments and messages so fans hear back.' },
    {
      title: 'Content creation',
      body: 'Planning and making content, including shoots on site in Canada, the US or Europe.',
    },
  ],
  faqs: [
    {
      q: 'What are Trial Reels?',
      a: 'An Instagram feature that shows a reel to people who do not follow you before your followers see it. It is a low-risk way to test ideas with a new audience.',
    },
    {
      q: 'Can this run alongside an ad campaign?',
      a: 'Yes, and it usually should. Ads work better when new visitors land on a profile with something worth watching.',
    },
    {
      q: 'How much does it cost?',
      a: 'It depends on how much content you need and how often. Tell us your monthly budget in the inquiry form and we will say what is realistic.',
    },
  ],
  related: [
    { label: 'Digital marketing for bands', href: '/digital-marketing' },
    { label: 'Case studies', href: '/case-studies' },
  ],
}
