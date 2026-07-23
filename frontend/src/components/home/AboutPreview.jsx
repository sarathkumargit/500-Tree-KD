import { Link } from 'react-router-dom'
import Container from '../common/Container'
import CompanyOverview from '../about/CompanyOverview'
import WhyChooseUs from '../about/WhyChooseUs'

const AboutPreview = () => (
  <section className="bg-emerald-50 py-12 sm:py-16">
    <Container>
      <div className="mb-8 text-center">
        <p className="font-medium text-xs tracking-widest uppercase mb-2 text-moss">About Us</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-forest">
          Trusted Tree Care, Rooted in Experience
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
        <CompanyOverview />
        <WhyChooseUs />
      </div>
      <div className="mt-6 text-center md:text-left">
        <Link to="/about" className="inline-block text-moss font-medium hover:text-forest transition-colors text-sm sm:text-base">
          Learn more about us →
        </Link>
      </div>
    </Container>
  </section>
)

export default AboutPreview
