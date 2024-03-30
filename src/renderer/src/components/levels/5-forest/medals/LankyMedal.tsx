import {
  useForestMushroomTop,
  useForestNight,
  useForestOwl,
  usePlayForest,
  useSlamForest
} from '@renderer/hooks/forest'
import { useDiddy, useGrape, useLanky, useRocket, useStand, useTiny } from '@renderer/hooks/kongs'
import { useCbCount } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ForestCheck from '../ForestCheck'

const LankyMedal: React.FC = () => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const night = useForestNight()
  const top = useForestMushroomTop()
  const owl = useForestOwl()
  const cbCount = useCbCount()
  const kong = useLanky()
  const gun = useGrape()
  const move = useStand()
  const diddy = useDiddy()
  const rocket = useRocket()
  const tiny = useTiny()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
  )

  let currLogic = 32
  if (gun) {
    currLogic += 10
  }
  if (top && gun) {
    currLogic += 10
  }
  if (owl) {
    currLogic += 18
  }
  let currBreak = currLogic

  if (top && move) {
    currLogic += 5
    if (canSlam) {
      currLogic += 15
    }
  }
  if (night.in) {
    currLogic += 10
  }
  if (top && (tiny || (diddy && rocket))) {
    currBreak += 5
    if (canSlam) {
      currBreak += 15
    }
  }
  if (logicBreak(night)) {
    currBreak += 5
  }

  return (
    <ForestCheck
      id={5102}
      name="Forest Lanky Medal"
      region="Forest Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default LankyMedal
