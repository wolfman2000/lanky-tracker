import {
  useForestBean,
  useForestDay,
  useForestMushroomTop,
  useForestNight,
  usePlayForest,
  useSlamForest
} from '@renderer/hooks/forest'
import { useChunky, usePineapple, usePunch, useVine } from '@renderer/hooks/kongs'
import { useCbCount } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ForestCheck from '../ForestCheck'

const ChunkyMedal: React.FC = () => {
  const inStage = usePlayForest()
  const day = useForestDay()
  const night = useForestNight()
  const bean = useForestBean()
  const canSlam = useSlamForest()
  const top = useForestMushroomTop()
  const cbCount = useCbCount()
  const kong = useChunky()
  const gun = usePineapple()
  const move = usePunch()
  const vine = useVine()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
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
