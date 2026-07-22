import { Link } from 'react-router-dom'
import GlassPanel from '../common/GlassPanel'
import Button from '../common/Button'
import Container from '../common/Container'

const CTASection = () => (
  <section className="bg-emerald-100">
  <Container className="pb-24 ">
    <div className="p-6 text-center  bg-emerald-500 rounded-3xl shadow-glass">
      <h2 className="text-2xl md:text-3xl font-semibold mb-3">Ready for healthier, safer trees?</h2>
      <p className="text-canopy/75 mb-6 max-w-xl mx-auto">
        Get a free, no-obligation quote from a certified arborist today.
      </p>
      <Link to="/contact">
        <Button variant="canopy" className='rounded-2xl bg-emerald-900'>Get a Free Quote</Button>
      </Link>
    </div>
  </Container>
  </section>
)

export default CTASection