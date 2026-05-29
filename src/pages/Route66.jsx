import TopicLayout from '../components/TopicLayout.jsx'
import { IMG, ALT } from '../assets/images.js'

export default function Route66() {
  return (
    <TopicLayout
      path="/route66-roadtrips"
      current="/route66-roadtrips"
      label="Road Trips"
      seoTitle="Route 66 Road Trips in a Classic Car"
      seoDescription="How to plan and drive Route 66 in a vintage car — a realistic two-week itinerary, the pre-trip preparation that matters, and the landmarks worth stopping for."
      title="Route 66 road trips, driven the slow way"
      intro="The Mother Road ran 2,448 miles from Chicago to Santa Monica. Most of it survives if you are willing to leave the interstate. Here is how to drive it in a classic and arrive with both the car and the memories intact."
      image={IMG.route66Convertible}
      imageAlt={ALT.route66Convertible}
      sections={[
        {
          h: 'Prepare the car before you prepare the playlist',
          p: [
            'A vintage car will reward preparation far more than spontaneity. Weeks before departure, give the car a thorough pre-trip inspection: flush and pressure-test the cooling system, rebuild or bleed the brakes, replace tired belts and hoses, and fit tires with date codes under six years old regardless of tread depth. Old rubber fails by age, not just wear.',
            'Service the charging system and carry a small, sensible spares kit: points and condenser if your car uses them, a spare belt, an assortment of fuses, a quart of oil, hose clamps, a roll of self-amalgamating tape, and the hand tools you actually know how to use. The goal is to fix the common roadside failures yourself and keep moving.'
          ]
        },
        {
          h: 'Pace the days for a car built to cruise',
          p: [
            'Plan roughly 200 to 250 miles a day. That sounds modest until you factor in vintage gas stations worth photographing, diners worth a slow lunch, and the simple truth that a classic is happier cruising at a relaxed pace than hammering down the highway. Heat, altitude, and old cooling systems all argue for an easy rhythm.',
            'Build rest days into a two-week plan. The trip is the point, not the mileage, and a car that has just crossed a desert appreciates an afternoon in the shade as much as you do.'
          ]
        },
        {
          h: 'A realistic two-week itinerary',
          p: [
            'A comfortable fourteen-day plan moves through the historic alignment without exhausting driver or machine:',
            [
              'Days 1–2: Chicago to St. Louis, easing into the rhythm through Illinois.',
              'Days 3–4: Across Missouri and a corner of Kansas into Oklahoma.',
              'Days 5–6: Oklahoma City to the Texas panhandle and Amarillo.',
              'Days 7–8: Tucumcari and across New Mexico to Albuquerque, with a rest day.',
              'Days 9–11: Into Arizona — Petrified Forest, Winslow, Flagstaff, and the long stretch to the Black Mountains.',
              'Days 12–14: California, the Mojave, San Bernardino, and the final roll to the Santa Monica Pier.'
            ]
          ]
        },
        {
          h: 'Landmarks worth the stop',
          p: [
            'Do not blow past the icons. The Gemini Giant in Illinois, the Chain of Rocks Bridge over the Mississippi, the blue whale of Catoosa, Cadillac Ranch outside Amarillo, the painted desert near Holbrook, and the white-knuckle climb to Oatman are the postcards you will be glad you collected.',
            'In summer, book lodging in the small towns a day or two ahead. The classic motor courts and neon motels that make the route special are limited in number and fill quickly, and arriving without a plan in a remote town after dark is the one avoidable stress of the trip.'
          ]
        },
        {
          h: 'Keep a logbook',
          p: [
            'Note every fuel stop, the mileage, the weather, and anything the car tells you along the way. A logbook turns a blur of days into a story you can retell, and it doubles as a maintenance record that will help you sort the car when you get home. Half the joy of the Mother Road is the tale you bring back to the garage.'
          ]
        }
      ]}
      faqs={[
        {
          q: 'Is a 60-year-old car really up to a cross-country trip?',
          a: 'Yes, if it is properly sorted and you drive within its limits. Tens of thousands of enthusiasts make long trips in vintage cars every year. The failures that strand people are almost always neglected basics — cooling, fuel, tires, and charging — not age itself.'
        },
        {
          q: 'What is the best time of year to drive Route 66?',
          a: 'Late spring and early autumn are ideal. You avoid the worst desert heat, which is hard on old cooling systems, and you dodge the winter weather that closes higher passes. Aim for May, June, September, or October.'
        },
        {
          q: 'How do I find the original alignment instead of the interstate?',
          a: 'A dedicated Route 66 guidebook with turn-by-turn directions is invaluable, because the road has been realigned many times and signage is inconsistent. Pair it with offline maps, since cell coverage disappears for long stretches in the western states.'
        }
      ]}
    />
  )
}
