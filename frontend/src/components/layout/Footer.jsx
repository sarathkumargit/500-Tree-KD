import { Link } from 'react-router-dom'
import { TreePine, Phone } from 'lucide-react'
import SocialLinks from '../social/SocialLinks'
import { BUSINESS_NAME, BUSINESS_PHONE } from '../../utils/constants'

const footerColumns = [
  {
    heading: 'Services',
    links: [
      { label: 'Tree Removal', href: '/services' },
      { label: 'Stump Grinding', href: '/services' },
      { label: 'Safety Trimming', href: '/services' },
      { label: 'Emergency Care', href: '/services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Safety Record', href: '/about' },
      { label: 'Privacy Policy', href: '/terms' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]

const Footer = () => (
  <footer className="bg-emerald-900 text-emerald-300 mt-24">
    <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
      <div>
        <p className="flex items-center gap-2 font-display font-semibold text-lg mb-3">
          <TreePine size={20} className="text-gold" /> {BUSINESS_NAME}
        </p>
        <p className="text-canopy/70 text-sm leading-relaxed mb-4">
          Precision arboriculture and expert care for your residential and commercial properties.
        </p>
        <SocialLinks />
      </div>

      {footerColumns.map((column) => (
        <div key={column.heading}>
          <p className="text-xs font-medium tracking-wide uppercase text-canopy/50 mb-4">{column.heading}</p>
          <ul className="space-y-3 text-sm">
            {column.links.map((link) => (
              <li key={link.label}>
                <Link to={link.href} className="font-medium hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div>
        <p className="text-xs font-medium tracking-wide uppercase text-canopy/50 mb-4">Support</p>
        <ul className="space-y-3 text-sm">
          <li>
            <Link to="/contact" className="font-medium hover:text-gold transition-colors">Contact Support</Link>
          </li>
          <li>
            <Link to="/terms" className="font-medium hover:text-gold transition-colors">SMS Policy</Link>
          </li>
        </ul>
        <a href={`tel:${BUSINESS_PHONE.replace(/[^\d+]/g, '')}`} className="flex items-center gap-2 mt-4 font-semibold text-lg hover:text-gold transition-colors">
          <Phone size={18} className="text-gold" /> {BUSINESS_PHONE}
        </a>
      </div>
    </div>

    <div className="border-t border-canopy/10 py-5 text-center text-xs text-canopy/50">
      © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
    </div>
  </footer>
)

export default Footer