import TopicLayout from '../components/TopicLayout.jsx'
import { IMG, ALT } from '../assets/images.js'

export default function CarShowGuides() {
  return (
    <TopicLayout
      path="/car-show-guides"
      current="/car-show-guides"
      label="Events"
      seoTitle="Classic Car Show Guides"
      seoDescription="How to show a classic car, understand judging, prepare your display, and get the most out of cruise nights, local shows, and judged concours events."
      title="Car show guides: how to show, judge, and enjoy the field"
      intro="A car show is where the solitary hobby becomes a community. Whether you are entering your first cruise night or chasing a class trophy, a little preparation turns a long, hot day into one of the best weekends of the year."
      image={IMG.carShowCommunity}
      imageAlt={ALT.carShowCommunity}
      sections={[
        {
          h: 'Know the kind of event you are attending',
          p: [
            'Not all shows are the same, and matching your expectations to the event keeps the day fun. The common formats range from relaxed to rigorous:',
            [
              'Cruise nights: informal weekly gatherings, no judging, no pressure — the best place to start.',
              'Local and club shows: casual judging, often by popular vote or simple class awards.',
              'Judged shows: trained judges score cars against a points standard within defined classes.',
              'Concours d’Elegance: the most exacting standard, where originality and detail are everything.'
            ]
          ]
        },
        {
          h: 'Prepare the car the week before',
          p: [
            'Detailing the night before a show is a recipe for exhaustion. Spread the work across the week: deep-clean the engine bay and undercarriage first, then the wheels and tires, then the paint, glass, and chrome, and finally the interior. Save a quick final wipe-down for the morning of the show.',
            'Pack a show kit: detailing spray and microfiber towels, tire dressing, glass cleaner, a small mat for kneeling, sunscreen, water, and a folding chair. Bring a fender cover and a windshield display board describing the car — judges and curious visitors both appreciate the story.'
          ]
        },
        {
          h: 'Understand how judging works',
          p: [
            'In judged shows, cars compete within classes grouped by make, era, or type, and judges deduct points from a perfect score for flaws in categories like exterior, interior, engine, and undercarriage. Originality and correctness usually matter more than shine, which surprises newcomers who expect the cleanest car to win.',
            'If a trophy matters to you, read the rulebook for your class before you enter, and be honest about where your car stands. If it does not matter — and for most of us it should not — enter the class anyway and treat the judges’ feedback as a free, expert inspection of your work.'
          ]
        },
        {
          h: 'Show etiquette and getting the most from the day',
          p: [
            'Arrive early, follow the marshals’ directions for parking, and never touch another person’s car without permission. Keep your display tidy, be generous with your knowledge, and talk to the people who stop by — the conversations are the real prize. Stay until the published end time, because leaving early is both unsafe in a packed field and discourteous to organizers and spectators.',
            'Above all, remember why you came. A car show is a celebration of a shared passion. The trophies fade, but the friend you met two rows over, admiring the same model you spent three winters rebuilding, may be the reason you come back every year.'
          ]
        }
      ]}
      faqs={[
        {
          q: 'Does my car need to be perfect to enter a show?',
          a: 'Not at all. Cruise nights and most local shows welcome cars in any honest condition, including unfinished projects and well-loved drivers. Only judged and concours events demand a high standard, and even there, entering a work in progress is a great way to learn.'
        },
        {
          q: 'How do I find car shows near me?',
          a: 'Local marque clubs, regional car-club calendars, community event listings, and the bulletin boards at parts stores and cruise spots are the best sources. Once you attend one event, you will quickly hear about the rest from the people you meet.'
        }
      ]}
    />
  )
}
