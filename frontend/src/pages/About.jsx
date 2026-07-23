import Container from '../components/common/Container'
import CompanyOverview from '../components/about/CompanyOverview'
import MissionValues from '../components/about/MissionValues'
import heroBg from '../assets/g2.webp'

const About = () => (
  <div className="relative min-w-0 overflow-x-hidden">
    {/* Full page blurred background */}
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <img
        src={heroBg}
        alt=""
        className="w-full h-full object-cover blur-sm scale-105"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-emerald-950/65" />
    </div>

    {/* Hero text */}
    <section className="mt-10 min-h-[13rem] sm:min-h-[17rem] flex items-center justify-center px-4 sm:px-6 pt-20 pb-6">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 sm:px-10 py-6 text-center w-full max-w-2xl">
        <p className="font-medium text-xs tracking-widest uppercase mb-2 text-emerald-300">About Us</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2 leading-tight">
          About KD 500 Tree
        </h1>
        <p className="text-sm sm:text-base text-emerald-100/80 max-w-lg mx-auto">
          Trusted Tree Care, Rooted in Experience
        </p>
      </div>
    </section>

    {/* Cards */}
    <section className="py-8 sm:py-12 px-4 sm:px-0">
      <Container>
        <div className="space-y-5 sm:space-y-8">
          <CompanyOverview />
          <MissionValues />
        </div>
      </Container>
    </section>
  </div>
)

export default About