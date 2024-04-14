import { usePlayLevel, useSlamLevel } from '../isles'
import {
  useAnyGun,
  useAnyKong,
  useAnyMusic,
  useBalloon,
  useBlast,
  useBoulderTech,
  useCamera,
  useCharge,
  useChunky,
  useCoconut,
  useDiddy,
  useDk,
  useFeather,
  useFtaChunkyBlueprint,
  useFtaDiddyBlueprint,
  useFtaLankyBlueprint,
  useFtaTinyBanana,
  useFtaTinyBlueprint,
  useGone,
  useGrab,
  useGrape,
  useHoming,
  useLanky,
  useMini,
  useMonkeyport,
  usePeanut,
  usePineapple,
  usePunch,
  useRocket,
  useSax,
  useShockwave,
  useSniper,
  useSprint,
  useStrong,
  useTriangle,
  useTrombone,
  useTwirl,
  useVine
} from '../kongs'
import { useHardShooting } from '../settings'
import { LogicBool } from '../world'

/**
 * Can we play in Creepy Castle?
 * @returns true if we can play in Creepy Castle.
 */
export const usePlayCastle = (): boolean => usePlayLevel('Castle')

/**
 * Can we slam down switches in Creepy Castle?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Creepy Castle.
 */
export const useSlamCastle = (): boolean => useSlamLevel('Castle')

/**
 * Can we enter the Tree in Castle?
 * @returns true if we can enter the Tree in Castle.
 */
export const useCastleTree = (): boolean => {
  const inStage = usePlayCastle()
  const blast = useBlast()
  return inStage && blast
}

/**
 * Can the enemies in the shed be defeated?
 * @returns true if the enemies in the shed can be defeated.
 */
export const useChunkyShedGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const punch = usePunch()
  const triangle = useTriangle()
  const gone = useGone()
  const pineapple = usePineapple()
  const anyMusic = useAnyMusic()
  return {
    in: inStage && punch && (triangle || (gone && pineapple)),
    out: inStage && punch && anyMusic
  }
}

export const useChunkyTreeGb = (): LogicBool => {
  const tree = useCastleTree()
  const punch = usePunch()
  const pineapple = usePineapple()
  const sniper = useSniper()
  const hardShooting = useHardShooting()
  return {
    in: tree && punch && pineapple && (sniper || hardShooting),
    out: tree && punch && pineapple
  }
}

export const useChunkyRoomGb = (): boolean => {
  const inStage = usePlayCastle()
  const slam = useSlamCastle()
  const boulder = useBoulderTech()
  const punch = usePunch()
  return inStage && slam && boulder && punch
}

export const useChunkyCryptGb = (): boolean => {
  const inStage = usePlayCastle()
  const pineapple = usePineapple()
  const punch = usePunch()
  return inStage && pineapple && punch
}

export const useDiddyTopGb = (): boolean => {
  const rocket = useRocket()
  return usePlayCastle() && rocket
}

export const useDiddyRoomGb = (): boolean => {
  const topGb = useDiddyTopGb()
  return useSlamCastle() && topGb
}

export const useDiddyCryptGb = (): boolean => {
  const peanut = usePeanut()
  const charge = useCharge()
  return usePlayCastle() && peanut && charge
}

export const useDiddyDungeonGb = (): boolean => {
  const canSlam = useSlamCastle()
  const peanut = usePeanut()
  const sniper = useSniper()
  const vine = useVine()
  return usePlayCastle() && canSlam && peanut && sniper && vine
}

export const useDkTreeGb = (): boolean => {
  const coconut = useCoconut()
  const sniper = useSniper()
  return useCastleTree() && coconut && sniper
}

export const useDkRoomGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const slam = useSlamCastle()
  const dk = useDk()
  const strong = useStrong()
  return {
    in: inStage && slam && strong,
    out: inStage && slam && dk
  }
}

export const useDkCryptGb = (): boolean => {
  const coconut = useCoconut()
  const grab = useGrab()
  return usePlayCastle() && coconut && grab
}

export const useDkDungeonGb = (): boolean => {
  const dk = useDk()
  const slam = useSlamCastle()
  return usePlayCastle() && dk && slam
}

export const useLankyRoomGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const slam = useSlamCastle()
  const grape = useGrape()
  const balloon = useBalloon()
  const sniper = useSniper()
  const homing = useHoming()
  return {
    in: inStage && slam && grape && balloon && sniper,
    out: inStage && slam && grape && balloon && homing
  }
}

export const useLankyGreenhouseGb = (): boolean => {
  const lanky = useLanky()
  const slam = useSlamCastle()
  return usePlayCastle() && lanky && slam
}

export const useLankyMausoleumGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const grape = useGrape()
  const sprint = useSprint()
  const vine = useVine()
  const trombone = useTrombone()
  const dk = useDk()
  const diddy = useDiddy()
  return {
    in: inStage && grape && sprint && vine && trombone,
    out: inStage && grape && (sprint || dk || diddy)
  }
}

export const useLankyDungeonGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const trombone = useTrombone()
  const balloon = useBalloon()
  const twirl = useTwirl()
  return {
    in: inStage && canSlam && trombone && balloon,
    out: inStage && canSlam && trombone && twirl
  }
}

export const useTinyRoomGb = (): boolean => {
  const inStage = usePlayCastle()
  const diddy = useDiddy()
  const canSlam = useSlamCastle()
  const port = useMonkeyport()
  const mini = useMini()
  return inStage && diddy && canSlam && port && mini
}

export const useTinyTrashGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const mini = useMini()
  const sax = useSax()
  const feather = useFeather()
  const homing = useHoming()
  const hardShooting = useHardShooting()
  const anyGun = useAnyGun()
  return {
    in: inStage && mini && (sax || (feather && (homing || hardShooting))),
    out: inStage && mini && anyGun
  }
}

/**
 * Can Tiny get the Mausoleum GB over the acid?
 * @todo There may be other ways of getting this banana.
 * @returns true if we can get the banana.
 */
export const useTinyMausoleumGb = (): LogicBool => {
  const inStage = usePlayCastle()
  const feather = useFeather()
  const canSlam = useSlamCastle()
  const twirl = useTwirl()
  const grape = useGrape()
  const dk = useDk()
  return {
    in: inStage && feather && canSlam && twirl,
    out: useFtaTinyBanana() && inStage && (feather || grape) && canSlam && (dk || twirl)
  }
}

export const useTinyChasmGb = (): boolean => {
  const twirl = useTwirl()
  return usePlayCastle() && twirl
}

export const useGeneralThing = (): boolean => {
  const inStage = usePlayCastle()
  return useAnyKong() && inStage
}

export const useGeneralDirt = (): boolean => {
  const inStage = useGeneralThing()
  return useShockwave() && inStage
}

export const useGeneralFairy = (): boolean => {
  const inStage = useGeneralThing()
  return useCamera() && inStage
}

export const useTreeFairy = (): boolean => {
  const tree = useTreeKasplat()
  const camera = useCamera()
  return tree && camera
}

export const useRoomFairy = (): LogicBool => {
  const slam = useSlamCastle()
  const inStage = usePlayCastle()
  const diddy = useDiddy()
  const port = useMonkeyport()
  const camera = useCamera()
  const chunky = useChunky()
  return {
    in: inStage && slam && camera && diddy && port,
    out: inStage && slam && camera && chunky
  }
}

export const useTreeKasplat = (): boolean => {
  const tree = useCastleTree()
  const coconut = useCoconut()
  return tree && coconut
}

export const useMausoleumKasplat = (): boolean => {
  const inStage = usePlayCastle()
  return useFtaDiddyBlueprint() && inStage
}

export const usePathKasplat = (): boolean => {
  const inStage = usePlayCastle()
  return useFtaLankyBlueprint() && inStage
}

export const useLonelyKasplat = (): boolean => {
  const inStage = usePlayCastle()
  return useFtaTinyBlueprint() && inStage
}

export const useDungeonKasplat = (): boolean => {
  const inStage = usePlayCastle()
  return useFtaChunkyBlueprint() && inStage
}
