import { useShallow } from 'zustand/react/shallow'
import { LogicBool } from './world'
import useDonkStore from '@renderer/store'
import { usePlayLevel, useSlamLevel } from './isles'

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
 * Can we enter the Galleon Lighthouse?
 * @todo Handle Switchsanity (any kong)
 * @returns true if we can enter the Galleon Lighthouse.
 */
export const useGalleonLighthouse = (): boolean => {
  const [dk, coconut] = useDonkStore((state) => [state.dk, state.coconut])
  const inStage = usePlayGalleon()
  return inStage && dk && coconut
}

/**
 * Do we have access to High Tide in Galleon?
 * @returns true if we have access to High Tide in Galleon.
 */
export const useGalleonHighTide = (): boolean => {
  const lighthouse = useGalleonLighthouse()
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
 * Do we have access to the Cannon Game area in Galleon?
 * @todo Handle Switchsanity (any gun) and auto open barrier.
 * @returns true if we have access to the Cannon Game area in Galleon.
 */
export const useGalleonCannon = (): boolean => {
  const canPlay = usePlayGalleon()
  const [chunky, pineapple] = useDonkStore(useShallow((state) => [state.chunky, state.pineapple]))
  return canPlay && chunky && pineapple
}

/**
 * Do we have access to the Shipyard Outskirts in Galleon?
 * @todo Handle Switchsanity (any gun) and fast barrier (defaults to peanut).
 * @returns true if we can access the Shipyard Outskirts in Galleon.
 */
export const useGalleonOutskirts = (): boolean => {
  const inStage = usePlayGalleon()
  return inStage
}

/**
 * Do we have access to the treasure room?
 * @todo Investigate if there's any setting that allows any kong to be Enguarde and not just Lanky.
 * @returns true if we can access the Treasure Room.
 */
export const useGalleonTreasureRoom = (): LogicBool => {
  const outskirts = useGalleonOutskirts()
  const highTide = useGalleonHighTide()
  const [lanky, dive] = useDonkStore(useShallow((state) => [state.lanky, state.dive]))
  return {
    in: outskirts && lanky && dive && highTide,
    out: outskirts && lanky && dive
  }
}
