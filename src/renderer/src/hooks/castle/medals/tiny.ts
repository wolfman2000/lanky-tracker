import {
  useDiddy,
  useFeather,
  useGrape,
  useMini,
  useMonkeyport,
  useTiny
} from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { usePlayCastle, useSlamCastle } from '..'

const useTinyMedalCommonLogic = (): number => {
  const canSlam = useSlamCastle()
  const gun = useFeather()
  const crystal = useMini()
  const pad = useMonkeyport()
  const diddy = useDiddy()

  let bananas = 50
  if (crystal) {
    bananas += 5
  }
  if (gun) {
    bananas += 10
  }
  if (diddy && canSlam) {
    bananas += 5
    if (pad) {
      bananas += 15
      if (gun) {
        bananas += 10
      }
    }
  }
  return bananas
}

export const useTinyMedalInLogic = (): number => {
  const inStage = usePlayCastle()
  const kong = useTiny()
  const gun = useFeather()
  const shuffleBananas = useShuffleColoredBananas()
  const bananas = useTinyMedalCommonLogic()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  return gun ? bananas + 5 : bananas
}

export const useTinyMedalOutLogic = (): number => {
  const inStage = usePlayCastle()
  const kong = useTiny()
  const gun = useFeather()
  const grape = useGrape()
  const shuffleBananas = useShuffleColoredBananas()
  const bananas = useTinyMedalCommonLogic()

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  return gun || grape ? bananas + 5 : bananas
}
