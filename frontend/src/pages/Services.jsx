import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'

import LocationMap from '../components/locations/LocationMap'
import ServiceList from '../components/services/ServiceList'
import { SERVICE_RADIUS_MILES } from '../utils/constants'
import bgImage from '../assets/g2.webp'

const Locations = () => (
   <section className="relative overflow-hidden">
    <img
      src={bgImage}
      alt=""
     className="blur-sm absolute inset-0 w-full h-full object-cover scale-105"
    />

    <Container className="relative z-10 py-40 text-center ">
      <SectionHeading

        eyebrow="KD 500 Tree"
        title="Services & Locations"
        description={`Coverage: ${SERVICE_RADIUS_MILES} mile radius across the metro area.`}
      />
      <ServiceList/>

       <div className="mt-12 p-4 shadow-glass">
        <LocationMap />
      </div>
  

     
    </Container>
  </section>
)

export default Locations