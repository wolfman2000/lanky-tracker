import { useCoconut, useDk, usePeanut, usePineapple, useStrong } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { useCastleTree, usePlayCastle, useSlamCastle } from '..'

const useDkMedalCommonLogic = (): number => {
  const tree = useCastleTree()
  const gun = useCoconut()

  let bananas = 50
  if (tree && gun) {
    bananas += 15
  }
  return bananas
}

export const useDkMedalInLogic = (): number => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const kong = useDk()
  const gun = useCoconut()
  const crystal = useStrong()
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

  if (canSlam) {
    bananas += 10
    if (crystal) {
      bananas += 10
    }
  }
  if (gun) {
    bananas += 15
  }

  return bananas
}

export const useDkMedalOutLogic = (): number => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const peanut = usePeanut()
  const pineapple = usePineapple()
  const kong = useDk()
  const gun = useCoconut()
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

  if (canSlam) {
    bananas += 20
  }
  if (gun) {
    bananas += 15
  } else if (peanut || pineapple) {
    bananas += 5
  }

  return bananas
}
