import Container from '../components/common/Container'
import { BUSINESS_PHONE, BUSINESS_EMAIL, BUSINESS_ADDRESS } from '../utils/constants'
import termsBg from '../assets/g2.webp'

const messageItems = [
  'Free estimate confirmations and scheduling notifications',
  'Appointment reminders and project status updates',
  'Customer support and service follow-up communications',
  'Promotional offers and seasonal announcements related to our tree care services',
]

const Section = ({ title, children }) => (
  <section>
    <h3 className="font-semibold text-emerald-900 mb-2">{title}</h3>
    {children}
  </section>
)

const Body = ({ children }) => (
  <p className="text-sm text-gray-600 leading-relaxed">{children}</p>
)

const Terms = () => (
  <div>
    <section className="relative h-56 sm:h-64 overflow-hidden">
      <img src={termsBg} alt="" className="absolute inset-0 w-full h-full object-cover scale-105" loading="eager" />
      <div className="absolute inset-0 bg-emerald-900/80" />
      <div className="relative z-10 h-full flex flex-col justify-center pt-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <p className="font-medium text-sm tracking-widest uppercase mb-3 text-emerald-300">Legal Center</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">Terms & Conditions</h1>
        <p className="text-base text-emerald-100/80">Effective Date: January 19, 2025 | Last Updated: July 9, 2026</p>
      </div>
    </section>

    <section className="bg-emerald-100 py-16">
      <Container>
        <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-8 space-y-8 max-w-4xl mx-auto">

          <Body>Welcome to KD 500 Tree. By accessing this website or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.</Body>

          <Section title="1. Business Identity">
            <Body>These Terms and Conditions govern your use of the services provided by KD 500 Tree. Contact: {BUSINESS_PHONE} | {BUSINESS_EMAIL}.</Body>
          </Section>

          <Section title="2. Age Requirement (18+)">
            <Body>By using this website or enrolling in our services, including SMS messaging, you confirm that you are at least 18 years of age. Our SMS program is not directed to individuals under 18.</Body>
          </Section>

          <Section title="3. Terminology">
            <Body>"Client," "You," and "Your" refers to the user of this website.</Body>
            <Body>"The Company," "We," "Our," and "Us" refers to KD 500 Tree.</Body>
          </Section>

          <Section title="4. SMS Messaging Terms of Service">
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <div>
                <p className="font-semibold text-emerald-800 mb-1">4a. Program Description & Message Types</p>
                <p>By providing your phone number and checking the SMS consent checkbox on our contact forms, you agree to receive recurring automated text messages from KD 500 Tree. Messages may include:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  {messageItems.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              {[
                ['4b. Message Frequency', 'Message frequency varies based on your service activity and interactions with us. You may receive up to 4–8 messages per month. Frequency may increase during active service periods.'],
                ['4c. Message & Data Rates', 'Message and data rates may apply for any messages sent to you from us and to us from you. Charges are determined by your mobile carrier and your individual service plan. KD 500 Tree is not responsible for any carrier charges.'],
                ['4d. How to Opt Out (STOP)', 'You can opt out of receiving SMS messages at any time by replying STOP to any message we send. After opting out, you will receive a one-time confirmation message and will no longer receive SMS messages from us unless you re-enroll.'],
                ['4e. How to Get Help (HELP)', `For help with our SMS program, reply HELP to any message or contact us directly at ${BUSINESS_PHONE} or ${BUSINESS_EMAIL}.`],
                ['4f. Carrier Liability Disclaimer', 'Mobile carriers are not liable for delayed or undelivered messages. KD 500 Tree cannot guarantee delivery of SMS messages. Delivery may be subject to your mobile carrier\'s capability and coverage area.'],
                ['4g. Supported Carriers', 'Our SMS program is supported by all major U.S. wireless carriers including AT&T, Verizon, T-Mobile, and Sprint. Not all carriers are supported for all messages.'],
              ].map(([label, text]) => (
                <div key={label}>
                  <p className="font-semibold text-emerald-800 mb-1">{label}</p>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="5. Cookies">
            <Body>We use cookies in accordance with our Privacy Policy to improve user experience and website functionality.</Body>
          </Section>

          <Section title="6. Intellectual Property & License">
            <Body>Unless otherwise stated, KD 500 Tree owns the intellectual property rights for all content on this website. You may not copy, reproduce, republish, sell, or redistribute any material without prior written permission.</Body>
          </Section>

          <Section title="7. Comments & User Content">
            <Body>KD 500 Tree reserves the right to monitor and remove any comments or user-generated content on our platforms that are inappropriate, offensive, or violate these terms.</Body>
          </Section>

          <Section title="8. Content Liability">
            <Body>We are not responsible for content that appears on external websites linking to us. You agree to defend and protect KD 500 Tree against any claims arising from your website or digital properties.</Body>
          </Section>

          <Section title="9. Disclaimer">
            <Body>To the maximum extent permitted by applicable law, KD 500 Tree excludes all warranties, representations, and conditions relating to our website and services. We are not liable for any loss or damage (including damage for loss of business, profits, or revenue) arising from the use of our website or services.</Body>
          </Section>

          <Section title="10. Changes to These Terms">
            <Body>We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with a revised "Last Updated" date. Continued use of our website or services constitutes acceptance of the updated terms.</Body>
          </Section>

          <Section title="11. Contact Information">
            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 text-sm text-gray-700 space-y-2">
              <p><strong className="text-emerald-900">Company:</strong> KD 500 Tree</p>
              <p><strong className="text-emerald-900">Phone:</strong> {BUSINESS_PHONE}</p>
              <p><strong className="text-emerald-900">Email:</strong> {BUSINESS_EMAIL}</p>
              <p><strong className="text-emerald-900">Address:</strong> {BUSINESS_ADDRESS}</p>
            </div>
          </Section>

        </div>
      </Container>
    </section>
  </div>
)

export default Terms