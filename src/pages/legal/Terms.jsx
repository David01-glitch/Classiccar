import LegalLayout from '../../components/LegalLayout.jsx'
import { SITE } from '../../data/site.js'

export default function Terms() {
  return (
    <LegalLayout
      path="/legal/terms"
      title="Terms of Service"
      updated="May 1, 2026"
      intro="The terms that govern your use of the Classic Car Memories website and content."
      sections={[
        {
          h: 'Acceptance of terms',
          p: [
            `These Terms of Service ("Terms") govern your access to and use of the website operated by Classic Car Memories at ${SITE.url} (the "Site"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.`
          ]
        },
        {
          h: 'About our content',
          p: [
            'Classic Car Memories is an editorial publisher. We provide articles, guides, stories, and other information about classic car restoration, automotive history, and road trips for general informational and entertainment purposes only. We are not a dealer, repair shop, or professional advisory service.'
          ]
        },
        {
          h: 'Not professional advice',
          p: [
            'Restoration, mechanical, and travel content on the Site is general information, not professional advice tailored to your situation. Working on vehicles can be dangerous. Always follow the manufacturer’s service manual, use appropriate safety equipment, and consult a qualified professional for any work beyond your competence. You rely on our content at your own risk.'
          ]
        },
        {
          h: 'Eligibility',
          p: [
            'The Site is intended for users who are at least 18 years of age. By using the Site, you represent that you meet this requirement and that you have the legal capacity to enter into these Terms.'
          ]
        },
        {
          h: 'Acceptable use',
          p: [
            'You agree to use the Site lawfully and respectfully. You agree not to:',
            [
              'Use the Site in any way that violates applicable law or regulation.',
              'Attempt to gain unauthorized access to the Site, its servers, or related systems.',
              'Interfere with or disrupt the integrity or performance of the Site.',
              'Scrape, harvest, or collect information about other users without permission.',
              'Upload or transmit any malicious code or harmful content.'
            ]
          ]
        },
        {
          h: 'Intellectual property',
          p: [
            'All content on the Site — including text, articles, photographs, graphics, logos, and design — is owned by Classic Car Memories or its licensors and is protected by copyright and other intellectual property laws. You may view and share links to our content for personal, non-commercial use, but you may not reproduce, republish, or distribute it without our prior written permission.'
          ]
        },
        {
          h: 'User submissions',
          p: [
            'If you submit a project, story, photographs, comments, or other materials ("Submissions"), you represent that you own or have the rights to them and that they do not infringe the rights of others. You grant us a non-exclusive, royalty-free, worldwide license to use, edit, publish, and display your Submissions in connection with the Site and our newsletter. We are not obligated to publish any Submission.'
          ]
        },
        {
          h: 'Newsletter',
          p: [
            'Our newsletter is provided free of charge to subscribers who request it. By subscribing, you consent to receive periodic emails from us. You may unsubscribe at any time using the link in every email. We do not charge for the newsletter, and there is therefore nothing to refund.'
          ]
        },
        {
          h: 'Third-party links and references',
          p: [
            'The Site may contain links to or references to third-party websites, products, vendors, or services. These are provided for convenience and information only. We do not control and are not responsible for the content, policies, or practices of any third party, and a reference is not an endorsement.'
          ]
        },
        {
          h: 'Disclaimer of warranties',
          p: [
            'The Site and its content are provided "as is" and "as available" without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, accuracy, and non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components.'
          ]
        },
        {
          h: 'Limitation of liability',
          p: [
            'To the fullest extent permitted by law, Classic Car Memories and its team will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss arising from your use of, or inability to use, the Site or its content, even if we have been advised of the possibility of such damages.'
          ]
        },
        {
          h: 'Indemnification',
          p: [
            'You agree to indemnify and hold harmless Classic Car Memories and its team from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising out of your use of the Site, your Submissions, or your violation of these Terms.'
          ]
        },
        {
          h: 'Modifications to the Site and Terms',
          p: [
            'We may modify or discontinue the Site, or any part of it, at any time without notice. We may also revise these Terms from time to time. Changes become effective when posted, and the "Last updated" date will reflect the most recent revision. Your continued use of the Site after changes constitutes acceptance of the revised Terms.'
          ]
        },
        {
          h: 'Governing law',
          p: [
            'These Terms are governed by the laws of the State of Michigan, United States, without regard to its conflict-of-laws principles. Any disputes arising from these Terms or your use of the Site will be subject to the exclusive jurisdiction of the state and federal courts located in Michigan.'
          ]
        },
        {
          h: 'Contact us',
          p: [
            `If you have questions about these Terms, contact us at ${SITE.email}, by phone at ${SITE.phone}, or by mail at ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postal}.`
          ]
        }
      ]}
    />
  )
}
