import { Link } from 'react-router-dom'
import Seo from './Seo.jsx'
import Accordion from './Accordion.jsx'
import { PageHeader } from './UI.jsx'
import { NAV_TOPICS, SITE } from '../data/site.js'

// Shared layout for the six topic/pillar pages. Renders a lead image,
// multiple long-form sections (all in the HTML source), an optional FAQ,
// and links to the other topic pages.
export default function TopicLayout({
  path,
  seoTitle,
  seoDescription,
  label,
  title,
  intro,
  image,
  imageAlt,
  sections,
  faqs,
  current
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: seoDescription,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name },
    mainEntityOfPage: `${SITE.url}${path}`
  }

  return (
    <>
      <Seo path={path} title={seoTitle} description={seoDescription} jsonLd={jsonLd} />
      <PageHeader label={label} title={title} intro={intro} />

      <div className="container-ed py-12 sm:py-16">
        <img
          src={image}
          alt={imageAlt}
          className="panel mb-12 aspect-[16/9] w-full object-cover"
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <article className="prose-ed max-w-none">
            {sections.map((s, i) => (
              <section key={i}>
                <h2>{s.h}</h2>
                {s.p.map((para, j) =>
                  Array.isArray(para) ? (
                    <ul key={j}>
                      {para.map((li, k) => (
                        <li key={k}>{li}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={j}>{para}</p>
                  )
                )}
              </section>
            ))}

            {faqs && faqs.length > 0 && (
              <section>
                <h2>Common questions</h2>
                <div className="not-prose">
                  <Accordion items={faqs} />
                </div>
              </section>
            )}
          </article>

          <aside className="space-y-6">
            <div className="panel p-5">
              <h3 className="font-display text-lg text-cream">More from the garage</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {NAV_TOPICS.filter((t) => t.to !== current).map((t) => (
                  <li key={t.to}>
                    <Link to={t.to} className="text-chrome hover:text-burnt">
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel bg-burgundy/30 p-5">
              <h3 className="font-display text-lg text-cream">Talk to us</h3>
              <p className="mt-2 text-sm text-creamsoft/85">
                Questions, corrections, or a project to share? We answer every message.
              </p>
              <Link to="/contact" className="btn-primary mt-4 w-full">
                Contact
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
