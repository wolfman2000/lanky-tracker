import useDonkStore from '@renderer/store'
import { usePlayLevel, useSlamLevel } from './isles'
import { useShallow } from 'zustand/react/shallow'
import { LogicBool } from './world'

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

/**
 * Can we access the mini cavern by Funky in Caves?
 * @returns true if we can access the mini cavern by Funky.
 */
export const useCavesMiniFunky = (): LogicBool => {
  const inStage = usePlayCaves()
  const [tiny, twirl, mini, bananaport] = useDonkStore(
    useShallow((state) => [state.tiny, state.twirl, state.mini, state.bananaportOpen])
  )

  return {
    in: inStage && (bananaport == 2 || (tiny && twirl && mini)),
    out: inStage && tiny && mini
  }
}

/**
 * Can we access the tall pillar in Caves?
 * @returns true if we can access the pillar.
 */
export const useCavesPillar = (): LogicBool => {
  const inStage = usePlayCaves()
  const [dk, diddy, rocket, lanky, balloon, tiny, twirl, bananaport] = useDonkStore(
    useShallow((state) => [
      state.dk,
      state.diddy,
      state.rocket,
      state.lanky,
      state.balloon,
      state.tiny,
      state.twirl,
      state.bananaportOpen
    ])
  )
  return {
    in: inStage && (bananaport == 2 || (diddy && rocket)),
    out: inStage && (dk || (tiny && twirl) || (lanky && balloon))
  }
}
