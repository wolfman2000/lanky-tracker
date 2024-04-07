import { useDive, useFeather, useMini, useSax, useTiny } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import {
  useGalleonCannon,
  useGalleonCavernTop,
  useGalleonHighTide,
  useGalleonLighthouseArea,
  useGalleonLowTide,
  useGalleonOutskirts,
  useGalleonTreasureRoom,
  usePlayGalleon,
  useSlamGalleon
} from '..'

const useTinyMedalCommonLogic = (): number => {
  const canSlam = useSlamGalleon()
  const outskirts = useGalleonOutskirts()
  const lighthouseArea = useGalleonLighthouseArea()
  const cannon = useGalleonCannon()
  const highTide = useGalleonHighTide()
  const lowTide = useGalleonLowTide()
  const gun = useFeather()
  const music = useSax()
  const dive = useDive()

  let bananas = 9
  if (lighthouseArea && highTide) {
    bananas += 5
    if (gun) {
      bananas += 10
    }
  }
  if (lighthouseArea && lowTide && gun) {
    bananas += 10
  }
  if (cannon && highTide) {
    bananas += 15
  }
  if (outskirts && dive) {
    if (music) {
      bananas += 18
    }
    if (canSlam) {
      bananas += 10
    }
  }

  return bananas
}

export const useTinyMedalInLogic = (): number => {
  const inStage = usePlayGalleon()
  const treasureRoom = useGalleonTreasureRoom()
  const cavernTop = useGalleonCavernTop()
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

  if (cavernTop.in) {
    bananas += 8
  }
  if (treasureRoom.in) {
    if (gun) {
      bananas += 10
    }
    if (crystal) {
      bananas += 5
    }
  }
  return bananas
}

export const useTinyMedalOutLogic = (): number => {
  const inStage = usePlayGalleon()
  const treasureRoom = useGalleonTreasureRoom()
  const cavernTop = useGalleonCavernTop()
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

  if (logicBreak(cavernTop)) {
    bananas += 8
  }
  if (logicBreak(treasureRoom)) {
    if (gun) {
      bananas += 10
    }
    if (crystal) {
      bananas += 5
    }
  }
  return bananas
}
