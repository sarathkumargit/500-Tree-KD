import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import CompanyOverview from '../components/about/CompanyOverview'
import MissionValues from '../components/about/MissionValues'
import heroBg from '../assets/hero3.webp'

const About = () => (
  <div>
    {/* Hero banner with tree image + dark overlay */}
    <section className="relative h-64 sm:h-80 overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-105"
        loading="eager"
      />
      <div className="absolute inset-0 bg-forest/70" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-emerald-100 mb-4">
            About 500 Tree
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-emerald-100/90">
            Trusted Tree Care, Rooted in Experience
          </p>
        </div>
        
      </div>
    </section>

    {/* Content on clean background */}
    <section className="bg-emerald-200 py-16">
      <Container className="space-y-12">
        <CompanyOverview />
        <MissionValues />
      </Container>
    </section>
  </div>
)

export default About
