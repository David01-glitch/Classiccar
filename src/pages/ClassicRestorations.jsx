import TopicLayout from '../components/TopicLayout.jsx'
import { IMG, ALT } from '../assets/images.js'

export default function ClassicRestorations() {
  return (
    <TopicLayout
      path="/classic-restorations"
      current="/classic-restorations"
      label="Restoration"
      seoTitle="Classic Car Restoration Guides"
      seoDescription="Practical, phase-by-phase classic car restoration guidance for the patient home builder — planning, rust, drivetrain, bodywork, interior, and assembly."
      title="Classic restorations, from a hopeful purchase to a finished drive"
      intro="A restoration is a long conversation between you and a machine built decades before you owned it. These are the principles that keep that conversation honest, affordable, and finishable."
      image={IMG.restorationInProgress}
      imageAlt={ALT.restorationInProgress}
      sections={[
        {
          h: 'Begin with the end in mind',
          p: [
            'Before you buy a project, decide what you actually want when it is finished. A factory-correct concours restoration, a clean and reliable weekend driver, and a personalized restomod are three completely different budgets, timelines, and skill sets. Most of our readers are happiest building a driver — a car they can take to the diner without fear — and that target keeps the scope sane.',
            'Write that goal down and tape it to the toolbox. Every decision you make over the next year, from which carburetor to fit to whether to chase a perfect paint finish, should serve that goal. Scope creep, not rust, is what kills most home restorations.'
          ]
        },
        {
          h: 'Buy the best car you can afford',
          p: [
            'It is almost always cheaper to pay more for a solid, complete car than to rescue a cheap shell. A running, rust-free example with all its trim and glass gives you a reference and saves thousands in fabrication and parts-hunting. Bring a magnet and a strong flashlight to any inspection.',
            'Inspect the places rust hides: floor pans, trunk floor, lower fenders, rocker panels, cowl, and frame rails. Fresh undercoating and bubbling paint are warnings. A car that needs metalwork is not a beginner project unless you want to learn welding as part of the journey — which is a fine goal, but should be a choice, not a surprise.'
          ]
        },
        {
          h: 'Budget in three columns',
          p: [
            'Build your budget with three honest columns and a contingency of at least twenty percent:',
            [
              'Parts you will buy: rubber, brakes, bearings, gaskets, trim, electrical.',
              'Services you will outsource: machine shop, paint and body, upholstery, chrome plating.',
              'Tools and consumables: the gear you do not own yet, plus abrasives, fluids, and fasteners.'
            ],
            'Get quotes for paint and interior before you buy the car, not after. Those two line items surprise more first-timers than any other, and knowing the numbers up front lets you choose a car that fits your wallet.'
          ]
        },
        {
          h: 'Tear down with discipline',
          p: [
            'Photograph everything from multiple angles before you loosen a single bolt. Bag and label hardware by assembly, and keep a notebook or a phone album organized by system. The most expensive restoration is the one you start twice because you cannot remember how a bracket fitted.',
            'Order the factory service manual and assembly manual for your exact year and model. They are the cheapest insurance you will ever buy and will answer questions no forum can. As you strip the car, you are also inspecting it — note every worn bushing, cracked hose, and tired bearing so nothing is forgotten at reassembly.'
          ]
        },
        {
          h: 'Work in phases and finish each one',
          p: [
            'Successful home restorations move through clear phases: a sorted rolling chassis with brakes, suspension, and steering; then the drivetrain; then bodywork and paint; then interior; and finally assembly, wiring, and tuning. Resist the temptation to open the next phase before the current one is genuinely complete.',
            'Finishing phases gives you the small victories that sustain a multi-year project. A car that brakes and rolls feels like progress. An engine that fires for the first time is a celebration. Those milestones are what carry you through the long winter evenings when the finish line feels far away.'
          ]
        }
      ]}
      faqs={[
        {
          q: 'How long does a full restoration take at home?',
          a: 'For a first-timer working evenings and weekends on a solid car, plan on two to three years. A rougher car, or a more demanding standard, can easily double that. Setting a steady weekly cadence matters far more than working in exhausting bursts.'
        },
        {
          q: 'Should I restore the engine first or the body?',
          a: 'Get the car rolling and stopping safely first, then sort the drivetrain, and save bodywork and paint for after the mechanicals are sorted. Fresh paint is the last thing you want to risk damaging while wrenching on a tired engine.'
        },
        {
          q: 'Is it cheaper to restore a car than to buy one finished?',
          a: 'Almost never, if you count your time and tools honestly. People restore cars for the satisfaction and the story, not to save money. If your only goal is to own a finished classic, buying a sorted example is usually the smarter financial move.'
        }
      ]}
    />
  )
}
