import {
  usePlayForest,
  useForestNight,
  useForestBean,
  useForestDay,
  useSlamForest,
  useForestMushroomTop
} from '@renderer/hooks/forest'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ForestCheck from './ForestCheck'
import { logicBreak } from '@renderer/hooks/world'

const ChunkyMedal: React.FC = () => {
  const inStage = usePlayForest()
  const day = useForestDay()
  const night = useForestNight()
  const bean = useForestBean()
  const canSlam = useSlamForest()
  const top = useForestMushroomTop()
  const [cbCount, coloredBananaShuffle, kong, gun, move, vine] = useDonkStore(
    useShallow((state) => [
      state.cbCount,
      state.coloredBananaShuffle,
      state.chunky,
      state.pineapple,
      state.punch,
      state.vine
    ])
  )

  let currLogic = 40
  if (top) {
    currLogic += 11
    if (gun) {
      currLogic += 10
    }
    if (canSlam) {
      currLogic += 5
      if (gun) {
        currLogic += 10
      }
    }
  }
  if (bean) {
    currLogic += 14
  }

  let currBreak = currLogic
  if (night.in && top && vine) {
    currLogic += 5
  }
  if (day.in && kong && move) {
    currLogic += 5
  }
  if (logicBreak(night) && top && vine) {
    currBreak += 5
  }
  if (logicBreak(day) && kong && move) {
    currBreak += 5
  }

  return (
    <ForestCheck
      id={5104}
      name="Forest Chunky Medal"
      region="Forest Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default ChunkyMedal
