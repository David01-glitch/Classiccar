import { IMG } from '../assets/images.js'

export const FAQS = [
  {
    q: 'Is Classic Car Memories a club I have to join, or a paid service?',
    a: 'Neither. Classic Car Memories is a free editorial journal about vintage car restoration and road trips. There is nothing to join and nothing to buy to read our guides, stories, and travel routes. Our optional monthly newsletter is also free.'
  },
  {
    q: 'Do you sell cars, parts, or restoration services?',
    a: 'No. We are a publisher, not a dealer or a shop. We do not sell vehicles, parts, or restoration labor. Our role is to share knowledge, document projects, and connect enthusiasts with the broader hobby. When we mention a product or vendor, it is editorial and never a paid placement.'
  },
  {
    q: 'I am completely new to classic cars. Is this site for me?',
    a: 'Absolutely. A large share of our readers are recently retired and buying their first classic. Our buying guides, restoration basics, and garage articles are written to be understood by a careful beginner while still respecting the experience of a lifelong gearhead.'
  },
  {
    q: 'Can I contribute my own restoration story or road trip?',
    a: 'Yes, and we love it. Many of our most-read articles come from readers. Email us at classiccarmemories@gmail.com with a short pitch and a few photographs, and our editors will get back to you about featuring your project in the Community section.'
  },
  {
    q: 'Where are you based, and can I visit?',
    a: 'Our editorial garage and office is at 805 Heritage Motor Rd, Detroit, MI 48216. We are a small team, so please email or call ahead at (313) 574-8812 before stopping by so we can make time for you.'
  },
  {
    q: 'How often do you publish new articles?',
    a: 'We publish new journal entries throughout the month and send a single curated newsletter, The Garage Dispatch, once a month. We would rather publish one well-researched article than ten thin ones.'
  }
]

export const TESTIMONIALS = [
  {
    quote:
      'I retired in 2022 and finally bought the Mustang I wanted at nineteen. The restoration-basics articles here gave me the confidence to do the brakes and carburetor myself instead of paying a shop.',
    name: 'Raymond Pierce',
    detail: 'Toledo, OH · 1966 Mustang',
    image: IMG.founderMechanic
  },
  {
    quote:
      'My wife and I drove Route 66 last fall using the itinerary on this site almost to the letter. The pre-trip checklist alone saved our trip when a hose let go outside Tucumcari.',
    name: 'Linda and Gus Hartman',
    detail: 'Springfield, IL · 1957 Chevy',
    image: IMG.route66Convertible
  },
  {
    quote:
      'The values guide stopped me from overpaying for a “rare” trim that nobody actually wants. Honest, practical writing with no hype. That is rare on the internet.',
    name: 'Charles Dunmore',
    detail: 'Detroit, MI · Collector',
    image: IMG.muscleCarShowroom
  }
]

export const STATS = [
  { value: '25+', label: 'Years in the hobby' },
  { value: '9,000+', label: 'Newsletter readers' },
  { value: '140+', label: 'Restoration guides' },
  { value: '8', label: 'States of Route 66 covered' }
]

// Reusable long-form sections referenced across pages.
export const FEATURE_TOPICS = [
  {
    to: '/classic-restorations',
    imageKey: 'restorationInProgress',
    eyebrow: 'Restoration',
    title: 'Classic Restorations',
    text: 'Step-by-step guides from teardown to final assembly, written for the patient home builder.'
  },
  {
    to: '/route66-roadtrips',
    imageKey: 'route66Convertible',
    eyebrow: 'Travel',
    title: 'Route 66 Road Trips',
    text: 'Routes, itineraries, and the pre-trip prep that gets a vintage car across the country.'
  },
  {
    to: '/vintage-garages',
    imageKey: 'vintageGarageWorkshop',
    eyebrow: 'Garage Life',
    title: 'Vintage Garages',
    text: 'Build a workshop that works — lighting, layout, tools, and the small upgrades that matter.'
  },
  {
    to: '/muscle-car-history',
    imageKey: 'muscleCarShowroom',
    eyebrow: 'History',
    title: 'Muscle Car History',
    text: 'How affordable American speed was born, peaked, and became the most collected era of all.'
  },
  {
    to: '/car-show-guides',
    imageKey: 'carShowCommunity',
    eyebrow: 'Events',
    title: 'Car Show Guides',
    text: 'How to show your car, judge a field, and get the most out of a weekend at the fairgrounds.'
  },
  {
    to: '/restoration-tools',
    imageKey: 'vintageTools',
    eyebrow: 'Tools',
    title: 'Restoration Tools',
    text: 'The hand tools, measuring gear, and shop equipment worth owning at every stage.'
  }
]
