import {
  usePlayForest,
  useSlamForest,
  useForestNight,
  useForestMushroomTop,
  useForestOwl
} from '@renderer/hooks/forest'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ForestCheck from './ForestCheck'
import { logicBreak } from '@renderer/hooks/world'

const LankyMedal: React.FC = () => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const night = useForestNight()
  const top = useForestMushroomTop()
  const owl = useForestOwl()
  const [cbCount, coloredBananaShuffle, kong, gun, move, diddy, rocket, tiny] = useDonkStore(
    useShallow((state) => [
      state.cbCount,
      state.coloredBananaShuffle,
      state.lanky,
      state.grape,
      state.stand,
      state.diddy,
      state.rocket,
      state.tiny
    ])
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
