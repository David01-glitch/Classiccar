import Seo from '../components/Seo.jsx'
import { PageHeader } from '../components/UI.jsx'
import { ARTICLES, CATEGORIES } from '../data/blog.js'
import { ALT } from '../assets/images.js'
import { SITE } from '../data/site.js'

export default function Blog() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${SITE.name} Journal`,
    url: `${SITE.url}/blog`,
    publisher: { '@type': 'Organization', name: SITE.name },
    blogPost: ARTICLES.map((a) => ({
      '@type': 'BlogPosting',
      headline: a.title,
      datePublished: a.date,
      author: { '@type': 'Person', name: a.author },
      articleSection: a.category,
      description: a.excerpt
    }))
  }

  return (
    <>
      <Seo
        path="/blog"
        title="The Journal"
        description="Original long-form articles on classic car restoration, muscle car history, Route 66 road trips, garage craft, and collecting."
        jsonLd={jsonLd}
      />
      <PageHeader
        label="The Journal"
        title="Stories, guides, and hard-won lessons from the garage"
        intro="Every article here is written by an enthusiast who has done the work. Open any story to read it in full, right on this page."
      >
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Article categories">
          {CATEGORIES.map((c) => (
            <li key={c} className="rounded-full border border-chromedark/30 px-3 py-1 text-xs text-chromedark">
              {c}
            </li>
          ))}
        </ul>
      </PageHeader>

      <div className="container-ed py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {ARTICLES.map((a) => (
            <article key={a.slug} className="panel flex flex-col overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={a.image}
                  alt={ALT[a.imageKey]}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="label-retro">{a.category}</span>
                <h2 className="mt-2 font-display text-2xl text-cream">{a.title}</h2>
                <p className="mt-1 text-sm text-chromedark">
                  By {a.author} · {a.readingTime} ·{' '}
                  {new Date(a.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className="mt-3 text-creamsoft/90">{a.excerpt}</p>

                <details className="group mt-4 border-t border-chromedark/20 pt-4">
                  <summary className="flex cursor-pointer list-none items-center gap-2 font-semibold text-burnt marker:hidden hover:text-cream">
                    <span className="group-open:hidden">Read the full article</span>
                    <span className="hidden group-open:inline">Collapse article</span>
                    <span aria-hidden="true" className="transition-transform group-open:rotate-90">
                      →
                    </span>
                  </summary>
                  <div className="prose-ed mt-4">
                    {a.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
