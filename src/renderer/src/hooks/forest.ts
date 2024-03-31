import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { usePlayLevel, useSlamLevel } from './isles'
import {
  useAnyGun,
  useAnyKong,
  useMini,
  useOrange,
  usePunch,
  useRocket,
  useStand,
  useTiny
} from './kongs'
import { useBananaportAll, useForestTime } from './settings'
import { LogicBool, logicBreak, useSwitchsanityGun } from './world'

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
 * @returns true if we do.
 */
export const useForestDay = (): LogicBool => {
  const inStage = usePlayForest()
  const anyGun = useAnyGun()
  const orange = useOrange()
  const forestTime = useForestTime()
  if (forestTime != 1) {
    return {
      in: inStage,
      out: inStage
    }
  }
  return {
    in: inStage && anyGun,
    out: inStage && orange
  }
}

/**
 * Do we have access to Fungi Forest during the nighttime?
 * @returns true if we do.
 */
export const useForestNight = (): LogicBool => {
  const anyGun = useAnyGun()
  const inStage = usePlayForest()
  const orange = useOrange()
  const forestTime = useForestTime()
  const anyKong = useAnyKong()
  if (forestTime != 0) {
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
 * Is it dusk in Forest? AKA, are all time gates removed?
 *
 * This is only possible via changing the seed settings.
 * @returns true if it's dusk.
 */
export const useForestDusk = (): boolean => {
  const inStage = usePlayForest()
  const dusk = useForestTime() == 2
  return inStage && dusk
}

/**
 * Can we access the spider boss room?
 * @returns true if we can access the spider boss room.
 */
export const useForestSpiderBoss = (): LogicBool => {
  const night = useForestNight()
  const dusk = useForestDusk()
  const mini = useMini()
  const punch = usePunch()

  return {
    in: (dusk && (mini || punch)) || (night.in && punch && mini),
    out: logicBreak(night) && punch && mini
  }
}

/**
 * Do we have access to the top of the mushroom in Forest?
 *
 * Due to recent logic changes, this is always possible.
 * However, the future may put restrictions on again.
 * @returns true. This is always possible.
 */
export const useForestMushroomTop = (): boolean => {
  return true
}

/**
 * Can we access the roof of the mushroom exterior in Forest?
 * @returns true if we can get on the roof.
 */
export const useForestMushroomRoof = (): LogicBool => {
  const inStage = usePlayForest()
  const stand = useStand()
  const rocket = useRocket()
  const tiny = useTiny()
  return {
    in: inStage && stand,
    out: inStage && (rocket || tiny)
  }
}

export const useForestBeanHalf = (): boolean => {
  const inStage = usePlayForest()
  const door1 = useSwitchsanityGun('forestBean1', 3)
  const removeBarriers = useDonkStore(useShallow((state) => state.removeBarriers))
  return inStage && (door1 || removeBarriers.forestBeanstalk)
}

/**
 * Do we have access to the beanstalk area?
 * @returns true if we can access the beanstalk area.
 */
export const useForestBean = (): boolean => {
  const inStage = usePlayForest()
  const door1 = useSwitchsanityGun('forestBean1', 3)
  const door2 = useSwitchsanityGun('forestBean2', 4)
  const warpAll = useBananaportAll()
  const [removeBarriers] = useDonkStore(useShallow((state) => [state.removeBarriers]))
  return inStage && (warpAll || removeBarriers.forestBeanstalk || (door1 && door2))
}

/**
 * Can we access the Owl Tree in Forest?
 * @returns true if we can access the Owl Tree in Forest.
 */
export const useForestOwl = (): boolean => {
  const inStage = usePlayForest()
  const door = useSwitchsanityGun('forestOwlTree', 2)
  const warpAll = useBananaportAll()
  const [removeBarriers] = useDonkStore(useShallow((state) => [state.removeBarriers]))
  return inStage && (warpAll || removeBarriers.forestOwlTree || door)
}
