import TopicLayout from '../components/TopicLayout.jsx'
import { IMG, ALT } from '../assets/images.js'

export default function MuscleCarHistory() {
  return (
    <TopicLayout
      path="/muscle-car-history"
      current="/muscle-car-history"
      label="History"
      seoTitle="American Muscle Car History"
      seoDescription="The rise, peak, and legacy of the American muscle car — from the 1964 GTO through the 1970 high-water mark to the insurance and emissions era that ended it."
      title="Muscle car history: how affordable American speed was born"
      intro="The muscle car was a simple, audacious idea — put a big engine in a mid-size body and sell it to young people at a price they could almost afford. For about a decade, Detroit did exactly that, and the cars became the most collected of any era."
      image={IMG.muscleCarShowroom}
      imageAlt={ALT.muscleCarShowroom}
      sections={[
        {
          h: 'The spark: 1964 and the GTO',
          p: [
            'The formula existed in pieces through the 1950s, but the muscle car as a movement is usually dated to 1964, when Pontiac slipped its big 389 V8 into the mid-size Tempest and called the option package the GTO. It was a deliberate end-run around corporate rules about engine size in smaller cars, and it was an instant sensation.',
            'The genius was not the engineering, which was straightforward, but the marketing and the price. Suddenly a young buyer could walk into a dealership and drive away with genuinely fast, attainable performance. Every rival division took notice, and within a couple of years the segment exploded.'
          ]
        },
        {
          h: 'The arms race: 1966 to 1970',
          p: [
            'The late 1960s were a horsepower arms race fought in showrooms and on dragstrips. Chevrolet had the Chevelle SS and the Camaro; Ford fielded the Mustang and the Torino; Dodge and Plymouth answered with the Charger, the Road Runner, and the Hemi engine that became legend. Oldsmobile, Buick, and Mercury all built credible contenders.',
            'Engine displacement and advertised horsepower climbed every model year, and the cars grew wild with hood scoops, spoilers, stripes, and names that promised trouble. The 1970 model year is widely regarded as the high-water mark — the moment the cars were at their most powerful, most colorful, and most confident.'
          ]
        },
        {
          h: 'The reckoning: insurance, emissions, and oil',
          p: [
            'The party ended quickly, and not because buyers lost interest. Insurance companies began charging punishing premiums on high-powered cars, especially for the young men who wanted them most. Tightening emissions regulations forced lower compression and choked output, and the switch to lower-octane unleaded fuel further sapped power.',
            'Then the 1973 oil crisis made big engines suddenly expensive to feed. Within a few short years the muscle car as originally conceived was effectively gone, replaced by heavier, softer, and far less powerful machines wearing the same famous badges.'
          ]
        },
        {
          h: 'Why they became the most collected cars',
          p: [
            'The muscle era is the heart of the collector hobby for reasons both emotional and practical. Emotionally, these were the dream cars of a huge generation who are now in a position to own them. Practically, the cars are mechanically simple, the aftermarket parts support is enormous, and a wide range of models means there is an attainable entry point as well as a six-figure trophy.',
            'That combination — desire, simplicity, and supply — keeps values strong and keeps the cars on the road. A correctly restored muscle car still does today what it did in 1969: it turns heads, it makes a wonderful noise, and it makes the driver grin.'
          ]
        }
      ]}
      faqs={[
        {
          q: 'What exactly counts as a muscle car?',
          a: 'Purists define it narrowly: an affordable, mid-size American car fitted with a large, high-performance V8, built roughly between 1964 and 1972. Pony cars like the Mustang and Camaro and full-size performance cars are related but technically distinct categories, though the terms are often used loosely today.'
        },
        {
          q: 'Are muscle cars a good first classic?',
          a: 'They can be excellent, thanks to simple mechanicals and superb parts availability. The caution is price and theft risk on the most desirable models. Many enthusiasts start with a small-block or six-cylinder version, which delivers the look and experience at a far more sensible cost.'
        }
      ]}
    />
  )
}
