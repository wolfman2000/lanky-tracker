import { useDive, useGrape, useLanky, useStand } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import {
  useJapesKongGates,
  useJapesPainting,
  useJapesPaintingOutside,
  useJapesRambi,
  useJapesSideArea,
  usePlayJapes
} from '..'

const useLankyMedalCommonLogic = (): number => {
  const haveRambiCage = useJapesRambi()
  const kongGates = useJapesKongGates()
  const sideArea = useJapesSideArea()
  const dive = useDive()
  const gun = useGrape()

  let bananas = 10 // by Snide's HQ.
  if (dive) {
    bananas += 5 // water separating lowlands & hillside
  }
  if (sideArea && gun) {
    bananas += 5 // lanky's barrel cage
  }

  if (kongGates) {
    bananas += 6 // low slopes in Stormy Tunnel
    if (gun) {
      bananas += 20 // balloons by Blue Kasplat & hut
    }
    if (haveRambiCage) {
      bananas += 10 // hut & rambi wall
    }
  }

  return bananas
}

export const useLankyMedalInLogic = (): number => {
  const inStage = usePlayJapes()
  const kongGates = useJapesKongGates()
  const japesPaintingOutside = useJapesPaintingOutside()
  const japesPaintingInside = useJapesPainting()
  const kong = useLanky()
  const gun = useGrape()
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

  if (japesPaintingOutside.in) {
    bananas += 3 // slope outside painting room
    if (japesPaintingInside.in) {
      bananas += 20 // 4 free bunches
      if (gun) {
        bananas += 10 // balloon inside
      }
    }
  }

  if (kongGates && move) {
    bananas += 11 // slopes with bonus barrel
  }

  return bananas
}

export const useLankyMedalOutLogic = (): number => {
  const inStage = usePlayJapes()
  const kongGates = useJapesKongGates()
  const japesPaintingOutside = useJapesPaintingOutside()
  const japesPaintingInside = useJapesPainting()
  const kong = useLanky()
  const gun = useGrape()
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

  if (logicBreak(japesPaintingOutside)) {
    bananas += 3
    if (logicBreak(japesPaintingInside)) {
      bananas += 20
      if (gun) {
        bananas += 10
      }
    }
  }
  if (kongGates) {
    bananas += 11 // slope barrel
  }

  return bananas
}
