import g2 from '../assets/g2.webp'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'

const Contact = () => (
  <div>
    {/* Hero header */}
    <section className="relative h-56 sm:h-64 overflow-hidden">
      <img
        src={g2}
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-105"
        loading="eager"
      />
      <div className="absolute inset-0 bg-emerald-900/80" />
      <div className="relative z-10 h-full flex flex-col justify-center pt-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <SectionHeading
          as="h1"
          eyebrow="Get In Touch"
          title="Get in Touch with Experts"
          description="Whether it's a routine trim or an emergency removal, our certified arborists are ready to help."
          light
        />
      </div>
    </section>

    {/* Contact panels */}
    <section className="bg-emerald-900 py-16">
      <Container>
        <div className="grid md:grid-cols-2 gap-6">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </section>
  </div>
)

export default Contact
