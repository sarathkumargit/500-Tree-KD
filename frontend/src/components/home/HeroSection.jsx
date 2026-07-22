import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import GlassPanel from '../common/GlassPanel'
import Button from '../common/Button'
import HeroImageStack from './HeroImageStack'
import { BUSINESS_NAME, BUSINESS_PHONE } from '../../utils/constants'

const HeroSection = () => (
  <section className="relative h-[520px] sm:h-[580px] md:h-[640px] overflow-hidden" aria-label="Hero">
    <div className="bg-emerald-900 absolute inset-0">
      <HeroImageStack />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-emerald-900/10 to-transparent pointer-events-none z-10" />

      <GlassPanel
        dark
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] sm:w-[85%] md:w-auto md:max-w-xl p-5 sm:p-6 md:p-8 z-30"
      >
        <h1 className="text-emerald-300 text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-2 text-center">
          {BUSINESS_NAME} Services
        </h1>
        <p className="text-emerald-100 text-sm sm:text-base md:text-lg leading-relaxed mb-6 text-center">
          Preserving the beauty and safety of your landscape with professional arboriculture
          services backed by decades of experience.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a href={`tel:${BUSINESS_PHONE.replace(/[^0-9+]/g, '')}`} aria-label={`Call ${BUSINESS_NAME}`}>
            <Button variant="accent" className="text-base font-bold border-2 border-emerald-300 border-dashed rounded-full whitespace-nowrap">
              {BUSINESS_PHONE} <ArrowRight size={18} className="inline ml-1" />
            </Button>
          </a>
          <Link to="/services">
            <Button variant="ghost" className="text-base font-bold border-2 border-white/40 border-dashed rounded-full">
              Our Services
            </Button>
          </Link>
        </div>
      </GlassPanel>
    </div>
  </section>
)

export default HeroSection
