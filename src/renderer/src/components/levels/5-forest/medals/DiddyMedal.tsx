import {
  useForestDay,
  useForestMushroomTop,
  useForestNight,
  useForestOwl,
  usePlayForest,
  useSlamForest
} from '@renderer/hooks/forest'
import {
  useDiddy,
  useGuitar,
  useHighGrab,
  usePeanut,
  useRocket,
  useSpring
} from '@renderer/hooks/kongs'
import { useCbCount } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ForestCheck from '../ForestCheck'

const DiddyMedal: React.FC = () => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const day = useForestDay()
  const night = useForestNight()
  const top = useForestMushroomTop()
  const owl = useForestOwl()
  const grab = useHighGrab()
  const cbCount = useCbCount()
  const kong = useDiddy()
  const gun = usePeanut()
  const music = useGuitar()
  const crystal = useRocket()
  const pad = useSpring()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
  )

  let currLogic = 35
  if (top) {
    currLogic += 10
  }
  if (owl) {
    currLogic += 15
    if (crystal) {
      currLogic += 5
    }
  }

  let currBreak = currLogic
  if (day.in && gun) {
    currLogic += 10 // Snide's Balloon
  }
  if (night.in) {
    if (pad) {
      currLogic += 5
      if (music) {
        currLogic += 10
      }
    }
    if (canSlam && gun) {
      currLogic += 10
    }
  }

  if (logicBreak(day) && gun) {
    currBreak += 10 // Snide's Balloon
  }
  if (logicBreak(night)) {
    if (pad || grab) {
      currLogic += 15
    }
    if (canSlam && gun) {
      currBreak += 10
    }
  }

  return (
    <ForestCheck
      id={5101}
      name="Forest Diddy Medal"
      region="Forest Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default DiddyMedal
