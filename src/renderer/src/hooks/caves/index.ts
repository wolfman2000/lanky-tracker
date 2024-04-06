import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { usePlayLevel, useSlamLevel } from '../isles'
import {
  useAnyGun,
  useBalloon,
  useBongos,
  useCoconut,
  useDiddy,
  useDk,
  useGuitar,
  useHoming,
  useMini,
  useOrange,
  useRocket,
  useTiny,
  useTrombone,
  useTwirl
} from '../kongs'
import { useBananaportAll, useHardShooting } from '../settings'
import { LogicBool } from '../world'

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
  const rocket = useRocket()
  const [barriers] = useDonkStore(useShallow((state) => [state.removeBarriers]))
  const iglooBarrier = barriers.cavesIgloo
  return inStage && (iglooBarrier || rocket)
}

/**
 * Can we access the mini cavern by Funky in Caves?
 * @returns true if we can access the mini cavern by Funky.
 */
export const useCavesMiniFunky = (): LogicBool => {
  const inStage = usePlayCaves()
  const twirl = useTwirl()
  const mini = useMini()
  const warpAll = useBananaportAll()

  return {
    in: inStage && (warpAll || (twirl && mini)),
    out: inStage && mini
  }
}

/**
 * Can we access the tall pillar in Caves?
 * @returns true if we can access the pillar.
 */
export const useCavesPillar = (): LogicBool => {
  const inStage = usePlayCaves()
  const rocket = useRocket()
  const twirl = useTwirl()
  const balloon = useBalloon()
  const dk = useDk()
  const warpAll = useBananaportAll()
  return {
    in: inStage && (warpAll || rocket),
    out: inStage && (dk || twirl || balloon)
  }
}

export const useCavesLankyCabin = (): LogicBool => {
  const inStage = usePlayCaves()
  const balloon = useBalloon()
  const trombone = useTrombone()
  const diddy = useDiddy()
  const tiny = useTiny()
  return {
    in: inStage && trombone && balloon,
    out: inStage && trombone && (diddy || tiny)
  }
}

export const useCavesDkCabinBee = (): LogicBool => {
  const inStage = usePlayCaves()
  const bongos = useBongos()
  const coconut = useCoconut()
  const homing = useHoming()
  const hardShooting = useHardShooting()
  const anyGun = useAnyGun()
  return {
    in: inStage && bongos && coconut && (homing || hardShooting),
    out: inStage && bongos && anyGun
  }
}

export const useCavesDiddyCabinGauntlet = (): LogicBool => {
  const inStage = usePlayCaves()
  const guitar = useGuitar()
  const rocket = useRocket()
  const orange = useOrange()
  return {
    in: inStage && guitar && rocket && orange,
    out: inStage && guitar
  }
}
