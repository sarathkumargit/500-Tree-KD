import { Phone, Mail, MapPin } from 'lucide-react'
import GlassPanel from '../common/GlassPanel'
import SocialLinks from '../social/SocialLinks'
import { BUSINESS_PHONE, BUSINESS_EMAIL, BUSINESS_ADDRESS } from '../../utils/constants'

const ContactInfo = () => (
  <GlassPanel dark className="p-8 h-full flex flex-col justify-between">
    <div>
      <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
      <div className="space-y-5 text-sm">
        <p className="flex items-center gap-3"><Phone size={16} className="text-gold" /> {BUSINESS_PHONE}</p>
        <p className="flex items-center gap-3"><Mail size={16} className="text-gold" /> {BUSINESS_EMAIL}</p>
        <p className="flex items-start gap-3"><MapPin size={16} className="text-gold mt-0.5" /> {BUSINESS_ADDRESS}</p>
      </div>
    </div>
    <div>
      <p className="text-xs uppercase tracking-wide text-canopy/60 mb-3">Follow Our Work</p>
      <SocialLinks />
    </div>
  </GlassPanel>
)

export default ContactInfo