import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getStoredConsent, grantConsent, denyConsent } from '../utils/analytics.js'

// Elegant slide-up cookie banner with retro automotive styling.
// Persists the choice in localStorage and updates Consent Mode v2.
export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!getStoredConsent()) {
      const t = setTimeout(() => setVisible(true), 600)
      return () => clearTimeout(t)
    }
  }, [])

  if (!visible) return null

  const accept = () => {
    grantConsent()
    setVisible(false)
  }
  const decline = () => {
    denyConsent()
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 animate-[slideup_0.4s_ease] px-4 pb-4"
      style={{ animationName: 'slideup' }}
    >
      <style>{`@keyframes slideup{from{transform:translateY(110%);opacity:0}to{transform:translateY(0);opacity:1}}`}</style>
      <div className="container-ed">
        <div className="panel flex flex-col gap-4 bg-ink/95 p-5 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <span className="mt-1 hidden h-10 w-10 shrink-0 place-items-center rounded-full border border-burnt/40 text-burnt sm:grid">
              ⛽
            </span>
            <p className="text-sm text-creamsoft/90">
              We use cookies to understand how readers explore restoration guides and road-trip
              stories. Analytics stay <strong>off</strong> until you agree. See our{' '}
              <Link to="/legal/privacy" className="link-inline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button onClick={decline} className="btn-ghost px-5 py-2 text-sm">
              Decline
            </button>
            <button onClick={accept} className="btn-primary px-5 py-2 text-sm">
              Accept cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
