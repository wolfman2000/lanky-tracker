import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import ForestCheck from '../ForestCheck'
import { useForestDay, useForestNight, usePlayForest, useSlamForest } from '@renderer/hooks/forest'
import { useAllGun, useBlast, useDk, useGrab, useStrong, useVine } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'

const DkBananas: React.FC = () => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const day = useForestDay()
  const night = useForestNight()
  const blast = useBlast()
  const grab = useGrab()
  const dk = useDk()
  const strong = useStrong()
  const vine = useVine()
  const allGuns = useAllGun()
  return (
    <>
      <ToughGoldenBanana>
        <ForestCheck
          id={5001}
          name="Forest DK Baboon Blast"
          region="Giant Mushroom Exterior"
          canGetLogic={inStage && blast}
        />
      </ToughGoldenBanana>
      <ForestCheck
        id={5002}
        name="Forest DK Mushroom Cannons"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && allGuns && canSlam}
      />
      <ForestCheck
        id={5003}
        name="Forest DK Mill"
        region="Forest Mills"
        canGetLogic={inStage && day.in && night.in && canSlam && grab}
        canGetBreak={inStage && logicBreak(day) && logicBreak(night) && canSlam && grab}
      />
      <ForestCheck
        id={5004}
        name="Forest DK Barn"
        region="Forest Mills"
        canGetLogic={inStage && night.in && dk && canSlam && strong && vine}
        canGetBreak={inStage && logicBreak(night) && dk && canSlam}
      />
    </>
  )
}

export default DkBananas
