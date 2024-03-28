import {
  usePlayForest,
  useForestNight,
  useForestOwl,
  useForestBean,
  useForestBeanHalf,
  useForestDay
} from '@renderer/hooks/forest'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ForestCheck from '../ForestCheck'
import { usePunch } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'

const TinyMedal: React.FC = () => {
  const inStage = usePlayForest()
  const day = useForestDay()
  const night = useForestNight()
  const owl = useForestOwl()
  const bean = useForestBean()
  const half = useForestBeanHalf()
  const punch = usePunch()
  const [cbCount, coloredBananaShuffle, kong, gun, music, crystal, dive, forestTime] = useDonkStore(
    useShallow((state) => [
      state.settings.cbCount,
      state.settings.shuffleColoredBananas,
      state.moves.tiny,
      state.moves.feather,
      state.moves.sax,
      state.moves.mini,
      state.moves.dive,
      state.settings.forestTime
    ])
  )

  let currLogic = 10 // two bunches at start
  if (half) {
    currLogic += 4 // first bean door
  }
  if (bean) {
    currLogic += 16 // full bean access
  }
  if (gun) {
    currLogic += 10 // balloon in lower mushroom
  }
  if (owl) {
    currLogic += 8 // around anthill
  }
  if (dive) {
    currLogic += 17 // mills water
  }
  if (day.in && kong && crystal) {
    currLogic += 10
    if (punch) {
      currLogic += 5 // box in chunky mill: night not needed due to tunnel in dk mill
    }
  }

  let currBreak = currLogic
  if (owl && crystal && music) {
    currLogic += 5 // top of anthill
  }
  if (night.in && gun) {
    currLogic += 10 // DK barn balloon
  }
  if (kong && crystal && (forestTime == 2 || (night.in && punch))) {
    currLogic += 5 // spider boss
  }

  if (owl) {
    currBreak += 5 // top of anthill
  }
  if (logicBreak(night) && gun) {
    currBreak += 10 // DK barn balloon
  }
  if (kong && crystal && logicBreak(night) && punch) {
    currBreak += 5 // spider boss
  }

  return (
    <ForestCheck
      id={5103}
      name="Forest Tiny Medal"
      region="Forest Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default TinyMedal
