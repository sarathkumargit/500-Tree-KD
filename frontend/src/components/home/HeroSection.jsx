import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import GlassPanel from '../common/GlassPanel'
import Button from '../common/Button'
import HeroImageStack from './HeroImageStack'

const HeroSection = () => (
  <section className="relative h-[640px] overflow-hidden">
    <div className="bg-linear-to-br from-forest to-moss absolute inset-0">
      <HeroImageStack />
      <div className="absolute inset-0 bg-linear-to-t from-forest/70 via-forest/10 to-transparent pointer-events-none z-10" />

      <GlassPanel dark className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] md:w-auto md:max-w-xl p-8 z-30">
  <h1 className="text-emerald-300 text-3xl md:text-4xl font-semibold leading-tight mb-2 text-center">
   KD 500 Tree Services
  </h1>
  <p className="text-emerald-100 text-lg leading-relaxed mb-4 text-center">
    Preserving the beauty and safety of your landscape with professional arboriculture
    services backed by decades of experience.
  </p>
  <div className="flex flex-wrap items-center justify-center gap-4 text-emerald-400">
  <a href="tel:+17165008733">
    <Button variant="gold" className="text-xl font-bold border-dashed border-emerald-400 border-2 rounded-full">
      +1 716-500-8733 <ArrowRight size={20} className="inline ml-1" />
    </Button>
  </a>
  <Link to="/services">
    <Button variant="ghost" className="text-canopy! bg-white/10! hover:bg-white/20! text-xl font-bold border-dashed border-emerald-400 border-2 rounded-full ">
      Our Services
    </Button>
  </Link>
</div>
</GlassPanel>
    </div>
  </section>
)

export default HeroSection