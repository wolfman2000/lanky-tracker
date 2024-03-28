import { useShallow } from 'zustand/react/shallow'

import { useJapesRambi, usePlayJapes } from '@renderer/hooks/japes'
import { useAnyKong } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import CratePool from '../pools/Crates'
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
  const shuffle = useDonkStore(useShallow((state) => state.settings.shuffleCrates))
  const locations = shuffle ? <Shuffled /> : <Vanilla />
  return <CratePool>{locations}</CratePool>
}

export default CrateLocations
