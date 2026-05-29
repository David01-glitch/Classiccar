import LegalLayout from '../../components/LegalLayout.jsx'
import { SITE } from '../../data/site.js'

export default function Refund() {
  return (
    <LegalLayout
      path="/legal/refund"
      title="Refund Policy"
      updated="May 1, 2026"
      intro="Our policy on payments and refunds. In short: our content and newsletter are free, so there is nothing to refund."
      sections={[
        {
          h: 'Our content is free',
          p: [
            'Classic Car Memories is a free editorial publication. All of our articles, guides, restoration walkthroughs, road-trip itineraries, and community stories are available at no cost. Our monthly newsletter, The Garage Dispatch, is also completely free to subscribe to and to receive.',
            'Because we do not charge readers for access to our content or our newsletter, there are no payments to refund in the ordinary course of using this Site.'
          ]
        },
        {
          h: 'We do not sell products or services',
          p: [
            'We are a publisher, not a retailer or a service provider. We do not sell vehicles, parts, tools, merchandise, restoration labor, memberships, courses, or subscriptions through this Site. Any vendors, products, or services mentioned in our articles are referenced for editorial purposes only and are not sold by us.'
          ]
        },
        {
          h: 'If we ever offer a paid product',
          p: [
            'Should we introduce an optional paid product in the future — for example, a printed book or a paid event ticket — we will publish clear, specific refund terms for that product at the point of sale, before you pay. Those product-specific terms will govern any such purchase, and this page will be updated to reflect them.'
          ]
        },
        {
          h: 'Third-party purchases',
          p: [
            'If you purchase parts, tools, or services from a third party we have written about, that transaction is solely between you and that third party. Their refund, return, and warranty policies apply, and we have no involvement in or responsibility for those transactions.'
          ]
        },
        {
          h: 'Donations and contributions',
          p: [
            'We do not currently solicit donations through this Site. If we ever accept voluntary contributions to support our work, any such contribution would be non-refundable, and we would state that clearly at the time of the contribution.'
          ]
        },
        {
          h: 'Questions about this policy',
          p: [
            `If you have any questions about this Refund Policy, or you believe you were charged in error by anyone claiming to represent Classic Car Memories, please contact us immediately at ${SITE.email} or ${SITE.phone}. Our mailing address is ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postal}.`
          ]
        }
      ]}
    />
  )
}
