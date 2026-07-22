import { Phone, Mail, MapPin } from 'lucide-react'
import SocialLinks from '../social/SocialLinks'
import LocationMap from '../locations/LocationMap'
import { BUSINESS_NAME, BUSINESS_PHONE, BUSINESS_EMAIL, BUSINESS_ADDRESS } from '../../utils/constants'

const ContactInfo = () => (
  <section
    className="bg-emerald-800/60 backdrop-blur-sm border border-emerald-700/50 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 text-left"
    aria-labelledby="contact-info-heading"
    itemScope
    itemType="https://schema.org/LocalBusiness"
  >
    <meta itemProp="name" content={BUSINESS_NAME} />

    <h3 id="contact-info-heading" className="text-lg sm:text-xl font-semibold text-white">
      Contact Information
    </h3>

    <address className="not-italic space-y-4 text-sm text-emerald-100">
      <p className="flex items-center gap-3">
        <Phone size={16} className="text-emerald-400 shrink-0" />
        <a href={`tel:${BUSINESS_PHONE.replace(/[^0-9+]/g, '')}`} itemProp="telephone"
           className="hover:text-white transition-colors">
          {BUSINESS_PHONE}
        </a>
      </p>
      <p className="flex items-center gap-3">
        <Mail size={16} className="text-emerald-400 shrink-0" />
        <a href={`mailto:${BUSINESS_EMAIL}`} itemProp="email"
           className="hover:text-white transition-colors break-all">
          {BUSINESS_EMAIL}
        </a>
      </p>
      <p className="flex items-start gap-3">
        <MapPin size={16} className="text-emerald-400 mt-0.5 shrink-0" />
        <span itemProp="address">{BUSINESS_ADDRESS}</span>
      </p>
    </address>

    <LocationMap />

    <div>
      <p className="text-xs uppercase tracking-widest text-emerald-400 mb-3">Follow Our Work</p>
      <SocialLinks />
    </div>
  </section>
)

export default ContactInfo
