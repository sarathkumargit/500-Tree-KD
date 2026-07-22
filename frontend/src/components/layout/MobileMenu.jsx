import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import GlassPanel from '../common/GlassPanel'
import { NAV_LINKS } from '../../utils/constants'

// Full-screen glass overlay menu, shown on small screens when hamburger is tapped
const MobileMenu = ({ open, onClose }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden p-4">
      <GlassPanel dark className="h-full p-8 flex flex-col">
        <button onClick={onClose} aria-label="Close menu" className="self-end mb-8">
          <X size={22} />
        </button>
        <nav className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={onClose}
              className="text-lg font-medium text-canopy hover:text-emerald-300 transition-colors"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </GlassPanel>
    </div>
  )
}

export default MobileMenu