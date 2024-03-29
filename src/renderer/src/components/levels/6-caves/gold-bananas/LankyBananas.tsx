import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useCavesIgloo, usePlayCaves, useSlamCaves } from '@renderer/hooks/caves'
import {
  useBalloon,
  useDiddy,
  useDk,
  useHighGrab,
  useLanky,
  useSprint,
  useTrombone
} from '@renderer/hooks/kongs'
import CavesCheck from '../CavesCheck'

const LankyBananas: React.FC = () => {
  const inStage = usePlayCaves()
  const igloo = useCavesIgloo()
  const canSlam = useSlamCaves()
  const balloon = useBalloon()
  const trombone = useTrombone()
  const sprint = useSprint()
  const highGrab = useHighGrab()
  const lanky = useLanky()
  const dk = useDk()
  const diddy = useDiddy()
  return (
    <>
      <ToughGoldenBanana>
        <CavesCheck
          id={6020}
          name="Caves Lanky Beetle Race"
          region="Main Caves Area"
          canGetLogic={inStage && canSlam && balloon && sprint}
          canGetBreak={inStage && canSlam && highGrab && sprint}
        />
      </ToughGoldenBanana>
      <CavesCheck
        id={6021}
        name="Caves Lanky Castle"
        region="Main Caves Area"
        canGetLogic={inStage && canSlam && lanky}
      />
      <CavesCheck
        id={6022}
        name="Caves Lanky 5 Door Igloo"
        region="Igloo Area"
        canGetLogic={igloo && trombone && balloon}
        canGetBreak={igloo && trombone && highGrab}
      />
      <CavesCheck
        id={6023}
        name="Caves Lanky 1 Door Cabin"
        region="Cabins Area"
        canGetLogic={inStage && balloon && trombone && sprint}
        canGetBreak={inStage && trombone && (sprint || dk || diddy)}
      />
    </>
  )
}

export default LankyBananas
