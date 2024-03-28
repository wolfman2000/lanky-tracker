import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useForestBean, useForestDay, usePlayForest, useSlamForest } from '@renderer/hooks/forest'
import {
  useBoulderTech,
  useChunky,
  useGrab,
  useHunky,
  usePineapple,
  usePunch,
  useSlam,
  useTriangle
} from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import ForestCheck from '../ForestCheck'

const ChunkyBananas: React.FC = () => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const beanstalk = useForestBean()
  const day = useForestDay()
  const slam = useSlam()
  const chunky = useChunky()
  const pineapple = usePineapple()
  const boulderTech = useBoulderTech()
  const triangle = useTriangle()
  const punch = usePunch()
  const grab = useGrab()
  const hunky = useHunky()
  return (
    <>
      <ToughGoldenBanana>
        <ForestCheck
          id={5040}
          name="Forest Chunky Minecarts"
          region="Forest Center And Beanstalk"
          canGetLogic={inStage && chunky && slam}
        />
      </ToughGoldenBanana>
      <ForestCheck
        id={5041}
        name="Forest Chunky Face Puzzle"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && canSlam && pineapple}
      />
      <ForestCheck
        id={5042}
        name="Forest Chunky Kegs"
        region="Forest Mills"
        canGetLogic={inStage && day.in && boulderTech && punch && triangle && grab}
        canGetBreak={inStage && logicBreak(day) && boulderTech && punch && triangle}
      />
      <ForestCheck
        id={5043}
        name="Forest Chunky Apple"
        region="Forest Center And Beanstalk"
        canGetLogic={beanstalk && boulderTech && hunky}
      />
    </>
  )
}

export default ChunkyBananas
