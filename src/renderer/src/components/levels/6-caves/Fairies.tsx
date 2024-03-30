
import FairyPool from '@renderer/components/pools/Fairies'
import { usePlayCaves } from '@renderer/hooks/caves'
import {
  useAnyKong,
  useCamera,
  useGuitar,
  useRocket,
  useSax,
  useSlam,
  useSpring
} from '@renderer/hooks/kongs'
import { useShuffleFairies } from '@renderer/hooks/settings'
import CavesCheck from './CavesCheck'

const Vanilla: React.FC = () => {
  const inStage = usePlayCaves()
  const camera = useCamera()
  const sax = useSax()
  const slam = useSlam()
  const rocket = useRocket()
  const guitar = useGuitar()
  const spring = useSpring()
  return (
    <>
      <CavesCheck
        id={6080}
        name="Caves Fairy Igloo"
        region="Igloo Area"
        canGetLogic={inStage && sax && slam && camera}
      />
      <CavesCheck
        id={6081}
        name="Caves Fairy Cabin"
        region="Cabins Area"
        canGetLogic={inStage && camera && guitar && rocket && spring}
        canGetBreak={inStage && camera && guitar && rocket}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayCaves()
  const camera = useCamera()

  return (
    <>
      <CavesCheck
        id={6280}
        name="Caves Fairy Location #1"
        canGetLogic={inStage && anyKong && camera}
      />
      <CavesCheck
        id={6281}
        name="Caves Fairy Location #2"
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
