import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing } from '@renderer/hooks/japes'
import { useShuffleCrates } from '@renderer/hooks/settings'
import JapesCheck from '../check'

const Shuffled: React.FC = () => {
  return (
    <CratePool>
      <JapesCheck
        id={1260}
        name="Japes Crate Location #1 (maybe)"
        canGetLogic={useGeneralThing()}
      />
      <JapesCheck
        id={1261}
        name="Japes Crate Location #2 (maybe)"
        canGetLogic={useGeneralThing()}
      />
    </CratePool>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
