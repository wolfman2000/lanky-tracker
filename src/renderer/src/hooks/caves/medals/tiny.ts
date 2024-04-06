import {
  useBoulderTech,
  useFeather,
  useHunky,
  useMini,
  useMonkeyport,
  usePunch,
  useSax,
  useTiny,
  useTwirl
} from '@renderer/hooks/kongs'
import { useBananaportAll, useShuffleColoredBananas } from '@renderer/hooks/settings'
import { useCavesIgloo, usePlayCaves } from '..'

const useTinyMedalCommonLogic = (): number => {
  const igloo = useCavesIgloo()
  const punch = usePunch()
  const boulderTech = useBoulderTech()
  const warpAll = useBananaportAll()
  const gun = useFeather()
  const music = useSax()
  const crystal = useMini()
  const pad = useMonkeyport()
  const hunky = useHunky()

  let bananas = 15
  if (warpAll || crystal) {
    bananas += 5
  }
  if (gun) {
    bananas += 10
  }
  if (music) {
    bananas += 10
    if (gun) {
      bananas += 10
    }
  }
  if (punch && boulderTech && hunky && pad) {
    bananas += 20
  }
  if (igloo && music) {
    bananas += 5
    if (gun) {
      bananas += 10
    }
  }
  return bananas
}

export const useTinyMedalInLogic = (): number => {
  const inStage = usePlayCaves()
  const warpAll = useBananaportAll()
  const kong = useTiny()
  const gun = useFeather()
  const move = useTwirl()
  const crystal = useMini()
  const pad = useMonkeyport()
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

  if ((warpAll || crystal) && move) {
    if (gun) {
      bananas += 10
    }
    if (pad) {
      bananas += 5
    }
  }
  return bananas
}

export const useTinyMedalOutLogic = (): number => {
  const inStage = usePlayCaves()
  const warpAll = useBananaportAll()
  const kong = useTiny()
  const gun = useFeather()
  const crystal = useMini()
  const pad = useMonkeyport()
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
  if (warpAll || crystal) {
    if (gun) {
      bananas += 10
    }
    if (pad) {
      bananas += 5
    }
  }
  return bananas
}
