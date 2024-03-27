import useDonkStore from '@renderer/store'
import { LogicBool, useSwitchsanityGun, useSwitchsanityMusicPad } from './world'
import { useShallow } from 'zustand/react/shallow'
import { useBoulderTech, useRocket } from './kongs'
import { Level } from '@renderer/store/common'

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
  const [key4, openLobbies] = useDonkStore(useShallow((state) => [state.key4, state.openLobbies]))
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
  const [dk, diddy, rocket, tiny, twirl, chunky] = useDonkStore(
    useShallow((state) => [
      state.dk,
      state.diddy,
      state.rocket,
      state.tiny,
      state.twirl,
      state.chunky
    ])
  )
  return {
    in: fungiIsland && ((tiny && twirl) || (boulderTech && rocketEnabled && diddy && rocket)),
    out: fungiIsland && (dk || chunky || diddy)
  }
}

/**
 * Do we have access to the main isle area?
 * @returns true if we can access the upper part of Main Isle.
 */
export const useIslesUpper = (): LogicBool => {
  const [vine, bananawarp] = useDonkStore(useShallow((state) => [state.vine, state.bananaportOpen]))
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
  const [bananaport, openLobbies, key2] = useDonkStore(
    useShallow((state) => [state.bananaportOpen, state.openLobbies, state.key2])
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
  const [tiny, port, dk, blast, lanky, balloon, isSwitchsanity, switches] = useDonkStore(
    useShallow((state) => [
      state.tiny,
      state.port,
      state.dk,
      state.blast,
      state.lanky,
      state.balloon,
      state.isSwitchsanity,
      state.switchsanitySwitches
    ])
  )
  const target = isSwitchsanity ? switches.islesMonkeyport : 0
  switch (target) {
    case 0:
      return tiny && port
    case 1:
      return dk && blast
    default:
      return lanky && balloon
  }
}

/**
 * Can we activate the vines and turn them visible in the Helm Lobby?
 *
 * Some seed settings will give you a hint on what you need when you approach the pad/apparatus.
 * @returns true if we can activate the vines in the Helm Lobby.
 */
export const useIslesHelmEntry = (): boolean => {
  const [
    dk,
    bongos,
    diddy,
    guitar,
    lanky,
    trombone,
    tiny,
    sax,
    chunky,
    triangle,
    gone,
    grab,
    charge,
    isSwitchsanity,
    switches
  ] = useDonkStore(
    useShallow((state) => [
      state.dk,
      state.bongos,
      state.diddy,
      state.guitar,
      state.lanky,
      state.trombone,
      state.tiny,
      state.sax,
      state.chunky,
      state.triangle,
      state.gone,
      state.grab,
      state.charge,
      state.isSwitchsanity,
      state.switchsanitySwitches
    ])
  )
  const target = isSwitchsanity ? switches.islesHelm : 0
  switch (target) {
    case 0:
      return chunky && gone
    case 1:
      return dk && grab
    case 2:
      return diddy && charge
    case 3:
      return dk && bongos
    case 4:
      return diddy && guitar
    case 5:
      return lanky && trombone
    case 6:
      return tiny && sax
    case 7:
      return chunky && triangle
  }
}

export const usePlayLevel = (level: Level): boolean => {
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
    dive,
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
      state.dive,
      state.openLobbies
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
  const [level1, level2, level3, level4, level5, level6, level7, level8, slam] = useDonkStore(
    useShallow((state) => [
      state.level1,
      state.level2,
      state.level3,
      state.level4,
      state.level5,
      state.level6,
      state.level7,
      state.level8,
      state.slam
    ])
  )

  const predicate = (e: Level): boolean => e === level

  if (!usePlayLevel(level)) {
    return false
  }

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
