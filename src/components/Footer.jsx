import { Link } from 'react-router-dom'
import { SITE, NAV_TOPICS } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-chromedark/20 bg-ink/80">
      <div className="container-ed grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <span className="font-display text-xl text-cream">Classic Car Memories</span>
          <p className="mt-3 text-sm text-creamsoft/80">
            A vintage restoration and road-trip journal written by and for retired car
            enthusiasts. Detroit-built, Route 66-tested.
          </p>
        </div>

        <nav aria-label="Topics">
          <h3 className="font-display text-cream">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_TOPICS.map((t) => (
              <li key={t.to}>
                <Link to={t.to} className="text-chrome hover:text-burnt">
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company and legal">
          <h3 className="font-display text-cream">Company</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/about" className="text-chrome hover:text-burnt">About</Link></li>
            <li><Link to="/community" className="text-chrome hover:text-burnt">Community</Link></li>
            <li><Link to="/blog" className="text-chrome hover:text-burnt">Journal</Link></li>
            <li><Link to="/contact" className="text-chrome hover:text-burnt">Contact</Link></li>
            <li><Link to="/legal/privacy" className="text-chrome hover:text-burnt">Privacy</Link></li>
            <li><Link to="/legal/terms" className="text-chrome hover:text-burnt">Terms</Link></li>
            <li><Link to="/legal/refund" className="text-chrome hover:text-burnt">Refund</Link></li>
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-cream">Visit & Contact</h3>
          <address className="mt-3 space-y-2 text-sm not-italic text-creamsoft/80">
            <p>{SITE.address.street}<br />{SITE.address.city}, {SITE.address.region} {SITE.address.postal}</p>
            <p>
              <a href={`tel:${SITE.phoneHref}`} className="hover:text-burnt">{SITE.phone}</a>
            </p>
            <p>
              <a href={`mailto:${SITE.email}`} className="hover:text-burnt">{SITE.email}</a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-chromedark/20">
        <div className="container-ed flex flex-col items-center justify-between gap-3 py-5 text-xs text-chromedark sm:flex-row">
          <p>© {new Date().getFullYear()} Classic Car Memories. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Link to="/legal/privacy" className="hover:text-burnt">Privacy</Link>
            <span aria-hidden="true">·</span>
            <Link to="/legal/terms" className="hover:text-burnt">Terms</Link>
            <span aria-hidden="true">·</span>
            <Link to="/legal/refund" className="hover:text-burnt">Refund</Link>
            <span aria-hidden="true">·</span>
            <Link to="/about" className="hover:text-burnt">About</Link>
            <span aria-hidden="true">·</span>
            <Link to="/contact" className="hover:text-burnt">Contact</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
