import Container from '../components/common/Container'
import { BUSINESS_PHONE, BUSINESS_EMAIL, BUSINESS_ADDRESS } from '../utils/constants'
import privacyBg from '../assets/g2.webp'

const Section = ({ title, children }) => (
  <section>
    <h3 className="font-semibold text-emerald-900 mb-2">{title}</h3>
    {children}
  </section>
)

const Body = ({ children }) => (
  <p className="text-sm text-gray-600 leading-relaxed">{children}</p>
)

const Privacy = () => (
  <div>
    <section className="relative h-56 sm:h-64 overflow-hidden">
      <img src={privacyBg} alt="" className="absolute inset-0 w-full h-full object-cover scale-105" loading="eager" />
      <div className="absolute inset-0 bg-emerald-900/80" />
      <div className="relative z-10 h-full flex flex-col justify-center pt-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <p className="font-medium text-sm tracking-widest uppercase mb-3 text-emerald-300">Legal</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">Privacy Policy</h1>
        <p className="text-base text-emerald-100/80">Effective Date: January 19, 2025 | Last Updated: July 9, 2026</p>
      </div>
    </section>

    <section className="bg-emerald-100 py-16">
      <Container>
        <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-8 space-y-8 max-w-4xl mx-auto">

         
          <Section title="1. Information We Collect">
            <Body>We may collect the following categories of personal information when you contact us, request a quote, submit a web form, or use our services:</Body>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>Full name</li>
              <li>Mailing or service address</li>
              <li>Email address</li>
              <li>Mobile phone number</li>
              <li>Service request details and project descriptions</li>
              <li>Communication history and preferences</li>
            </ul>
          </Section>

          <Section title="2. SMS / Text Message Communications">
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <div>
                <p className="font-semibold text-emerald-800 mb-1">2a. How We Collect Your Mobile Number</p>
                <p>We collect your mobile phone number when you voluntarily provide it through our website contact forms, phone calls, or other direct communication channels. By providing your mobile number and checking the SMS consent checkbox on our forms, you expressly consent to receive SMS communications from KD 500 Tree.</p>
              </div>
              <div>
                <p className="font-semibold text-emerald-800 mb-1">2b. Types of Messages We Send</p>
                <p>By opting in, you may receive recurring automated text messages including:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Free estimate confirmations and appointment reminders</li>
                  <li>Project status updates and scheduling notifications</li>
                  <li>Customer support and follow-up communications</li>
                  <li>Promotional offers and seasonal service announcements</li>
                </ul>
              </div>
              {[
                ['2c. Message Frequency', 'Message frequency varies based on your interactions with us, ongoing service needs, and active promotions. You may receive up to 4–8 messages per month depending on your service activity.'],
                ['2d. Message & Data Rates', 'Message and data rates may apply. Charges are determined by your mobile carrier and your individual service plan. KD 500 Tree is not responsible for any charges incurred from your mobile carrier.'],
                ['2e. How to Opt Out (STOP)', 'You may cancel SMS messages at any time by replying STOP to any text message you receive from us. After opting out, you will receive one final confirmation message and will no longer receive SMS communications unless you re-enroll.'],
                ['2f. How to Get Help (HELP)', `For help with our SMS program, reply HELP to any message, or contact us at ${BUSINESS_PHONE} or ${BUSINESS_EMAIL}.`],
              ].map(([label, text]) => (
                <div key={label}>
                  <p className="font-semibold text-emerald-800 mb-1">{label}</p>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="3. Mobile Information & SMS Consent — No Third-Party Sharing">
            <Body>No mobile information (including your mobile phone number and SMS opt-in consent data) will be shared with third parties or affiliates for marketing or promotional purposes.</Body>
            <Body>All other categories of personal data exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties under any circumstances.</Body>
          </Section>

          <Section title="4. How We Use Your Information">
            <Body>We use the personal information we collect to:</Body>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>Provide and manage tree care services</li>
              <li>Respond to inquiries and service requests</li>
              <li>Schedule appointments and send reminders</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Improve our website and service quality</li>
              <li>Comply with applicable laws and regulations</li>
            </ul>
          </Section>

          <Section title="5. Cookies and Tracking Technologies">
            <Body>We use cookies and similar technologies to improve website functionality, analyze traffic, and enhance user experience. Cookies do not store sensitive personal information. By continuing to use this website, you consent to our use of cookies in accordance with this policy.</Body>
          </Section>

          <Section title="6. Data Security">
            <Body>We implement reasonable administrative, technical, and physical security measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction. However, no method of electronic transmission or storage is 100% secure.</Body>
          </Section>

          <Section title="7. Data Retention">
            <Body>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable law. When your data is no longer needed, we securely delete or anonymize it.</Body>
          </Section>

          <Section title="8. Your Privacy Rights">
            <Body>Depending on your location, you may have the following rights regarding your personal data:</Body>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li><strong className="text-gray-700">Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong className="text-gray-700">Correction:</strong> Request correction of inaccurate personal data</li>
              <li><strong className="text-gray-700">Deletion:</strong> Request deletion of your personal data including your mobile number and SMS consent record</li>
              <li><strong className="text-gray-700">Opt-Out of SMS:</strong> Reply STOP to any text message at any time</li>
              <li><strong className="text-gray-700">Opt-Out of Marketing:</strong> Contact us directly to be removed from marketing lists</li>
            </ul>
            <Body>To exercise any of these rights, contact us at {BUSINESS_EMAIL} or call {BUSINESS_PHONE}.</Body>
          </Section>

          <Section title="9. Changes to This Privacy Policy">
            <Body>We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised "Last Updated" date. Continued use of our website or services after any changes constitutes your acceptance of the updated policy.</Body>
          </Section>

          <Section title="10. Contact Information">
            <Body>If you have questions or concerns about this Privacy Policy, please contact us:</Body>
            <div className="mt-4 rounded-2xl bg-emerald-50 border border-emerald-100 p-6 text-sm text-gray-700 space-y-2">
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

export default Privacy