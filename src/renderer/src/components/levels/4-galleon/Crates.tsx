import CratePool from '@renderer/components/pools/Crates'
import { useGeneralOutskirts, useGeneralThing } from '@renderer/hooks/galleon'
import { useShuffleCrates } from '@renderer/hooks/settings'
import GalleonCheck from './GalleonCheck'

const Vanilla: React.FC = () => {
  return (
    <>
      <GalleonCheck
        id={4060}
        name="Galleon Crate: Near Cactus"
        region="Shipyard Outskirts"
        canGetLogic={useGeneralOutskirts()}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()
  return (
    <>
      <GalleonCheck id={4260} name="Galleon Crate Location #1 (maybe)" canGetLogic={thing} />
      <GalleonCheck id={4261} name="Galleon Crate Location #2 (maybe)" canGetLogic={thing} />
    </>
  )
}

const CrateLocations: React.FC = () => {
  const locations = useShuffleCrates() ? <Shuffled /> : <Vanilla />
  return <CratePool>{locations}</CratePool>
}

export default CrateLocations
