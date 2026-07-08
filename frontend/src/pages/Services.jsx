import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import ServiceList from '../components/services/ServiceList'
import LocationList from '../components/locations/LocationList'

const Services = () => (
  <Container className="py-20">
    <SectionHeading
      eyebrow="Our Services"
      title="Full-Service Tree Care"
      description="Every service is backed by certified arborists and a satisfaction guarantee."
    />
    <ServiceList />

    <div className="mt-20">
      <SectionHeading eyebrow="Coverage" title="Service Locations" />
      <LocationList />
    </div>
  </Container>
)

export default Services