import { Link } from 'react-router-dom'
import { TreePine } from 'lucide-react'
import SocialLinks from '../social/SocialLinks'
import { NAV_LINKS, BUSINESS_NAME, BUSINESS_EMAIL, BUSINESS_PHONE } from '../../utils/constants'

const Footer = () => (
  <footer className="bg-forest text-canopy mt-24">
    <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
      <div>
        <p className="flex items-center gap-2 font-display font-semibold text-lg mb-3">
          <TreePine size={20} className="text-gold" /> {BUSINESS_NAME}
        </p>
        <p className="text-canopy/70 text-sm leading-relaxed">{BUSINESS_EMAIL} · {BUSINESS_PHONE}</p>
        <SocialLinks className="mt-4" />
      </div>

      <div>
        <p className="font-medium mb-3 text-canopy/90">Quick Links</p>
        <ul className="space-y-2 text-sm text-canopy/70">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link to={link.href} className="hover:text-gold transition-colors">{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-medium mb-3 text-canopy/90">Legal</p>
        <ul className="space-y-2 text-sm text-canopy/70">
          <li><Link to="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link></li>
          <li><Link to="/terms" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-canopy/10 py-5 text-center text-xs text-canopy/50">
      © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
    </div>
  </footer>
)

export default Footer