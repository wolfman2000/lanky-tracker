import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { usePlayLevel, useSlamLevel } from './isles'
import { useDive, useDk, useGrab, useLanky, useRocket, useSlam, useTwirl, useVine } from './kongs'
import { useBananaportAll, useGalleonTideStartHigh } from './settings'
import { LogicBool, logicBreak, useSwitchsanityGun } from './world'

/**
 * Can we play in Gloomy Galleon?
 * @returns true if we can play in Gloomy Galleon.
 */
export const usePlayGalleon = (): boolean => usePlayLevel('Galleon')

/**
 * Can we slam down switches in Gloomy Galleon?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Gloomy Galleon.
 */
export const useSlamGalleon = (): boolean => useSlamLevel('Galleon')

/**
 * Can we enter the Lighthouse area in Galleon?
 * @returns true if we can enter the Lighthouse area.
 */
export const useGalleonLighthouseArea = (): boolean => {
  const inStage = usePlayGalleon()
  const target = useSwitchsanityGun('galleonLighthouse', 0)
  const removeBarriers = useDonkStore(useShallow((state) => state.removeBarriers))
  return inStage && (target || removeBarriers.galleonLighthouse)
}

/**
 * Do we have access to High Tide in Galleon?
 * @returns true if we have access to High Tide in Galleon.
 */
export const useGalleonHighTide = (): boolean => {
  const lighthouse = useGalleonLighthouseArea()
  const dive = useDive()
  if (useGalleonTideStartHigh()) {
    return true
  }
  return lighthouse && dive
}

/**
 * Do we have access to Low Tide in Galleon?
 * @returns true if we have access to Low Tide in Galleon.
 */
export const useGalleonLowTide = (): boolean => {
  const dive = useDive()
  const inStage = usePlayGalleon()
  if (!useGalleonTideStartHigh()) {
    return true
  }
  return dive && inStage
}

/**
 * Can we land on top of the Lighthouse Platform in Galleon?
 *
 * To future developers: DO NOT call `useGalleonSeasickShip` from here without modifying the code:
 * it will cause an infinite loop!
 * @returns a truthy statement if the platform can be reached.
 */
export const useGalleonLighthousePlatform = (): LogicBool => {
  const inStage = usePlayGalleon()
  const lighthouseArea = useGalleonLighthouseArea()
  const highTide = useGalleonHighTide()
  const twirl = useTwirl()
  const warpAll = useBananaportAll()
  const [galleonSeasick] = useDonkStore(
    useShallow((state) => [state.removeBarriers.galleonSeasick])
  )

  return {
    in: (inStage && warpAll) || (lighthouseArea && (highTide || (galleonSeasick && twirl))),
    out: lighthouseArea && galleonSeasick
  }
}

/**
 * Can we board the ship summoned by turning on the Lighthouse in Galleon?
 * @returns a truthy statement if we can board the ship.
 */
export const useGalleonSeasickShip = (): LogicBool => {
  const lighthousePlatform = useGalleonLighthousePlatform()
  const lighthouseArea = useGalleonLighthouseArea()
  const canSlam = useSlamGalleon()
  const grab = useGrab()
  const [galleonSeasick] = useDonkStore(
    useShallow((state) => [state.removeBarriers.galleonSeasick])
  )
  return {
    in: (lighthouseArea && galleonSeasick) || (lighthousePlatform.in && canSlam && grab),
    out: logicBreak(lighthousePlatform) && canSlam && grab
  }
}

/**
 * Do we have access to the small platforms in the Galleon Caverns?
 *
 * In Vanilla, there is a Kasplat.
 * @returns a truthy value if we can access the thin platforms.
 */
export const useGalleonCavernTop = (): LogicBool => {
  const inStage = usePlayGalleon()
  const seasick = useGalleonSeasickShip()
  const rocket = useRocket()
  const dive = useDive()
  const vine = useVine()
  const warpAll = useBananaportAll()
  return {
    in: inStage && (vine || (warpAll && (dive || rocket))),
    out: inStage && logicBreak(seasick)
  }
}

/**
 * Do we have access to the Cannon Game area in Galleon?
 * @returns true if we have access to the Cannon Game area in Galleon.
 */
export const useGalleonCannon = (): boolean => {
  const canPlay = usePlayGalleon()
  const target = useSwitchsanityGun('galleonCannon', 4)
  return canPlay && target
}

/**
 * Do we have access to the Shipyard Outskirts in Galleon?
 * @returns true if we can access the Shipyard Outskirts in Galleon.
 */
export const useGalleonOutskirts = (): boolean => {
  const inStage = usePlayGalleon()
  const target = useSwitchsanityGun('galleonOutskirts', 1)
  const removeBarriers = useDonkStore(useShallow((state) => state.removeBarriers))
  return inStage && (target || removeBarriers.galleonOutskirts)
}

/**
 * Do we have access to the treasure room?
 * @returns true if we can access the Treasure Room.
 */
export const useGalleonTreasureRoom = (): LogicBool => {
  const outskirts = useGalleonOutskirts()
  const highTide = useGalleonHighTide()
  const inStage = usePlayGalleon()
  const lanky = useLanky()
  const dive = useDive()
  const warpAll = useBananaportAll()
  return {
    in: (inStage && warpAll) || (outskirts && lanky && dive && highTide),
    out: outskirts && lanky && dive
  }
}

export const useGalleonDkLighthouseBanana = (): LogicBool => {
  const canSlam = useSlamGalleon()
  const lighthouseArea = useGalleonLighthouseArea()
  const highTide = useGalleonHighTide()
  const dk = useDk()
  const grab = useGrab()
  const seasick = useDonkStore(useShallow((state) => state.removeBarriers.galleonSeasick))
  return {
    in: lighthouseArea && highTide && canSlam && dk && (seasick || grab),
    out: lighthouseArea && canSlam && dk && (seasick || grab)
  }
}

export const useGalleonDiddyLighthouseBanana = (): LogicBool => {
  const seasick = useDonkStore(useShallow((state) => state.removeBarriers.galleonSeasick))
  const canSlam = useSlamGalleon()
  const slam = useSlam()
  const lighthouseArea = useGalleonLighthouseArea()
  const rocket = useRocket()
  const dk = useDk()
  const grab = useGrab()
  const highTide = useGalleonHighTide()
  return {
    in: lighthouseArea && (seasick || (highTide && canSlam && dk && grab)) && canSlam && rocket,
    out: lighthouseArea && (seasick || (canSlam && dk && grab)) && slam && rocket
  }
}
