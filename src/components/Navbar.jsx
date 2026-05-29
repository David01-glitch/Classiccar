import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_PRIMARY, SITE } from '../data/site.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-semibold tracking-wide transition ${
      isActive ? 'text-burnt' : 'text-chrome hover:text-cream'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-chromedark/20 bg-matte/90 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded focus:bg-burnt focus:px-3 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <nav className="container-ed flex items-center justify-between py-3" aria-label="Primary">
        <Link to="/" className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
          <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-burnt bg-ink font-display text-burnt shadow-chrome">
            CC
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg text-cream">Classic Car Memories</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-chromedark">
              Detroit · Est. {SITE.founded}
            </span>
          </span>
        </Link>

        <div className="hidden items-center lg:flex">
          {NAV_PRIMARY.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          className="btn-ghost px-4 py-2 text-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-chromedark/20 bg-ink/95 lg:hidden">
          <div className="container-ed flex flex-col py-2">
            {NAV_PRIMARY.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-base font-semibold ${isActive ? 'text-burnt' : 'text-chrome'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
