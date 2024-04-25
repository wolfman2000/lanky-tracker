import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing } from '@renderer/hooks/aztec'
import { useShuffleCrates } from '@renderer/hooks/settings'
import AztecCheck from '../check'

const Shuffled: React.FC = () => {
  const thing = useGeneralThing()
  return (
    <CratePool>
      <AztecCheck
        id={2260}
        name="Aztec Crate Location #1 (maybe)"
        canGetLogic={thing.in}
        canGetBreak={thing.out}
      />
      <AztecCheck
        id={2261}
        name="Aztec Crate Location #2 (maybe)"
        canGetLogic={thing.in}
        canGetBreak={thing.out}
      />
    </CratePool>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
