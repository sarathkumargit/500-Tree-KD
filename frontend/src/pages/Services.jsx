import Container from '../components/common/Container'
import LocationMap from '../components/locations/LocationMap'
import ServiceList from '../components/services/ServiceList'
import { SERVICE_RADIUS_MILES } from '../utils/constants'
import bgImage from '../assets/g2.webp'

const Services = () => (
  <div className="relative min-w-0 overflow-x-hidden">
    {/* Full page blurred background */}
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <img
        src={bgImage}
        alt=""
        className="w-full h-full object-cover blur-sm scale-105"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-emerald-950/65" />
    </div>

    {/* Hero text */}
    <section className="mt-10 min-h-[13rem] sm:min-h-[17rem] flex items-center justify-center px-4 sm:px-6 pt-20 pb-6">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 sm:px-10 py-6 text-center w-full max-w-2xl">
        <p className="font-medium text-xs tracking-widest uppercase mb-2 text-emerald-300">KD 500 Tree</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2 leading-tight">
          Services & Locations
        </h1>
        <p className="text-sm sm:text-base text-emerald-100/80">
          Coverage: {SERVICE_RADIUS_MILES} mile radius across the metro area.
        </p>
      </div>
    </section>

    {/* Services carousel */}
    <section className="py-8 sm:py-12 px-4 sm:px-0">
      <Container>
        <ServiceList />
      </Container>
    </section>

    {/* Map */}
    <section className="py-8 sm:py-12 px-4 sm:px-0">
      <Container>
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white mb-6">
          Service Area
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-md w-full">
          <LocationMap />
        </div>
      </Container>
    </section>
  </div>
)

export default Services