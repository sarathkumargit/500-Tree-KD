import { Link } from 'react-router-dom'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import CompanyOverview from '../about/CompanyOverview'
import WhyChooseUs from '../about/WhyChooseUs'

const AboutPreview = () => (
  <section className="bg-emerald-100 ">
    <Container className="py-20">
      <SectionHeading eyebrow="About Us" title="Trusted Tree Care, Rooted in Experience" />
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