import { useDk, useFeather, useMini, useTiny, useTwirl } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import {
  useFactoryProductionEnabled,
  useFactoryProductionTop,
  useFactoryTesting,
  usePlayFactory
} from '..'

const useTinyMedalCommonLogic = (): number => {
  const testing = useFactoryTesting()
  const production = useFactoryProductionEnabled()
  const prodTop = useFactoryProductionTop()
  const gun = useFeather()
  const crystal = useMini()

  let banana = 15
  if (testing) {
    banana += 25
    if (crystal) {
      banana += 5
    }
    if (gun) {
      banana += 20
    }
  }
  if (prodTop) {
    banana += 10
  }
  if (production) {
    banana += 20
  }

  return banana
}

export const useTinyMedalInLogic = (): number => {
  const inStage = usePlayFactory()
  const production = useFactoryProductionEnabled()
  const kong = useTiny()
  const move = useTwirl()
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

  if (production && move) {
    bananas += 5
  }

  return bananas
}

export const useTinyMedalOutLogic = (): number => {
  const inStage = usePlayFactory()
  const production = useFactoryProductionEnabled()
  const kong = useTiny()
  const dk = useDk()
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

  if (production && dk) {
    bananas += 5
  }

  return bananas
}
