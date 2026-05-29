import { useState } from 'react'
import { trackEvent } from '../utils/analytics.js'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    trackEvent('newsletter_signup', { method: 'footer_form' })
    setDone(true)
  }

  return (
    <section aria-labelledby="newsletter-h" className="panel bg-burgundy/30 p-8 sm:p-10">
      <span className="label-retro">The Garage Dispatch</span>
      <h2 id="newsletter-h" className="mt-2 text-3xl text-cream">
        Join 9,000+ enthusiasts on our monthly newsletter
      </h2>
      <p className="mt-3 max-w-2xl text-creamsoft/90">
        One thoughtful email a month: a featured restoration, a road-trip route worth driving,
        a shop tip, and a reader car of the month. No spam, no affiliate clutter — just the
        stories and craft we love. Unsubscribe any time with one click.
      </p>
      {done ? (
        <p className="mt-6 rounded-xl border border-burnt/40 bg-ink/60 px-5 py-4 text-cream">
          Thank you — your subscription is noted. Watch your inbox for the next issue of The
          Garage Dispatch.
        </p>
      ) : (
        <form onSubmit={submit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <label htmlFor="nl-email" className="sr-only">
            Email address
          </label>
          <input
            id="nl-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-chromedark/40 bg-ink/70 px-4 py-3 text-cream placeholder-chromedark focus:border-burnt focus:outline-none sm:max-w-sm"
          />
          <button type="submit" className="btn-primary">
            Subscribe
          </button>
        </form>
      )}
    </section>
  )
}
