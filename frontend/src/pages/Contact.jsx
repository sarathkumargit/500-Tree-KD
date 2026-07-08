import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'

const Contact = () => (
  <Container className="py-20">
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
)

export default Contact