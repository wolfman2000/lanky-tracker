import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

/**
 * Can we use Donkey?
 * @returns true if we can use Donkey.
 */
export const useDk = (): boolean => {
  const kong = useDonkStore(useShallow((state) => state.moves.dk))
  return kong
}

/**
 * Can we use Diddy?
 * @returns true if we can use Diddy.
 */
export const useDiddy = (): boolean => {
  const kong = useDonkStore(useShallow((state) => state.moves.diddy))
  return kong
}

/**
 * Can we use Lanky?
 * @returns true if we can use Lanky.
 */
export const useLanky = (): boolean => {
  const kong = useDonkStore(useShallow((state) => state.moves.lanky))
  return kong
}

/**
 * Can we use Tiny?
 * @returns true if we can use Tiny.
 */
export const useTiny = (): boolean => {
  const kong = useDonkStore(useShallow((state) => state.moves.tiny))
  return kong
}

/**
 * Can we use Chunky?
 * @returns true if we can use Chunky.
 */
export const useChunky = (): boolean => {
  const kong = useDonkStore(useShallow((state) => state.moves.chunky))
  return kong
}

/**
 * Can any Kong be used?
 * @returns true if any Kong can be used.
 */
export const useAnyKong = (): boolean => {
  const dk = useDk()
  const diddy = useDiddy()
  const lanky = useLanky()
  const tiny = useTiny()
  const chunky = useChunky()
  return dk || diddy || lanky || tiny || chunky
}

/**
 * Can you grab higher ledges than the game expects via using Tag Anywhere?
 *
 * This assumes that Tag Anywhere is enabled. For 99% of randomizer seeds, it should be.
 * @returns true if you can grab higher ledges than expected.
 */
export const useHighGrab = (): boolean => {
  const diddy = useDiddy()
  const lanky = useLanky()
  const tiny = useTiny()
  const chunky = useChunky()
  return (diddy || tiny) && (lanky || chunky)
}

export const useCoconut = (): boolean => {
  const kong = useDk()
  const gun = useDonkStore((state) => state.moves.coconut)
  return kong && gun
}

export const usePeanut = (): boolean => {
  const kong = useDiddy()
  const gun = useDonkStore((state) => state.moves.peanut)
  return kong && gun
}

export const useGrape = (): boolean => {
  const kong = useLanky()
  const gun = useDonkStore((state) => state.moves.grape)
  return kong && gun
}

export const useFeather = (): boolean => {
  const kong = useTiny()
  const gun = useDonkStore((state) => state.moves.feather)
  return kong && gun
}

export const usePineapple = (): boolean => {
  const kong = useChunky()
  const gun = useDonkStore((state) => state.moves.pineapple)
  return kong && gun
}

export const useAnyGun = (): boolean => {
  const dk = useCoconut()
  const diddy = usePeanut()
  const lanky = useGrape()
  const tiny = useFeather()
  const chunky = usePineapple()
  return dk || diddy || lanky || tiny || chunky
}

export const useAllGun = (): boolean => {
  const dk = useCoconut()
  const diddy = usePeanut()
  const lanky = useGrape()
  const tiny = useFeather()
  const chunky = usePineapple()
  return dk && diddy && lanky && tiny && chunky
}

export const useBongos = (): boolean => {
  const kong = useDk()
  const music = useDonkStore((state) => state.moves.bongos)
  return kong && music
}

export const useGuitar = (): boolean => {
  const kong = useDiddy()
  const music = useDonkStore((state) => state.moves.guitar)
  return kong && music
}

export const useTrombone = (): boolean => {
  const kong = useLanky()
  const music = useDonkStore((state) => state.moves.trombone)
  return kong && music
}

export const useSax = (): boolean => {
  const kong = useTiny()
  const music = useDonkStore((state) => state.moves.sax)
  return kong && music
}

export const useTriangle = (): boolean => {
  const kong = useChunky()
  const music = useDonkStore((state) => state.moves.triangle)
  return kong && music
}

export const useAnyMusic = (): boolean => {
  const dk = useBongos()
  const diddy = useGuitar()
  const lanky = useTrombone()
  const tiny = useSax()
  const chunky = useTriangle()
  return dk || diddy || lanky || tiny || chunky
}

export const useGrab = (): boolean => {
  const kong = useDk()
  const move = useDonkStore((state) => state.moves.grab)
  return kong && move
}

export const useCharge = (): boolean => {
  const kong = useDiddy()
  const move = useDonkStore((state) => state.moves.charge)
  return kong && move
}

export const useStand = (): boolean => {
  const kong = useLanky()
  const move = useDonkStore((state) => state.moves.stand)
  return kong && move
}

export const useTwirl = (): boolean => {
  const kong = useTiny()
  const move = useDonkStore((state) => state.moves.twirl)
  return kong && move
}

export const usePunch = (): boolean => {
  const kong = useChunky()
  const move = useDonkStore((state) => state.moves.punch)
  return kong && move
}

export const useStrong = (): boolean => {
  const kong = useDk()
  const barrel = useDonkStore(useShallow((state) => state.moves.strong))
  return kong && barrel
}

export const useRocket = (): boolean => {
  const kong = useDiddy()
  const barrel = useDonkStore(useShallow((state) => state.moves.rocket))
  return kong && barrel
}

export const useSprint = (): boolean => {
  const kong = useLanky()
  const barrel = useDonkStore((state) => state.moves.sprint)
  return kong && barrel
}

export const useMini = (): boolean => {
  const kong = useTiny()
  const barrel = useDonkStore((state) => state.moves.mini)
  return kong && barrel
}

export const useHunky = (): boolean => {
  const kong = useChunky()
  const barrel = useDonkStore((state) => state.moves.hunky)
  return kong && barrel
}

export const useBlast = (): boolean => {
  const kong = useDk()
  const pad = useDonkStore((state) => state.moves.blast)
  return kong && pad
}

export const useSpring = (): boolean => {
  const kong = useDiddy()
  const pad = useDonkStore((state) => state.moves.spring)
  return kong && pad
}

export const useBalloon = (): boolean => {
  const kong = useLanky()
  const pad = useDonkStore((state) => state.moves.balloon)
  return kong && pad
}

export const useMonkeyport = (): boolean => {
  const kong = useTiny()
  const pad = useDonkStore((state) => state.moves.port)
  return kong && pad
}

export const useGone = (): boolean => {
  const kong = useChunky()
  const pad = useDonkStore((state) => state.moves.gone)
  return kong && pad
}

// Global moves
export const useSlam = (): boolean => {
  const slam = useDonkStore((state) => state.moves.slam)
  return slam != 0
}

export const useSuperSlam = (): boolean => {
  const slam = useDonkStore((state) => state.moves.slam)
  return slam > 1
}

export const useSuperDuperSlam = (): boolean => {
  const slam = useDonkStore((state) => state.moves.slam)
  return slam > 2
}

export const useVine = (): boolean => {
  const move = useDonkStore((state) => state.moves.vine)
  return move
}

export const useDive = (): boolean => {
  const move = useDonkStore((state) => state.moves.dive)
  return move
}

export const useOrange = (): boolean => {
  const move = useDonkStore((state) => state.moves.orange)
  return move
}

export const useBarrel = (): boolean => {
  const move = useDonkStore((state) => state.moves.barrel)
  return move
}

/**
 * Determine if Chunky can grab boulders for some fancy tech.
 *
 * This is a surprisingly common situation.
 * @returns true if Chunky can use boulders.
 */
export const useBoulderTech = (): boolean => {
  const chunky = useChunky()
  const barrel = useBarrel()
  return chunky && barrel
}

export const useSniper = (): boolean => {
  const move = useDonkStore((state) => state.moves.sniper)
  return move
}

export const useHoming = (): boolean => {
  const move = useDonkStore((state) => state.moves.homing)
  return move
}

export const useCamera = (): boolean => {
  const anyKong = useAnyKong()
  const move = useDonkStore((state) => state.moves.camera)
  return anyKong && move
}

export const useShockwave = (): boolean => {
  const anyKong = useAnyKong()
  const move = useDonkStore((state) => state.moves.shockwave)
  return anyKong && move
}
