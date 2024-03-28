import {
  useForestDay,
  useForestMushroomTop,
  useForestNight,
  usePlayForest,
  useSlamForest
} from '@renderer/hooks/forest'
import { useAllGun } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ForestCheck from './ForestCheck'
import { logicBreak } from '@renderer/hooks/world'

const DkMedal: React.FC = () => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const day = useForestDay()
  const night = useForestNight()
  const top = useForestMushroomTop()
  const allGun = useAllGun()
  const [cbCount, coloredBananaShuffle, kong, gun, crystal, pad, slam] = useDonkStore(
    useShallow((state) => [
      state.cbCount,
      state.shuffleColoredBananas,
      state.dk,
      state.coconut,
      state.strong,
      state.blast,
      state.slam
    ])
  )

  let currLogic = 30 // basic without mushroom top
  if (allGun) {
    currLogic += 15 // check of legends
  }
  if (pad) {
    currLogic += 10 // barrel blast
  }
  if (gun) {
    currLogic += 10 // Balloon by Rafters
  }
  if (top) {
    currLogic += 5 // upper warp 5
  }
  let currBreak = currLogic

  if (day.in) {
    if (slam != 0) {
      currLogic += 5 // bunch in box
      if (canSlam && gun) {
        currLogic += 10
      }
    }
  }
  if (night.in) {
    currLogic += 5
    if (crystal) {
      currLogic += 5
    }
    if (canSlam) {
      currLogic += 5
    }
  }

  if (logicBreak(day)) {
    if (slam != 0) {
      currBreak += 5 // bunch in box
      if (canSlam && gun) {
        currBreak += 10
      }
    }
  }
  if (logicBreak(night)) {
    currBreak += 10
    if (canSlam) {
      currBreak += 5
    }
  }

  return (
    <ForestCheck
      id={5100}
      name="Forest DK Medal"
      region="Forest Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default DkMedal
