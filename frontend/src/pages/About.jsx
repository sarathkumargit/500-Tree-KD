import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import CompanyOverview from '../components/about/CompanyOverview'
import MissionValues from '../components/about/MissionValues'
import WhyChooseUs from '../components/about/WhyChooseUs'

const About = () => (
  <Container className="py-20 space-y-16">
    <SectionHeading eyebrow="About 500 Tree" title="Trusted Tree Care, Rooted in Experience" />
    <CompanyOverview />
    <MissionValues />
    <WhyChooseUs />
  </Container>
)

export default About