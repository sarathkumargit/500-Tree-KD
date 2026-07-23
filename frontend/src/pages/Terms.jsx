import Container from '../components/common/Container'
import { BUSINESS_PHONE, BUSINESS_EMAIL, BUSINESS_ADDRESS } from '../utils/constants'
import termsBg from '../assets/g2.webp'

const serviceItems = [
  'Tree removal','Tree trimming','Stump grinding',
  'Emergency tree services','Land clearing','Storm cleanup',
]

const messageItems = [
  'Estimate updates','Appointment confirmations','Service reminders',
  'Project status notifications','Emergency service updates',
  'Customer support messages','Promotional offers related to our tree care services',
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
    {/* Hero header */}
    <section className="relative h-56 sm:h-64 overflow-hidden">
      <img src={termsBg} alt="" className="absolute inset-0 w-full h-full object-cover scale-105" loading="eager" />
      <div className="absolute inset-0 bg-emerald-900/80" />
      <div className="relative z-10 h-full flex flex-col justify-center pt-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <p className="font-medium text-sm tracking-widest uppercase mb-3 text-emerald-300">Legal Center</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">Terms & Conditions</h1>
        <p className="text-base text-emerald-100/80">Effective Date: January 19, 2025 | Last Updated: July 14, 2026</p>
      </div>
    </section>

    {/* Content */}
    <section className="bg-emerald-100 py-16">
      <Container>
        <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-8 space-y-8 max-w-4xl mx-auto">

          <Body>Welcome to KD 500 Tree. By accessing this website, submitting a request for an estimate, or using our tree care services, you agree to these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.</Body>

          <Section title="Age Requirement">
            <Body>By using this website, submitting a contact form, or enrolling in our SMS messaging program, you confirm that you are at least 18 years of age.</Body>
          </Section>

          <Section title="Terminology">
            <Body>"Client," "You," and "Your" refer to the individual using this website or requesting our services.</Body>
            <Body>"KD 500 Tree," "The Company," "We," "Our," and "Us" refer to KD 500 Tree.</Body>
          </Section>

          <Section title="Services">
            <Body>KD 500 Tree provides professional tree care services, which may include:</Body>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {serviceItems.map((item) => (
                <li key={item} className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900">{item}</li>
              ))}
            </ul>
            <Body>Service availability may depend on location, weather conditions, property access, equipment requirements, and the condition of the trees involved.</Body>
          </Section>

          <Section title="Estimates and Pricing">
            <Body>We may provide free estimates based on the information available at the time of inspection.</Body>
            <Body>Final pricing may change if additional hazards, hidden damage, access restrictions, utility concerns, or other unexpected conditions are discovered during the project.</Body>
            <Body>Any changes to the original estimate will be discussed with the client before additional work is completed.</Body>
          </Section>

          <Section title="Property Access">
            <Body>By scheduling a service, you confirm that you have permission to authorize tree work at the property.</Body>
            <Body>The client is responsible for identifying property boundaries, underground utilities, irrigation systems, septic systems, invisible fences, and other concealed structures that may affect the work.</Body>
          </Section>

          <Section title="Safety and Weather Conditions">
            <Body>Tree care work may be delayed, rescheduled, or cancelled because of severe weather, unsafe working conditions, equipment issues, utility hazards, or other circumstances beyond our control.</Body>
            <Body>KD 500 Tree reserves the right to stop or postpone work that may place employees, customers, surrounding property, or the public at risk.</Body>
          </Section>

          <Section title="Emergency Tree Services">
            <Body>Emergency response times may vary depending on weather conditions, road access, service demand, crew availability, and the severity of the emergency.</Body>
            <Body>Submitting an emergency service request does not guarantee immediate arrival.</Body>
            <Body>If a fallen tree or branch is touching a power line, stay away from the area and contact the appropriate utility provider or emergency service.</Body>
          </Section>

          <Section title="Cookies">
            <Body>We may use cookies and similar technologies to improve website performance, understand website usage, and provide a better user experience.</Body>
            <Body>Additional information about how we collect and use information is available in our Privacy Policy.</Body>
          </Section>

          <Section title="Intellectual Property License">
            <Body>Unless otherwise stated, KD 500 Tree owns or has permission to use the text, graphics, logos, photographs, website design, and other content displayed on this website.</Body>
            <Body>You may not copy, reproduce, publish, sell, distribute, modify, or reuse website content without prior written permission.</Body>
          </Section>

          <Section title="SMS Messaging Terms of Service">
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <div>
                <p className="font-semibold text-emerald-800 mb-1">Program Description</p>
                <p>By providing your mobile phone number and consenting to receive messages, you agree to receive recurring automated or manually sent text messages from KD 500 Tree. Consent is not required as a condition of purchasing services.</p>
              </div>
              <div>
                <p className="font-semibold text-emerald-800 mb-2">Messages may include:</p>
                <ul className="list-disc pl-5 space-y-1">
                  {messageItems.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              {[
                ['Opt-Out', 'Reply STOP to any message. After opting out, you may receive one final confirmation message.'],
                ['Support', `Reply HELP to any SMS message or contact us at ${BUSINESS_EMAIL}.`],
                ['Message Frequency', 'Message frequency may vary depending on your service request, appointment status, and communication preferences.'],
                ['Message & Data Rates', 'Standard message and data rates may apply depending on your wireless carrier and mobile service plan.'],
                ['Carrier Liability', 'Mobile carriers are not responsible for delayed or undelivered messages. KD 500 Tree cannot guarantee delivery because it depends on carrier availability, network coverage, and device compatibility.'],
              ].map(([label, text]) => (
                <div key={label}>
                  <p className="font-semibold text-emerald-800 mb-1">{label}</p>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="User-Submitted Information">
            <Body>When submitting a contact form, estimate request, review, photograph, or other information, you agree that the information provided is accurate and does not violate applicable laws or another person's rights.</Body>
            <Body>KD 500 Tree may remove content that is offensive, misleading, unlawful, inappropriate, or in violation of these Terms and Conditions.</Body>
          </Section>

          <Section title="Links to External Websites">
            <Body>Our website may contain links to third-party websites or services. KD 500 Tree does not control and is not responsible for their content, privacy practices, availability, or security.</Body>
          </Section>

          <Section title="Hyperlinking to Our Content">
            <Body>Organizations may link to our website provided that the link is not misleading, does not falsely imply sponsorship or endorsement, does not damage our reputation, and is relevant to the linking website.</Body>
          </Section>

          <Section title="Content Liability">
            <Body>We are not responsible for content appearing on external websites that link to our website. You agree to protect and defend KD 500 Tree against claims resulting from unlawful or misleading content published on a website under your control.</Body>
          </Section>

          <Section title="Limitation of Liability">
            <Body>To the fullest extent permitted by law, KD 500 Tree is not liable for indirect, incidental, special, or consequential damages arising from use of this website, delays, third-party services, weather conditions, or information submitted through online forms.</Body>
          </Section>

          <Section title="Disclaimer">
            <Body>Website information is provided for general informational purposes and is not a substitute for an on-site professional inspection.</Body>
            <Body>KD 500 Tree does not guarantee that all website information will always be complete, accurate, or up to date.</Body>
          </Section>

          <Section title="Changes to These Terms">
            <Body>KD 500 Tree may update these Terms and Conditions when necessary. Changes will be published on this page with an updated "Last Updated" date.</Body>
          </Section>

          <Section title="Governing Law">
            <Body>These Terms and Conditions are governed by the applicable laws of the State of New York and the United States.</Body>
          </Section>

          <Section title="Contact Information">
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