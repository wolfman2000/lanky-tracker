import CratePool from '@renderer/components/pools/Crates'
import { useJapesRambi, usePlayJapes } from '@renderer/hooks/japes'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useShuffleCrates } from '@renderer/hooks/settings'
import JapesCheck from './JapesCheck'

const Vanilla: React.FC = () => {
  const inStage = usePlayJapes()
  const anyKong = useAnyKong()
  const japesRambi = useJapesRambi()
  return (
    <>
      <JapesCheck
        id={1060}
        name="Japes Crate Mountain"
        region="Japes Hillside"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1061}
        name="Japes Crate Rambi"
        region="Stormy Tunnel Area"
        canGetLogic={japesRambi && anyKong}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayJapes()

  return (
    <>
      <JapesCheck
        id={1260}
        name="Japes Crate Location #1 (maybe)"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1261}
        name="Japes Crate Location #2 (maybe)"
        canGetLogic={inStage && anyKong}
      />
    </>
  )
}

const CrateLocations: React.FC = () => {
  const locations = useShuffleCrates() ? <Shuffled /> : <Vanilla />
  return <CratePool>{locations}</CratePool>
}

export default CrateLocations
