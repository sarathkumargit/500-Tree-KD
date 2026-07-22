import { Link } from 'react-router-dom'
import { TreePine, Phone } from 'lucide-react'
import SocialLinks from '../social/SocialLinks'
import { BUSINESS_NAME, BUSINESS_PHONE } from '../../utils/constants'

const footerColumns = [
  {
    heading: 'Services',
    links: [
      { label: 'Tree Removal',    href: '/services' },
      { label: 'Stump Grinding',  href: '/services' },
      { label: 'Safety Trimming', href: '/services' },
      { label: 'Emergency Care',  href: '/services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us',       href: '/about' },
      { label: 'Safety Record',  href: '/about' },
      { label: 'Privacy Policy', href: '/terms' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]

const Footer = () => (
  <footer className="bg-emerald-900 text-emerald-100">
    <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
      <div>
        <p className="flex items-center gap-2 font-semibold text-lg mb-3 text-white">
          <TreePine size={20} className="text-emerald-400" /> {BUSINESS_NAME}
        </p>
        <p className="text-emerald-200/70 text-sm leading-relaxed mb-4">
          Precision arboriculture and expert care for your residential and commercial properties.
        </p>
        <SocialLinks />
      </div>

      {footerColumns.map((column) => (
        <div key={column.heading}>
          <p className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-4">
            {column.heading}
          </p>
          <ul className="space-y-3 text-sm">
            {column.links.map((link) => (
              <li key={link.label}>
                <Link to={link.href} className="text-emerald-200/80 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div>
        <p className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-4">Support</p>
        <ul className="space-y-3 text-sm">
          <li>
            <Link to="/contact" className="text-emerald-200/80 hover:text-white transition-colors">Contact Support</Link>
          </li>
          <li>
            <Link to="/terms" className="text-emerald-200/80 hover:text-white transition-colors">SMS Policy</Link>
          </li>
        </ul>
        <a
          href={`tel:${BUSINESS_PHONE.replace(/[^\d+]/g, '')}`}
          className="flex items-center gap-2 mt-4 font-semibold text-base text-white hover:text-emerald-300 transition-colors"
        >
          <Phone size={18} className="text-emerald-400" /> {BUSINESS_PHONE}
        </a>
      </div>
    </div>

    <div className="border-t border-emerald-800 py-5 text-center text-xs text-emerald-200/40">
      © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
    </div>
  </footer>
)

export default Footer
