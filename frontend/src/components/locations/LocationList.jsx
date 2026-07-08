import LocationCard from './LocationCard'
import { locationRegions } from '../../data/locations'

const LocationList = () => (
  <div className="grid sm:grid-cols-2 gap-4">
    {locationRegions.map((region) => (
      <LocationCard key={region.region} region={region.region} areas={region.areas} />
    ))}
  </div>
)

export default LocationList