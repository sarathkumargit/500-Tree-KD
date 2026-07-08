import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import LocationList from '../components/locations/LocationList'
import { SERVICE_RADIUS_MILES } from '../utils/constants'

const Locations = () => (
  <Container className="py-20">
    <SectionHeading eyebrow="Where We Work" title="Service Locations" description={`Coverage: ${SERVICE_RADIUS_MILES} mile radius across the metro area.`} />
    <LocationList />
  </Container>
)

export default Locations