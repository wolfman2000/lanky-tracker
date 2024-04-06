import { useDiddy, useGuitar, usePeanut, useRocket, useSpring } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import { useCavesIgloo, useCavesMiniFunky, usePlayCaves } from '..'

const useDiddyMedalCommonLogic = (): number => {
  const igloo = useCavesIgloo()
  const gun = usePeanut()
  const music = useGuitar()
  const crystal = useRocket()

  let bananas = 5 // Funky
  if (crystal) {
    bananas += 20 // bunches by igloo
  }
  if (gun) {
    bananas += 20 // balloon by warp 4 and balloon by cabin
    if (igloo && music) {
      bananas += 10 // balloon in igloo
    }
  }

  return bananas
}

export const useDiddyMedalInLogic = (): number => {
  const inStage = usePlayCaves()
  const miniFunky = useCavesMiniFunky()
  const kong = useDiddy()
  const music = useGuitar()
  const crystal = useRocket()
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

  if (crystal) {
    bananas += 10 // two bunches that rocket expects.
  }

  if (miniFunky.in && crystal) {
    bananas += 10
  }
  if (music) {
    bananas += 5 // Diddy's enemy cabin floor
    if (crystal) {
      bananas += 5 // Diddy's enemy cabin top
      if (pad) {
        bananas += 15 // Candles
      }
    }
  }
  return bananas
}

export const useDiddyMedalOutLogic = (): number => {
  const inStage = usePlayCaves()
  const miniFunky = useCavesMiniFunky()
  const kong = useDiddy()
  const music = useGuitar()
  const crystal = useRocket()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useDiddyMedalCommonLogic() + 10

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (logicBreak(miniFunky)) {
    bananas += 10
  }
  if (music) {
    bananas += 10 // Diddy's enemy cabin floor
    if (crystal) {
      bananas += 15 // Candles
    }
  }
  return bananas
}
