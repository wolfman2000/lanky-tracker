import { useCastleTree, usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import {
  useAnyKong,
  useCamera,
  useChunky,
  useCoconut,
  useDiddy,
  useMonkeyport,
  useSniper
} from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import FairyPool from '../pools/Fairies'
import CastleCheck from './CastleCheck'

const Vanilla: React.FC = () => {
  const inStage = usePlayCastle()
  const tree = useCastleTree()
  const coconut = useCoconut()
  const camera = useCamera()
  const sniper = useSniper()
  const diddy = useDiddy()
  const port = useMonkeyport()
  const canSlam = useSlamCastle()
  const chunky = useChunky()
  return (
    <>
      <CastleCheck
        id={7080}
        name="Castle Fairy Tree"
        region="Castle Surroundings"
        canGetLogic={tree && coconut && coconut && sniper && camera}
      />
      <CastleCheck
        id={7081}
        name="Castle Fairy Rooms"
        region="Castle Rooms"
        canGetLogic={inStage && diddy && canSlam && port && camera}
        canGetBreak={inStage && chunky && canSlam && camera}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayCastle()
  const camera = useCamera()

  return (
    <>
      <CastleCheck
        id={7280}
        name="Castle Fairy Location #1"
        canGetLogic={inStage && anyKong && camera}
      />
      <CastleCheck
        id={7281}
        name="Castle Fairy Location #2"
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
