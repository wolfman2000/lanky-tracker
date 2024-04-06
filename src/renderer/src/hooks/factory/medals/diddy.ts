import { useDiddy, useGuitar, useHighGrab, usePeanut, useSpring } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { useFactoryProductionEnabled, useFactoryTesting, usePlayFactory } from '..'

const useDiddyMedalCommonLogic = (): number => {
  const testing = useFactoryTesting()
  const production = useFactoryProductionEnabled()
  const gun = usePeanut()
  const music = useGuitar()

  let bananas = 22 // 12 on prod floor, 5 by game, 5 on warp 5
  if (production) {
    bananas += 15
  }
  if (testing) {
    bananas += 13 // 8 by Funky, 5 via backflip at bottom of block tower
    if (music && gun) {
      bananas += 30 // enemy code room balloons
    }
  }

  return bananas
}

export const useDiddyMedalInLogic = (): number => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const kong = useDiddy()
  const pad = useSpring()
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

  if (testing && pad) {
    bananas += 20
  }

  return bananas
}

export const useDiddyMedalOutLogic = (): number => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const kong = useDiddy()
  const highGrab = useHighGrab()
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

  if (testing && highGrab) {
    bananas += 20
  }

  return bananas
}
