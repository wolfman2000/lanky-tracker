import { useGrape, useLanky, useRocket, useStand, useTiny } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import {
  useForestMushroomTop,
  useForestNight,
  useForestOwl,
  usePlayForest,
  useSlamForest
} from '..'

const useLankyMedalCommonLogic = (): number => {
  const top = useForestMushroomTop()
  const owl = useForestOwl()
  const gun = useGrape()

  let bananas = 32 // warp 1 (5), base of mushroom (15), outside mill (12)
  if (gun) {
    bananas += 10 // COL balloon bottom
  }
  if (top && gun) {
    bananas += 10 // COL balloon top
  }
  if (owl) {
    bananas += 18 // path to owl tree (10), dang rabbit (8)
  }

  return bananas
}

export const useLankyMedalInLogic = (): number => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const night = useForestNight()
  const top = useForestMushroomTop()
  const kong = useLanky()
  const move = useStand()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useLankyMedalCommonLogic()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (top && move) {
    bananas += 5 // top of mushroom
    if (canSlam) {
      bananas += 15 // zinger room (10), mushroom room (5)
    }
  }
  if (night.in) {
    bananas += 10 // mills attic
  }
  return bananas
}

export const useLankyMedalOutLogic = (): number => {
  const inStage = usePlayForest()
  const canSlam = useSlamForest()
  const night = useForestNight()
  const top = useForestMushroomTop()
  const kong = useLanky()
  const rocket = useRocket()
  const tiny = useTiny()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useLankyMedalCommonLogic()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (top && (tiny || rocket)) {
    bananas += 5 // top of mushroom
    if (canSlam) {
      bananas += 15 // zinger room (10), mushroom room (5)
    }
  }
  if (logicBreak(night)) {
    bananas += 10 // mills attic
  }
  return bananas
}
