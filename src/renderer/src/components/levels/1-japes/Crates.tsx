import CratePool from '@renderer/components/pools/Crates'
import { useArena, useRambiCrate } from '@renderer/hooks/japes'
import { useShuffleCrates } from '@renderer/hooks/settings'
import JapesCheck from './JapesCheck'

const Vanilla: React.FC = () => {
  return (
    <>
      <JapesCheck
        id={1060}
        name="Japes Crate: Behind the Mountain"
        region="Japes Hillside"
        canGetLogic={useArena()}
      />
      <JapesCheck
        id={1061}
        name="Japes Crate: In the Rambi Cave"
        region="Stormy Tunnel Area"
        canGetLogic={useRambiCrate()}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  return (
    <>
      <JapesCheck id={1260} name="Japes Crate Location #1 (maybe)" canGetLogic={useArena()} />
      <JapesCheck id={1261} name="Japes Crate Location #2 (maybe)" canGetLogic={useArena()} />
    </>
  )
}

const CrateLocations: React.FC = () => {
  const locations = useShuffleCrates() ? <Shuffled /> : <Vanilla />
  return <CratePool>{locations}</CratePool>
}

export default CrateLocations
