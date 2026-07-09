import { Link } from 'react-router-dom'
import { Scissors, Leaf, CircleDot } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Card from '../common/Card'
import { services } from '../../data/services'

const previewIcons = { trimming: Scissors, pruning: Leaf, 'stump-removal': CircleDot }

const ServicesPreview = () => (
  <Container className="py-20 ">
    <SectionHeading
      eyebrow="What We Do"
      title="Professional Tree Care Services"
      description="From routine maintenance to emergency removal, our certified arborists handle it all."
    />
    <div className="grid md:grid-cols-3 gap-10">
      {services.slice(1, 4).map((service) => {
        const Icon = previewIcons[service.id] || Leaf
        return (
          <Card
            key={service.id}
            image={service.image}
            icon={<Icon size={18} />}
            title={service.title}
            description={service.description}
          />
        )
      })}
    </div>
    <Link to="/services" className=" border-dashed border-emerald-400 border-2 px-6 rounded-full inline-block mt-8 text-moss font-medium hover:text-forest transition-colors">
      View all services →
    </Link>
  </Container>
)

export default ServicesPreview