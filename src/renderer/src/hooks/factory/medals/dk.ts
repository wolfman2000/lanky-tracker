import { useBlast, useCoconut, useDk, useStrong } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { useFactoryProductionEnabled, useFactoryTesting, usePlayFactory } from '..'

const useDkMedalCommonLogic = (): number => {
  const testing = useFactoryTesting()
  const coconut = useCoconut()
  const blast = useBlast()

  let bananas = 15
  if (blast) {
    bananas += 20
  }
  if (coconut) {
    bananas += 10
  }
  if (testing) {
    bananas += 5
    if (coconut) {
      bananas += 35
    }
  }

  return bananas
}

export const useDkMedalInLogic = (): number => {
  const inStage = usePlayFactory()
  const production = useFactoryProductionEnabled()
  const kong = useDk()
  const strong = useStrong()
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

  if (production && strong) {
    bananas += 15
  }

  return bananas
}

export const useDkMedalOutLogic = (): number => {
  const inStage = usePlayFactory()
  const production = useFactoryProductionEnabled()
  const kong = useDk()
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

  if (production) {
    bananas += 15
  }

  return bananas
}
