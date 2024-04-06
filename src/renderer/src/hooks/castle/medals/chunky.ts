import { useBoulderTech, useChunky, usePineapple, usePunch } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { useCastleTree, usePlayCastle, useSlamCastle } from '..'

export const useChunkyMedalInLogic = (): number => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const tree = useCastleTree()
  const boulderTech = useBoulderTech()
  const kong = useChunky()
  const gun = usePineapple()
  const move = usePunch()
  const shuffleBananas = useShuffleColoredBananas()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  let bananas = 30
  if (tree) {
    bananas += 5
    if (move && gun) {
      bananas += 10
    }
  }
  if (gun && move) {
    bananas += 40
  }
  if (canSlam) {
    if (gun) {
      bananas += 10
    }
    if (move && boulderTech) {
      bananas += 5
    }
  }
  return bananas
}

export const useChunkyMedalOutLogic = (): number => useChunkyMedalInLogic()
