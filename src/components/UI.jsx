import { Link } from 'react-router-dom'

export function SectionLabel({ children }) {
  return <span className="label-retro">{children}</span>
}

export function PageHeader({ label, title, intro, children }) {
  return (
    <header className="border-b border-chromedark/15 bg-ink/40">
      <div className="container-ed py-14 sm:py-20">
        {label && <SectionLabel>{label}</SectionLabel>}
        <h1 className="mt-3 max-w-3xl text-4xl leading-tight text-cream sm:text-5xl">
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-creamsoft/90">{intro}</p>}
        {children}
      </div>
    </header>
  )
}

export function Section({ label, title, intro, children, className = '' }) {
  return (
    <section className={`container-ed py-14 sm:py-20 ${className}`}>
      {label && <SectionLabel>{label}</SectionLabel>}
      {title && <h2 className="mt-2 text-3xl text-cream sm:text-4xl">{title}</h2>}
      {intro && <p className="mt-4 max-w-3xl text-creamsoft/90">{intro}</p>}
      <div className="mt-8">{children}</div>
    </section>
  )
}

export function FeatureCard({ to, image, alt, eyebrow, title, text, cta = 'Read more' }) {
  const inner = (
    <>
      {image && (
        <div className="aspect-[16/10] overflow-hidden rounded-t-xl">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-5">
        {eyebrow && <span className="label-retro">{eyebrow}</span>}
        <h3 className="mt-2 font-display text-xl text-cream group-hover:text-burnt">{title}</h3>
        <p className="mt-2 text-sm text-creamsoft/85">{text}</p>
        {to && <span className="mt-4 inline-block text-sm font-semibold text-burnt">{cta} →</span>}
      </div>
    </>
  )

  const cls = 'group block panel overflow-hidden transition hover:border-burnt/50'
  return to ? (
    <Link to={to} className={cls}>
      {inner}
    </Link>
  ) : (
    <article className={cls}>{inner}</article>
  )
}

export function Stat({ value, label }) {
  return (
    <div className="panel p-5 text-center">
      <div className="font-display text-3xl text-burnt">{value}</div>
      <div className="mt-1 text-sm text-chromedark">{label}</div>
    </div>
  )
}

export function Testimonial({ quote, name, detail, image }) {
  return (
    <figure className="panel flex h-full flex-col p-6">
      <blockquote className="flex-1 text-creamsoft/90">“{quote}”</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        {image && (
          <img src={image} alt={name} loading="lazy" className="h-11 w-11 rounded-full object-cover" />
        )}
        <span>
          <span className="block font-semibold text-cream">{name}</span>
          <span className="block text-sm text-chromedark">{detail}</span>
        </span>
      </figcaption>
    </figure>
  )
}
