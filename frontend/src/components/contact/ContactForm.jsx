import GlassPanel from '../common/GlassPanel'
import Button from '../common/Button'
import FormField from './FormField'
import useContactForm from '../../hooks/useContactForm'
import { services } from '../../data/services'

const ContactForm = () => {
  const { values, errors, submitted, handleChange, handleSubmit } = useContactForm()

  if (submitted) {
    return (
      <GlassPanel className="p-8 h-full flex items-center justify-center text-center">
        <div>
          <h3 className="text-xl font-semibold text-forest mb-2">Message sent</h3>
          <p className="text-ink/70 text-sm">We typically respond within 24 business hours.</p>
        </div>
      </GlassPanel>
    )
  }

  return (
    <GlassPanel className="p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField label="Full Name" name="fullName" placeholder="John Doe" value={values.fullName} onChange={handleChange} error={errors.fullName} />
          <FormField label="Phone Number" name="phone" placeholder="(555) 000-0000" value={values.phone} onChange={handleChange} error={errors.phone} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField label="Email Address" name="email" placeholder="john@example.com" value={values.email} onChange={handleChange} error={errors.email} />
          <FormField as="select" label="Service Required" name="service" value={values.service} onChange={handleChange} error={errors.service}>
            <option value="">Select a service</option>
            {services.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
          </FormField>
        </div>
        <FormField as="textarea" rows={4} label="Tell us about your project" name="message" placeholder="How can we help you today?" value={values.message} onChange={handleChange} error={errors.message} />
        <Button type="submit" variant="primary" className="w-full">Send Message</Button>
      </form>
    </GlassPanel>
  )
}

export default ContactForm