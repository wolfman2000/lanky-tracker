import {
  useBalloon,
  useDiddy,
  useDk,
  useGrape,
  useLanky,
  useSniper,
  useSprint,
  useTrombone,
  useTwirl
} from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { usePlayCastle, useSlamCastle } from '..'

const useLankyMedalCommonLogic = (): number => {
  const canSlam = useSlamCastle()
  const gun = useGrape()

  let bananas = 30
  if (canSlam) {
    bananas += 30
    if (gun) {
      bananas += 20
    }
  }
  return bananas
}

export const useLankyMedalInLogic = (): number => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const kong = useLanky()
  const gun = useGrape()
  const music = useTrombone()
  const crystal = useSprint()
  const pad = useBalloon()
  const sniper = useSniper()
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

  if (gun && crystal) {
    bananas += 10
  }
  if (canSlam && gun && ((music && pad) || sniper)) {
    bananas += 10
  }
  return bananas
}

export const useLankyMedalOutLogic = (): number => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const kong = useLanky()
  const gun = useGrape()
  const music = useTrombone()
  const crystal = useSprint()
  const pad = useBalloon()
  const dk = useDk()
  const diddy = useDiddy()
  const twirl = useTwirl()
  const sniper = useSniper()
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

  if (gun && (crystal || dk || diddy)) {
    bananas += 10
  }
  if ((canSlam && gun && ((music && pad) || sniper)) || twirl) {
    bananas += 10
  }
  return bananas
}
