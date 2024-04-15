import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing } from '@renderer/hooks/forest'
import { useShuffleCrates } from '@renderer/hooks/settings'
import ForestCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()
  return (
    <CratePool>
      <ForestCheck id={5260} name="Forest Crate Location #1 (maybe)" canGetLogic={thing} />
      <ForestCheck id={5261} name="Forest Crate Location #2 (maybe)" canGetLogic={thing} />
    </CratePool>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
