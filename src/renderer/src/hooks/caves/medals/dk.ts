import { useBlast, useBongos, useCoconut, useDk, usePunch, useStrong } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { useCavesIgloo, usePlayCaves } from '..'

const useDkMedalCommonLogic = (): number => {
  const igloo = useCavesIgloo()
  const punch = usePunch()
  const gun = useCoconut()
  const music = useBongos()
  const pad = useBlast()

  let bananas = 25
  if (punch) {
    bananas += 3
    if (gun) {
      bananas += 20
    }
  }
  if (pad) {
    bananas += 20
  }
  if (music) {
    bananas += 10
  }
  if (music && igloo && gun) {
    bananas == 10
  }
  return bananas
}

export const useDkMedalInLogic = (): number => {
  const inStage = usePlayCaves()
  const igloo = useCavesIgloo()
  const kong = useDk()
  const music = useBongos()
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

  if (music && igloo && crystal) {
    bananas += 7
  }
  return bananas
}

export const useDkMedalOutLogic = (): number => {
  const inStage = usePlayCaves()
  const igloo = useCavesIgloo()
  const kong = useDk()
  const music = useBongos()
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

  if (music && igloo) {
    bananas += 7
  }
  return bananas
}
