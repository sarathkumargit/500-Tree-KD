import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import LocationMap from '../components/locations/LocationMap'
import ServiceList from '../components/services/ServiceList'
import { SERVICE_RADIUS_MILES } from '../utils/constants'
import bgImage from '../assets/g2.webp'

const Services = () => (
  <div>
    {/* Hero header */}
    <section className="relative h-56 sm:h-64 overflow-hidden">
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-105"
        loading="eager"
      />
      <div className="absolute inset-0 bg-emerald-900/80" />
      <div className="relative z-10 h-full flex flex-col justify-center pt-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <SectionHeading
          as="h1"
          eyebrow="KD 500 Tree"
          title="Services & Locations"
          description={`Coverage: ${SERVICE_RADIUS_MILES} mile radius across the metro area.`}
          light
        />
      </div>
    </section>

    {/* Services grid */}
    <section className="bg-emerald-50 py-16">
      <Container>
        <ServiceList />
      </Container>
    </section>

    {/* Map */}
    <section className="bg-white py-12">
      <Container>
        <h2 className="text-xl font-semibold text-emerald-900 mb-6">Service Area</h2>
        <div className="rounded-2xl overflow-hidden shadow-md">
          <LocationMap />
        </div>
      </Container>
    </section>
  </div>
)

export default Services
