import { useBlast, useBongos, useCoconut, useDive, useDk, useLanky } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import {
  useGalleonLighthouseArea,
  useGalleonLighthousePlatform,
  useGalleonOutskirts,
  usePlayGalleon,
  useSlamGalleon
} from '..'

const useDkMedalCommonLogic = (): number => {
  const outskirts = useGalleonOutskirts()
  const lighthouseArea = useGalleonLighthouseArea()
  const gun = useCoconut()
  const music = useBongos()
  const dive = useDive()
  const lanky = useLanky()

  let bananas = 0
  if (gun) {
    bananas += 10
  }
  if (outskirts) {
    bananas += 15
    if (music) {
      bananas += 10
    }
  }
  if (lighthouseArea && dive && lanky) {
    bananas += 10
  }

  return bananas
}

export const useDkMedalInLogic = (): number => {
  const inStage = usePlayGalleon()
  const canSlam = useSlamGalleon()
  const lighthousePlatform = useGalleonLighthousePlatform()
  const kong = useDk()
  const gun = useCoconut()
  const pad = useBlast()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useDkMedalCommonLogic()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (lighthousePlatform.in) {
    if (gun) {
      bananas += 10
    }
    if (pad) {
      bananas += 15
    }
    if (canSlam) {
      bananas += 20
      if (gun) {
        bananas += 10
      }
    }
  }
  return bananas
}

export const useDkMedalOutLogic = (): number => {
  const inStage = usePlayGalleon()
  const canSlam = useSlamGalleon()
  const lighthousePlatform = useGalleonLighthousePlatform()
  const kong = useDk()
  const gun = useCoconut()
  const pad = useBlast()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useDkMedalCommonLogic()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (logicBreak(lighthousePlatform)) {
    if (gun) {
      bananas += 10
    }
    if (pad) {
      bananas += 15
    }
    if (canSlam) {
      bananas += 20
      if (gun) {
        bananas += 10
      }
    }
  }
  return bananas
}
