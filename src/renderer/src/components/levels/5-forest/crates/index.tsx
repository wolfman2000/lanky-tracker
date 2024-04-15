import BarnInsideCrate from './BarnInside'
import BarnOutsideCrate from './BarnOutside'
import OwlCrate from './Owl'
import RaftersCrate from './Rafters'

const CrateLocations: React.FC = () => (
  <>
    <RaftersCrate />
    <OwlCrate />
    <BarnOutsideCrate />
    <BarnInsideCrate />
  </>
)

export default CrateLocations
