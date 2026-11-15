'use client'

import { Button } from '@/components/elements/button'
import { budgetOptions, FORM_NAME, serviceOptions } from '@/data/contact-form'
import { site } from '@/data/site'
import { useState, type FormEvent } from 'react'

const field =
  'w-full rounded-md border border-stone bg-black px-4 py-3 text-[1rem]/6 text-white placeholder:text-ink/40 focus:border-torchlight focus:outline-2 focus:outline-offset-2 focus:outline-torchlight'
const label = 'text-sm/6 font-extrabold tracking-wide text-ink'

/**
 * Inquiry form, handled by Netlify Forms. Submissions post to /__forms.html (the static copy Netlify detects),
 * so the field names here must match public/__forms.html exactly.
 */
export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    const data = new FormData(event.currentTarget)
    const body = new URLSearchParams()
    data.forEach((value, key) => body.append(key, String(value)))
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!response.ok) throw new Error(String(response.status))
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="rounded-md border border-torchlight p-8">
        <h2 className="font-display text-xl/7 text-torchlight">Got it</h2>
        <p className="mt-3 text-lg/8 text-ink">Thanks for the details. We will be in touch by email.</p>
      </div>
    )
  }

  return (
    <form name={FORM_NAME} onSubmit={onSubmit} className="flex flex-col gap-7">
      <input type="hidden" name="form-name" value={FORM_NAME} />
      {/* Honeypot: hidden from people, filled in by bots */}
      <p hidden>
        <label>
          Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-7 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={label}>Your name</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="flex flex-col gap-2">
          <span className={label}>Email</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="flex flex-col gap-2">
          <span className={label}>Band or artist name</span>
          <input name="artist" required className={field} />
        </label>
        <label className="flex flex-col gap-2">
          <span className={label}>Spotify link</span>
          <input
            name="spotify"
            type="url"
            inputMode="url"
            placeholder="https://open.spotify.com/artist/..."
            className={field}
          />
        </label>
      </div>

      <fieldset className="flex flex-col gap-3">
        <legend className={label}>What do you need help with?</legend>
        <div className="mt-3 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {serviceOptions.map((option) => (
            <label key={option} className="flex min-h-6 items-center gap-3 text-[1rem]/6 text-ink">
              <input type="checkbox" name="services" value={option} className="size-5 shrink-0 accent-torchlight" />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex flex-col gap-2 sm:max-w-sm">
        <span className={label}>Monthly budget (USD), including ad spend</span>
        <select name="budget" required defaultValue="" className={field}>
          <option value="" disabled>
            Choose a range
          </option>
          {budgetOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className={label}>Anything else we should know? (optional)</span>
        <textarea name="message" rows={5} className={field} />
      </label>

      <div className="flex flex-wrap items-center gap-5">
        <Button type="submit" size="lg" disabled={status === 'sending'} className="disabled:opacity-60">
          {status === 'sending' ? 'Sending' : 'Send inquiry'}
        </Button>
        {status === 'error' && (
          <p role="alert" className="text-sm/6 text-white">
            That did not send. Try again, or email{' '}
            <a href={`mailto:${site.email}`} className="font-extrabold text-torchlight underline">
              {site.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  )
}
