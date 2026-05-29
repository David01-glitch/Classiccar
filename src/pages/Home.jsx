import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Accordion from '../components/Accordion.jsx'
import { Section, SectionLabel, FeatureCard, Stat, Testimonial } from '../components/UI.jsx'
import { IMG, ALT } from '../assets/images.js'
import { SITE } from '../data/site.js'
import { ARTICLES } from '../data/blog.js'
import { FAQS, TESTIMONIALS, STATS, FEATURE_TOPICS } from '../data/content.js'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE.url}/#org`,
        name: SITE.name,
        url: SITE.url,
        email: SITE.email,
        telephone: SITE.phone,
        description: SITE.description,
        foundingDate: SITE.founded,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.region,
          postalCode: SITE.address.postal,
          addressCountry: SITE.address.country
        }
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        publisher: { '@id': `${SITE.url}/#org` }
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      }
    ]
  }

  const trending = ARTICLES.slice(0, 3)
  const roadtrips = ARTICLES.filter((a) => a.category === 'Road Trips').slice(0, 2)

  return (
    <>
      <Seo path="/" jsonLd={jsonLd} />

      {/* 2. Hero */}
      <section className="relative overflow-hidden border-b border-chromedark/20">
        <img
          src={IMG.heroShowcase}
          alt={ALT.heroShowcase}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-matte via-matte/80 to-matte/40" />
        <div className="container-ed relative py-20 sm:py-28">
          <SectionLabel>Detroit · Est. {SITE.founded}</SectionLabel>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-cream sm:text-6xl">
            Where vintage steel and the open road become memories worth keeping.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-creamsoft/90">
            Classic Car Memories is a restoration and road-trip journal for retired enthusiasts.
            We document the craft of bringing old cars back to life, the highways worth driving,
            and the community that grows up around a good garage.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/classic-restorations" className="btn-primary">
              Explore Restorations
            </Link>
            <Link to="/route66-roadtrips" className="btn-ghost">
              Plan a Road Trip
            </Link>
          </div>
          <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </dl>
        </div>
      </section>

      {/* 3. Featured Restoration Categories */}
      <Section
        label="Featured Categories"
        title="Six corners of the hobby, one welcoming garage"
        intro="Whether you are sorting a first project, planning a cross-country drive, or fitting out a workshop, start with the guides our readers return to most."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_TOPICS.map((t) => (
            <FeatureCard
              key={t.to}
              to={t.to}
              image={IMG[t.imageKey]}
              alt={ALT[t.imageKey]}
              eyebrow={t.eyebrow}
              title={t.title}
              text={t.text}
              cta="View guide"
            />
          ))}
        </div>
      </Section>

      {/* 4. Trending Automotive Articles */}
      <Section
        label="From the Journal"
        title="Trending automotive articles"
        intro="Long-form, original writing on restoration, history, and life behind the wheel — no filler, no clickbait."
        className="border-y border-chromedark/15 bg-ink/30"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {trending.map((a) => (
            <article key={a.slug} className="panel overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={a.image} alt={ALT[a.imageKey]} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <span className="label-retro">{a.category}</span>
                <h3 className="mt-2 font-display text-xl text-cream">{a.title}</h3>
                <p className="mt-1 text-sm text-chromedark">
                  {a.author} · {a.readingTime}
                </p>
                <p className="mt-3 text-sm text-creamsoft/85">{a.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/blog" className="btn-ghost">
            Read the full Journal
          </Link>
        </div>
      </Section>

      {/* 5. Legendary Classic Cars Spotlight */}
      <Section label="Spotlight" title="Legendary classic cars, decoded">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="panel overflow-hidden">
            <img src={IMG.muscleCarShowroom} alt={ALT.muscleCarShowroom} loading="lazy" className="aspect-[16/9] w-full object-cover" />
          </div>
          <div className="prose-ed">
            <h2 className="!mt-0">The Golden Era of American Cars</h2>
            <p>
              From the chrome-laden cruisers of the 1950s to the fire-breathing muscle cars of
              1969, two postwar decades gave America a design language we still chase in our
              garages today. Steel was cheap, optimism was cheaper, and Detroit poured both into
              tailfins, jet-age dashboards, and grilles that grinned like a Saturday night.
            </p>
            <p>
              These cars endure in the hobby because they are knowable. A points ignition, a
              carburetor, a body-on-frame layout — these are systems a patient person can learn,
              diagnose, and rebuild on a weekend, which is exactly why a well-kept example still
              draws a crowd at any show.
            </p>
            <Link to="/muscle-car-history" className="btn-primary">
              Read the full history
            </Link>
          </div>
        </div>
      </Section>

      {/* 6. Road Trip Stories */}
      <Section
        label="On the Road"
        title="Road trip stories"
        intro="The Mother Road and the back roads, driven the slow way in cars that were built for the journey."
        className="border-y border-chromedark/15 bg-ink/30"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {(roadtrips.length ? roadtrips : ARTICLES.slice(3, 5)).map((a) => (
            <article key={a.slug} className="panel grid overflow-hidden sm:grid-cols-2">
              <img src={a.image} alt={ALT[a.imageKey]} loading="lazy" className="h-full w-full object-cover" />
              <div className="p-5">
                <span className="label-retro">{a.category}</span>
                <h3 className="mt-2 font-display text-xl text-cream">{a.title}</h3>
                <p className="mt-3 text-sm text-creamsoft/85">{a.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* 7. Community Restoration Projects */}
      <Section label="Community" title="Reader restoration projects">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <img src={IMG.carShowCommunity} alt={ALT.carShowCommunity} loading="lazy" className="panel aspect-[16/10] w-full object-cover" />
          <div className="prose-ed">
            <p className="!mt-0">
              The cars get us in the door, but the people are why we stay. Each month we feature a
              project sent in by a reader — a barn-find brought back over three winters, a father
              and daughter rebuilding a slant-six together, a club that adopted a veteran’s
              forgotten convertible and put it back on the road.
            </p>
            <p>
              Have a project worth sharing? Send a few photos and the story behind it. We read
              every submission ourselves.
            </p>
            <Link to="/community" className="btn-primary">
              See community projects
            </Link>
          </div>
        </div>
      </Section>

      {/* 8. Testimonials */}
      <Section
        label="In Their Words"
        title="What readers tell us"
        className="border-y border-chromedark/15 bg-ink/30"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Testimonial key={t.name} {...t} />
          ))}
        </div>
      </Section>

      {/* 9. Newsletter */}
      <Section>
        <Newsletter />
      </Section>

      {/* 10. FAQ */}
      <Section
        label="Questions"
        title="Frequently asked questions"
        intro="Straight answers about who we are and how the journal works."
      >
        <Accordion items={FAQS} />
      </Section>

      {/* 11. Contact */}
      <Section
        label="Get in Touch"
        title="Stop by the garage"
        className="border-y border-chromedark/15 bg-ink/30"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="panel p-6">
            <h3 className="font-display text-lg text-cream">Visit</h3>
            <p className="mt-2 text-creamsoft/85">
              {SITE.address.street}
              <br />
              {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
            </p>
          </div>
          <div className="panel p-6">
            <h3 className="font-display text-lg text-cream">Call</h3>
            <p className="mt-2">
              <a href={`tel:${SITE.phoneHref}`} className="link-inline">
                {SITE.phone}
              </a>
            </p>
            <p className="mt-1 text-sm text-chromedark">Mon–Fri, 9am–5pm ET</p>
          </div>
          <div className="panel p-6">
            <h3 className="font-display text-lg text-cream">Email</h3>
            <p className="mt-2">
              <a href={`mailto:${SITE.email}`} className="link-inline break-all">
                {SITE.email}
              </a>
            </p>
            <Link to="/contact" className="mt-3 inline-block text-sm font-semibold text-burnt">
              Full contact page →
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
