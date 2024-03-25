import useDonkStore from '@renderer/store'
import { usePlayLevel, useSlamLevel } from './isles'
import { useShallow } from 'zustand/react/shallow'
import { useAnyGun, useAnyKong } from './kongs'
import { LogicBool } from './world'

/**
 * Can we play in Fungi Forest?
 * @returns true if we can play in Fungi Forest.
 */
export const usePlayForest = (): boolean => usePlayLevel('Forest')

/**
 * Can we slam down switches in Fungi Forest?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Fungi Forest.
 */
export const useSlamForest = (): boolean => useSlamLevel('Forest')

/**
 * Do we have access to Fungi Forest during the daytime?
 * @todo Account for starting day, dusk, and night. Night remains.
 * @returns true if we do.
 */
export const useForestDay = (): LogicBool => {
  const inStage = usePlayForest()
  const forestDusk = useDonkStore(useShallow((state) => state.forestDusk))
  if (forestDusk) {
    return {
      in: inStage,
      out: inStage
    }
  }
  return {
    in: inStage,
    out: inStage
  }
}

/**
 * Do we have access to Fungi Forest during the nighttime?
 * @todo Account for starting day, dusk, and night. Day remains.
 * @returns true if we do.
 */
export const useForestNight = (): LogicBool => {
  const anyGun = useAnyGun()
  const inStage = usePlayForest()
  const [orange, forestDusk] = useDonkStore(useShallow((state) => [state.orange, state.forestDusk]))
  const anyKong = useAnyKong()
  if (forestDusk) {
    return {
      in: inStage,
      out: inStage
    }
  }
  return {
    in: anyGun && inStage,
    out: anyKong && orange && inStage
  }
}

/**
 * Do we have access to the beanstalk area?
 * @todo Support switch sanity.
 * @returns true if we can access the beanstalk area.
 */
export const useForestBean = (): boolean => {
  const inStage = usePlayForest()
  const [tiny, feather, chunky, pineapple] = useDonkStore(
    useShallow((state) => [state.tiny, state.feather, state.chunky, state.pineapple])
  )
  return inStage && tiny && feather && chunky && pineapple
}

/**
 * Can we access the Owl Tree in Forest?
 * @todo Handle Switchsanity (any gun)
 * @returns true if we can access the Owl Tree in Forest.
 */
export const useForestOwl = (): boolean => {
  const inStage = usePlayForest()
  const [lanky, grape] = useDonkStore(useShallow((state) => [state.lanky, state.grape]))
  return inStage && lanky && grape
}
