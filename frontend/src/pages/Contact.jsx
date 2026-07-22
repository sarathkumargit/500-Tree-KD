import g2 from '../assets/g2.webp'
import Container from '../components/common/Container'
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
        <p className="font-medium text-sm tracking-widest uppercase mb-3 text-emerald-300">Get In Touch</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">Get in Touch with Experts</h1>
        <p className="text-base text-emerald-100/80">Whether it's a routine trim or an emergency removal, our certified arborists are ready to help.</p>
      </div>
    </section>

    {/* Contact panels */}
    <section className="bg-emerald-100 py-16">
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