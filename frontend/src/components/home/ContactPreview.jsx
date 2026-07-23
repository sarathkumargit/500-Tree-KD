import Container from '../common/Container'
import ContactForm from '../contact/ContactForm'
import ContactInfo from '../contact/ContactInfo'

const ContactPreview = () => (
  <section className="bg-emerald-50 py-8 sm:py-10">
    <Container>
      <div className="mb-6 text-center">
        <p className="font-medium text-xs tracking-widest uppercase mb-2 text-moss">Contact Us</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-forest">Get in Touch</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
  <ContactForm />
  <ContactInfo />
</div>
    </Container>
  </section>
)

export default ContactPreview