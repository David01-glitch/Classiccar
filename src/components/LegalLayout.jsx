import Seo from './Seo.jsx'
import { PageHeader } from './UI.jsx'

export default function LegalLayout({ path, title, intro, updated, sections }) {
  return (
    <>
      <Seo path={path} title={title} description={intro} />
      <PageHeader label="Legal" title={title} intro={intro}>
        <p className="mt-4 text-sm text-chromedark">Last updated: {updated}</p>
      </PageHeader>

      <div className="container-ed py-12 sm:py-16">
        <article className="prose-ed max-w-3xl">
          {sections.map((s, i) => (
            <section key={i}>
              <h2>
                {i + 1}. {s.h}
              </h2>
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
        </article>
      </div>
    </>
  )
}
