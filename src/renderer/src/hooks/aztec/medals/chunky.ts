import { useChunky, useDive, usePineapple } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import { useAztec5DoorTemple, useAztecBack, useAztecFront, useAztecTinyTemple } from '..'

export const useChunkyMedalInLogic = (): number => {
  const inStage = useAztecFront()
  const tinyTemple = useAztecTinyTemple()
  const aztecBack = useAztecBack()
  const doorTemple = useAztec5DoorTemple()
  const kong = useChunky()
  const gun = usePineapple()
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
      bananas += 20
    }
    if (tinyTemple.in) {
      bananas += 29
      if (gun && dive) {
        bananas += 10
      }
    }
    if (aztecBack.in) {
      bananas += 16
      if (doorTemple.in && gun) {
        bananas += 20
      }
    }
  }

  return bananas
}

export const useChunkyMedalOutLogic = (): number => {
  const inStage = useAztecFront()
  const tinyTemple = useAztecTinyTemple()
  const aztecBack = useAztecBack()
  const doorTemple = useAztec5DoorTemple()
  const kong = useChunky()
  const pineapple = usePineapple()
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
    if (pineapple) {
      bananas += 20
    }
    if (logicBreak(tinyTemple)) {
      bananas += 29
      if (pineapple && dive) {
        bananas += 10
      }
    }
    if (logicBreak(aztecBack)) {
      bananas += 16
      if (logicBreak(doorTemple) && pineapple) {
        bananas += 20
      }
    }
  }

  return bananas
}
