import { useDiddy, useDive, useGuitar, usePeanut, useRocket } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import {
  useGalleonLighthousePlatform,
  useGalleonOutskirts,
  useGalleonTreasureRoom,
  usePlayGalleon
} from '..'

const useDiddyMedalCommonLogic = (): number => {
  const outskirts = useGalleonOutskirts()
  const gun = usePeanut()
  const music = useGuitar()
  const dive = useDive()

  // Cranky Cannon
  let bananas = 10
  if (outskirts) {
    if (gun) {
      // Balloon by Instrument Cactus
      bananas += 10
    }
    if (dive) {
      // 20 by Mech Fish Grate, 10 on 2 Door Ship Floor, 6 to Treasure Room
      bananas += 36
      if (music) {
        // 5 Door Ship
        bananas += 14
      }
    }
  }

  return bananas
}

export const useDiddyMedalInLogic = (): number => {
  const inStage = usePlayGalleon()
  const lighthousePlatform = useGalleonLighthousePlatform()
  const treasureRoom = useGalleonTreasureRoom()
  const kong = useDiddy()
  const gun = usePeanut()
  const crystal = useRocket()
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

  if (treasureRoom.in && gun) {
    // Treasure Room Balloon
    bananas += 10
  }
  if (lighthousePlatform.in) {
    if (gun) {
      bananas += 10
    }
    if (crystal) {
      bananas += 10
    }
  }

  return bananas
}

export const useDiddyMedalOutLogic = (): number => {
  const inStage = usePlayGalleon()
  const lighthousePlatform = useGalleonLighthousePlatform()
  const treasureRoom = useGalleonTreasureRoom()
  const kong = useDiddy()
  const gun = usePeanut()
  const crystal = useRocket()
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

  if (logicBreak(treasureRoom) && gun) {
    bananas += 10
  }
  if (logicBreak(lighthousePlatform)) {
    if (gun) {
      bananas += 10
    }
    if (crystal) {
      bananas += 10
    }
  }
  return bananas
}
