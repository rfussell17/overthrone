# Overthrone website

Next.js (App Router) + Tailwind CSS, deployed on Netlify. Started from the Stillwood codebase, itself based on the
Tailwind Plus "Oatmeal" template (see LICENSE.md).

## Run it

```
npm install
npm run dev
```

Open http://localhost:3000. The internal style guide is at /styleguide.

## Where things live

- `src/app/` — pages: `page.tsx` (scaffold homepage), `contact/` (inquiry form), `podcast/` (holding page),
  `styleguide/` (build reference, hidden from search).
- `src/app/globals.css` — brand colours and font tokens.
- `src/app/fonts.ts` — font loading (Know, JUST Sans, Badger) from `src/fonts/`.
- `src/components/brand/` — logos (`logo.tsx`), stacked headline, pill labels, chevrons.
- `src/components/elements/placeholder.tsx` — `Placeholder` and `Photo`. Use `Photo` for every image slot; it shows
  the standard placeholder until it is given a `src`.
- `src/components/contact-form.tsx` — the inquiry form (see below).
- `src/components/sections/` — reusable page sections carried over from the template, recoloured for Overthrone.
- `src/data/` — site facts, services, team, the 40 clients, case studies and form options, taken from the
  source-of-truth sheets.
- `../brand/` — original logo EPS files and font files.

## Contact form

The form uses Netlify Forms. Netlify does not scan Next.js pages, so `public/__forms.html` holds a plain HTML copy
of the fields for it to detect, and the React form posts to that file. If you add or rename a field, change it in
both places (options live in `src/data/contact-form.ts`). Form detection must be switched on in the Netlify site
settings, and submissions only work on a Netlify deploy, not in `npm run dev`.

## Before this goes public

- Web licences for Know, JUST Sans and Badger are not confirmed.
- Case studies are placeholders until Overthrone sends the new list and figures (`src/data/case-studies.ts`).
- Homepage copy marked DRAFT needs Overthrone's approval.
- Search for `TODO` to find everything waiting on a decision.
