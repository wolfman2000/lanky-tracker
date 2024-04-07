import { useChunky, useDive, usePineapple, usePunch, useSlam } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import {
  useGalleonCannon,
  useGalleonCavernTop,
  useGalleonHighTide,
  useGalleonLighthouseArea,
  useGalleonOutskirts,
  useGalleonSeasickShip,
  usePlayGalleon
} from '..'

const useChunkyMedalCommonLogic = (): number => {
  const outskirts = useGalleonOutskirts()
  const lighthouseArea = useGalleonLighthouseArea()
  const highTide = useGalleonHighTide()
  const gun = usePineapple()
  const dive = useDive()

  let bananas = 12
  if (lighthouseArea && dive) {
    bananas += 10
  }
  if (outskirts) {
    if (gun) {
      bananas += 20
    }
    if (dive) {
      bananas += 15
    }
    if (highTide) {
      bananas += 5
    }
  }
  return bananas
}

export const useChunkyMedalInLogic = (): number => {
  const inStage = usePlayGalleon()
  const cannon = useGalleonCannon()
  const highTide = useGalleonHighTide()
  const seasick = useGalleonSeasickShip()
  const cavernTop = useGalleonCavernTop()
  const slam = useSlam()
  const kong = useChunky()
  const move = usePunch()
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

  if (cavernTop.in) {
    bananas += 3
  }
  if (cannon && highTide) {
    bananas += 10
  }
  if (seasick.in && slam) {
    bananas += 20
    if (move) {
      bananas += 5
    }
  }
  return bananas
}

export const useChunkyMedalOutLogic = (): number => {
  const inStage = usePlayGalleon()
  const cannon = useGalleonCannon()
  const seasick = useGalleonSeasickShip()
  const cavernTop = useGalleonCavernTop()
  const slam = useSlam()
  const kong = useChunky()
  const move = usePunch()
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

  if (logicBreak(cavernTop)) {
    bananas += 3
  }
  if (cannon) {
    bananas += 10
  }
  if (logicBreak(seasick) && slam) {
    bananas += 20
    if (move) {
      bananas += 5
    }
  }
  return bananas
}
