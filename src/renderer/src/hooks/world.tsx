import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { useAnyGun, useAnyKong } from './kongs'
import { Level } from '@renderer/store/common'

type LogicBool = {
  in: boolean
  out?: boolean
}

export const useIslesUpper = (): boolean => {
  // TODO: Allow for no instant banana warp option.
  return true
}

export const useIslesJetpack = (): boolean => {
  // TODO: Switchsanity
  const islesUpper = useIslesUpper()
  const [chunky, barrel, lanky, trombone, key4] = useDonkStore(
    useShallow((state) => [state.chunky, state.barrel, state.lanky, state.trombone, state.key4])
  )
  return islesUpper && key4 && chunky && barrel && lanky && trombone
}

export const useIslesKremAscent = (): boolean => {
  // TODO: Allow for no instant banana warp option.
  return true
}

export const useIslesKremTop = (): boolean => {
  // TODO: Allow switchsanity options.
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

export const useSlamJapes = (): boolean => useSlamLevel('Japes')
export const useSlamAztec = (): boolean => useSlamLevel('Aztec')
export const useSlamFactory = (): boolean => useSlamLevel('Factory')
export const useSlamGalleon = (): boolean => useSlamLevel('Galleon')
export const useSlamForest = (): boolean => useSlamLevel('Forest')
export const useSlamCaves = (): boolean => useSlamLevel('Caves')
export const useSlamCastle = (): boolean => useSlamLevel('Castle')
export const useSlamHelm = (): boolean => useSlamLevel('Helm')

export const useJapesRambi = (): boolean => {
  // TODO: Switchsanity can change this kong.
  const [dk, coconut] = useDonkStore(useShallow((state) => [state.dk, state.coconut]))
  const canPlay = usePlayJapes()
  return dk && coconut && canPlay
}

export const useJapesMine = (): boolean => {
  const [diddy, peanut] = useDonkStore(useShallow((state) => [state.diddy, state.peanut]))
  const canPlay = usePlayJapes()
  return diddy && peanut && canPlay
}

export const useJapesHive = (): boolean => {
  // TODO: Switchsanity and bananaport chaos.
  const [tiny, feather] = useDonkStore(useShallow((state) => [state.tiny, state.feather]))
  const canPlay = usePlayJapes()
  return canPlay && tiny && feather
}

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

export const useJapesPainting = (): LogicBool => {
  // TODO: Switchsanity
  const canPlay = useJapesPaintingOutside()
  const [diddy, peanut] = useDonkStore(useShallow((state) => [state.diddy, state.peanut]))
  return {
    in: canPlay.in && diddy && peanut,
    out: canPlay.out && diddy && peanut
  }
}

export const useJapesUnderground = (): boolean => {
  const [chunky, barrel, slam] = useDonkStore(
    useShallow((state) => [state.chunky, state.barrel, state.slam])
  )
  const inStage = usePlayJapes()
  return inStage && chunky && barrel && slam != 0
}

export const useAztecFront = (): LogicBool => {
  const aztecPlay = usePlayAztec()
  const [vine, tiny, twirl] = useDonkStore(
    useShallow((state) => [state.vine, state.tiny, state.twirl])
  )
  return {
    in: aztecPlay && (vine || (tiny && twirl)),
    out: aztecPlay // Damage boosting isn't expected in logic.
  }
}

export const useAztecBack = (): LogicBool => {
  // TODO: Account for switchsanity.
  const aztecFront = useAztecFront()
  const [vine, diddy, guitar, rocket] = useDonkStore(
    useShallow((state) => [state.vine, state.diddy, state.guitar, state.rocket])
  )
  return {
    in: aztecFront.in && diddy && guitar && (vine || rocket),
    out: aztecFront.out && diddy && guitar
  }
}

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
    out: aztecFront.out && properGun
  }
}

export const useAztecLlamaTemple = (): LogicBool => {
  // TODO: Watch for Switchsanity: any three.
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
    out: aztecBack.out && properGun
  }
}

export const useAztecBackTunnel = (): LogicBool => {
  // TODO: Switchsanity here.
  const llama = useAztecLlamaTemple()
  const canSlam = useSlamAztec()
  const [dk] = useDonkStore(useShallow((state) => [state.dk, state.strong]))
  return {
    in: llama.in && dk && canSlam,
    out: llama.out && dk && canSlam
  }
}

export const useAztec5DoorTemple = (): LogicBool => {
  // TODO: Account for toggling the fast option.
  const aztecBack = useAztecBack()
  return {
    in: aztecBack.in,
    out: aztecBack.out
  }
}

export const useFactoryTesting = (): boolean => {
  // TODO: Account for eventual fast toggle option.
  const slam = useDonkStore(useShallow((state) => state.slam))
  const inStage = usePlayFactory()
  return slam != 0 && inStage
}

export const useFactoryProductionUpper = (): boolean => {
  // TODO: Account for requiring grab for slow days.
  const inStage = usePlayFactory()
  return inStage
}

export const useGalleonLighthouse = (): boolean => {
  // TODO: Switchsanity
  const [dk, coconut] = useDonkStore((state) => [state.dk, state.coconut])
  const inStage = usePlayGalleon()
  return inStage && dk && coconut
}

export const useGalleonHighTide = (): boolean => {
  // TODO: Account for starting tide options.
  const lighthouse = useGalleonLighthouse()
  const dive = useDonkStore(useShallow((state) => state.dive))
  return lighthouse && dive
}

export const useGalleonLowTide = (): boolean => {
  // TODO: Account for starting tide options.
  const dive = useDonkStore(useShallow((state) => state.dive))
  const inStage = usePlayGalleon()
  return dive && inStage
}

export const useGalleonCannon = (): boolean => {
  // TODO: Pineapple switch is subject to switchsanity.
  const canPlay = usePlayGalleon()
  const [chunky, pineapple] = useDonkStore(useShallow((state) => [state.chunky, state.pineapple]))
  return canPlay && chunky && pineapple
}

export const useGalleonOutskirts = (): boolean => {
  // TODO: Switchsanity and faster/open checks. Normally peanut.
  const inStage = usePlayGalleon()
  return inStage
}

export const useGalleonTreasureRoom = (): LogicBool => {
  // TODO: Is there an option for any kong to Enguarde? Unsure.
  const outskirts = useGalleonOutskirts()
  const highTide = useGalleonHighTide()
  const [lanky, dive] = useDonkStore(useShallow((state) => [state.lanky, state.dive]))
  return {
    in: outskirts && lanky && dive && highTide,
    out: outskirts && lanky && dive
  }
}

export const useForestDay = (): LogicBool => {
  // TODO: account for day, dusk, night starting
  const inStage = usePlayForest()
  return {
    in: inStage,
    out: inStage
  }
}

export const useForestNight = (): LogicBool => {
  // TODO: account for day, dusk, night starting
  const anyGun = useAnyGun()
  const inStage = usePlayForest()
  const orange = useDonkStore(useShallow((state) => state.orange))
  const anyKong = useAnyKong()
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

export const useForestOwl = (): boolean => {
  // TODO: Switchsanity
  const inStage = usePlayForest()
  const [lanky, grape] = useDonkStore(useShallow((state) => [state.lanky, state.grape]))
  return inStage && lanky && grape
}

export const useCavesIgloo = (): boolean => {
  // TODO: Allow long option requiring rockets first.
  const inStage = usePlayCaves()
  return inStage
}

export const useCastleTree = (): boolean => {
  const inStage = usePlayCastle()
  const [dk, blast] = useDonkStore(useShallow((state) => [state.dk, state.blast]))
  return inStage && dk && blast
}
