import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import GlassPanel from '../components/common/GlassPanel'
import { BUSINESS_PHONE, BUSINESS_EMAIL, BUSINESS_ADDRESS } from '../utils/constants'
import termsBg from '../assets/g2.png'

const serviceItems = [
  'Tree removal',
  'Tree trimming',
  'Stump grinding',
  'Emergency tree services',
  'Land clearing',
  'Storm cleanup',
]

const messageItems = [
  'Estimate updates',
  'Appointment confirmations',
  'Service reminders',
  'Project status notifications',
  'Emergency service updates',
  'Customer support messages',
  'Promotional offers related to our tree care services',
]

const Terms = () => (
  <div className="relative">
    <img
      src={termsBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover -z-10"
    />

    <Container className="py-40 relative z-10">
      <SectionHeading eyebrow="Legal Center" title="Terms of Service & Privacy" description="Transparency and trust are at the root of everything we do." />

      <GlassPanel className="p-8 space-y-8">
        <section>
          <h3 className="font-semibold text-forest mb-2">1. Website Usage</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            By accessing the KD 500 Tree website, you agree to comply with the following terms. This site
            is provided for informational purposes and for requesting tree care services. Unauthorized
            use of this website may give rise to a claim for damages and/or be a criminal offense.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">2. Customer Responsibilities</h3>
          <ul className="text-sm text-ink/70 leading-relaxed list-disc pl-5 space-y-1">
            <li>Customers must provide accurate property boundaries and identify any underground utilities not marked by public services.</li>
            <li>Safe access to the work site must be provided for heavy machinery and personnel.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">3. Age Requirement</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            By using this website, submitting a contact form, or enrolling in our SMS messaging program,
            you confirm that you are at least 18 years of age.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">4. Terminology</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            "Client," "You," and "Your" refer to the individual using this website or requesting our services.
          </p>
          <p className="text-sm text-ink/70 leading-relaxed mt-3">
            "KD 500 Tree," "The Company," "We," "Our," and "Us" refer to KD 500 Tree.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">5. Services</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            KD 500 Tree provides professional tree care services, which may include:
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {serviceItems.map((item) => (
              <li key={item} className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-ink/80">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-ink/70 leading-relaxed mt-4">
            Service availability may depend on location, weather conditions, property access, equipment
            requirements, and the condition of the trees involved.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">6. Estimates and Pricing</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            We may provide free estimates based on the information available at the time of inspection.
          </p>
          <p className="text-sm text-ink/70 leading-relaxed mt-3">
            Final pricing may change if additional hazards, hidden damage, access restrictions, utility
            concerns, or other unexpected conditions are discovered during the project.
          </p>
          <p className="text-sm text-ink/70 leading-relaxed mt-3">
            Any changes to the original estimate will be discussed with the client before additional work
            is completed.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">7. Property Access</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            By scheduling a service, you confirm that you have permission to authorize tree work at the
            property.
          </p>
          <p className="text-sm text-ink/70 leading-relaxed mt-3">
            The client is responsible for identifying property boundaries, underground utilities,
            irrigation systems, septic systems, invisible fences, and other concealed structures that may
            affect the work.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">8. Safety and Weather Conditions</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            Tree care work may be delayed, rescheduled, or cancelled because of severe weather, unsafe
            working conditions, equipment issues, utility hazards, or other circumstances beyond our
            control.
          </p>
          <p className="text-sm text-ink/70 leading-relaxed mt-3">
            KD 500 Tree reserves the right to stop or postpone work that may place employees, customers,
            surrounding property, or the public at risk.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">9. Emergency Tree Services</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            Emergency response times may vary depending on weather conditions, road access, service
            demand, crew availability, and the severity of the emergency.
          </p>
          <p className="text-sm text-ink/70 leading-relaxed mt-3">
            Submitting an emergency service request does not guarantee immediate arrival.
          </p>
          <p className="text-sm text-ink/70 leading-relaxed mt-3">
            If a fallen tree or branch is touching a power line, stay away from the area and contact the
            appropriate utility provider or emergency service.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">10. Cookies</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            We may use cookies and similar technologies to improve website performance, understand website
            usage, and provide a better user experience.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">11. Intellectual Property License</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            Unless otherwise stated, KD 500 Tree owns or has permission to use the text, graphics, logos,
            photographs, website design, and other content displayed on this website.
          </p>
          <p className="text-sm text-ink/70 leading-relaxed mt-3">
            You may not copy, reproduce, publish, sell, distribute, modify, or reuse website content
            without prior written permission.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">12. SMS Messaging Terms of Service</h3>
          <div className="text-sm text-ink/70 leading-relaxed space-y-4">
            <div>
              <p className="font-medium text-forest/90 mb-1">Program Description</p>
              <p>
                By providing your mobile phone number and consenting to receive messages, you agree to
                receive recurring automated or manually sent text messages from KD 500 Tree, including:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                {messageItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-3">Consent to receive SMS messages is not required as a condition of purchasing services.</p>
            </div>
            <div>
              <p className="font-medium text-forest/90 mb-1">Opt-Out</p>
              <p>
                You can opt out of receiving SMS messages at any time by replying "STOP" to any message we
                send. After opting out, you may receive one final confirmation message.
              </p>
            </div>
            <div>
              <p className="font-medium text-forest/90 mb-1">Support</p>
              <p>For help, reply "HELP" to any message or contact us at {BUSINESS_EMAIL}.</p>
            </div>
            <div>
              <p className="font-medium text-forest/90 mb-1">Message Frequency</p>
              <p>Message frequency may vary depending on your service request, appointment status, and communication preferences.</p>
            </div>
            <div>
              <p className="font-medium text-forest/90 mb-1">Message & Data Rates</p>
              <p>Message and data rates may apply for any messages sent to you from us and to us from you.</p>
            </div>
            <div>
              <p className="font-medium text-forest/90 mb-1">Carrier Liability</p>
              <p>
                KD 500 Tree is not liable for delayed or undelivered messages. Delivery of information and
                content through SMS may be subject to your mobile carrier's capability and is not
                guaranteed.
              </p>
            </div>
            <div>
              <p className="font-medium text-forest/90 mb-1">Age Restriction</p>
              <p>You must be 18 years of age or older to participate in our SMS program.</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">13. User-Submitted Information</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            When submitting a contact form, estimate request, review, photograph, or other information,
            you agree that the information provided is accurate and does not violate applicable laws or
            another person's rights.
          </p>
          <p className="text-sm text-ink/70 leading-relaxed mt-3">
            KD 500 Tree may remove content that is offensive, misleading, unlawful, inappropriate, or in
            violation of these Terms and Conditions.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">14. Links to External Websites</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            Our website may contain links to third-party websites or services. KD 500 Tree does not
            control and is not responsible for their content, privacy practices, availability, or security.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">15. Hyperlinking to Our Content</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            Organizations may link to our website provided that the link is not misleading, does not
            falsely imply sponsorship or endorsement, does not damage our reputation, and is relevant to
            the linking website.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">16. Content Liability</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            We are not responsible for content appearing on external websites that link to our website.
            You agree to protect and defend KD 500 Tree against claims resulting from unlawful or
            misleading content published on a website under your control.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">17. Limitation of Liability</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            To the fullest extent permitted by law, KD 500 Tree is not liable for indirect, incidental,
            special, or consequential damages arising from use of this website, delays, third-party
            services, weather conditions, or information submitted through online forms.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">18. Disclaimer</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            Website information is provided for general informational purposes and is not a substitute for
            an on-site professional inspection.
          </p>
          <p className="text-sm text-ink/70 leading-relaxed mt-3">
            KD 500 Tree does not guarantee that all website information will always be complete, accurate,
            or up to date.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">19. Changes to These Terms</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            KD 500 Tree may update these Terms and Conditions when necessary. Changes will be published on
            this page with an updated "Last Updated" date.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">20. Governing Law</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            These Terms and Conditions are governed by the applicable laws of your state and the United
            States.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">21. Privacy & SMS Data</h3>
          <div className="text-sm text-ink/70 leading-relaxed space-y-4">
            <div>
              <p className="font-medium text-forest/90 mb-1">Collection of Information</p>
              <p>We collect your mobile phone number when you opt in to receive SMS communications from us.</p>
            </div>
            <div>
              <p className="font-medium text-forest/90 mb-1">Use of Information</p>
              <p>We use your phone number to send you service updates, appointment reminders, and marketing offers related to our tree care services.</p>
            </div>
            <div>
              <p className="font-medium text-forest/90 mb-1">Data Sharing</p>
              <p>We do not share, sell, or rent your mobile phone information or SMS consent data with any third parties or affiliates for their own marketing purposes.</p>
            </div>
            <div>
              <p className="font-medium text-forest/90 mb-1">Your Rights</p>
              <p>You have the right to request access to or deletion of your personal data. To exercise these rights, please contact us at {BUSINESS_EMAIL}.</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-forest mb-2">22. Contact Information</h3>
          <div className="rounded-2xl bg-emerald-50 p-6 text-sm text-ink/80">
            <p><strong className="text-forest">Company:</strong> KD 500 Tree</p>
            <p className="mt-2"><strong className="text-forest">Phone:</strong> {BUSINESS_PHONE}</p>
            <p className="mt-2"><strong className="text-forest">Email:</strong> {BUSINESS_EMAIL}</p>
            <p className="mt-2"><strong className="text-forest">Address:</strong> {BUSINESS_ADDRESS}</p>
          </div>
        </section>
      </GlassPanel>
    </Container>
  </div>
)

export default Terms