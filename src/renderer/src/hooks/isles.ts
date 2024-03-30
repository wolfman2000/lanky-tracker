import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '@renderer/store'
import { Level } from '@renderer/store/common'
import { usePlayAztec } from './aztec'
import { usePlayCastle } from './castle'
import { usePlayCaves } from './caves'
import { useCurrentFairyCount } from './consumables'
import { usePlayFactory } from './factory'
import { usePlayGalleon, useSlamGalleon } from './galleon'
import { usePlayHelm } from './helm'
import { usePlayJapes } from './japes'
import {
  useAnyKong,
  useBalloon,
  useBlast,
  useBongos,
  useBoulderTech,
  useCharge,
  useChunky,
  useCoconut,
  useDiddy,
  useDive,
  useDk,
  useFeather,
  useGone,
  useGrab,
  useGrape,
  useGuitar,
  useHighGrab,
  useHunky,
  useMini,
  useMonkeyport,
  useOrange,
  usePeanut,
  usePineapple,
  usePunch,
  useRocket,
  useSax,
  useSlam,
  useSpring,
  useSprint,
  useStrong,
  useSuperSlam,
  useTiny,
  useTriangle,
  useTrombone,
  useTwirl,
  useVine
} from './kongs'
import { useAutoBonus, useBananaport, useFairyCount, useIsSwitchsanity } from './settings'
import { LogicBool, logicBreak, useSwitchsanityGun, useSwitchsanityMusicPad } from './world'

/**
 * What is needed to turn on the rocket barrel in Isles?
 * @returns the requirements needed to activate the rocket barrel in Isles.
 */
const useIslesRocketSwitch = (): boolean => useSwitchsanityMusicPad('islesTrombone', 2)

/**
 * What is needed to reveal the fairy hiding in the Forest Lobby?
 * @returns the requirements needed to reveal the fairy in the Forest Lobby.
 */
export const useIslesFairySwitch = (): boolean => useSwitchsanityGun('islesForest', 3)

/**
 * Can we reach the outer Fungi island?
 * @returns true if we can reach the outer Fungi island.
 */
export const useIslesFungiIsland = (): boolean => {
  const [key4, openLobbies] = useDonkStore(
    useShallow((state) => [state.key4, state.settings.openLobbies])
  )
  return key4 || openLobbies
}

/**
 * Can we get to the outer Fungi Isle, then get across to the other side?
 * @returns true if we can get from the outer Fungi Isle back to the main isle.
 */
export const useIslesCrossFungi = (): LogicBool => {
  const fungiIsland = useIslesFungiIsland()
  const boulderTech = useBoulderTech()
  const rocketEnabled = useIslesRocketSwitch()
  const twirl = useTwirl()
  const rocket = useRocket()
  const dk = useDk()
  const diddy = useDiddy()
  const chunky = useChunky()
  return {
    in: fungiIsland && (twirl || (boulderTech && rocketEnabled && rocket)),
    out: fungiIsland && (dk || chunky || diddy)
  }
}

/**
 * Do we have access to the main isle area?
 * @returns true if we can access the upper part of Main Isle.
 */
export const useIslesUpper = (): LogicBool => {
  const vine = useVine()
  const bananawarp = useBananaport()
  const crossFungi = useIslesCrossFungi()
  return {
    in: crossFungi.in || vine || bananawarp != 0,
    out: crossFungi.out
  }
}

/**
 * Do we have access to enabling the Rocket barrel in Outer Isles?
 * @returns true if we can enable the Rocket barrel in Outer Isles.
 */
export const useIslesRocket = (): boolean => {
  const islesUpper = useIslesUpper()
  const boulderTech = useBoulderTech()
  const target = useIslesRocketSwitch()
  return islesUpper && boulderTech && target
}

/**
 * Do we have access to the Frantic Factory door?
 * @returns true if we can access the top portion of Krem Isle where the Frantic Factory lobby resides in vanilla.
 */
export const useIslesKremAscent = (): boolean => {
  const canRocket = useIslesRocket()
  const fungiIsland = useIslesFungiIsland()
  const rocket = useRocket()
  const bananaport = useBananaport()
  const [openLobbies, key2] = useDonkStore(
    useShallow((state) => [state.settings.openLobbies, state.key2])
  )
  return openLobbies || key2 || bananaport != 0 || (canRocket && fungiIsland && rocket)
}

/**
 * Do we have access to the tip top of Krem Isle?
 *
 * In vanilla, there's a banana fairy, sax pad, and Helm access.
 * @returns true if we can head to the tip top of Krem Isle where Helm awaits.
 */
export const useIslesKremTop = (): boolean => {
  const port = useMonkeyport()
  const blast = useBlast()
  const balloon = useBalloon()
  const isSwitchsanity = useIsSwitchsanity()
  const [padPort] = useDonkStore(
    useShallow((state) => [state.switchsanitySwitches.islesMonkeyport])
  )
  const target = isSwitchsanity ? padPort : 0
  switch (target) {
    case 0:
      return port
    case 1:
      return blast
    default:
      return balloon
  }
}

/**
 * Can we activate the vines and turn them visible in the Helm Lobby?
 *
 * Some seed settings will give you a hint on what you need when you approach the pad/apparatus.
 * @returns true if we can activate the vines in the Helm Lobby.
 */
export const useIslesHelmEntry = (): boolean => {
  const bongos = useBongos()
  const guitar = useGuitar()
  const trombone = useTrombone()
  const sax = useSax()
  const triangle = useTriangle()
  const charge = useCharge()
  const grab = useGrab()
  const gone = useGone()
  const isSwitchsanity = useIsSwitchsanity()
  const [islesHelm] = useDonkStore(useShallow((state) => [state.switchsanitySwitches.islesHelm]))
  const target = isSwitchsanity ? islesHelm : 0
  switch (target) {
    case 0:
      return gone
    case 1:
      return grab
    case 2:
      return charge
    case 3:
      return bongos
    case 4:
      return guitar
    case 5:
      return trombone
    case 6:
      return sax
    case 7:
      return triangle
  }
}

export const usePlayLevel = (level: Level): boolean => {
  const dive = useDive()
  const [
    level1,
    level2,
    level3,
    level4,
    level5,
    level6,
    level7,
    level8,
    key1,
    key2,
    key4,
    key5,
    key6,
    key7,
    openLobbies
  ] = useDonkStore(
    useShallow((state) => [
      state.level1,
      state.level2,
      state.level3,
      state.level4,
      state.level5,
      state.level6,
      state.level7,
      state.level8,
      state.key1,
      state.key2,
      state.key4,
      state.key5,
      state.key6,
      state.key7,
      state.settings.openLobbies
    ])
  )
  const islesUpper = useIslesUpper()
  const islesKremTop = useIslesKremTop()
  const islesKremAscent = useIslesKremAscent()

  if (level1 === level) {
    return true
  }
  if (level2 === level) {
    return islesUpper && (openLobbies || key1)
  }
  if (level3 === level) {
    return islesKremAscent && (openLobbies || key2)
  }
  if (level4 === level) {
    return (openLobbies || key2) && dive
  }
  if (level5 === level) {
    return openLobbies || key4
  }
  if (level6 === level) {
    return islesUpper && (openLobbies || key5)
  }
  if (level7 === level) {
    return openLobbies || key5
  }
  if (level8 === level) {
    return islesKremTop && (openLobbies || (key6 && key7))
  }

  return false
}

export const useSlamLevel = (level: Level): boolean => {
  const canPlay = usePlayLevel(level)
  const [level1, level2, level3, level4, level5, level6, level7, level8, slam, progressiveSlams] =
    useDonkStore(
      useShallow((state) => [
        state.level1,
        state.level2,
        state.level3,
        state.level4,
        state.level5,
        state.level6,
        state.level7,
        state.level8,
        state.moves.slam,
        state.settings.progressiveSlams
      ])
    )

  if (!canPlay) {
    return false
  }

  if (!progressiveSlams) {
    switch (level) {
      case 'Japes':
      case 'Aztec':
      case 'Factory':
      case 'Galleon':
        return slam != 0
      case 'Isles':
      case 'Forest':
      case 'Caves':
        return slam > 1
      default:
        return slam == 3
    }
  }

  const predicate = (e: Level): boolean => e === level

  if ([level1, level2, level3, level4].some(predicate)) {
    return slam >= 1
  }

  if ([level5, level6].some(predicate)) {
    return slam >= 2
  }

  if ([level7, level8].some(predicate)) {
    return slam == 3
  }

  return false
}

/**
 * Can we control someone to get the first check in the game?
 * @returns true if we can get the first check in the game.
 */
export const useCheckDkJapesRock = (): boolean => useAnyKong()

/**
 * Can we access the cage on Krem Isle and open it with the Coconut Gun?
 * @returns true if we can access the cage.
 */
export const useCheckDkCoconutCage = (): boolean => {
  const coconut = useCoconut()
  const kremAscent = useIslesKremAscent()
  return coconut && kremAscent
}

/**
 * Can we access the Factory Lobby and play the Bongos to release a check?
 * @returns truthy if we can play the Bongos in the Factory Lobby.
 */
export const useCheckDkMusicPad = (): LogicBool => {
  const playFactory = usePlayFactory()
  const bongos = useBongos()
  const grab = useGrab()
  const diddy = useDiddy()
  const tiny = useTiny()
  return {
    in: playFactory && bongos && grab,
    out: playFactory && bongos && (diddy || tiny)
  }
}

/**
 * Can we grab the banana above the boiling lava in Caves Lobby?
 * @returns truthy if we can grab the banana in Caves Lobby.
 */
export const useCheckDkCavesLobby = (): LogicBool => {
  const playCaves = usePlayCaves()
  const punch = usePunch()
  const strong = useStrong()
  const twirl = useTwirl()
  const orange = useOrange()
  return {
    in: playCaves && punch && strong,
    out: playCaves && punch && (twirl || orange)
  }
}

export const useCheckDiddySnide = (): LogicBool => {
  const kremAscent = useIslesKremAscent()
  const spring = useSpring()
  const autoBonus = useAutoBonus()
  const anyKong = useAnyKong()
  const boulderTech = useBoulderTech()
  const highGrab = useHighGrab()
  const twirl = useTwirl()
  return {
    in: kremAscent && ((autoBonus && anyKong) || spring),
    out: kremAscent && ((boulderTech && highGrab) || twirl)
  }
}

export const useCheckDiddyCage = (): LogicBool => {
  const crossFungi = useIslesCrossFungi()
  const peanut = usePeanut()
  return {
    in: crossFungi.in && peanut,
    out: logicBreak(crossFungi) && peanut
  }
}

export const useCheckDiddySummit = (): LogicBool => {
  const crossFungi = useIslesCrossFungi()
  const rocket = useRocket()
  const twirl = useTwirl()
  return {
    in: crossFungi.in && rocket,
    out: logicBreak(crossFungi) && twirl
  }
}

export const useCheckDiddyCaves = (): LogicBool => {
  const playCaves = usePlayCaves()
  const rocket = useRocket()
  const guitar = useGuitar()
  const boulderTech = useBoulderTech()
  const twirl = useTwirl()
  return {
    in: playCaves && rocket && guitar,
    out: playCaves && boulderTech && twirl && guitar
  }
}

export const useCheckLankyCage = (): boolean => useGrape()

export const useCheckLankyPrison = (): LogicBool => {
  const sprint = useSprint()
  const dk = useDk()
  return {
    in: sprint,
    out: dk
  }
}

export const useCheckLankyMusicPad = (): boolean => {
  const playJapes = usePlayJapes()
  const boulderTech = useBoulderTech()
  const trombone = useTrombone()
  return playJapes && boulderTech && trombone
}

export const useCheckLankyCastle = (): LogicBool => {
  const playCastle = usePlayCastle()
  const boulderTech = useBoulderTech()
  const balloon = useBalloon()
  const tiny = useTiny()
  return {
    in: playCastle && boulderTech && balloon,
    out: playCastle && tiny
  }
}

/**
 * Can we open the feather cage on Banana Fairy Island and claim its check?
 * @returns true if we have access to the feather cage check.
 */
export const useCheckTinyFeatherCage = (): boolean => useFeather()

/**
 * Can we get to the top of Krem Isle, then play on the music pad?
 * @returns true if we can play the music pad on the top of Krem Isle.
 */
export const useCheckTinyMusicPad = (): boolean => {
  const kremTop = useIslesKremTop()
  const sax = useSax()
  return kremTop && sax
}

/**
 * Can we bang the gongs in Aztec Lobby for Tiny to get a check?
 * @returns truthy if we can get the item in Aztec Lobby.
 */
export const useCheckTinyAztecLobby = (): LogicBool => {
  const playAztec = usePlayAztec()
  const twirl = useTwirl()
  const charge = useCharge()
  return {
    in: playAztec && charge && twirl,
    out: playAztec && charge
  }
}

const useGalleonLobbySlam = (): boolean => {
  const progSlam = useSlamGalleon()
  const normSlam = useSuperSlam()
  const progressiveSlams = useDonkStore(useShallow((state) => state.settings.progressiveSlams))
  return progressiveSlams ? progSlam : normSlam
}

/**
 * Can we slam a switch to open a mini tunnel, then sneak in with Tiny?
 * @returns truthy if we can access the hidden tunnel in Galleon Lobby.
 */
export const useCheckTinyGalleonLobby = (): LogicBool => {
  const playGalleon = usePlayGalleon()
  const slam = useGalleonLobbySlam()
  const chunky = useChunky()
  const twirl = useTwirl()
  const mini = useMini()
  const dive = useDive()
  return {
    in: playGalleon && slam && chunky && dive && mini && twirl,
    out: playGalleon && slam && chunky && dive && mini
  }
}

/**
 * Can we access the Banana Fairy Island (BFI) check?
 * @returns true if we can access the BFI check.
 */
export const useCheckBananaFairyIsle = (): boolean => {
  const fairies = useCurrentFairyCount()
  const fairyCount = useFairyCount()
  const mini = useMini()
  return fairies >= fairyCount && mini
}

export const useCheckChunkyCage = (): boolean => usePineapple()

export const useCheckChunkyMusicPad = (): boolean => {
  const upper = useIslesUpper()
  const boulderTech = useBoulderTech()
  const triangle = useTriangle()
  return upper && boulderTech && triangle
}

export const useCheckChunkyPound = (): boolean => {
  const tinySax = useCheckTinyMusicPad()
  const hunky = useHunky()
  const slam = useSlam()
  return tinySax && hunky && slam
}

export const useCheckChunkyHelm = (): LogicBool => {
  const playHelm = usePlayHelm()
  const helmEntry = useIslesHelmEntry()
  const vine = useVine()
  const twirl = useTwirl()
  return {
    in: playHelm && helmEntry && vine,
    out: playHelm && helmEntry && twirl
  }
}
