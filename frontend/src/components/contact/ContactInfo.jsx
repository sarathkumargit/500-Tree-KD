import { Phone, Mail, MapPin } from 'lucide-react'
import GlassPanel from '../common/GlassPanel'
import SocialLinks from '../social/SocialLinks'
import LocationMap from '../locations/LocationMap'
import { BUSINESS_NAME, BUSINESS_PHONE, BUSINESS_EMAIL, BUSINESS_ADDRESS } from '../../utils/constants'

const ContactInfo = () => (
  <section
    className="bg-emerald-100 p-4 sm:p-6 rounded-2xl sm:rounded-3xl"
    aria-labelledby="contact-info-heading"
    itemScope
    itemType="https://schema.org/LocalBusiness"
  >
    <meta itemProp="name" content={BUSINESS_NAME} />
    <GlassPanel className="p-6 sm:p-8 h-full flex flex-col justify-between gap-6">
      <div>
        <h3 id="contact-info-heading" className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
          Contact Information
        </h3>
        <address className="not-italic space-y-4 sm:space-y-5 text-sm">
          <p className="flex items-center gap-3">
            <Phone size={16} className="text-gold shrink-0" />
            <a
              href={`tel:${BUSINESS_PHONE.replace(/[^0-9+]/g, '')}`}
              itemProp="telephone"
              className="hover:underline break-all"
            >
              {BUSINESS_PHONE}
            </a>
          </p>
          <p className="flex items-center gap-3">
            <Mail size={16} className="text-gold shrink-0" />
            <a href={`mailto:${BUSINESS_EMAIL}`} itemProp="email" className="hover:underline break-all">
              {BUSINESS_EMAIL}
            </a>
          </p>
          <p className="flex items-start gap-3">
            <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
            <span itemProp="address">{BUSINESS_ADDRESS}</span>
          </p>
        </address>
      </div>

      <LocationMap />

      <div>
        <p className="text-xs uppercase tracking-wide text-canopy/60 mb-3">Follow Our Work</p>
        <SocialLinks />
      </div>
    </GlassPanel>
  </section>
)

export default ContactInfo