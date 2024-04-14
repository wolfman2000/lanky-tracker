import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { useFastArcade } from '../fast-checks'
import { usePlayLevel, useSlamLevel } from '../isles'
import {
  useAnyKong,
  useBalloon,
  useBlast,
  useCamera,
  useCharge,
  useChunky,
  useCoconut,
  useDiddy,
  useDk,
  useFeather,
  useFtaChunkyBlueprint,
  useFtaDiddyBanana,
  useFtaDiddyBlueprint,
  useFtaDkBanana,
  useFtaDkBlueprint,
  useFtaLankyBanana,
  useFtaLankyBlueprint,
  useFtaTinyBanana,
  useFtaTinyBlueprint,
  useGrab,
  useGuitar,
  useHighGrab,
  useHunky,
  useLanky,
  useMini,
  usePunch,
  useShockwave,
  useSlam,
  useSpring,
  useStand,
  useStrong,
  useTiny,
  useTriangle,
  useTrombone,
  useTwirl,
  useVine
} from '../kongs'
import { useAutoBonus, useBananaportAll } from '../settings'
import { LogicBool, logicBreak } from '../world'

/**
 * Can we play in Frantic Factory?
 * @returns true if we can play in Frantic Factory.
 */
export const usePlayFactory = (): boolean => usePlayLevel('Factory')

/**
 * Can we slam down switches in Frantic Factory?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Frantic Factory.
 */
export const useSlamFactory = (): boolean => useSlamLevel('Factory')

/**
 * Can we access the Testing Area in Factory?
 * @returns true if we can enter the Testing Area in Factory.
 */
export const useFactoryTesting = (): boolean => {
  const inStage = usePlayFactory()
  const slam = useSlam()
  const [removeBarriers] = useDonkStore(useShallow((state) => [state.removeBarriers]))
  return inStage && (removeBarriers.factoryTesting || slam)
}

/**
 * Can we get on the top platform where the power hut resides in Factory?
 * @returns true if we can get on the platform with the power hut.
 */
export const useFactoryHut = (): LogicBool => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const diddy = useDiddy()
  const tiny = useTiny()
  return {
    in: testing,
    out: inStage && (diddy || tiny)
  }
}

/**
 * Is the Production Room turned on in Factory?
 * @returns true if the Production Room is on.
 */
export const useFactoryProductionEnabled = (): boolean => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const coconut = useCoconut()
  const grab = useGrab()
  const [removeBarriers] = useDonkStore(useShallow((state) => [state.removeBarriers]))
  return inStage && (removeBarriers.factoryProduction || (coconut && grab && testing))
}

/**
 * Can we reach the upper warp pad in the Production Room in Factory?
 * @returns true if we can reach the upper warp pad in the Production Room.
 */
export const useFactoryProductionTop = (): boolean => {
  const inStage = usePlayFactory()
  const factoryOn = useFactoryProductionEnabled()
  const warpAll = useBananaportAll()
  return factoryOn || (inStage && warpAll)
}

export const useChunkyKaijuGb = (): boolean => {
  const testing = useFactoryTesting()
  const punch = usePunch()
  const triangle = useTriangle()
  const hunky = useHunky()
  return testing && punch && triangle && hunky
}

export const useChunkyArcadeGb = (): boolean => {
  const inStage = usePlayFactory()
  const punch = usePunch()
  return inStage && punch
}

export const useChunkyDarkGb = (): boolean => {
  const arcade = useChunkyArcadeGb()
  const canSlam = useSlamFactory()
  return arcade && canSlam
}

export const useChunkyProductionGb = (): boolean => {
  const production = useFactoryProductionEnabled()
  const chunky = useChunky()
  const canSlam = useSlamFactory()
  return production && chunky && canSlam
}

export const useDiddyBlockGb = (): LogicBool => {
  const testing = useFactoryTesting()
  const spring = useSpring()
  const highGrab = useHighGrab()
  return {
    in: testing && spring,
    out: useFtaDiddyBanana() && testing && highGrab
  }
}

export const useDiddyEnemyGb = (): boolean => {
  const testing = useFactoryTesting()
  const guitar = useGuitar()
  const charge = useCharge()
  return testing && guitar && charge
}

export const useDiddyStorageGb = (): LogicBool => {
  const hut = useFactoryHut()
  const canSlam = useSlamFactory()
  const diddy = useDiddy()
  const autoBonus = useAutoBonus()
  const vine = useVine()
  const dk = useDk()
  const chunky = useChunky()
  return {
    in: hut.in && canSlam && diddy && (autoBonus || vine),
    out: logicBreak(hut) && canSlam && diddy && (autoBonus || vine || dk || chunky)
  }
}

export const useDiddyProductionGb = (): LogicBool => {
  const production = useFactoryProductionEnabled()
  const canSlam = useSlamFactory()
  const diddy = useDiddy()
  const spring = useSpring()
  const twirl = useTwirl()
  const highGrab = useHighGrab()
  return {
    in: production && canSlam && diddy && spring,
    out: production && canSlam && diddy && (twirl || highGrab)
  }
}

export const useDkNumberGb = (): boolean => {
  const testing = useFactoryTesting()
  const dk = useDk()
  const canSlam = useSlamFactory()
  return testing && dk && canSlam
}

export const useDkHutGb = (): LogicBool => {
  const hut = useFactoryHut()
  const coconut = useCoconut()
  const grab = useGrab()
  const productionPower = useDonkStore(
    useShallow((state) => state.removeBarriers.factoryProduction)
  )
  return {
    in: hut.in && coconut && (productionPower || grab),
    out: hut.out && coconut && (productionPower || grab)
  }
}

/**
 * Can we go through the blast course and either get the banana immediately, or play DK Arcade later?
 *
 * This is one of the few things Fast Checks can affect.
 * @returns true if we can access the Blast associated GB.
 */
export const useDkBlastGb = (): boolean => {
  const inStage = usePlayFactory()
  const blast = useBlast()
  const fastArcade = useFastArcade()
  const grab = useGrab()
  return inStage && blast && (fastArcade || grab)
}

export const useDkCoin = (): boolean => {
  const blast = useDkBlastGb()
  const grab = useGrab()
  return blast && grab
}

export const useDkProdGb = (): LogicBool => {
  const production = useFactoryProductionEnabled()
  const strong = useStrong()
  const dk = useDk()
  const diddy = useDiddy()
  return {
    in: production && strong,
    out: useFtaDkBanana() && production && (dk || diddy)
  }
}

export const useLankyTestingGb = (): LogicBool => {
  const testing = useFactoryTesting()
  const balloon = useBalloon()
  const anyKong = useAnyKong()
  return {
    in: testing && balloon,
    out: useFtaLankyBanana() && testing && anyKong
  }
}

export const useLankyPianoGb = (): boolean => {
  const testing = useFactoryTesting()
  const canSlam = useSlamFactory()
  const trombone = useTrombone()
  return testing && canSlam && trombone
}

const useFreeChunkySwitch = (): boolean => {
  const slam = useSlamFactory()
  const dk = useDk()
  const diddy = useDiddy()
  const lanky = useLanky()
  const tiny = useTiny()
  const chunky = useChunky()
  const freeChunky = useDonkStore(useShallow((state) => state.switchsanitySwitches.freeChunky))
  switch (freeChunky) {
    case 1:
      return dk && slam
    case 2:
      return diddy && slam
    case 3:
      return lanky && slam
    case 4:
      return tiny && slam
    case 5:
      return chunky && slam
    default:
      return true
  }
}

export const useLankyFreeChunkyGb = (): boolean => {
  const inStage = usePlayFactory()
  return useFreeChunkySwitch() && inStage
}

export const useLankyProductionGb = (): LogicBool => {
  const production = useFactoryProductionEnabled()
  const canSlam = useSlamFactory()
  const stand = useStand()
  const tiny = useTiny()
  return {
    in: production && canSlam && stand,
    out: useFtaLankyBanana() && production && (stand || tiny)
  }
}

export const useTinyRaceGb = (): boolean => {
  const testing = useFactoryTesting()
  const mini = useMini()
  return testing && mini
}

export const useTinyDartGb = (): boolean => {
  const car = useTinyRaceGb()
  const feather = useFeather()
  const canSlam = useSlamFactory()
  return car && feather && canSlam
}

export const useTinyArcadeGb = (): boolean => {
  const inStage = usePlayFactory()
  const mini = useMini()
  return inStage && mini
}

export const useTinyProductionGb = (): LogicBool => {
  const production = useFactoryProductionEnabled()
  const canSlam = useSlamFactory()
  const twirl = useTwirl()
  const dk = useDk()
  return {
    in: production && canSlam && twirl,
    out: useFtaTinyBanana() && production && (twirl || dk)
  }
}

export const useGeneralThing = (): boolean => {
  const inStage = usePlayFactory()
  const anyKong = useAnyKong()
  return inStage && anyKong
}

export const useArena = (): boolean => {
  const inStage = useFactoryTesting()
  const grab = useGrab()
  return inStage && grab
}

export const useGeneralTest = (): boolean => {
  const inStage = useFactoryTesting()
  const anyKong = useAnyKong()
  return inStage && anyKong
}

export const useGeneralDirt = (): boolean => {
  const thing = useGeneralThing()
  const dirt = useShockwave()
  return thing && dirt
}

export const useFactoryDirt = (): boolean => {
  const inStage = usePlayFactory()
  const shockwave = useShockwave()
  const punch = usePunch()
  return inStage && punch && shockwave
}

export const useGeneralFairy = (): boolean => {
  const thing = useGeneralThing()
  const camera = useCamera()
  return thing && camera
}

export const useNumberFairy = (): boolean => {
  const testing = useFactoryTesting()
  const camera = useCamera()
  return testing && camera
}

export const useDartFairy = (): boolean => {
  const banana = useTinyDartGb()
  const camera = useCamera()
  return banana && camera
}

export const useProductionTopKasplat = (): boolean => {
  const production = useFactoryProductionTop()
  return useFtaDkBlueprint() && production
}

export const useProductionBaseKasplat = (): boolean => {
  const inStage = usePlayFactory()
  return useFtaDiddyBlueprint() && inStage
}

export const useResearchKasplat = (): boolean => {
  const inStage = usePlayFactory()
  return useFtaLankyBlueprint() && inStage
}

export const useStorageKasplat = (): boolean => {
  const inStage = usePlayFactory()
  return useFtaTinyBlueprint() && inStage
}

export const useBlockKasplat = (): boolean => {
  const inStage = usePlayFactory()
  return useFtaChunkyBlueprint() && inStage
}
