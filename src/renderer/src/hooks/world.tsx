import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { useAnyGun, useAnyKong } from './kongs'
import { Level } from '@renderer/store/common'

/**
 * A type to handle both in-logic and out-of-logic checks in a single function.
 */
type LogicBool = {
  /**
   * Is this check in logic?
   */
  in: boolean
  /**
   * Is this check out of logic?
   */
  out?: boolean
}

/**
 * Is this current check available in any fashion, even if out of logic?
 * @param check The current logical check to analyze.
 * @returns true if this check can be completed with either in-logic or out-of-logic options.
 */
export const logicBreak = (check: LogicBool): boolean => check.in || check.out!

/**
 * Do we have access to the main isle area?
 * @todo: Account for the bananawarp options. Currently only set to Isles Only.
 * @returns true if we can access the upper part of Main Isle.
 */
export const useIslesUpper = (): boolean => {
  const bananawarp = useDonkStore(useShallow((state) => state.bananaportOpen))
  return bananawarp != 0
}

/**
 * Do we have access to the Rocket barrel in Outer Isles?
 * @todo Handle Switchsanity (any instrument)
 * @returns true if we can access the Rocket barrel in Outer Isles.
 */
export const useIslesJetpack = (): boolean => {
  const islesUpper = useIslesUpper()
  const [chunky, barrel, lanky, trombone, key4] = useDonkStore(
    useShallow((state) => [state.chunky, state.barrel, state.lanky, state.trombone, state.key4])
  )
  return islesUpper && key4 && chunky && barrel && lanky && trombone
}

/**
 * Do we have access to the Frantic Factory door?
 * @todo Handle the case where you don't start with isles bananaports.
 * @returns true if we can access the top portion of Krem Isle where the Frantic Factory lobby resides in vanilla.
 */
export const useIslesKremAscent = (): boolean => {
  const [bananaport] = useDonkStore(useShallow((state) => [state.bananaportOpen]))
  return bananaport != 0
}

/**
 * Do we have access to the tip top of Krem Isle?
 *
 * In vanilla, there's a banana fairy, sax pad, and Helm access.
 * @todo Handle Switchsanity (three options: Blast, Balloon, Monkeyport)
 * @returns true if we can head to the tip top of Krem Isle where Helm awaits.
 */
export const useIslesKremTop = (): boolean => {
  const [tiny, port] = useDonkStore(useShallow((state) => [state.tiny, state.port]))
  return tiny && port
}

const usePlayLevel = (level: Level): boolean => {
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
    dive
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
      state.dive
    ])
  )
  const islesUpper = useIslesUpper()
  const islesKremTop = useIslesKremTop()
  const islesKremAscent = useIslesKremAscent()

  if (level1 === level) {
    return true
  }
  if (level2 === level) {
    return islesUpper && key1
  }
  if (level3 === level) {
    return islesKremAscent && key2
  }
  if (level4 === level) {
    return key2 && dive
  }
  if (level5 === level) {
    return key4
  }
  if (level6 === level) {
    return islesUpper && key5
  }
  if (level7 === level) {
    return key5
  }
  if (level8 === level) {
    return islesKremTop && key6 && key7
  }

  return false
}

/**
 * Can we play in Jungle Japes?
 * @returns true if we can play in Jungle Japes.
 */
export const usePlayJapes = (): boolean => usePlayLevel('Japes')
/**
 * Can we play in Angry Aztec?
 * @returns true if we can play in Angry Aztec.
 */
export const usePlayAztec = (): boolean => usePlayLevel('Aztec')
/**
 * Can we play in Frantic Factory?
 * @returns true if we can play in Frantic Factory.
 */
export const usePlayFactory = (): boolean => usePlayLevel('Factory')
/**
 * Can we play in Gloomy Galleon?
 * @returns true if we can play in Gloomy Galleon.
 */
export const usePlayGalleon = (): boolean => usePlayLevel('Galleon')
/**
 * Can we play in Fungi Forest?
 * @returns true if we can play in Fungi Forest.
 */
export const usePlayForest = (): boolean => usePlayLevel('Forest')
/**
 * Can we play in Crystal Caves?
 * @returns true if we can play in Crystal Caves.
 */
export const usePlayCaves = (): boolean => usePlayLevel('Caves')
/**
 * Can we play in Creepy Castle?
 * @returns true if we can play in Creepy Castle.
 */
export const usePlayCastle = (): boolean => usePlayLevel('Castle')
/**
 * Can we play in Hideout Helm?
 * @returns true if we can play in Hideout Helm.
 */
export const usePlayHelm = (): boolean => usePlayLevel('Helm')

const useSlamLevel = (level: Level): boolean => {
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

/**
 * Can we slam down switches in Jungle Japes?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Jungle Japes.
 */
export const useSlamJapes = (): boolean => useSlamLevel('Japes')
/**
 * Can we slam down switches in Angry Aztec?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Angry Aztec.
 */
export const useSlamAztec = (): boolean => useSlamLevel('Aztec')
/**
 * Can we slam down switches in Frantic Factory?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Frantic Factory.
 */
export const useSlamFactory = (): boolean => useSlamLevel('Factory')
/**
 * Can we slam down switches in Gloomy Galleon?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Gloomy Galleon.
 */
export const useSlamGalleon = (): boolean => useSlamLevel('Galleon')
/**
 * Can we slam down switches in Fungi Forest?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Fungi Forest.
 */
export const useSlamForest = (): boolean => useSlamLevel('Forest')
/**
 * Can we slam down switches in Crystal Caves?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Crystal Caves.
 */
export const useSlamCaves = (): boolean => useSlamLevel('Caves')
/**
 * Can we slam down switches in Creepy Castle?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Creepy Castle.
 */
export const useSlamCastle = (): boolean => useSlamLevel('Castle')
/**
 * Can we slam down switches in Hideout Helm?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Hideout Helm.
 */
export const useSlamHelm = (): boolean => useSlamLevel('Helm')

/**
 * Can we access the Rambi cage in Japes?
 * @todo Handle Switchsanity (any gun)
 * @returns true if we can access the Rambi cage in Japes.
 */
export const useJapesRambi = (): boolean => {
  const [dk, coconut] = useDonkStore(useShallow((state) => [state.dk, state.coconut]))
  const canPlay = usePlayJapes()
  return dk && coconut && canPlay
}

/**
 * Can Diddy access the mines?
 *
 * There is no switchsanity here: all checks are Diddy exclusive.
 * @returns true if Diddy can access the mines.
 */
export const useJapesMine = (): boolean => {
  const [diddy, peanut] = useDonkStore(useShallow((state) => [state.diddy, state.peanut]))
  const canPlay = usePlayJapes()
  return diddy && peanut && canPlay
}

/**
 * Can we access the hive area past the tunnel?
 * @todo Handle Switchsanity (any gun)
 * @returns true if we have access to the Hive area past the tunnel.
 */
export const useJapesHive = (): boolean => {
  const [tiny, feather] = useDonkStore(useShallow((state) => [state.tiny, state.feather]))
  const canPlay = usePlayJapes()
  return canPlay && tiny && feather
}

/**
 * Can we get on top of Painting Hill?
 * @returns true if we can get to the top of the hill.
 */
export const useJapesPaintingOutside = (): LogicBool => {
  const inStage = usePlayJapes()
  const [dk, lanky, stand, tiny, twirl, chunky] = useDonkStore(
    useShallow((state) => [
      state.dk,
      state.lanky,
      state.stand,
      state.tiny,
      state.twirl,
      state.chunky
    ])
  )
  return {
    in: inStage && ((lanky && stand) || (tiny && twirl)),
    out: inStage && (dk || tiny || chunky)
  }
}

/**
 * Can we enter the painting room on top of the hill?
 * @todo Handle Switchsanity (any gun)
 * @returns true if we can enter the painting room on top of the hill.
 */
export const useJapesPainting = (): LogicBool => {
  const canPlay = useJapesPaintingOutside()
  const [diddy, peanut] = useDonkStore(useShallow((state) => [state.diddy, state.peanut]))
  return {
    in: canPlay.in && diddy && peanut,
    out: logicBreak(canPlay) && diddy && peanut
  }
}

/**
 * Can we access the underground via the power of Boulder Tech?
 * @returns true if we can access the underground.
 */
export const useJapesUnderground = (): boolean => {
  const [chunky, barrel, slam] = useDonkStore(
    useShallow((state) => [state.chunky, state.barrel, state.slam])
  )
  const inStage = usePlayJapes()
  return inStage && chunky && barrel && slam != 0
}

/**
 * Can we access just the front part of Aztec without taking damage?
 *
 * Fun fact: damage boosts are never required in logic.
 * @returns true if we can actually get checks logically in Aztec to begin with.
 */
export const useAztecFront = (): LogicBool => {
  const aztecPlay = usePlayAztec()
  const [vine, tiny, twirl] = useDonkStore(
    useShallow((state) => [state.vine, state.tiny, state.twirl])
  )
  return {
    in: aztecPlay && (vine || (tiny && twirl)),
    out: aztecPlay
  }
}

/**
 * Can we enter the back of Aztec via the tunnel beside Tiny Temple?
 * @todo Handle Switchsanity (any instrument)
 * @returns true if we can access the tunnel beside Tiny Temple.
 */
export const useAztecBack = (): LogicBool => {
  const aztecFront = useAztecFront()
  const [vine, diddy, guitar, rocket] = useDonkStore(
    useShallow((state) => [state.vine, state.diddy, state.guitar, state.rocket])
  )
  return {
    in: aztecFront.in && diddy && guitar && (vine || rocket),
    out: logicBreak(aztecFront) && diddy && guitar
  }
}

/**
 * Can we enter Tiny Temple?
 *
 * Switchsanity does not apply here: each kong (minus Donkey) has one check within.
 * @returns true if we can enter Tiny Temple.
 */
export const useAztecTinyTemple = (): LogicBool => {
  const aztecFront = useAztecFront()
  const [diddy, peanut, lanky, grape, tiny, feather, chunky, pineapple] = useDonkStore(
    useShallow((state) => [
      state.diddy,
      state.peanut,
      state.lanky,
      state.grape,
      state.tiny,
      state.feather,
      state.chunky,
      state.pineapple
    ])
  )
  const properGun =
    (diddy && peanut) || (lanky && grape) || (tiny && feather) || (chunky && pineapple)
  return {
    in: aztecFront.in && properGun,
    out: logicBreak(aztecFront) && properGun
  }
}

/**
 * Can we enter the Llama temple in Aztec?
 * @todo Handle Switchsanity (one of three guns)
 * @returns true if we can enter the Llama Temple.
 */
export const useAztecLlamaTemple = (): LogicBool => {
  const aztecBack = useAztecBack()
  const [dk, coconut, lanky, grape, tiny, feather] = useDonkStore(
    useShallow((state) => [
      state.dk,
      state.coconut,
      state.lanky,
      state.grape,
      state.tiny,
      state.feather
    ])
  )
  const properGun = (dk && coconut) || (lanky && grape) || (tiny && feather)
  return {
    in: aztecBack.in && properGun,
    out: logicBreak(aztecBack) && properGun
  }
}

/**
 * Can we access the dead end tunnel in Aztec that contains a bonus barrel?
 * @todo Handle Switchsanity (any kong)
 * @returns true if we can access the dead end tunnel in Aztec.
 */
export const useAztecBackTunnel = (): LogicBool => {
  const llama = useAztecLlamaTemple()
  const canSlam = useSlamAztec()
  const [dk] = useDonkStore(useShallow((state) => [state.dk, state.strong]))
  return {
    in: llama.in && dk && canSlam,
    out: logicBreak(llama) && dk && canSlam
  }
}

/**
 * Can we enter the 5 Door Temple?
 * @todo Handle both versions of Fast Checks.
 * @returns true if we can enter the 5 Door Temple.
 */
export const useAztec5DoorTemple = (): LogicBool => {
  const aztecBack = useAztecBack()
  return {
    in: aztecBack.in,
    out: logicBreak(aztecBack)
  }
}

/**
 * Can we access the Testing Area in Factory?
 * @todo Prepare for this barrier being opened at the start in the future.
 * @returns true if we can enter the Testing Area in Factory.
 */
export const useFactoryTesting = (): boolean => {
  const slam = useDonkStore(useShallow((state) => state.slam))
  const inStage = usePlayFactory()
  return slam != 0 && inStage
}

/**
 * Can we climb the Production Room in Factory?
 * @todo Handle the case if fast checks are off (dk & grab)
 * @returns true if we can climb the Production Room in Factory.
 */
export const useFactoryProductionUpper = (): boolean => {
  const inStage = usePlayFactory()
  return inStage
}

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

/**
 * Do we have access to Fungi Forest during the daytime?
 * @todo Account for starting day, dusk, and night. Night remains.
 * @returns true if we do.
 */
export const useForestDay = (): LogicBool => {
  const inStage = usePlayForest()
  const forestDusk = useDonkStore(useShallow((state) => state.forestDusk))
  if (forestDusk) {
    return {
      in: inStage,
      out: inStage
    }
  }
  return {
    in: inStage,
    out: inStage
  }
}

/**
 * Do we have access to Fungi Forest during the nighttime?
 * @todo Account for starting day, dusk, and night. Day remains.
 * @returns true if we do.
 */
export const useForestNight = (): LogicBool => {
  const anyGun = useAnyGun()
  const inStage = usePlayForest()
  const [orange, forestDusk] = useDonkStore(useShallow((state) => [state.orange, state.forestDusk]))
  const anyKong = useAnyKong()
  if (forestDusk) {
    return {
      in: inStage,
      out: inStage
    }
  }
  return {
    in: anyGun && inStage,
    out: anyKong && orange && inStage
  }
}

/**
 * Do we have access to the beanstalk area?
 * @todo Support switch sanity.
 * @returns true if we can access the beanstalk area.
 */
export const useForestBean = (): boolean => {
  const inStage = usePlayForest()
  const [tiny, feather, chunky, pineapple] = useDonkStore(
    useShallow((state) => [state.tiny, state.feather, state.chunky, state.pineapple])
  )
  return inStage && tiny && feather && chunky && pineapple
}

/**
 * Can we access the Owl Tree in Forest?
 * @todo Handle Switchsanity (any gun)
 * @returns true if we can access the Owl Tree in Forest.
 */
export const useForestOwl = (): boolean => {
  const inStage = usePlayForest()
  const [lanky, grape] = useDonkStore(useShallow((state) => [state.lanky, state.grape]))
  return inStage && lanky && grape
}

/**
 * Can we enter the Igloo in Caves?
 * @todo Handle the option for requiring rocketbarrels first.
 * @returns true if we can enter the Igloo in Caves.
 */
export const useCavesIgloo = (): boolean => {
  const inStage = usePlayCaves()
  return inStage
}

/**
 * Can we enter the Tree in Castle?
 * @returns true if we can enter the Tree in Castle.
 */
export const useCastleTree = (): boolean => {
  const inStage = usePlayCastle()
  const [dk, blast] = useDonkStore(useShallow((state) => [state.dk, state.blast]))
  return inStage && dk && blast
}
