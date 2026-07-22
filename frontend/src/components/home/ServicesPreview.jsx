import { Link } from 'react-router-dom'
import { Scissors, Leaf, CircleDot } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Card from '../common/Card'
import { services } from '../../data/services'


const previewIcons = { trimming: Scissors, pruning: Leaf, 'stump-removal': CircleDot }

const ServicesPreview = () => (
  <section className="relative overflow-hidde">
    
    <div className="absolute inset-0 bg-emerald-100" />
    <Container className="relative z-10 py-20">
    <SectionHeading
      eyebrow="What We Do"
      title="Professional Tree Care Services"
      description=""
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
  </section>
)

export default ServicesPreview