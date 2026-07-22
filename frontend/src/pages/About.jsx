import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import CompanyOverview from '../components/about/CompanyOverview'
import MissionValues from '../components/about/MissionValues'
import bgImage from '../assets/land.webp'

const About = () => (
  <section className="relative overflow-hidden">
    {/* Background image */}
    <img
      src={bgImage}
      alt=""
      className="absolute inset-0 w-full h-full object-cover scale-105 z-0"
    />

    {/* Light overlay so background doesn't overpower the content */}
    <div className="absolute inset-0 z-[1] bg-white/60" />

    <Container className="relative z-10 py-40 space-y-16 text-center">
      <SectionHeading eyebrow="About 500 Tree" title="KD Trusted Tree Care, Rooted in Experience" />
      <CompanyOverview />
      <MissionValues />
    </Container>
  </section>
)

export default About
