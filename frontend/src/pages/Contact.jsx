import g2 from '../assets/g2.webp'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'

const Contact = () => (
  <section className="relative pt-28 sm:pt-32 md:pt-40 pb-20 overflow-hidden min-h-screen">
    {/* Background image — outside Container so it fills the whole section */}
    <img
      src={g2}
      alt=""
      role="presentation"
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
    />

    {/* Dark overlay so text stays readable */}
    <div className="absolute inset-0 bg-forest/50" />

    {/* Content above the background */}
    <Container className="relative z-10 py-0 space-y-10 text-center">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Get in Touch with Experts"
        description="Whether it's a routine trim or an emergency removal, our certified arborists are ready to help."
      />
      <div className="grid md:grid-cols-2 gap-6">
        <ContactInfo />
        <ContactForm />
      </div>
    </Container>
  </section>
)

export default Contact