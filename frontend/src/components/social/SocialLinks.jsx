import { Globe, Camera, Link, Video, MapPin } from 'lucide-react'
import { socialLinks } from '../../data/socialLinks'

const iconMap = {
  website:   Globe,
  instagram: Camera,
  linkedin:  Link,
  youtube:   Video,
  google:    MapPin,
}

const SocialLinks = ({ className = '' }) => (
  <div className={`flex gap-2 flex-wrap ${className}`}>
    {socialLinks.map(({ id, label, href }) => {
      const Icon = iconMap[id] ?? Globe
      return (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-700/50 hover:bg-emerald-500 text-emerald-200 hover:text-white transition-colors"
        >
          <Icon size={15} />
        </a>
      )
    })}
  </div>
)

export default SocialLinks
