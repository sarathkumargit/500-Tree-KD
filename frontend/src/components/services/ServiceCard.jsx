import { Check } from 'lucide-react'
import Card from '../common/Card'

const ServiceCard = ({ service }) => (
  <Card title={service.title} description={service.description}>
    <ul className="mt-4 space-y-1.5">
      {service.highlights.map((point) => (
        <li key={point} className="flex items-center gap-2 text-xs text-ink/60">
          <Check size={13} className="text-moss" /> {point}
        </li>
      ))}
    </ul>
  </Card>
)

export default ServiceCard