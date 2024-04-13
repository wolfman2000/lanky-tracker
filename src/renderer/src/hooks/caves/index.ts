import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { usePlayLevel, useSlamLevel } from '../isles'
import {
  useAnyGun,
  useAnyKong,
  useBalloon,
  useBarrel,
  useBlast,
  useBongos,
  useBoulderTech,
  useCamera,
  useCoconut,
  useDiddy,
  useDk,
  useFeather,
  useGone,
  useGuitar,
  useHighGrab,
  useHoming,
  useHunky,
  useLanky,
  useMini,
  useMonkeyport,
  useOrange,
  usePunch,
  useRocket,
  useSax,
  useShockwave,
  useSlam,
  useSpring,
  useSprint,
  useStrong,
  useTiny,
  useTriangle,
  useTrombone,
  useTwirl
} from '../kongs'
import { useBananaportAll, useHardShooting } from '../settings'
import { LogicBool, logicBreak } from '../world'

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

export const useDiddyGauntletGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const guitar = useGuitar()
  const rocket = useRocket()
  const orange = useOrange()
  return {
    in: inStage && guitar && rocket && orange,
    out: inStage && guitar
  }
}

export const useChunkyGoneGb = (): boolean => {
  const inStage = usePlayCaves()
  const punch = usePunch()
  const gone = useGone()
  return inStage && punch && gone
}

export const useChunkyClearGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const punch = usePunch()
  const boulder = useBoulderTech()
  const hunky = useHunky()
  return {
    in: inStage && punch && boulder && hunky,
    out: inStage && punch && boulder
  }
}

export const useChunkyIglooGb = (): boolean => {
  const igloo = useCavesIgloo()
  return useTriangle() && igloo
}

export const useChunkyCabinGb = (): boolean => {
  const inStage = usePlayCaves()
  const triangle = useTriangle()
  const gone = useGone()
  return useSlam() && inStage && triangle && gone
}

export const useDiddyWaterfallGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const rocket = useRocket()
  const dk = useDk()
  const twirl = useTwirl()
  return {
    in: inStage && rocket,
    out: inStage && (dk || twirl)
  }
}

export const useDiddyIglooGb = (): boolean => {
  const igloo = useCavesIgloo()
  const guitar = useGuitar()
  const barrel = useBarrel()
  return igloo && guitar && barrel
}

export const useDiddyCandleGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const guitar = useGuitar()
  const rocket = useRocket()
  const spring = useSpring()
  return {
    in: inStage && guitar && rocket && spring,
    out: inStage && guitar && rocket
  }
}

/**
 * Can we get the banana in the blast course within Caves?
 * @returns true if we can get the banana.
 */
export const useDkBlastGb = (): boolean => {
  const inStage = usePlayCaves()
  return useBlast() && inStage
}

export const useDkIglooGb = (): LogicBool => {
  const igloo = useCavesIgloo()
  const bongos = useBongos()
  const strong = useStrong()
  return {
    in: igloo && bongos && strong,
    out: igloo && bongos
  }
}

export const useDkRotateGb = (): boolean => {
  const inStage = usePlayCaves()
  const bongos = useBongos()
  const slam = useSlam()
  return inStage && bongos && slam
}

/**
 * Can we race the beetle in Caves for a GB?
 * @returns true if we can race the beetle.
 */
export const useLankyRaceGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const canSlam = useSlamCaves()
  const balloon = useBalloon()
  const highGrab = useHighGrab()
  const sprint = useSprint()
  return {
    in: inStage && canSlam && sprint && balloon,
    out: inStage && canSlam && sprint && highGrab
  }
}

export const useLankyCastleGb = (): boolean => {
  const inStage = usePlayCaves()
  const lanky = useLanky()
  const canSlam = useSlamCaves()
  return inStage && lanky && canSlam
}

export const useLankyIglooGb = (): LogicBool => {
  const igloo = useCavesIgloo()
  const trombone = useTrombone()
  const balloon = useBalloon()
  const highGrab = useHighGrab()
  return {
    in: igloo && trombone && balloon,
    out: igloo && trombone && highGrab
  }
}

export const useLankyCabinGb = (): LogicBool => {
  const cabin = useCavesLankyCabin()
  const sprint = useSprint()
  const balloon = useBalloon()
  const dk = useDk()
  const diddy = useDiddy()
  return {
    in: cabin.in && balloon && sprint,
    out: logicBreak(cabin) && ((balloon && sprint) || dk || diddy)
  }
}

export const useTinyCaveGb = (): boolean => {
  const inStage = usePlayCaves()
  const mini = useMini()
  const warpAll = useBananaportAll()
  return inStage && (mini || warpAll)
}

export const useTinyPortGb = (): LogicBool => {
  const funky = useCavesMiniFunky()
  const port = useMonkeyport()
  return {
    in: funky.in && port,
    out: funky.out && port
  }
}

export const useTinyIglooGb = (): boolean => {
  const igloo = useCavesIgloo()
  const sax = useSax()
  const slam = useSlam()
  return igloo && sax && slam
}

export const useTinyCabinGb = (): LogicBool => {
  const inStage = usePlayCaves()
  const sax = useSax()
  const orange = useOrange()
  const shockwave = useShockwave()
  const feather = useFeather()
  return {
    in: inStage && sax && orange,
    out: inStage && sax && shockwave && feather
  }
}

export const useGeneralThing = (): boolean => {
  const inStage = usePlayCaves()
  return useAnyKong() && inStage
}

export const useGeneralDirt = (): boolean => {
  const inStage = usePlayCaves()
  return useShockwave() && inStage
}

export const useKoshaDirt = (): LogicBool => {
  const igloo = useChunkyClearGb()
  const port = useMonkeyport()
  const shock = useShockwave()
  return {
    in: igloo.in && port && shock,
    out: igloo.out && port && shock
  }
}

export const useGenericFairy = (): boolean => {
  const inStage = usePlayCaves()
  return useCamera() && inStage
}

export const useIglooFairy = (): boolean => {
  const thing = useTinyIglooGb()
  return useCamera() && thing
}

export const useCabinFairy = (): LogicBool => {
  const thing = useDiddyCandleGb()
  const camera = useCamera()
  return {
    in: thing.in && camera,
    out: thing.out && camera
  }
}
