import { useDive, useFeather, useMini, useTiny, useTwirl } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import {
  useAztecBack,
  useAztecFront,
  useAztecLlamaLava,
  useAztecLlamaTemple,
  useAztecTinyTemple,
  useSlamAztec
} from '..'

export const useTinyMedalInLogic = (): number => {
  const inStage = useAztecFront()
  const aztecBack = useAztecBack()
  const tinyTemple = useAztecTinyTemple()
  const llamaTemple = useAztecLlamaTemple()
  const lava = useAztecLlamaLava()
  const canSlam = useSlamAztec()
  const kong = useTiny()
  const gun = useFeather()
  const crystal = useMini()
  const move = useTwirl()
  const dive = useDive()
  const shuffleBananas = useShuffleColoredBananas()

  if (!inStage.in) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  let bananas = 0
  if (inStage.in) {
    if (tinyTemple.in && dive) {
      if (gun) {
        bananas += 20
      }
      if (crystal) {
        bananas += 5
      }
    }
    if (aztecBack.in) {
      bananas += 50
    }
    if (llamaTemple.in) {
      bananas += 3
      if (gun) {
        bananas += 10
      }
      if (lava.in) {
        bananas += 2
        if (move || canSlam) {
          bananas += 10
        }
      }
    }
  }

  return bananas
}

export const useTinyMedalOutLogic = (): number => {
  const inStage = useAztecFront()
  const aztecBack = useAztecBack()
  const tinyTemple = useAztecTinyTemple()
  const llamaTemple = useAztecLlamaTemple()
  const lava = useAztecLlamaLava()
  const kong = useTiny()
  const gun = useFeather()
  const crystal = useMini()
  const dive = useDive()
  const shuffleBananas = useShuffleColoredBananas()

  if (!logicBreak(inStage)) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  let bananas = 0
  if (logicBreak(inStage)) {
    if (logicBreak(tinyTemple) && dive) {
      if (gun) {
        bananas += 20
      }
      if (crystal) {
        bananas += 5
      }
    }
    if (logicBreak(aztecBack)) {
      bananas += 50
    }
    if (logicBreak(llamaTemple)) {
      bananas += 3
      if (gun) {
        bananas += 10
      }
      if (logicBreak(lava)) {
        bananas += 12
      }
    }
  }

  return bananas
}
