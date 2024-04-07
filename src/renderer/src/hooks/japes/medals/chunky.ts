import { useBarrel, useChunky, useHunky, usePineapple } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import {
  useJapesHive,
  useJapesKongGates,
  useJapesRambi,
  useJapesUnderground,
  usePlayJapes
} from '..'

export const useChunkyMedalInLogic = (): number => {
  const inStage = usePlayJapes()
  const hiveGate = useJapesHive()
  const haveRambiCage = useJapesRambi()
  const underground = useJapesUnderground()
  const kong = useChunky()
  const barrel = useBarrel()
  const crystal = useHunky()
  const gun = usePineapple()
  const kongGates = useJapesKongGates()
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

  let bananas = 15 // by underground (5), Funky's roof (10)
  if (underground) {
    bananas += 15 // visible in underground
  }

  if (hiveGate && crystal) {
    bananas += 20 // big trees
  }

  if (kongGates) {
    bananas += 15 // one bunch on Cranky's lab, 10 regular bananas on path to hive.
    if (haveRambiCage) {
      if (gun) {
        bananas += 30 // balloons behind Rambi
      }
      if (barrel) {
        bananas += 5 // boulder behind Rambi
      }
    }
  }

  return bananas
}

export const useChunkyMedalOutLogic = (): number => useChunkyMedalInLogic()
