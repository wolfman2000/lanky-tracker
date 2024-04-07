import { useChunky, usePineapple, usePunch, useTriangle } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { useFactoryProductionTop, useFactoryTesting, usePlayFactory } from '..'

export const useChunkyMedalInLogic = (): number => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const prodTop = useFactoryProductionTop()
  const kong = useChunky()
  const gun = usePineapple()
  const music = useTriangle()
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

  let bananas = 20
  if (gun) {
    bananas += 10
  }
  if (move) {
    bananas += 15
  }
  if (testing) {
    bananas += 5
    if (gun) {
      bananas += 10
    }
    if (music && move) {
      bananas += 10
      if (gun) {
        bananas += 10
      }
    }
  }
  if (prodTop) {
    bananas += 20
  }

  return bananas
}

export const useChunkyMedalOutLogic = (): number => useChunkyMedalInLogic()
