import TopicLayout from '../components/TopicLayout.jsx'
import { IMG, ALT } from '../assets/images.js'

export default function VintageGarages() {
  return (
    <TopicLayout
      path="/vintage-garages"
      current="/vintage-garages"
      label="Garage Life"
      seoTitle="Vintage Garage Setup & Organization"
      seoDescription="Design a vintage garage that works — zones, lighting, flooring, tool storage, climate, and the small upgrades that make restoration a pleasure instead of a chore."
      title="The vintage garage: where the work actually gets done"
      intro="A great garage is not the one with the most tools. It is the one where you can find the right tool without breaking your rhythm, see what you are doing, and want to spend a winter evening. Here is how to build one."
      image={IMG.vintageGarageWorkshop}
      imageAlt={ALT.vintageGarageWorkshop}
      sections={[
        {
          h: 'Plan around how you move',
          p: [
            'Before you buy a single cabinet, watch how you actually work. A productive garage is divided into zones that match the flow of a job: a clean assembly bench where small parts go together, a dirty teardown area where greasy work happens, a parts-storage wall, and a clear walking path all the way around the car.',
            'Keep the messy zone away from the clean bench so brake dust and solvent never migrate to the carburetor you just rebuilt. Even in a single-car garage, defining these areas mentally — and with a little tape on the floor — transforms how efficiently you work.'
          ]
        },
        {
          h: 'Light is the upgrade everyone skips',
          p: [
            'Lighting is the single best return on investment in any workshop, and it is the thing newcomers most often neglect. Flicker-free LED shop fixtures overhead, sized so the whole floor is evenly bright, will reveal the hairline rust crack, the weeping gasket, and the 10mm socket you dropped under the bench.',
            'Add a movable task light or a quality headlamp for working inside fenders and under the dash. Good light also makes the garage a place you want to be after dark, which matters more than you think when a project stretches across the seasons.'
          ]
        },
        {
          h: 'Floors, climate, and comfort',
          p: [
            'An epoxy or polyaspartic floor coating brightens the entire room, resists oil stains, and wipes clean in seconds. It is a weekend job that pays you back every time you drop a part. Pair it with anti-fatigue mats at the bench and a good rolling creeper to protect your knees, back, and shoulders over a long restoration.',
            'Climate matters for both the work and the worker. A modest amount of insulation and a safe heat source keep winter projects moving, while a dehumidifier protects bare metal and stored parts from rust. You do not need a showroom — you need a space that is dry, lit, and comfortable enough to use.'
          ]
        },
        {
          h: 'Store tools so they find you',
          p: [
            'The best storage system is the one that returns each tool to an obvious home. A few proven approaches:',
            [
              'A shadow board or foam-cut drawers so a missing tool is instantly visible.',
              'A magnetic strip for wrenches and a rail for frequently used pliers and drivers.',
              'Labeled bins for fasteners, sorted by the assembly they came from during teardown.',
              'A rolling chest for the daily-driver tools, kept near whichever zone you use most.'
            ],
            'Organize once, then spend two minutes at the end of each session putting things back. A garage stays a workshop only as long as you defend it from becoming a storage unit.'
          ]
        }
      ]}
      faqs={[
        {
          q: 'How big does a home restoration garage need to be?',
          a: 'A standard single-car bay is enough to restore one car if you are disciplined about space, though a two-car garage is far more comfortable because it lets you keep a work zone open while the car sits. The killer is clutter, not square footage.'
        },
        {
          q: 'What is the first tool investment I should make?',
          a: 'After basic hand tools, spend on lighting and a sturdy bench with a good vise. Both improve every single job you will ever do in the space, long before any specialty tool earns its keep.'
        }
      ]}
    />
  )
}
