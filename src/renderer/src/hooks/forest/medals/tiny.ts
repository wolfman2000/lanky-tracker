import { useDive, useFeather, useMini, usePunch, useSax, useTiny } from '@renderer/hooks/kongs'
import { useForestTime, useShuffleColoredBananas } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import {
  useForestBean,
  useForestBeanHalf,
  useForestDay,
  useForestNight,
  useForestOwl,
  usePlayForest
} from '..'

const useTinyMedalCommonLogic = (): number => {
  const owl = useForestOwl()
  const bean = useForestBean()
  const half = useForestBeanHalf()
  const gun = useFeather()
  const dive = useDive()
  let bananas = 10 // two bunches at start
  if (half) {
    bananas += 4 // first bean door
  }
  if (bean) {
    bananas += 16 // full bean access
  }
  if (gun) {
    bananas += 10 // balloon in lower mushroom
  }
  if (owl) {
    bananas += 8 // around anthill
  }
  if (dive) {
    bananas += 17 // mills water
  }

  return bananas
}

export const useTinyMedalInLogic = (): number => {
  const inStage = usePlayForest()
  const day = useForestDay()
  const night = useForestNight()
  const owl = useForestOwl()
  const punch = usePunch()
  const kong = useTiny()
  const gun = useFeather()
  const music = useSax()
  const crystal = useMini()
  const forestTime = useForestTime()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useTinyMedalCommonLogic()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (day.in && crystal) {
    bananas += 10 // two bunches available from day mill
    if (punch) {
      bananas += 5 // box in chunky mill: night not needed due to tunnel in dk mill
    }
  }

  if (owl && crystal && music) {
    bananas += 5 // top of anthill
  }
  if (night.in && gun) {
    bananas += 10 // DK barn balloon
  }
  if (crystal && (forestTime == 2 || (night.in && punch))) {
    bananas += 5 // spider boss
  }

  return bananas
}

export const useTinyMedalOutLogic = (): number => {
  const inStage = usePlayForest()
  const day = useForestDay()
  const night = useForestNight()
  const owl = useForestOwl()
  const punch = usePunch()
  const kong = useTiny()
  const gun = useFeather()
  const crystal = useMini()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useTinyMedalCommonLogic()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }
  if (logicBreak(day) && crystal) {
    bananas += 10 // two bunches available from day mill
    if (punch) {
      bananas += 5 // box in chunky mill: night not needed due to tunnel in dk mill
    }
  }

  if (owl) {
    bananas += 5 // top of anthill
  }
  if (logicBreak(night) && gun) {
    bananas += 10 // DK barn balloon
  }
  if (crystal && logicBreak(night) && punch) {
    bananas += 5 // spider boss
  }

  return bananas
}
