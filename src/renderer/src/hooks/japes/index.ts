import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { usePlayLevel, useSlamLevel } from '../isles'
import {
  useAnyGun,
  useAnyKong,
  useAnyMusic,
  useBlast,
  useBoulderTech,
  useCamera,
  useCharge,
  useChunky,
  useCoconut,
  useDiddy,
  useDk,
  useFeather,
  useFtaChunkyBanana,
  useFtaDiddyBanana,
  useFtaDiddyBlueprint,
  useFtaDkBlueprint,
  useFtaLankyBanana,
  useFtaLankyBlueprint,
  useFtaTinyBlueprint,
  useGrape,
  useHighGrab,
  useHunky,
  useLanky,
  useMini,
  useOrange,
  usePeanut,
  usePineapple,
  useSax,
  useShockwave,
  useSlam,
  useStand,
  useTiny,
  useTrombone,
  useTwirl,
  useVine
} from '../kongs'
import { useBananaportAll } from '../settings'
import { LogicBool, logicBreak, useSwitchsanityGun } from '../world'

/**
 * Can we play in Jungle Japes?
 * @returns true if we can play in Jungle Japes.
 */
export const usePlayJapes = (): boolean => usePlayLevel('Japes')

/**
 * Can we slam down switches in Jungle Japes?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Jungle Japes.
 */
export const useSlamJapes = (): boolean => useSlamLevel('Japes')

export const useJapesKongGates = (): boolean => {
  const inStage = usePlayJapes()
  const [barriers, checks] = useDonkStore(
    useShallow((state) => [state.removeBarriers, state.checks])
  )

  return inStage && (checks[1002] || barriers.japesCoconutGates)
}

/**
 * Can we open the Rambi cage with the correct gun?
 * @returns true if we can shoot the switch to use Rambi.
 */
const useJapesRambiSwitch = (): boolean => useSwitchsanityGun('japesRambi', 0)
/**
 * Do we have what we need to enter the side area with three checks?
 * @returns true if we can open the side area.
 */
const useJapesSideSwitch = (): boolean => useSwitchsanityGun('japesSide', 1)
/**
 * What do we need to access the Hive area when using a gun?
 *
 * Note that if all bananaports are active immediately, this check can be bypassed.
 * @returns true if we can access the Hive via gun.
 */
const useJapesHiveSwitch = (): boolean => useSwitchsanityGun('japesHive', 3)
/**
 * What do we need to enter the Painting Room?
 * @returns true if we can enter the Painting Room.
 */
const useJapesPaintingSwitch = (): boolean => useSwitchsanityGun('japesPainting', 1)

/**
 * Can we access the side area at the start of Japes with one free item and two gated bonus stages?
 * @returns true if we can access the side area at the start of Japes.
 */
export const useJapesSideArea = (): boolean => {
  const inStage = usePlayJapes()
  const canAccess = useJapesSideSwitch()
  return inStage && canAccess
}

/**
 * Can we access the Rambi cage in Japes?
 * @returns true if we can access the Rambi cage in Japes.
 */
export const useJapesRambi = (): boolean => {
  const canPlay = useJapesKongGates()
  const rambiSwitch = useJapesRambiSwitch()
  return rambiSwitch && canPlay
}

/**
 * Can Diddy access the mines?
 *
 * There is no switchsanity here: all checks are Diddy exclusive.
 * @returns true if Diddy can access the mines.
 */
export const useJapesMine = (): boolean => {
  const peanut = usePeanut()
  const canPlay = usePlayJapes()
  return peanut && canPlay
}

/**
 * Can we access the hive area past the tunnel?
 * @returns true if we have access to the Hive area past the tunnel.
 */
export const useJapesHive = (): boolean => {
  const hiveSwitch = useJapesHiveSwitch()
  const canPlay = usePlayJapes()
  const coconutGates = useJapesKongGates()
  const japesMine = useJapesMine()
  const warpAll = useBananaportAll()
  const [hiveGateOpen] = useDonkStore(useShallow((state) => [state.removeBarriers.japesHiveGate]))
  return canPlay && ((coconutGates && (hiveGateOpen || hiveSwitch)) || (warpAll && japesMine))
}

/**
 * Can we get on top of Painting Hill?
 * @returns true if we can get to the top of the hill.
 */
export const useJapesPaintingOutside = (): LogicBool => {
  const inStage = usePlayJapes()
  const stand = useStand()
  const twirl = useTwirl()
  const dk = useDk()
  const tiny = useTiny()
  const chunky = useChunky()
  return {
    in: inStage && (stand || twirl),
    out: inStage && (dk || tiny || chunky)
  }
}

/**
 * Can we enter the painting room on top of the hill?
 * @returns true if we can enter the painting room on top of the hill.
 */
export const useJapesPainting = (): LogicBool => {
  const canPlay = useJapesPaintingOutside()
  const paintingSwitch = useJapesPaintingSwitch()
  return {
    in: canPlay.in && paintingSwitch,
    out: logicBreak(canPlay) && paintingSwitch
  }
}

/**
 * Can we access the underground via the power of Boulder Tech?
 * @returns true if we can access the underground.
 */
export const useJapesUnderground = (): boolean => {
  const slam = useSlam()
  const boulderTech = useBoulderTech()
  const inStage = usePlayJapes()
  return inStage && boulderTech && slam
}

export const useChunkyBoulderGb = (): boolean => {
  const inStage = usePlayJapes()
  const boulderTech = useBoulderTech()
  return inStage && boulderTech
}

export const useChunkyCagedGb = (): boolean => {
  const boulderTech = useBoulderTech()
  const canSlam = useSlamJapes()
  const rambi = useJapesRambi()
  return rambi && boulderTech && canSlam
}

export const useChunkyHiveGb = (): boolean => {
  const hive = useJapesHive()
  const hunky = useHunky()
  return hive && hunky
}

export const useChunkyUndergroundGb = (): LogicBool => {
  const under = useJapesUnderground()
  const pineapple = usePineapple()
  const vine = useVine()
  const dk = useDk()
  const twirl = useTwirl()
  const tiny = useTiny()
  const diddy = useDiddy()
  return {
    in: under && pineapple && vine,
    out: useFtaChunkyBanana() && under && (dk || twirl || ((tiny || diddy) && vine))
  }
}

export const useDiddyCagedGb = (): boolean => {
  const rambi = useJapesRambi()
  const diddy = useDiddy()
  const canSlam = useSlamJapes()
  return rambi && diddy && canSlam
}

export const useDiddyMountainGb = (): boolean => {
  const mine = useJapesMine()
  const canSlam = useSlamJapes()
  return useFtaDiddyBanana() && mine && canSlam
}

export const useDiddyTunnelGb = (): boolean => {
  const side = useJapesSideArea()
  return useFtaDiddyBanana() && side
}

export const useDiddyMinecartGb = (): LogicBool => {
  const mine = useJapesMine()
  const canSlam = useSlamJapes()
  const charge = useCharge()
  const highGrab = useHighGrab()
  return {
    in: mine && canSlam && charge,
    out: mine && highGrab
  }
}

/**
 * Can we grab the item in front of the Diddy Kong Cage?
 *
 * This location is likely not restricted to FTA.
 * @returns true if this item can be attained.
 */
export const useDkFreebieGb = (): boolean => {
  const inStage = usePlayJapes()
  const anyKong = useAnyKong()
  return inStage && anyKong
}

const useFreeDiddySwitch = (): boolean => {
  const dk = useCoconut()
  const diddy = usePeanut()
  const lanky = useGrape()
  const tiny = useFeather()
  const chunky = usePineapple()
  const freeDiddy = useDonkStore(useShallow((state) => state.switchsanitySwitches.freeDiddy))
  switch (freeDiddy) {
    case 1:
      return dk
    case 2:
      return diddy
    case 3:
      return lanky
    case 4:
      return tiny
    case 5:
      return chunky
    default:
      return true
  }
}

export const useDkFreeDiddyGb = (): boolean => {
  const inStage = usePlayJapes()
  return useFreeDiddySwitch() && inStage
}

export const useDkCagedGb = (): boolean => {
  const rambi = useJapesRambi()
  const dk = useDk()
  const canSlam = useSlamJapes()
  return rambi && dk && canSlam
}

export const useDkBlastGb = (): boolean => {
  const inStage = usePlayJapes()
  const blast = useBlast()
  const vine = useVine()
  return inStage && blast && vine
}

export const useLankyCagedGb = (): boolean => {
  const rambi = useJapesRambi()
  const lanky = useLanky()
  const canSlam = useSlamJapes()
  return rambi && lanky && canSlam
}

export const useLankyGateGb = (): boolean => {
  const side = useJapesSideArea()
  const grape = useGrape()
  return side && grape
}

export const useLankySlopeGb = (): LogicBool => {
  const tunnel = useJapesKongGates()
  const stand = useStand()
  const anyKong = useAnyKong()
  return {
    in: tunnel && stand,
    out: useFtaLankyBanana() && tunnel && anyKong
  }
}

export const useLankyPaintingGb = (): LogicBool => {
  const painting = useJapesPainting()
  const grape = useGrape()
  const trombone = useTrombone()
  const lanky = useLanky()
  const slam = useSlam()
  const anyGun = useAnyGun()
  const anyMusic = useAnyMusic()
  return {
    in: lanky && slam && painting.in && (grape || trombone),
    out: lanky && slam && logicBreak(painting) && (anyGun || anyMusic)
  }
}

export const useTinyCagedGb = (): boolean => {
  const rambi = useJapesRambi()
  const tiny = useTiny()
  const canSlam = useSlamJapes()
  return rambi && tiny && canSlam
}

export const useTinyGateGb = (): boolean => {
  const side = useJapesSideArea()
  const feather = useFeather()
  return side && feather
}

export const useTinyStumpGb = (): boolean => {
  const hive = useJapesHive()
  const mini = useMini()
  return hive && mini
}

export const useTinyHiveGb = (): LogicBool => {
  const hive = useTinyStumpGb()
  const canSlam = useSlamJapes()
  const sax = useSax()
  const orange = useOrange()
  return {
    in: hive && canSlam && (sax || orange),
    out: hive && canSlam
  }
}

export const useGeneralThing = (): boolean => {
  const anyKong = useAnyKong()
  return usePlayJapes() && anyKong
}

export const useRambiCrate = (): boolean => {
  const anyKong = useAnyKong()
  return useJapesRambi() && anyKong
}

export const usePaintingDirt = (): LogicBool => {
  const japesPaintingOutside = useJapesPaintingOutside()
  const shockwave = useShockwave()
  return {
    in: shockwave && japesPaintingOutside.in,
    out: shockwave && japesPaintingOutside.out
  }
}

export const useGeneralDirt = (): boolean => {
  const shockwave = useShockwave()
  const inStage = usePlayJapes()
  return inStage && shockwave
}

export const useRambiFairy = (): boolean => {
  const camera = useCamera()
  const japesRambi = useJapesRambi()
  return japesRambi && camera
}

export const usePaintingFairy = (): LogicBool => {
  const camera = useCamera()
  const banana = useLankyPaintingGb()
  return {
    in: camera && banana.in,
    out: camera && banana.out
  }
}

export const useGeneralFairy = (): boolean => {
  const camera = useCamera()
  return usePlayJapes() && camera
}

export const useGateKasplat = (): boolean => {
  const kongGates = useJapesKongGates()
  const anyKong = useAnyKong()
  return kongGates && anyKong
}

export const useDkKasplat = (): boolean => {
  const gate = useGateKasplat()
  return useFtaDkBlueprint() && gate
}

export const useDiddyKasplat = (): boolean => {
  const gate = useGateKasplat()
  return useFtaDiddyBlueprint() && gate
}

export const useLankyKasplat = (): boolean => {
  const gate = useGateKasplat()
  return useFtaLankyBlueprint() && gate
}

export const useTinyKasplat = (): boolean => {
  const gate = useGateKasplat()
  return useFtaTinyBlueprint() && gate
}
