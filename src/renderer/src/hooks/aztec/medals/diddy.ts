import { useDiddy, useDive, usePeanut, useRocket } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import {
  useAztec5DoorTemple,
  useAztecBack,
  useAztecBackTunnel,
  useAztecFront,
  useAztecTinyTemple,
  useSlamAztec
} from '..'

export const useDiddyMedalInLogic = (): number => {
  const inStage = useAztecFront()
  const tinyTemple = useAztecTinyTemple()
  const aztecBack = useAztecBack()
  const doorTemple = useAztec5DoorTemple()
  const backTunnel = useAztecBackTunnel()
  const canSlam = useSlamAztec()
  const kong = useDiddy()
  const gun = usePeanut()
  const crystal = useRocket()
  const dive = useDive()
  const shuffleBananas = useShuffleColoredBananas()

  if (!inStage.in) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  let bananas = 0
  if (inStage.in) {
    bananas += 5
    if (gun) {
      bananas += 10
    }
    if (tinyTemple.in) {
      if (canSlam) {
        bananas += 3
        if (gun) {
          bananas += 15
        }
      }
      if (dive) {
        bananas += 7
      }
    }
    if (aztecBack.in) {
      bananas += 30
      if (crystal) {
        bananas += 10
      }
      if (doorTemple.in && gun) {
        bananas += 10
      }
      if (backTunnel.in && gun) {
        bananas += 10
      }
    }
  }

  return bananas
}

export const useDiddyMedalOutLogic = (): number => {
  const inStage = useAztecFront()
  const tinyTemple = useAztecTinyTemple()
  const aztecBack = useAztecBack()
  const doorTemple = useAztec5DoorTemple()
  const backTunnel = useAztecBackTunnel()
  const canSlam = useSlamAztec()
  const kong = useDiddy()
  const gun = usePeanut()
  const crystal = useRocket()
  const dive = useDive()
  const shuffleBananas = useShuffleColoredBananas()

  if (!logicBreak(inStage)) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  let bananas = 0
  if (logicBreak(inStage)) {
    bananas += 5
    if (gun) {
      bananas += 10
    }
    if (logicBreak(tinyTemple)) {
      if (canSlam) {
        bananas += 8
        if (gun) {
          bananas += 10
        }
      }
      if (dive) {
        bananas += 7
      }
    }
    if (logicBreak(aztecBack)) {
      bananas += 30
      if (crystal) {
        bananas += 10
      }
      if (logicBreak(doorTemple) && gun) {
        bananas += 10
      }
      if (logicBreak(backTunnel) && gun) {
        bananas += 10
      }
    }
  }

  return bananas
}
