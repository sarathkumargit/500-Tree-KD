import { Check } from 'lucide-react'
import GlassPanel from '../common/GlassPanel'

const reasons = [
  'Certified, insured arborists on every job',
  '24/7 emergency response for storm damage',
  'Free, no-obligation quotes',
  'Full site cleanup after every service',
]

const WhyChooseUs = () => (
  <div className="rounded-3xl">
    <GlassPanel  className="p-8">
      <h3 className="text-xl text-center font-semibold mb-5 text-dark">Why Choose 500 Tree</h3>
      <ul className="space-y-3">
        {reasons.map((reason) => (
          <li key={reason} className="flex items-start gap-3 text-sm text-black5">
            <Check size={16} className="text-forest mt-0.5 shrink-0" /> {reason}
          </li>
        ))}
      </ul>
    </GlassPanel>
  </div>
)

export default WhyChooseUs