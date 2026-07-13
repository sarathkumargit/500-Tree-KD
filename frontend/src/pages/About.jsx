import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import CompanyOverview from '../components/about/CompanyOverview'
import MissionValues from '../components/about/MissionValues'
import WhyChooseUs from '../components/about/WhyChooseUs'
import bgImage from '../assets/g3.png'

const About = () => (
  
   <section className="relative overflow-hidden">
      <img
        src={bgImage}
        alt=""
       className=" absolute inset-0 w-full h-full object-cover scale-105"
      />
    
    <Container className="py-40 space-y-16 text-center">
      <SectionHeading eyebrow="About 500 Tree" title="KD Trusted Tree Care, Rooted in Experience" />
      <CompanyOverview />
      <MissionValues />
      {/* <WhyChooseUs /> */}
    </Container>
  </section>
)

export default About