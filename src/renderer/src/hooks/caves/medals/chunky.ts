import {
  useBoulderTech,
  useChunky,
  useGone,
  useHunky,
  useMini,
  usePineapple,
  usePunch,
  useSlam,
  useTriangle
} from '@renderer/hooks/kongs'
import { useBananaportAll, useShuffleColoredBananas } from '@renderer/hooks/settings'
import { useCavesIgloo, usePlayCaves } from '..'

export const useChunkyMedalInLogic = (): number => {
  const inStage = usePlayCaves()
  const igloo = useCavesIgloo()
  const boulderTech = useBoulderTech()
  const slam = useSlam()
  const warpAll = useBananaportAll()
  const kong = useChunky()
  const gun = usePineapple()
  const music = useTriangle()
  const move = usePunch()
  const crystal = useHunky()
  const pad = useGone()
  const mini = useMini()
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

  let bananas = 18
  if (boulderTech) {
    bananas += 5
  }
  if (move) {
    bananas += 11
    if (gun) {
      bananas += 10
    }
    if (boulderTech) {
      bananas += 6
      if (crystal) {
        bananas += 10
      }
    }
  }
  if (gun && (warpAll || mini)) {
    bananas += 10
  }
  if (gun && igloo && music) {
    bananas += 10
  }
  if (music && slam && pad) {
    bananas += 20
  }
  return bananas
}

export const useChunkyMedalOutLogic = (): number => useChunkyMedalInLogic()
