import g2 from '../assets/g2.webp'
import Container from '../components/common/Container'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'

const Contact = () => (
  <div className="relative min-w-0 overflow-x-hidden">
    {/* Full page blurred background */}
    <div className="fixed inset-0 -z-10">
      <img
        src={g2}
        alt=""
        className="w-full h-full object-cover blur-sm scale-105"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
     
    </div>

    {/* Hero text inside glass card */}
    <section className=" mt-20 h-56 sm:h-64 flex items-center justify-center pt-16 px-4 sm:px-6">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-6 text-center max-w-2xl w-full">
        <p className="font-medium text-sm tracking-widest uppercase mb-3 text-emerald-300">Get In Touch</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">Get in Touch with Experts</h1>
        <p className="text-sm sm:text-base text-emerald-100/80">Whether it's a routine trim or an emergency removal, our certified arborists are ready to help.</p>
      </div>
    </section>

    {/* Contact panels */}
    <section className="py-16">
      <Container>
        <div className="grid md:grid-cols-2 gap-6">
          <ContactForm />
          <ContactInfo />
          
        </div>
      </Container>
    </section>
  </div>
)

export default Contact