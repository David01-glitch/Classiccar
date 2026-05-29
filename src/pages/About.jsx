import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { PageHeader, Stat } from '../components/UI.jsx'
import { IMG, ALT } from '../assets/images.js'
import { SITE } from '../data/site.js'
import { STATS } from '../data/content.js'

export default function About() {
  return (
    <>
      <Seo
        path="/about"
        title="About"
        description="The founder story and mission behind Classic Car Memories — a Detroit-based restoration and road-trip journal for retired car enthusiasts."
      />
      <PageHeader
        label="Our Story"
        title="Built in a Detroit garage, written for everyone who loves old cars"
        intro="Classic Car Memories began with one retired machinist, a half-finished Camaro, and a notebook full of lessons worth sharing."
      />

      <div className="container-ed py-12 sm:py-16">
        <img
          src={IMG.founderMechanic}
          alt={ALT.founderMechanic}
          className="panel mb-12 aspect-[16/9] w-full object-cover"
        />

        <div className="prose-ed max-w-none">
          <h2 className="!mt-0">The founder’s story</h2>
          <p>
            Walt Brennan spent thirty-eight years on the tool-and-die floor of a Detroit auto
            plant. When he retired in {SITE.founded}, he did what he had promised himself for
            decades: he rolled a tired 1971 Camaro into his garage on Heritage Motor Road and
            started bringing it back to life. What he did not expect was how much he would want to
            write it all down.
          </p>
          <p>
            Walt kept a notebook through that first restoration — every measurement, every dead
            end, every supplier who treated him fairly and every one who did not. Friends from the
            old plant started borrowing it. Then their friends did. The notebook became a
            photocopied binder, the binder became a small newsletter, and the newsletter, with the
            help of his daughter Marie, became Classic Car Memories.
          </p>

          <h2>Our mission</h2>
          <p>
            We exist to make the craft of vintage car restoration and the joy of the open road
            accessible to enthusiasts who finally have the time to enjoy them. Our readers are
            overwhelmingly retirees and near-retirees, many restoring the exact car they loved at
            eighteen. We write for that person: patient, capable, and looking for honest guidance
            rather than hype.
          </p>
          <p>
            Everything we publish has to pass a simple test: would it have helped Walt during that
            first Camaro restoration? If it is true, useful, and respectful of both your time and
            your wallet, it belongs here. If it is filler, it does not.
          </p>

          <h2>What we believe</h2>
          <ul>
            <li>The hobby should be welcoming. Nobody should feel foolish for asking a basic question.</li>
            <li>Honest information beats marketing. We take no payment to recommend a product or vendor.</li>
            <li>Craft is worth preserving. The skills in these cars deserve to be passed on, not lost.</li>
            <li>The community is the reward. Cars get us in the door; people are why we stay.</li>
          </ul>

          <h2>Who we are today</h2>
          <p>
            We remain a small, independent team working out of the same Detroit garage where it all
            began. Walt still writes the history and buying pieces. Marie handles road trips and
            photography. Dale, a retired body man, covers restoration and garage craft, and Hank, a
            former engine builder, writes the mechanical guides. Between us we have well over a
            century in and around these cars — and we are still learning something new every week.
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </dl>

        <div className="mt-12 panel bg-burgundy/30 p-8 text-center">
          <h2 className="font-display text-2xl text-cream">Have a story to tell?</h2>
          <p className="mx-auto mt-3 max-w-xl text-creamsoft/90">
            We feature reader restorations and road trips every month. We would love to hear about
            yours.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Get in touch
            </Link>
            <Link to="/community" className="btn-ghost">
              See the community
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
