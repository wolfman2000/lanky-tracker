import useDonkStore from '@renderer/store'
import { usePlayLevel, useSlamLevel } from './isles'
import { useShallow } from 'zustand/react/shallow'

/**
 * Can we play in Crystal Caves?
 * @returns true if we can play in Crystal Caves.
 */
export const usePlayCaves = (): boolean => usePlayLevel('Caves')

/**
 * Can we slam down switches in Crystal Caves?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Crystal Caves.
 */
export const useSlamCaves = (): boolean => useSlamLevel('Caves')

/**
 * Can we enter the Igloo in Caves?
 * @todo Handle the option for requiring rocketbarrels first.
 * @returns true if we can enter the Igloo in Caves.
 */
export const useCavesIgloo = (): boolean => {
  const inStage = usePlayCaves()
  const [barriers, diddy, rocket] = useDonkStore(
    useShallow((state) => [state.removeBarriers, state.diddy, state.rocket])
  )
  const iglooBarrier = barriers.cavesIgloo
  return inStage && (!iglooBarrier || (diddy && rocket))
}
