import { useFeather, useMini, useTiny } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import {
  useJapesHive,
  useJapesKongGates,
  useJapesRambi,
  useJapesSideArea,
  usePlayJapes,
  useSlamJapes
} from '..'

export const useTinyMedalInLogic = (): number => {
  const inStage = usePlayJapes()
  const hiveGate = useJapesHive()
  const sideArea = useJapesSideArea()
  const canSlam = useSlamJapes()
  const haveRambiCage = useJapesRambi()
  const kongGates = useJapesKongGates()
  const kong = useTiny()
  const gun = useFeather()
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

  let currLogic = 5 // first tunnel
  if (sideArea && gun) {
    currLogic += 5 // below tiny's cage barrel
  }
  if (hiveGate) {
    currLogic += 5 // in front of hive
    if (mini) {
      currLogic += 30 // stumps in outside hive area
      if (canSlam) {
        currLogic += 8 // final gate within hive
      }
      if (gun) {
        currLogic += 10 // balloon in first part of hive
      }
    }
  }

  if (kongGates) {
    currLogic += 7 // by Cranky (5) & before Rambi Wall (2)
    if (gun) {
      currLogic += 10 // balloon by hut
    }
    if (haveRambiCage) {
      currLogic += 10 // 5 in hut, 5 beyond wall
      if (gun) {
        currLogic += 10 // beyond rambi wall
      }
    }
  }

  return currLogic
}

export const useTinyMedalOutLogic = (): number => useTinyMedalInLogic()
