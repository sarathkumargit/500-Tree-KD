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
    {/* Hero header */}
    <section className="relative h-56 sm:h-64 overflow-hidden">
      <img src={privacyBg} alt="" className="absolute inset-0 w-full h-full object-cover scale-105" loading="eager" />
      <div className="absolute inset-0 bg-emerald-900/80" />
      <div className="relative z-10 h-full flex flex-col justify-center pt-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <p className="font-medium text-sm tracking-widest uppercase mb-3 text-emerald-300">Legal</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">Privacy Policy</h1>
        <p className="text-base text-emerald-100/80">Effective Date: January 19, 2025 | Last Updated: July 14, 2026</p>
      </div>
    </section>

    {/* Content */}
    <section className="bg-emerald-100 py-16">
      <Container>
        <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-8 space-y-8 max-w-4xl mx-auto">

          <Body>KD 500 Tree is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website, request a free estimate, schedule a service, or communicate with us.</Body>

          <Section title="Information We Collect">
            <Body>We may collect personal information when you contact us, submit an estimate request, schedule tree care services, or communicate with our team.</Body>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>Your name</li>
              <li>Property or service address</li>
              <li>Email address</li>
              <li>Telephone or mobile phone number</li>
              <li>Details about the tree care services requested</li>
              <li>Appointment and estimate information</li>
              <li>Messages and other communication details</li>
              <li>Photographs or files submitted with a service request</li>
            </ul>
          </Section>

          <Section title="SMS Privacy Notice">
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <div>
                <p className="font-semibold text-emerald-800 mb-1">Collection of Information</p>
                <p>We collect your mobile phone number when you voluntarily opt in to receive SMS communications from KD 500 Tree. This may occur through our website forms, phone calls, estimate requests, or other direct communication methods.</p>
              </div>
              <div>
                <p className="font-semibold text-emerald-800 mb-1">Use of SMS Information</p>
                <p>We may use your phone number to send appointment reminders, service updates, estimate notifications, project status updates, emergency service communications, customer support messages, and tree care promotions. Message frequency may vary depending on your service requests, appointment activity, and communication preferences.</p>
              </div>
              <div>
                <p className="font-semibold text-emerald-800 mb-1">SMS Data Sharing</p>
                <p>We do not sell, rent, or share mobile phone information or SMS consent data with third parties or affiliates for their own marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties, except service providers that help us deliver messages or where disclosure is required by law.</p>
              </div>
            </div>
          </Section>

          <Section title="SMS Opt-In Information">
            <Body>By providing your mobile phone number and selecting an applicable consent option, you agree to receive SMS messages from KD 500 Tree. Messages may include service updates, estimate information, appointment reminders, project notifications, customer support communications, and promotional messages.</Body>
            <div className="mt-4 rounded-2xl bg-emerald-50 border border-emerald-100 p-5 text-sm text-gray-600 space-y-2">
              <p>Message and data rates may apply. Reply <strong className="text-emerald-900">STOP</strong> at any time to unsubscribe.</p>
              <p>Reply <strong className="text-emerald-900">HELP</strong> for assistance.</p>
            </div>
          </Section>

          <Section title="How We Use Your Information">
            <Body>We may use your personal information to:</Body>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>Respond to questions and service requests</li>
              <li>Provide and manage free estimates</li>
              <li>Schedule appointments and tree care services</li>
              <li>Communicate service and project updates</li>
              <li>Provide customer support</li>
              <li>Improve our website and customer experience</li>
              <li>Maintain business and service records</li>
              <li>Send promotional messages when consent is provided</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </Section>

          <Section title="Mobile Information Sharing Statement">
            <Body>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</Body>
            <Body>All categories of information described in this Privacy Policy exclude text messaging originator opt-in data and consent. This information will not be shared with third parties, except where necessary to provide messaging services or comply with applicable law.</Body>
          </Section>

          <Section title="How We Share Information">
            <Body>We do not sell or rent your personal information. We may share limited information with trusted service providers that help us operate the website, manage communications, schedule services, process forms, or maintain business systems.</Body>
            <Body>These providers may only use the information as necessary to perform services on our behalf.</Body>
            <Body>We may also disclose information where required by law, court order, legal process, or to protect the safety, property, and rights of KD 500 Tree, our customers, or others.</Body>
          </Section>

          <Section title="Cookie and Tracking Practices">
            <Body>We may use cookies and similar technologies to improve website performance, understand how visitors use the website, remember user preferences, and improve the customer experience.</Body>
            <Body>Cookies generally do not store sensitive personal information. You may adjust your browser settings to block or remove cookies, although some website features may not work correctly.</Body>
          </Section>

          <Section title="Third-Party Services and Links">
            <Body>Our website may use or link to third-party services such as form providers, messaging platforms, map services, analytics tools, or social media platforms.</Body>
            <Body>KD 500 Tree is not responsible for the privacy practices, security, or content of third-party websites and services. You should review their privacy policies before providing personal information.</Body>
          </Section>

          <Section title="Data Security and Handling">
            <Body>We use reasonable administrative, technical, and organizational safeguards to protect personal information from unauthorized access, disclosure, alteration, loss, or misuse.</Body>
            <Body>However, no internet transmission, electronic storage system, or security method can be guaranteed to be completely secure.</Body>
          </Section>

          <Section title="Data Retention">
            <Body>We retain personal information only for as long as reasonably necessary to provide services, manage customer relationships, maintain records, resolve disputes, enforce agreements, or comply with legal obligations.</Body>
            <Body>SMS consent records may be retained as needed to demonstrate compliance with applicable messaging requirements.</Body>
          </Section>

          <Section title="Your Privacy Rights">
            <Body>Depending on your location and applicable law, you may have the right to:</Body>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>Request access to your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Request a copy of certain personal information</li>
              <li>Withdraw consent for certain communications</li>
              <li>Opt out of SMS or promotional messages</li>
            </ul>
            <Body>To exercise an applicable privacy right, contact us using the details listed at the bottom of this page. We may need to verify your identity before completing the request.</Body>
          </Section>

          <Section title="California Privacy Rights">
            <Body>California residents may have additional rights under the California Consumer Privacy Act and related privacy laws, including rights to know, correct, delete, and limit certain uses of personal information where applicable.</Body>
            <Body>KD 500 Tree does not sell personal information as that term is commonly defined under the CCPA.</Body>
          </Section>

          <Section title="International Privacy Rights">
            <Body>Where the General Data Protection Regulation or similar laws apply, personal information may be processed based on your consent, the need to provide requested services, compliance with legal obligations, or our legitimate business interests.</Body>
          </Section>

          <Section title="Children's Privacy">
            <Body>This website and our services are intended for adults. We do not knowingly collect personal information from children under 13 years of age.</Body>
            <Body>Our SMS messaging program is only available to individuals who are at least 18 years old.</Body>
          </Section>

          <Section title="Changes to This Privacy Policy">
            <Body>We may update this Privacy Policy to reflect changes in our practices, services, technologies, or legal requirements.</Body>
            <Body>Updates will be published on this page with a revised "Last Updated" date. We encourage users to review this page periodically.</Body>
          </Section>

          <Section title="Contact Information">
            <Body>For privacy questions, SMS support, or requests relating to your personal information, contact us using the information below.</Body>
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