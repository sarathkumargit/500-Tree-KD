import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import LocationList from '../components/locations/LocationList'
import { SERVICE_RADIUS_MILES } from '../utils/constants'

const Locations = () => (
  <Container className="py-30 text-center ">
    <SectionHeading   eyebrow="KD 500 Tree " title="Term & Conditions" description={`Coverage: ${SERVICE_RADIUS_MILES} mile radius across the metro area.`} />
   
  </Container>
)

export default Locations