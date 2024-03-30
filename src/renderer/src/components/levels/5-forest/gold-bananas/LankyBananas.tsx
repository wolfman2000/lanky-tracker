import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useForestNight, useForestOwl, usePlayForest, useSlamForest } from '@renderer/hooks/forest'
import {
  useAnyGun,
  useBoulderTech,
  useGrape,
  useHoming,
  useLanky,
  useRocket,
  useSprint,
  useStand,
  useTiny,
  useTrombone
} from '@renderer/hooks/kongs'
import { useHardShooting } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import ForestCheck from '../ForestCheck'

const LankyBananas: React.FC = () => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const owlTree = useForestOwl()
  const night = useForestNight()
  const grape = useGrape()
  const stand = useStand()
  const homing = useHoming()
  const trombone = useTrombone()
  const sprint = useSprint()
  const anyGun = useAnyGun()
  const rocket = useRocket()
  const lanky = useLanky()
  const tiny = useTiny()
  const boulderTech = useBoulderTech()
  const hardShooting = useHardShooting()
  return (
    <>
      <ForestCheck
        id={5020}
        name="Forest Lanky Zingers"
        region="Forest Mills"
        canGetLogic={inStage && night.in && canSlam && grape && (homing || hardShooting)}
        canGetBreak={inStage && logicBreak(night) && lanky && canSlam && anyGun}
      />
      <ForestCheck
        id={5021}
        name="Forest Lanky Colored Mushrooms"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && stand && canSlam}
        canGetBreak={inStage && lanky && canSlam && (rocket || tiny)}
      />
      <ToughGoldenBanana>
        <ForestCheck
          id={5022}
          name="Forest Lanky Rabbit Race"
          region="Owl Tree"
          canGetLogic={owlTree && trombone && sprint}
          canGetBreak={owlTree && trombone && boulderTech}
        />
      </ToughGoldenBanana>
      <ForestCheck
        id={5023}
        name="Forest Lanky Mushroom Attic"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && stand && canSlam}
        canGetBreak={inStage && lanky && canSlam && (rocket || tiny)}
      />
    </>
  )
}

export default LankyBananas
