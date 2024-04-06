import { useGrape, useLanky, useStand, useTrombone } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import {
  useFactoryProductionEnabled,
  useFactoryProductionTop,
  useFactoryTesting,
  usePlayFactory
} from '..'

const useLankyMedalCommonLogic = (): number => {
  const testing = useFactoryTesting()
  const production = useFactoryProductionEnabled()
  const prodTop = useFactoryProductionTop()
  const gun = useGrape()
  const music = useTrombone()

  let bananas = 10
  if (testing) {
    bananas += 15
    if (gun && music) {
      bananas += 10
    }
  }
  if (prodTop) {
    bananas += 15
  }
  if (production) {
    bananas += 20
  }

  return bananas
}

export const useLankyMedalInLogic = (): number => {
  const inStage = usePlayFactory()
  const production = useFactoryProductionEnabled()
  const kong = useLanky()
  const move = useStand()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useLankyMedalCommonLogic()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (move) {
    bananas += 5
    if (production) {
      bananas += 25
    }
  }

  return bananas
}

export const useLankyMedalOutLogic = (): number => {
  const inStage = usePlayFactory()
  const kong = useLanky()
  const shuffleBananas = useShuffleColoredBananas()
  const bananas = useLankyMedalCommonLogic()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  return bananas + 30
}
