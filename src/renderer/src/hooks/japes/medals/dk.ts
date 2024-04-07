import { useBlast, useCoconut, useDk, useVine } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { useJapesKongGates, useJapesRambi, usePlayJapes } from '..'

export const useDkMedalInLogic = (): number => {
  const inStage = usePlayJapes()
  const haveRambiCage = useJapesRambi()
  const kongGates = useJapesKongGates()
  const kong = useDk()
  const vine = useVine()
  const pad = useBlast()
  const gun = useCoconut()
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

  let bananas = 36
  if (vine) {
    // Starting area between the vines.
    bananas += 5
  }
  if (gun) {
    // Two balloons after first tunnel.
    bananas += 20
  }
  if (vine && pad) {
    // Blast course
    bananas += 10
  }

  if (kongGates) {
    bananas += 9 // Between the 4 warps
    if (gun) {
      bananas += 10 // balloon by Cranky
    }
    if (haveRambiCage) {
      bananas += 10 // rambi gate + hut
    }
  }

  return bananas
}

export const useDkMedalOutLogic = (): number => {
  const inStage = usePlayJapes()
  const kong = useDk()
  const vine = useVine()
  const bananas = useDkMedalInLogic()
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
  return vine ? bananas : bananas + 5
}
