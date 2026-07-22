import { Link } from 'react-router-dom'
import Container from '../common/Container'
import CompanyOverview from '../about/CompanyOverview'
import WhyChooseUs from '../about/WhyChooseUs'

const AboutPreview = () => (
  <section className="bg-emerald-50">
    <Container className="py-20">
      <div className="mb-10 text-center">
        <p className="font-medium text-sm tracking-widest uppercase mb-3 text-moss">About Us</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-forest">
          Trusted Tree Care, Rooted in Experience
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <CompanyOverview />
        <WhyChooseUs />
      </div>
      <Link to="/about" className="inline-block mt-6 text-moss font-medium hover:text-forest transition-colors">
        Learn more about us →
      </Link>
    </Container>
  </section>
)

export default AboutPreview