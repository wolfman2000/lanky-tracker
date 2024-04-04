import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import {
  useForestMushroomRoof,
  useForestNight,
  useForestOwl,
  usePlayForest,
  useSlamForest
} from '@renderer/hooks/forest'
import {
  useAnyGun,
  useBoulderTech,
  useGrape,
  useHoming,
  useLanky,
  useSprint,
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
  const homing = useHoming()
  const trombone = useTrombone()
  const sprint = useSprint()
  const anyGun = useAnyGun()
  const lanky = useLanky()
  const boulderTech = useBoulderTech()
  const hardShooting = useHardShooting()
  const roof = useForestMushroomRoof()
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
        canGetLogic={roof.in && lanky && canSlam}
        canGetBreak={logicBreak(roof) && lanky && canSlam}
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
        canGetLogic={roof.in && lanky && canSlam}
        canGetBreak={logicBreak(roof) && lanky && canSlam}
      />
    </>
  )
}

export default LankyBananas
