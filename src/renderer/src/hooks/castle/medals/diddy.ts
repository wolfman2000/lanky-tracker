import {
  useCharge,
  useCoconut,
  useDiddy,
  usePeanut,
  usePineapple,
  usePunch,
  useRocket
} from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { usePlayCastle, useSlamCastle } from '..'

const useDiddyMedalCommonLogic = (): number => {
  const canSlam = useSlamCastle()
  const punch = usePunch()
  const gun = usePeanut()
  const crystal = useRocket()

  let bananas = 0
  if (crystal) {
    bananas += 5
  }
  if (gun) {
    bananas += 20
  }
  if (punch) {
    bananas += 20
  }
  if (canSlam) {
    if (crystal) {
      bananas += 15
    }
    if (gun) {
      bananas += 20
    }
  }
  return bananas
}

export const useDiddyMedalInLogic = (): number => {
  const inStage = usePlayCastle()
  const kong = useDiddy()
  const gun = usePeanut()
  const move = useCharge()
  const crystal = useRocket()
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
    bananas += 5
  }
  if (gun) {
    bananas += 5
    if (gun && move) {
      bananas += 10
    }
  }
  return bananas
}

export const useDiddyMedalOutLogic = (): number => {
  const inStage = usePlayCastle()
  const coconut = useCoconut()
  const pineapple = usePineapple()
  const kong = useDiddy()
  const gun = usePeanut()
  const move = useCharge()
  const shuffleBananas = useShuffleColoredBananas()
  let bananas = useDiddyMedalCommonLogic() + 5

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (coconut || pineapple) {
    bananas += 5
    if (gun && move) {
      bananas += 10
    }
  }
  return bananas
}
