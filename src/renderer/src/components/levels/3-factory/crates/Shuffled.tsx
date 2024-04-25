import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing } from '@renderer/hooks/factory'
import { useShuffleCrates } from '@renderer/hooks/settings'
import FactoryCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()
  return (
    <CratePool>
      <FactoryCheck id={1260} name="Factory Crate Location #1 (maybe)" canGetLogic={thing} />
      <FactoryCheck id={1261} name="Factory Crate Location #2 (maybe)" canGetLogic={thing} />
    </CratePool>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
