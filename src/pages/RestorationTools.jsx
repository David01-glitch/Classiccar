import TopicLayout from '../components/TopicLayout.jsx'
import { IMG, ALT } from '../assets/images.js'

export default function RestorationTools() {
  return (
    <TopicLayout
      path="/restoration-tools"
      current="/restoration-tools"
      label="Tools"
      seoTitle="Classic Car Restoration Tools"
      seoDescription="The hand tools, measuring gear, and shop equipment worth owning for classic car restoration — what to buy first, what to buy later, and what to rent or borrow."
      title="Restoration tools worth owning at every stage"
      intro="You do not need a professional shop to restore a classic, but you do need the right tools for each stage of the work. Buy thoughtfully, prioritize quality where it matters, and let the project tell you what to add next."
      image={IMG.vintageTools}
      imageAlt={ALT.vintageTools}
      sections={[
        {
          h: 'Start with a complete hand-tool foundation',
          p: [
            'Before any specialty gear, build a complete, quality set of the basics. These are the tools you will reach for in every session, so buy them once and buy them well:',
            [
              'A full set of combination wrenches and a ratchet-and-socket set in the right standard for your car.',
              'Screwdrivers, pliers, and an adjustable wrench — plus a dead-blow and a ball-peen hammer.',
              'A quality torque wrench, because nearly every fastener on the car has a specification.',
              'A sturdy bench vise, a work light, and a rolling stool or creeper.'
            ],
            'On a domestic classic from the golden era, most fasteners are SAE/imperial rather than metric, so confirm your car’s standard before you buy a set you will not use.'
          ]
        },
        {
          h: 'Lifting and supporting the car, safely',
          p: [
            'You cannot do serious work without getting the car safely off the ground, and this is the area where cutting corners is genuinely dangerous. A good floor jack and a set of quality jack stands rated well above your car’s weight are non-negotiable. Never work under a car supported only by a jack.',
            'Wheel chocks, a creeper, and eventually a low-profile transmission jack or an engine hoist will follow as the project demands. If a full rotisserie or a two-post lift is beyond your budget or your ceiling height, remember that many of these big-ticket tools can be rented for the weekend you actually need them.'
          ]
        },
        {
          h: 'Measuring tools separate good work from guesswork',
          p: [
            'Precision is what makes a rebuilt component last, and that means measuring rather than assuming. A dial or digital caliper, a set of feeler gauges, and a tire-pressure and torque-angle gauge cover most assembly work. For engine work, add a micrometer, a dial bore gauge, and plastigage to verify clearances against the factory specifications.',
            'A multimeter is the measuring tool that pays for itself fastest on the electrical gremlins that plague every old car. Learning to read voltage drop and continuity will save you from replacing parts in the dark and hoping.'
          ]
        },
        {
          h: 'Add specialty and power tools as the job demands',
          p: [
            'Resist the urge to buy a wall of specialty tools on day one. Let the project guide your purchases: a brake-line flaring tool when you re-plumb the brakes, a ball-joint press when the front end comes apart, a timing light when you tune the engine. Each is far more satisfying to buy when you can use it immediately.',
            'For power tools, a quality drill, an angle grinder with a selection of discs, and a bench grinder cover most needs. An air compressor unlocks impact wrenches, die grinders, and spray equipment, but it is a later purchase, not a first one. Borrow or rent the rare tool before you buy it, and your shop will fill with gear you actually use.'
          ]
        }
      ]}
      faqs={[
        {
          q: 'Should I buy expensive professional tools or budget ones?',
          a: 'Buy quality for the tools you use constantly and for anything safety-critical, such as jack stands and a torque wrench. For tools you will use once or twice, a budget option or a rental is perfectly sensible. Spending wisely matters more than spending the most.'
        },
        {
          q: 'Do I need a welder to restore a classic?',
          a: 'Only if your car needs metalwork. A solid, rust-free car can be fully restored without ever striking an arc. If you do need to repair rusty metal, a basic MIG welder and the skills to use it open up a huge amount of work, but it is a commitment worth making deliberately.'
        }
      ]}
    />
  )
}
