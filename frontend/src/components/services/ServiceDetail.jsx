import { Check } from 'lucide-react'
import GlassPanel from '../common/GlassPanel'

// Expanded, single-service view — used if you later add a /services/:id route
const ServiceDetail = ({ service }) => (
  <GlassPanel className="py-40">
    <h2 className="text-2xl font-semibold text-forest mb-3">{service.title}</h2>
    <p className="text-ink/70 leading-relaxed mb-6">{service.description}</p>
    <ul className="space-y-2">
      {service.highlights.map((point) => (
        <li key={point} className="flex items-center gap-2 text-sm text-ink/70">
          <Check size={15} className="text-moss" /> {point}
        </li>
      ))}
    </ul>
  </GlassPanel>
)

export default ServiceDetail