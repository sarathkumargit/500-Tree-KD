import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { TreePine, Menu } from 'lucide-react'
import GlassPanel from '../common/GlassPanel'
import Button from '../common/Button'
import MobileMenu from './MobileMenu'
import { NAV_LINKS, BUSINESS_NAME, BUSINESS_LOGO } from '../../utils/constants'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 transition-all duration-300">
      <GlassPanel
        dark ={!scrolled}
        className={`max-w-6xl mx-auto flex items-center justify-between px-6 py-3 transition-all duration-300 ${
          scrolled ? '' : 'bg-black/10! border-white/10!'
        }`}
      >
        <Link to="/" className={`flex items-center gap-2 font-display font-semibold text-lg ${scrolled ? 'text-forest' : 'text-canopy'}`}>
          <img src={BUSINESS_LOGO} alt="Business Logo" className="h-12 rounded-3xl w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 ">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-xl font-medium transition-colors ${
                  scrolled
                     ? isActive ? 'text-black' : 'text-ink/60 '
                     : isActive ? 'text-emerald-200' : 'text-canopy/70 hover: text-emerald-300'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
         <Link to="/contact" className="hidden sm:block">
  <Button
    className={`font-extrabold border-dashed border-emerald-300! border-2! hover:bg-emerald-800! ${
      scrolled ? 'text-canopy!' : 'text-emerald-100!'
    }`}
  >
    Get a Quote
  </Button>
</Link>
          <button className="md:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu size={22} className={scrolled ? 'text-forest' : 'text-canopy'} />
          </button>
        </div>
      </GlassPanel>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}

export default Navbar