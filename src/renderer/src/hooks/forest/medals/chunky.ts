import { useChunky, usePineapple, usePunch, useVine } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import {
  useForestBean,
  useForestDay,
  useForestMushroomTop,
  useForestNight,
  usePlayForest,
  useSlamForest
} from '..'

const useChunkyMedalCommonLogic = (): number => {
  const bean = useForestBean()
  const canSlam = useSlamForest()
  const top = useForestMushroomTop()
  const gun = usePineapple()

  let bananas = 40 // warp 2 (5), mine (5), low mushroom (16), high mushroom until vine (14)
  if (top) {
    bananas += 11 // high mushroom past vine
    if (gun) {
      bananas += 10 // balloon by night Kasplat
    }
    if (canSlam) {
      bananas += 5 // Chunky Face Room
      if (gun) {
        bananas += 10 // balloon in face room
      }
    }
  }
  if (bean) {
    bananas += 14 // bean area
  }
  return bananas
}

export const useChunkyMedalInLogic = (): number => {
  const inStage = usePlayForest()
  const day = useForestDay()
  const night = useForestNight()
  const top = useForestMushroomTop()
  const kong = useChunky()
  const move = usePunch()
  const vine = useVine()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useChunkyMedalCommonLogic()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (night.in && top && vine) {
    bananas += 5 // bunch by night door in mushroom
  }
  if (day.in && kong && move) {
    bananas += 5 // mills back (needs punch)
  }

  return bananas
}

export const useChunkyMedalOutLogic = (): number => {
  const inStage = usePlayForest()
  const day = useForestDay()
  const night = useForestNight()
  const top = useForestMushroomTop()
  const kong = useChunky()
  const move = usePunch()
  const vine = useVine()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useChunkyMedalCommonLogic()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (logicBreak(night) && top && vine) {
    bananas += 5 // bunch by night door in mushroom
  }
  if (logicBreak(day) && kong && move) {
    bananas += 5 // mills back (needs punch)
  }

  return bananas
}
