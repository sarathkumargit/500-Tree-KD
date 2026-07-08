import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import GlassPanel from '../components/common/GlassPanel'

const Terms = () => (
  <Container className="py-20">
    <SectionHeading eyebrow="Legal Center" title="Terms of Service & Privacy" description="Transparency and trust are at the root of everything we do." />
    <GlassPanel className="p-8 space-y-8">
      <section>
        <h3 className="font-semibold text-forest mb-2">1. Website Usage</h3>
        <p className="text-sm text-ink/70 leading-relaxed">
          By accessing the 500 Tree website, you agree to comply with the following terms. This site
          is provided for informational purposes and for requesting tree care services. Unauthorized
          use of this website may give rise to a claim for damages and/or be a criminal offense.
        </p>
      </section>
      <section>
        <h3 className="font-semibold text-forest mb-2">2. Customer Responsibilities</h3>
        <ul className="text-sm text-ink/70 leading-relaxed list-disc pl-5 space-y-1">
          <li>Customers must provide accurate property boundaries and identify any underground utilities not marked by public services.</li>
          <li>Safe access to the work site must be provided for heavy machinery and personnel.</li>
        </ul>
      </section>
    </GlassPanel>
  </Container>
)

export default Terms