import GlassPanel from '../common/GlassPanel'

const LocationCard = ({ region, areas }) => (
  <GlassPanel className="p-5">
    <p className="font-semibold text-forest text-sm mb-2">{region}</p>
    <ul className="space-y-1 text-sm text-ink/70">
      {areas.map((area) => (
        <li key={area}>{area}</li>
      ))}
    </ul>
  </GlassPanel>
)

export default LocationCard