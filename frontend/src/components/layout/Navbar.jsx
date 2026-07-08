import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { TreePine, Menu } from 'lucide-react'
import GlassPanel from '../common/GlassPanel'
import Button from '../common/Button'
import MobileMenu from './MobileMenu'
import { NAV_LINKS, BUSINESS_NAME } from '../../utils/constants'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <GlassPanel className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2 font-display font-semibold text-forest text-lg">
          <TreePine size={22} className="text-moss" />
          {BUSINESS_NAME}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-forest' : 'text-ink/60 hover:text-forest'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden sm:block">
            <Button variant="gold">Get a Quote</Button>
          </Link>
          <button className="md:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu size={22} className="text-forest" />
          </button>
        </div>
      </GlassPanel>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}

export default Navbar