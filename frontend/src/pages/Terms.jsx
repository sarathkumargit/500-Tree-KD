import g2 from '../assets/g2.png'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import GlassPanel from '../components/common/GlassPanel'

const Terms = () => (
  <div className="relative">
    <img
      src={g2}
      alt=""
      className="absolute inset-0 w-full h-full object-cover -z-10"
    />

    <Container className="py-40 relative z-10">
      <SectionHeading eyebrow="Legal Center" title="Terms of Service & Privacy" description="Transparency and trust are at the root of everything we do." />

      <GlassPanel className="p-8 space-y-8">
        <section>
          <h3 className="font-semibold text-forest mb-2">1. Website Usage</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            By accessing the 500 Tree website, you agree to comply with the following terms. This site
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
          <h3 className="font-semibold text-forest mb-2">3. SMS Privacy Notice</h3>
          <div className="text-sm text-ink/70 leading-relaxed space-y-4">
            <div>
              <p className="font-medium text-forest/90 mb-1">Collection of Information</p>
              <p>
                We collect your mobile phone number when you opt in to receive SMS communications from us.
              </p>
            </div>
            <div>
              <p className="font-medium text-forest/90 mb-1">Use of Information</p>
              <p>
                We use your phone number to send service updates, appointment reminders, and marketing
                offers related to our tree care services.
              </p>
            </div>
            <div>
              <p className="font-medium text-forest/90 mb-1">Data Sharing</p>
              <p>
                We do not share, sell, or rent your mobile phone information or SMS consent data with any
                third parties or affiliates for their own marketing purposes.
              </p>
            </div>
            <div>
              <p className="font-medium text-forest/90 mb-1">Your Rights</p>
              <p>
                You have the right to request access to or deletion of your personal data. To exercise
                these rights, please contact us at [email].
              </p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="font-semibold text-forest mb-2">4. SMS Messaging Terms of Service</h3>
          <div className="text-sm text-ink/70 leading-relaxed space-y-4">
            <div>
              <p className="font-medium text-forest/90 mb-1">Program Description</p>
              <p>
                By providing your mobile phone number and consenting to receive messages, you agree to
                receive recurring automated or manually sent text messages from KD 500 Tree regarding
                service updates, appointment reminders, project status notifications, emergency service
                updates, customer support messages, and promotional offers related to our tree care
                services.
              </p>
            </div>
            <div>
              <p className="font-medium text-forest/90 mb-1">Opt-Out</p>
              <p>
                You can opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to
                any message we send. After opting out, you may receive one final confirmation message.
              </p>
            </div>
            <div>
              <p className="font-medium text-forest/90 mb-1">Support</p>
              <p>
                For help, reply <strong>HELP</strong> to any message or contact us directly using the
                information at the bottom of this page.
              </p>
            </div>
            <div>
              <p className="font-medium text-forest/90 mb-1">Message & Data Rates</p>
              <p>
                Standard message and data rates may apply depending on your wireless carrier and mobile
                service plan.
              </p>
            </div>
            <div>
              <p className="font-medium text-forest/90 mb-1">Carrier Liability</p>
              <p>
                KD 500 Tree is not liable for delayed or undelivered messages. Delivery depends on carrier
                availability, network coverage, and device compatibility.
              </p>
            </div>
            <div>
              <p className="font-medium text-forest/90 mb-1">Age Restriction</p>
              <p>You must be 18 years of age or older to participate in our SMS program.</p>
            </div>
          </div>
        </section>
      </GlassPanel>
    </Container>
  </div>
)

export default Terms