import { Link } from 'react-router-dom'
import GlassPanel from '../common/GlassPanel'
import Button from '../common/Button'
import Container from '../common/Container'

const CTASection = () => (
  <Container className="pb-24">
    <GlassPanel dark className="p-12 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-3">Ready for healthier, safer trees?</h2>
      <p className="text-canopy/75 mb-6 max-w-xl mx-auto">
        Get a free, no-obligation quote from a certified arborist today.
      </p>
      <Link to="/contact">
        <Button variant="gold">Get a Free Quote</Button>
      </Link>
    </GlassPanel>
  </Container>
)

export default CTASection