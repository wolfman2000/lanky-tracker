import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing } from '@renderer/hooks/caves'
import { useShuffleCrates } from '@renderer/hooks/settings'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()
  return (
    <CratePool>
      <CavesCheck id={6260} name="Caves Crate Location #1 (maybe)" canGetLogic={thing} />
      <CavesCheck id={6261} name="Caves Crate Location #2 (maybe)" canGetLogic={thing} />
    </CratePool>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
