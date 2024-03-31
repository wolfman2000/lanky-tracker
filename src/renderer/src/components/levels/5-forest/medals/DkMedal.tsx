import {
  useForestDay,
  useForestMushroomTop,
  useForestNight,
  usePlayForest,
  useSlamForest
} from '@renderer/hooks/forest'
import { useAllGun, useBlast, useCoconut, useDk, useSlam, useStrong } from '@renderer/hooks/kongs'
import { useCbCount } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ForestCheck from '../ForestCheck'

const DkMedal: React.FC = () => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const day = useForestDay()
  const night = useForestNight()
  const top = useForestMushroomTop()
  const allGun = useAllGun()
  const slam = useSlam()
  const cbCount = useCbCount()
  const kong = useDk()
  const gun = useCoconut()
  const crystal = useStrong()
  const pad = useBlast()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
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
    if (slam) {
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
    if (slam) {
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
