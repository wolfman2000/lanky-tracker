import {
  useForestDay,
  useForestMushroomTop,
  useForestNight,
  usePlayForest,
  useSlamForest
} from '..'
import { useAllGun, useBlast, useCoconut, useDk, useSlam, useStrong } from '../../kongs'
import { useShuffleColoredBananas } from '../../settings'
import { logicBreak } from '../../world'

const useDkMedalCommonLogic = (): number => {
  const top = useForestMushroomTop()
  const allGun = useAllGun()
  const gun = useCoconut()
  const pad = useBlast()

  let bananas: number = 30 // basic without mushroom top
  if (allGun) {
    bananas += 15 // check of legends
  }
  if (pad) {
    bananas += 10 // barrel blast
  }
  if (gun) {
    bananas += 10 // Balloon by Rafters
  }
  if (top) {
    bananas += 5 // upper warp 5
  }
  return bananas
}

export const useDkMedalInLogic = (): number => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const day = useForestDay()
  const night = useForestNight()
  const slam = useSlam()
  const kong = useDk()
  const gun = useCoconut()
  const crystal = useStrong()
  const shuffledBananas = useShuffleColoredBananas()
  let bananas = useDkMedalCommonLogic()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffledBananas) {
    return 100
  }

  if (day.in) {
    if (slam) {
      bananas += 5 // bunch in box
    }
    if (canSlam && gun) {
      bananas += 10 // balloon in grab cage
    }
  }

  if (night.in) {
    bananas += 5 // 5 leading to barn.
    if (crystal) {
      bananas += 5 // 5 above slam switch surrounded by thorns
      if (canSlam) {
        bananas += 5 // 5 in ? box in barn.
      }
    }
  }

  return bananas
}

export const useDkMedalOutLogic = (): number => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const day = useForestDay()
  const night = useForestNight()
  const slam = useSlam()
  const kong = useDk()
  const gun = useCoconut()
  const shuffledBananas = useShuffleColoredBananas()
  let bananas = useDkMedalCommonLogic()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffledBananas) {
    return 100
  }

  if (logicBreak(day)) {
    if (slam) {
      bananas += 5 // bunch in box
    }
    if (canSlam && gun) {
      bananas += 10 // balloon in grab cage
    }
  }

  if (logicBreak(night)) {
    bananas += 10 // 5 leading to barn, 5 above slam switch.
    if (canSlam) {
      bananas += 5 // 5 in ? box in barn.
    }
  }

  return bananas
}
