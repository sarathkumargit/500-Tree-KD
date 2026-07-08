import { Facebook, Instagram, Linkedin, Youtube, MapPin } from 'lucide-react'
import { socialLinks } from '../../data/socialLinks'

const icons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  google: MapPin,
}

const SocialLinks = ({ className = '' }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    {socialLinks.map(({ id, label, href }) => {
      const Icon = icons[id]
      return (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-canopy/10 hover:bg-gold hover:text-ink transition-colors"
        >
          <Icon size={15} />
        </a>
      )
    })}
  </div>
)

export default SocialLinks