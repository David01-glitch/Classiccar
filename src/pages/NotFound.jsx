import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { NAV_TOPICS } from '../data/site.js'

export default function NotFound() {
  return (
    <>
      <Seo path="/404" title="Page Not Found" description="The page you were looking for could not be found." />
      <section className="container-ed flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <span className="label-retro">Error 404</span>
        <h1 className="mt-3 font-display text-5xl text-cream sm:text-7xl">Off the map</h1>
        <p className="mt-5 max-w-xl text-lg text-creamsoft/90">
          This road does not lead anywhere — the page you were looking for has moved, been retired,
          or never existed. Let’s get you back on a paved route.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            Back to home
          </Link>
          <Link to="/blog" className="btn-ghost">
            Browse the Journal
          </Link>
        </div>
        <nav className="mt-12" aria-label="Popular topics">
          <p className="text-sm text-chromedark">Or explore a topic:</p>
          <ul className="mt-3 flex flex-wrap justify-center gap-2">
            {NAV_TOPICS.map((t) => (
              <li key={t.to}>
                <Link
                  to={t.to}
                  className="rounded-full border border-chromedark/30 px-4 py-2 text-sm text-chrome hover:border-burnt hover:text-cream"
                >
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  )
}
