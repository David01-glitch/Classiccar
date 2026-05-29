import Seo from '../components/Seo.jsx'
import { PageHeader, Testimonial } from '../components/UI.jsx'
import Accordion from '../components/Accordion.jsx'
import { IMG, ALT } from '../assets/images.js'
import { TESTIMONIALS } from '../data/content.js'

const PROJECTS = [
  {
    title: 'The Three-Winter Barn Find',
    owner: 'Ed Vasquez · Grand Rapids, MI',
    image: IMG.restorationInProgress,
    imageKey: 'restorationInProgress',
    summary:
      'A 1967 Mustang pulled from a collapsed barn, brought back over three winters of evenings.',
    story:
      'Ed found the car under forty years of hay and pigeon mess, with the floors rusted through and a mouse nest where the air cleaner used to be. He documented every step for our readers: cutting and welding new floor pans, rebuilding the 289 on his kitchen-adjacent workbench much to his wife’s patience, and the morning it fired for the first time. “I cried a little,” he wrote. “Don’t tell the guys at the club.” It now wears its honest patina with pride and gets driven every weekend the salt is off the roads.'
  },
  {
    title: 'A Father, a Daughter, and a Slant-Six',
    owner: 'Tom and Becca Lindqvist · Madison, WI',
    image: IMG.v8Engine,
    imageKey: 'v8Engine',
    summary:
      'A 1964 Dart became the project that taught a teenager to wrench — and gave a father his Saturdays back.',
    story:
      'When Becca turned fifteen, Tom made her a deal: help him rebuild a $900 Dart and it would be her first car. Two years later she can set points, adjust valves, and bleed brakes better than most adults. The slant-six is famously indestructible, which made it the perfect teacher. Becca now answers questions in our reader forum and is, by her father’s account, “insufferable about torque specs.” They sent us a photo of her behind the wheel on the day she got her license. It is taped above Walt’s bench.'
  },
  {
    title: 'The Club That Adopted a Veteran’s Convertible',
    owner: 'Riverside Cruisers Club · Toledo, OH',
    image: IMG.carShowCommunity,
    imageKey: 'carShowCommunity',
    summary:
      'A 1958 convertible, parked since its owner shipped overseas decades ago, put back on the road by a whole club.',
    story:
      'When a member learned that an aging veteran in his neighborhood still kept the convertible he had owned since before his service — undriveable for years — the Riverside Cruisers quietly organized. Over one summer, members donated parts, labor, and a fresh top. They surprised the owner with a finished car and a slow parade down his street. There was not a dry eye in the driveway. This, more than any trophy, is what the hobby is for.'
  }
]

export default function Community() {
  return (
    <>
      <Seo
        path="/community"
        title="Community"
        description="Reader restoration projects, stories, and the community that grows up around classic cars. Submit your own project to be featured."
      />
      <PageHeader
        label="Community"
        title="The cars get us in the door. The people are why we stay."
        intro="Every month we feature projects and stories sent in by readers. Open any project below to read the whole story, right here on the page."
      />

      <div className="container-ed py-12 sm:py-16">
        <div className="space-y-6">
          {PROJECTS.map((p) => (
            <article key={p.title} className="panel grid overflow-hidden lg:grid-cols-[320px_1fr]">
              <img src={p.image} alt={ALT[p.imageKey]} loading="lazy" className="h-full w-full object-cover" />
              <div className="p-6">
                <h2 className="font-display text-2xl text-cream">{p.title}</h2>
                <p className="mt-1 text-sm text-burnt">{p.owner}</p>
                <p className="mt-3 text-creamsoft/90">{p.summary}</p>
                <details className="group mt-4 border-t border-chromedark/20 pt-4">
                  <summary className="flex cursor-pointer list-none items-center gap-2 font-semibold text-burnt marker:hidden hover:text-cream">
                    <span className="group-open:hidden">Read the full story</span>
                    <span className="hidden group-open:inline">Collapse story</span>
                    <span aria-hidden="true" className="transition-transform group-open:rotate-90">→</span>
                  </summary>
                  <p className="mt-4 text-creamsoft/90">{p.story}</p>
                </details>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16">
          <span className="label-retro">In Their Words</span>
          <h2 className="mt-2 text-3xl text-cream">From our readers</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Testimonial key={t.name} {...t} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <span className="label-retro">Get Involved</span>
          <h2 className="mt-2 text-3xl text-cream">How to join in</h2>
          <div className="mt-8">
            <Accordion
              items={[
                {
                  q: 'How do I submit my restoration or road trip?',
                  a: 'Email classiccarmemories@gmail.com with a short description of your project and three to five photographs. Our editors read every submission and will reach out if we would like to feature it. There is never a fee to be featured.'
                },
                {
                  q: 'Can I ask questions or get advice?',
                  a: 'Yes. Email us your question with as much detail and as many photos as you can, and we will do our best to point you in the right direction or connect you with a reader who has solved the same problem.'
                },
                {
                  q: 'Do you organize meets or drives?',
                  a: 'We host occasional informal drives and garage tech days around the Detroit area, announced first in our monthly newsletter, The Garage Dispatch. Subscribers always hear about them before anyone else.'
                }
              ]}
            />
          </div>
        </section>
      </div>
    </>
  )
}
