
import FairyPool from '@renderer/components/pools/Fairies'
import { useForestNight, usePlayForest, useSlamForest } from '@renderer/hooks/forest'
import {
  useAnyKong,
  useCamera,
  useDk,
  useGuitar,
  useHighGrab,
  useSpring,
  useStrong
} from '@renderer/hooks/kongs'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import ForestCheck from './ForestCheck'

const Vanilla: React.FC = () => {
  const inStage = usePlayForest()
  const camera = useCamera()
  const night = useForestNight()
  const guitar = useGuitar()
  const spring = useSpring()
  const highGrab = useHighGrab()
  const canSlam = useSlamForest()
  const dk = useDk()
  const strong = useStrong()
  return (
    <>
      <ForestCheck
        id={5080}
        name="Forest Fairy Rafters"
        region="Forest Mills"
        canGetLogic={inStage && camera && night.in && spring && guitar}
        canGetBreak={inStage && camera && logicBreak(night) && highGrab}
      />
      <ForestCheck
        id={5081}
        name="Forest Fairy Barn"
        region="Forest Mills"
        canGetLogic={inStage && camera && night.in && canSlam && strong}
        canGetBreak={inStage && camera && logicBreak(night) && dk && canSlam}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayForest()
  const camera = useCamera()

  return (
    <>
      <ForestCheck
        id={5280}
        name="Forest Fairy Location #1"
        canGetLogic={inStage && anyKong && camera}
      />
      <ForestCheck
        id={5281}
        name="Forest Fairy Location #2"
        canGetLogic={inStage && anyKong && camera}
      />
    </>
  )
}

const FairyLocations: React.FC = () => {
  const locations = useShuffleFairies() ? <Shuffled /> : <Vanilla />
  return <FairyPool>{locations}</FairyPool>
}

export default FairyLocations
