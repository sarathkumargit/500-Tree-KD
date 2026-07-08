import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import GlassPanel from '../common/GlassPanel'
import Button from '../common/Button'

const HeroSection = () => (
  <section className="px-4">
    <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden h-[560px] shadow-glass">
      <img
        src="/src/assets/images/hero/aerial-canopy.jpg"
        alt="Aerial view of a tree-lined residential neighborhood"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/10 to-transparent" />

      <GlassPanel dark className="absolute bottom-8 left-8 right-8 md:right-auto md:max-w-lg p-8">
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-3">
          Expert Tree Care for Your Home & Business
        </h1>
        <p className="text-canopy/80 text-sm md:text-base leading-relaxed mb-6">
          Preserving the beauty and safety of your landscape with professional arboriculture
          services backed by decades of experience.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact">
            <Button variant="gold">Get a Free Quote <ArrowRight size={16} className="inline ml-1" /></Button>
          </Link>
          <Link to="/services">
            <Button variant="ghost" className="!text-canopy !bg-white/10 hover:!bg-white/20">Our Services</Button>
          </Link>
        </div>
      </GlassPanel>
    </div>
  </section>
)

export default HeroSection