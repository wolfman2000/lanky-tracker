import {
  useDiddy,
  useGuitar,
  useHighGrab,
  usePeanut,
  useRocket,
  useSpring
} from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import {
  useForestDay,
  useForestMushroomTop,
  useForestNight,
  useForestOwl,
  usePlayForest,
  useSlamForest
} from '..'

const useDiddyMedalCommonLogic = (): number => {
  const top = useForestMushroomTop()
  const owl = useForestOwl()
  const crystal = useRocket()

  let bananas = 35 // mushroom bounces (20), warp 4 intro (5), interior kasplat (7), rafters ground (3)
  if (top) {
    bananas += 10 // mushroom top
  }
  if (owl) {
    bananas += 15 // 10 singles around owl tree, bunch on warp 4
    if (crystal) {
      bananas += 5 // bunch on top of owl tree
    }
  }
  return bananas
}

export const useDiddyMedalInLogic = (): number => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const day = useForestDay()
  const night = useForestNight()
  const kong = useDiddy()
  const gun = usePeanut()
  const music = useGuitar()
  const pad = useSpring()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useDiddyMedalCommonLogic()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (day.in && gun) {
    bananas += 10 // Snide's Balloon
  }
  if (night.in) {
    if (pad) {
      bananas += 5 // outside entrance to rafters, spring
      if (music) {
        bananas += 10 // inside rafters, music to see
      }
    }
    if (canSlam && gun) {
      bananas += 10 // winch balloon
    }
  }

  return bananas
}

export const useDiddyMedalOutLogic = (): number => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const day = useForestDay()
  const night = useForestNight()
  const grab = useHighGrab()
  const kong = useDiddy()
  const gun = usePeanut()
  const pad = useSpring()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useDiddyMedalCommonLogic()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (logicBreak(day) && gun) {
    bananas += 10 // Snide's Balloon
  }
  if (logicBreak(night)) {
    if (pad || grab) {
      bananas += 15 // outside and inside rafters.
    }
    if (canSlam && gun) {
      bananas += 10 // winch balloon
    }
  }

  return bananas
}
