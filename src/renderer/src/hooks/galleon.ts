import { useShallow } from 'zustand/react/shallow'
import { LogicBool, logicBreak, useSwitchsanityGun } from './world'
import useDonkStore from '@renderer/store'
import { usePlayLevel, useSlamLevel } from './isles'
import { useRocket } from './kongs'

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
  const [dive, galleonHighTide] = useDonkStore(
    useShallow((state) => [state.dive, state.galleonHighTide])
  )
  if (galleonHighTide) {
    return true
  }
  return lighthouse && dive
}

/**
 * Do we have access to Low Tide in Galleon?
 * @returns true if we have access to Low Tide in Galleon.
 */
export const useGalleonLowTide = (): boolean => {
  const [dive, galleonHighTide] = useDonkStore(
    useShallow((state) => [state.dive, state.galleonHighTide])
  )
  const inStage = usePlayGalleon()
  if (!galleonHighTide) {
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
  const lighthouseArea = useGalleonLighthouseArea()
  const highTide = useGalleonHighTide()
  const [bananaport, tiny, twirl, removeBarriers] = useDonkStore(
    useShallow((state) => [state.bananaportOpen, state.tiny, state.twirl, state.removeBarriers])
  )

  return {
    in:
      bananaport == 2 ||
      (lighthouseArea && (highTide || (removeBarriers.galleonSeasick && tiny && twirl))),
    out: lighthouseArea && removeBarriers.galleonSeasick
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
  const [removeBarriers, dk, grab] = useDonkStore(
    useShallow((state) => [state.removeBarriers, state.dk, state.grab])
  )
  return {
    in:
      (lighthouseArea && removeBarriers.galleonSeasick) ||
      (lighthousePlatform.in && canSlam && dk && grab),
    out: logicBreak(lighthousePlatform) && canSlam && dk && grab
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
  const [bananaport, vine, dive] = useDonkStore(
    useShallow((state) => [state.bananaportOpen, state.vine, state.dive])
  )
  return {
    in: inStage && (vine || (bananaport == 2 && (dive || rocket))),
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
  const [lanky, dive, bananaport] = useDonkStore(
    useShallow((state) => [state.lanky, state.dive, state.bananaportOpen])
  )
  return {
    in: (inStage && bananaport == 2) || (outskirts && lanky && dive && highTide),
    out: outskirts && lanky && dive
  }
}
