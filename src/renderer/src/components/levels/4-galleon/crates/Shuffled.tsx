import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing } from '@renderer/hooks/galleon'
import { useShuffleCrates } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()
  return (
    <CratePool>
      <GalleonCheck id={4260} name="Galleon Crate Location #1 (maybe)" canGetLogic={thing} />
      <GalleonCheck id={4261} name="Galleon Crate Location #2 (maybe)" canGetLogic={thing} />
    </CratePool>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
