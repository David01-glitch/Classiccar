// Native <details> based disclosure. Works with JavaScript disabled,
// content always lives in the HTML source, and it is keyboard accessible
// by default. Tailwind handles the chrome/garage styling and the marker.
export function Disclosure({ summary, children, meta, defaultOpen = false }) {
  return (
    <details
      open={defaultOpen}
      className="group panel overflow-hidden transition hover:border-burnt/50"
    >
      <summary
        className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4
          font-display text-lg text-cream marker:hidden hover:text-burnt
          focus-visible:text-burnt"
      >
        <span className="flex flex-col">
          <span>{summary}</span>
          {meta && <span className="font-body text-sm text-chromedark">{meta}</span>}
        </span>
        <span
          aria-hidden="true"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border
            border-chromedark/40 text-burnt transition-transform duration-300
            group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="border-t border-chromedark/20 px-5 py-5 text-creamsoft/90">
        {children}
      </div>
    </details>
  )
}

export default function Accordion({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <Disclosure key={i} summary={item.q} meta={item.meta}>
          {typeof item.a === 'string' ? <p>{item.a}</p> : item.a}
        </Disclosure>
      ))}
    </div>
  )
}
