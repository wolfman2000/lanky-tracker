import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing } from '@renderer/hooks/castle'
import { useShuffleCrates } from '@renderer/hooks/settings'
import CastleCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()
  return (
    <CratePool>
      <CastleCheck id={7260} name="Castle Crate Location #1 (maybe)" canGetLogic={thing} />
      <CastleCheck id={7261} name="Castle Crate Location #2 (maybe)" canGetLogic={thing} />
    </CratePool>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
