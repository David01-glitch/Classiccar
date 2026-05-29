import { useState } from 'react'
import Seo from '../components/Seo.jsx'
import { PageHeader } from '../components/UI.jsx'
import { SITE } from '../data/site.js'
import { trackEvent } from '../utils/analytics.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', topic: 'General', message: '' })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const submit = (e) => {
    e.preventDefault()
    trackEvent('contact_submit', { topic: form.topic })
    setSent(true)
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    image: `${SITE.url}/og-image.jpg`,
    email: SITE.email,
    telephone: SITE.phone,
    url: `${SITE.url}/contact`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: SITE.address.country
    },
    openingHours: 'Mo-Fr 09:00-17:00'
  }

  return (
    <>
      <Seo
        path="/contact"
        title="Contact"
        description="Contact Classic Car Memories in Detroit, MI. Email, phone, mailing address, and a contact form for restoration questions and story submissions."
        jsonLd={jsonLd}
      />
      <PageHeader
        label="Get in Touch"
        title="We answer every message ourselves"
        intro="Questions about a restoration, a correction to an article, or a project you want to share — this is the fastest way to reach the team."
      />

      <div className="container-ed py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            {sent ? (
              <div className="panel p-8">
                <h2 className="font-display text-2xl text-cream">Thank you — message noted</h2>
                <p className="mt-3 text-creamsoft/90">
                  Thanks, {form.name || 'friend'}. We have your note and will reply to{' '}
                  <strong>{form.email || 'your email'}</strong> within two business days. For
                  anything urgent, call us at {SITE.phone}.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="panel space-y-5 p-6 sm:p-8" aria-label="Contact form">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className="mb-1 block text-sm font-semibold text-cream">
                      Name
                    </label>
                    <input
                      id="c-name"
                      required
                      value={form.name}
                      onChange={update('name')}
                      className="w-full rounded-xl border border-chromedark/40 bg-ink/70 px-4 py-3 text-cream placeholder-chromedark focus:border-burnt focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="mb-1 block text-sm font-semibold text-cream">
                      Email
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update('email')}
                      className="w-full rounded-xl border border-chromedark/40 bg-ink/70 px-4 py-3 text-cream placeholder-chromedark focus:border-burnt focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="c-topic" className="mb-1 block text-sm font-semibold text-cream">
                    Topic
                  </label>
                  <select
                    id="c-topic"
                    value={form.topic}
                    onChange={update('topic')}
                    className="w-full rounded-xl border border-chromedark/40 bg-ink/70 px-4 py-3 text-cream focus:border-burnt focus:outline-none"
                  >
                    <option>General</option>
                    <option>Restoration question</option>
                    <option>Submit my project</option>
                    <option>Road trip</option>
                    <option>Correction or feedback</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="c-message" className="mb-1 block text-sm font-semibold text-cream">
                    Message
                  </label>
                  <textarea
                    id="c-message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={update('message')}
                    className="w-full rounded-xl border border-chromedark/40 bg-ink/70 px-4 py-3 text-cream placeholder-chromedark focus:border-burnt focus:outline-none"
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Send message
                </button>
                <p className="text-xs text-chromedark">
                  Prefer email? Write to us directly at{' '}
                  <a href={`mailto:${SITE.email}`} className="link-inline">
                    {SITE.email}
                  </a>
                  .
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="panel p-6">
              <h2 className="font-display text-lg text-cream">Business details</h2>
              <address className="mt-3 space-y-3 text-sm not-italic text-creamsoft/90">
                <p>
                  <span className="block text-chromedark">Mailing address</span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
                </p>
                <p>
                  <span className="block text-chromedark">Phone</span>
                  <a href={`tel:${SITE.phoneHref}`} className="link-inline">
                    {SITE.phone}
                  </a>
                </p>
                <p>
                  <span className="block text-chromedark">Email</span>
                  <a href={`mailto:${SITE.email}`} className="link-inline break-all">
                    {SITE.email}
                  </a>
                </p>
                <p>
                  <span className="block text-chromedark">Hours</span>
                  Monday–Friday, 9:00am–5:00pm ET
                </p>
              </address>
            </div>
            <div className="panel p-6">
              <h2 className="font-display text-lg text-cream">Response time</h2>
              <p className="mt-2 text-sm text-creamsoft/85">
                We are a small team of enthusiasts, not a call center. We read every message and aim
                to reply within two business days. Story submissions may take a little longer while
                our editors review them.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
