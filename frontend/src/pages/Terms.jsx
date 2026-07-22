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
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">Terms of Service & Privacy</h1>
        <p className="text-base text-emerald-100/80">Transparency and trust are at the root of everything we do.</p>
      </div>
    </section>

    {/* Content */}
    <section className="bg-emerald-100 py-16">
      <Container>
        <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-8 space-y-8 max-w-4xl mx-auto">
          <Section title="1. Website Usage">
            <Body>By accessing the KD 500 Tree website, you agree to comply with the following terms. This site is provided for informational purposes and for requesting tree care services. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</Body>
          </Section>

          <Section title="2. Customer Responsibilities">
            <ul className="text-sm text-gray-600 leading-relaxed list-disc pl-5 space-y-1">
              <li>Customers must provide accurate property boundaries and identify any underground utilities not marked by public services.</li>
              <li>Safe access to the work site must be provided for heavy machinery and personnel.</li>
            </ul>
          </Section>

          <Section title="3. Age Requirement">
            <Body>By using this website, submitting a contact form, or enrolling in our SMS messaging program, you confirm that you are at least 18 years of age.</Body>
          </Section>

          <Section title="4. Terminology">
            <Body>"Client," "You," and "Your" refer to the individual using this website or requesting our services.</Body>
            <Body>"KD 500 Tree," "The Company," "We," "Our," and "Us" refer to KD 500 Tree.</Body>
          </Section>

          <Section title="5. Services">
            <Body>KD 500 Tree provides professional tree care services, which may include:</Body>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {serviceItems.map((item) => (
                <li key={item} className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900">{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="6. Estimates and Pricing">
            <Body>We may provide free estimates based on the information available at the time of inspection. Final pricing may change if additional hazards, hidden damage, or unexpected conditions are discovered. Any changes will be discussed before additional work is completed.</Body>
          </Section>

          <Section title="7. Property Access">
            <Body>By scheduling a service, you confirm that you have permission to authorize tree work at the property. The client is responsible for identifying property boundaries, underground utilities, irrigation systems, and other concealed structures.</Body>
          </Section>

          <Section title="8. Safety and Weather Conditions">
            <Body>Tree care work may be delayed or cancelled due to severe weather, unsafe conditions, or circumstances beyond our control. KD 500 Tree reserves the right to stop work that may place employees, customers, or the public at risk.</Body>
          </Section>

          <Section title="9. Emergency Tree Services">
            <Body>Emergency response times may vary. Submitting a request does not guarantee immediate arrival. If a fallen tree is touching a power line, stay away and contact the appropriate utility provider.</Body>
          </Section>

          <Section title="10. Cookies">
            <Body>We may use cookies to improve website performance and user experience.</Body>
          </Section>

          <Section title="11. Intellectual Property License">
            <Body>Unless otherwise stated, KD 500 Tree owns or has permission to use all content on this website. You may not copy, reproduce, or reuse content without prior written permission.</Body>
          </Section>

          <Section title="12. SMS Messaging Terms of Service">
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              {[
                ['Program Description', `By providing your mobile number and consenting, you agree to receive recurring text messages from KD 500 Tree. Consent is not required as a condition of purchasing services.`],
                ['Opt-Out', `Reply "STOP" to any message to opt out. You may receive one final confirmation message.`],
                ['Support', `Reply "HELP" or contact ${BUSINESS_EMAIL}.`],
                ['Message & Data Rates', 'Standard message and data rates may apply.'],
                ['Carrier Liability', 'KD 500 Tree is not liable for delayed or undelivered messages.'],
                ['Age Restriction', 'You must be 18 or older to participate in our SMS program.'],
              ].map(([label, text]) => (
                <div key={label}>
                  <p className="font-semibold text-emerald-800 mb-1">{label}</p>
                  <p>{text}</p>
                </div>
              ))}
              <div>
                <p className="font-semibold text-emerald-800 mb-2">Messages may include:</p>
                <ul className="list-disc pl-5 space-y-1">
                  {messageItems.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </Section>

          <Section title="13–20. Additional Terms">
            <Body>These terms cover user-submitted information, external links, content liability, intellectual property, limitation of liability, disclaimers, changes to terms, and governing law. KD 500 Tree reserves all rights under applicable U.S. law.</Body>
          </Section>

          <Section title="21. Privacy & SMS Data">
            <div className="text-sm text-gray-600 leading-relaxed space-y-3">
              {[
                ['Collection', 'We collect your mobile number when you opt in to SMS communications.'],
                ['Use', 'We use it to send service updates, reminders, and offers related to tree care.'],
                ['Data Sharing', 'We do not sell, share, or rent your phone number or SMS consent data to third parties.'],
                ['Your Rights', `Contact ${BUSINESS_EMAIL} to access or delete your data.`],
              ].map(([label, text]) => (
                <div key={label}>
                  <span className="font-semibold text-emerald-800">{label}: </span>{text}
                </div>
              ))}
            </div>
          </Section>

          <Section title="22. Contact Information">
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