import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import CompanyOverview from '../components/about/CompanyOverview'
import MissionValues from '../components/about/MissionValues'
import WhyChooseUs from '../components/about/WhyChooseUs'

const About = () => (
  
  <section className="bg-emerald-100">
    
    <Container className="py-40 space-y-16">
      <SectionHeading eyebrow="About 500 Tree" title="KD Trusted Tree Care, Rooted in Experience" />
      <CompanyOverview />
      <MissionValues />
      <WhyChooseUs />
    </Container>
  </section>
)

export default About