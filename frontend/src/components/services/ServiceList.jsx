import ServiceCard from './ServiceCard'
import { services } from '../../data/services'

const ServiceList = () => (
  <div className="grid md:grid-cols-3 gap-6">
    {services.map((service) => (
      <ServiceCard key={service.id} service={service} />
    ))}
  </div>
)

export default ServiceList