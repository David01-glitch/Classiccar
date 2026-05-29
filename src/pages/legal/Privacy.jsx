import LegalLayout from '../../components/LegalLayout.jsx'
import { SITE } from '../../data/site.js'

export default function Privacy() {
  return (
    <LegalLayout
      path="/legal/privacy"
      title="Privacy Policy"
      updated="May 1, 2026"
      intro="How Classic Car Memories collects, uses, and protects your information, and the choices you have."
      sections={[
        {
          h: 'Who we are',
          p: [
            `Classic Car Memories ("we", "us", or "our") operates the website at ${SITE.url}. We are an independent editorial publisher based at ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postal}. You can reach us at ${SITE.email} or ${SITE.phone}.`,
            'This Privacy Policy explains what information we collect when you visit our website or contact us, how we use it, and the rights and choices you have. By using this website, you agree to the practices described here.'
          ]
        },
        {
          h: 'Information we collect',
          p: [
            'We aim to collect as little personal information as possible. The information we may collect falls into three categories:',
            [
              'Information you give us: your name, email address, and message when you use our contact form, subscribe to our newsletter, or submit a project for the community section.',
              'Information collected automatically: standard analytics data such as pages viewed, approximate location derived from IP address, device and browser type, and referring website. This is only collected after you consent to analytics cookies.',
              'Cookies and similar technologies: small files stored on your device that remember your cookie-consent choice and, with your consent, support analytics.'
            ]
          ]
        },
        {
          h: 'How we use your information',
          p: [
            'We use the information we collect to operate and improve our website and to communicate with you. Specifically, we use it to:',
            [
              'Respond to your questions, feedback, and project submissions.',
              'Send our newsletter to subscribers who have requested it.',
              'Understand, in aggregate, how readers use the site so we can improve our content.',
              'Maintain the security and proper functioning of the website.'
            ],
            'We do not sell your personal information, and we do not use it for purposes unrelated to those described in this policy.'
          ]
        },
        {
          h: 'Cookies and consent',
          p: [
            'When you first visit, we show a cookie banner and load analytics only after you accept. We implement Google Consent Mode v2, which means analytics and advertising storage default to "denied" until you grant consent. If you decline, we do not set analytics cookies.',
            'You can change your choice at any time by clearing your browser storage for this site, which will cause the consent banner to appear again on your next visit.'
          ]
        },
        {
          h: 'Analytics',
          p: [
            'With your consent, we use Google Analytics (GA4) to understand site usage in aggregate. We have enabled IP anonymization. Google processes this data on our behalf; please see Google’s own privacy resources for details on how it handles analytics data.'
          ]
        },
        {
          h: 'How we share information',
          p: [
            'We share personal information only in limited circumstances:',
            [
              'With service providers who help us operate the site (for example, our analytics provider and email tools), bound by confidentiality obligations.',
              'When required by law, regulation, legal process, or a valid governmental request.',
              'To protect the rights, property, or safety of Classic Car Memories, our readers, or others.'
            ],
            'We do not sell, rent, or trade your personal information to third parties for their marketing purposes.'
          ]
        },
        {
          h: 'Data retention',
          p: [
            'We keep personal information only as long as necessary for the purposes described in this policy. Contact-form messages are retained while we correspond with you and for a reasonable period afterward. Newsletter data is kept until you unsubscribe. Aggregate analytics data is retained according to our analytics provider’s standard retention settings.'
          ]
        },
        {
          h: 'Your rights and choices',
          p: [
            'Depending on where you live, you may have rights regarding your personal information, including the right to access, correct, delete, or restrict its use, and to withdraw consent. To exercise any of these rights, email us at ' +
              SITE.email +
              '. You can unsubscribe from our newsletter at any time using the link in every email.'
          ]
        },
        {
          h: 'Children’s privacy',
          p: [
            'Our website is intended for an adult audience of car enthusiasts and is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it.'
          ]
        },
        {
          h: 'Data security',
          p: [
            'We take reasonable technical and organizational measures to protect the information we hold against loss, misuse, and unauthorized access. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.'
          ]
        },
        {
          h: 'Third-party links',
          p: [
            'Our articles may link to third-party websites for reference. We are not responsible for the privacy practices or content of those sites, and we encourage you to read their privacy policies before providing them with any personal information.'
          ]
        },
        {
          h: 'Changes to this policy',
          p: [
            'We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this page periodically.'
          ]
        },
        {
          h: 'Contact us',
          p: [
            `If you have any questions about this Privacy Policy or our handling of your information, contact us at ${SITE.email}, by phone at ${SITE.phone}, or by mail at ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postal}.`
          ]
        }
      ]}
    />
  )
}
