import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import GlassPanel from '../common/GlassPanel'
import Button from '../common/Button'
import HeroImageStack from './HeroImageStack'
import { BUSINESS_NAME, BUSINESS_PHONE } from '../../utils/constants'

const HeroSection = () => (
  <section className="relative h-[520px] sm:h-[580px] md:h-[640px] overflow-hidden">
    <div className="bg-linear-to-br from-forest to-moss absolute inset-0">
      <HeroImageStack />
      <div className="absolute inset-0 bg-linear-to-t from-forest/70 via-forest/10 to-transparent pointer-events-none z-10" />

      <GlassPanel
        dark
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] sm:w-[85%] md:w-auto md:max-w-xl p-5 sm:p-6 md:p-8 z-30"
      >
        <h1 className="text-emerald-300 text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-2 text-center">
          {BUSINESS_NAME} Services
        </h1>
        <p className="text-emerald-100 text-sm sm:text-base md:text-lg leading-relaxed mb-4 text-center">
          Preserving the beauty and safety of your landscape with professional arboriculture
          services backed by decades of experience.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-emerald-400">
          <a href={`tel:${BUSINESS_PHONE.replace(/[^0-9+]/g, '')}`} aria-label={`Call ${BUSINESS_NAME} at ${BUSINESS_PHONE}`}>
            <Button
              variant="canopy"
              className="text-base sm:text-lg md:text-xl font-bold border-dashed border-emerald-400 border-2 rounded-full whitespace-nowrap"
            >
              {BUSINESS_PHONE} <ArrowRight size={20} className="inline ml-1" />
            </Button>
          </a>
          <Link to="/services" aria-label={`View ${BUSINESS_NAME} tree services`}>
            <Button
              variant="ghost"
              className="text-canopy! bg-white/10! hover:bg-white/20! text-base sm:text-lg md:text-xl font-bold border-dashed border-emerald-400 border-2 rounded-full"
            >
              Our Services
            </Button>
          </Link>
        </div>
      </GlassPanel>
    </div>
  </section>
)

export default HeroSection