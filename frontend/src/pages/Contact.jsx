import g2 from '../assets/g2.png'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'

const Contact = () => (
  <section className="relative pt-10 pb-20 overflow-hidden">
  <Container className="py-0">
    <img
      src={g2}
      alt=""
      className=" 
       absolute inset-0 w-full h-full object-cover"
    />
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