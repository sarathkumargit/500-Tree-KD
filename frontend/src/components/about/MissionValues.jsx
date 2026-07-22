import GlassPanel from '../common/GlassPanel'
import Card from '../common/Card'

const values = [
  { title: 'Safety First', description: 'Every job follows strict safety protocols to protect our crew, your property, and your family.' },
  { title: 'Environmental Care', description: 'We prune and remove with the long-term health of your landscape in mind, not just the quick job.' },
  { title: 'Honest Pricing', description: 'We believe in complete pricing transparency — what we quote is what you pay, with no hidden fees .' },
]

const MissionValues = () => (
  <section className="mt-4">
    <GlassPanel  className="p-8">
      <div className=" grid md:grid-cols-3 gap-6">
        {values.map((value) => (
          <Card key={value.title} title={value.title} description={value.description} />
        ))}
      </div>
    </GlassPanel>
  </section>
)

export default MissionValues