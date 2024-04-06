import {
  useBalloon,
  useDiddy,
  useDive,
  useGrape,
  useHighGrab,
  useLanky,
  usePunch,
  useSpring,
  useTiny,
  useTrombone,
  useTwirl
} from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import {
  useGalleonHighTide,
  useGalleonLighthouseArea,
  useGalleonOutskirts,
  useGalleonTreasureRoom,
  usePlayGalleon,
  useSlamGalleon
} from '..'

const useLankyMedalCommonLogic = (): number => {
  const canSlam = useSlamGalleon()
  const outskirts = useGalleonOutskirts()
  const lighthouseArea = useGalleonLighthouseArea()
  const chunkyPunch = usePunch()
  const gun = useGrape()
  const music = useTrombone()
  const dive = useDive()

  let bananas = 5 // start of level
  if (chunkyPunch && gun) {
    bananas += 20 // balloons by arena
  }
  if (lighthouseArea && dive) {
    bananas += 25 // lighthouse underwater.
  }
  if (outskirts) {
    bananas += 5 // bunch by cactus
    if (gun) {
      bananas += 10 // balloon above ship
    }
    if (dive) {
      bananas += 5 // bunch below Enguarde shipyard
      if (canSlam) {
        bananas += 10 // two door ship
      }
      if (music) {
        bananas += 15 // five door ship
      }
    }
  }
  return bananas
}

export const useLankyMedalInLogic = (): number => {
  const inStage = usePlayGalleon()
  const treasureRoom = useGalleonTreasureRoom()
  const highTide = useGalleonHighTide()
  const kong = useLanky()
  const pad = useBalloon()
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

  if (treasureRoom.in && highTide) {
    bananas += 1
    if (pad) {
      bananas += 4
    }
  }
  return bananas
}

export const useLankyMedalOutLogic = (): number => {
  const inStage = usePlayGalleon()
  const treasureRoom = useGalleonTreasureRoom()
  const highGrab = useHighGrab()
  const kong = useLanky()
  const diddy = useDiddy()
  const spring = useSpring()
  const tiny = useTiny()
  const twirl = useTwirl()
  const shuffleBananas = useShuffleColoredBananas()
  let currBreak = useLankyMedalCommonLogic() + 1

  if (!inStage) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (logicBreak(treasureRoom) && (highGrab || (diddy && spring && tiny && twirl))) {
    currBreak += 4
  }
  return currBreak
}
