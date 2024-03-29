import { useShallow } from 'zustand/react/shallow'

import FairyPool from '@renderer/components/pools/Fairies'
import { useJapesPainting, useJapesRambi, usePlayJapes } from '@renderer/hooks/japes'
import {
  useAnyGun,
  useAnyKong,
  useAnyMusic,
  useCamera,
  useGrape,
  useLanky,
  useSlam
} from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import useDonkStore from '@renderer/store'
import JapesCheck from './JapesCheck'

const Vanilla: React.FC = () => {
  const camera = useCamera()
  const japesRambi = useJapesRambi()
  const japesPaintingInside = useJapesPainting()
  const anyGun = useAnyGun()
  const anyMusic = useAnyMusic()
  const grape = useGrape()
  const slam = useSlam()
  const lanky = useLanky()
  return (
    <>
      <JapesCheck
        id={1080}
        name="Japes Fairy Rambi"
        region="Stormy Tunnel Area"
        canGetLogic={japesRambi && camera}
      />
      <JapesCheck
        id={1081}
        name="Japes Fairy Painting Room"
        region="Japes Caves And Mines"
        canGetLogic={lanky && slam && japesPaintingInside.in && grape && camera}
        canGetBreak={
          lanky && slam && logicBreak(japesPaintingInside) && (anyGun || anyMusic) && camera
        }
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayJapes()
  const camera = useCamera()

  return (
    <>
      <JapesCheck
        id={1280}
        name="Japes Fairy Location #1"
        canGetLogic={inStage && anyKong && camera}
      />
      <JapesCheck
        id={1281}
        name="Japes Fairy Location #2"
        canGetLogic={inStage && anyKong && camera}
      />
    </>
  )
}

const FairyLocations: React.FC = () => {
  const shuffle = useDonkStore(useShallow((state) => state.settings.shuffleFairies))
  const locations = shuffle ? <Shuffled /> : <Vanilla />
  return <FairyPool>{locations}</FairyPool>
}

export default FairyLocations
