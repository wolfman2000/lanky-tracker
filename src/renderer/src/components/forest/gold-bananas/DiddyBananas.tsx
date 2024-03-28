import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useForestNight, useForestOwl, usePlayForest } from '@renderer/hooks/forest'
import {
  useAnyGun,
  useCharge,
  useDiddy,
  useGuitar,
  useHighGrab,
  useRocket,
  useSpring,
  useStand,
  useTiny
} from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import ForestCheck from '../ForestCheck'

const DiddyBananas: React.FC = () => {
  const inStage = usePlayForest()
  const owlTree = useForestOwl()
  const night = useForestNight()
  const rocket = useRocket()
  const guitar = useGuitar()
  const charge = useCharge()
  const spring = useSpring()
  const stand = useStand()
  const anyGun = useAnyGun()
  const diddy = useDiddy()
  const tiny = useTiny()
  const highGrab = useHighGrab()
  return (
    <>
      <ForestCheck
        id={5010}
        name="Forest Diddy Top of Mushroom"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && rocket}
        canGetBreak={inStage && (diddy || tiny) && (tiny || stand)}
      />
      <ToughGoldenBanana>
        <ForestCheck
          id={5011}
          name="Forest Diddy Owl Race"
          region="Owl Tree"
          canGetLogic={owlTree && night.in && guitar && rocket}
          canGetBreak={owlTree && logicBreak(night) && guitar && rocket}
        />
      </ToughGoldenBanana>
      <ForestCheck
        id={5012}
        name="Forest Diddy Caged Banana"
        region="Forest Mills"
        canGetLogic={inStage && charge && guitar && anyGun}
      />
      <ForestCheck
        id={5013}
        name="Forest Diddy Rafters"
        region="Forest Mills"
        canGetLogic={inStage && night.in && spring && guitar}
        canGetBreak={inStage && logicBreak(night) && (spring || highGrab)}
      />
    </>
  )
}

export default DiddyBananas
