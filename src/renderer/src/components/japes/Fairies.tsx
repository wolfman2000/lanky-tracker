import { useJapesPainting, useJapesRambi, usePlayJapes } from '@renderer/hooks/japes'
import { useAnyGun, useAnyKong, useAnyMusic, useCamera } from '@renderer/hooks/kongs'
import JapesCheck from './JapesCheck'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import FairyPool from '../pools/Fairies'

const Vanilla: React.FC = () => {
  const camera = useCamera()
  const japesRambi = useJapesRambi()
  const japesPaintingInside = useJapesPainting()
  const anyGun = useAnyGun()
  const anyMusic = useAnyMusic()
  const [lanky, slam] = useDonkStore(useShallow((state) => [state.lanky, state.slam]))
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
        canGetLogic={lanky && slam != 0 && japesPaintingInside.in && (anyGun || anyMusic) && camera}
        canGetBreak={
          lanky && slam != 0 && japesPaintingInside.out && (anyGun || anyMusic) && camera
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
  const shuffle = useDonkStore(useShallow((state) => state.shuffleFairies))
  const locations = shuffle ? <Shuffled /> : <Vanilla />
  return <FairyPool>{locations}</FairyPool>
}

export default FairyLocations
