import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

/**
 * Can we use Donkey?
 * @returns true if we can use Donkey.
 */
export const useDk = (): boolean => {
  const kong = useDonkStore(useShallow((state) => state.dk))
  return kong
}

/**
 * Can we use Diddy?
 * @returns true if we can use Diddy.
 */
export const useDiddy = (): boolean => {
  const kong = useDonkStore(useShallow((state) => state.diddy))
  return kong
}

/**
 * Can we use Lanky?
 * @returns true if we can use Lanky.
 */
export const useLanky = (): boolean => {
  const kong = useDonkStore(useShallow((state) => state.lanky))
  return kong
}

/**
 * Can we use Tiny?
 * @returns true if we can use Tiny.
 */
export const useTiny = (): boolean => {
  const kong = useDonkStore(useShallow((state) => state.tiny))
  return kong
}

/**
 * Can we use Chunky?
 * @returns true if we can use Chunky.
 */
export const useChunky = (): boolean => {
  const kong = useDonkStore(useShallow((state) => state.chunky))
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

export const useCoconut = (): boolean => {
  const kong = useDk()
  const gun = useDonkStore((state) => state.coconut)
  return kong && gun
}

export const usePeanut = (): boolean => {
  const kong = useDiddy()
  const gun = useDonkStore((state) => state.peanut)
  return kong && gun
}

export const useGrape = (): boolean => {
  const kong = useLanky()
  const gun = useDonkStore((state) => state.grape)
  return kong && gun
}

export const useFeather = (): boolean => {
  const kong = useTiny()
  const gun = useDonkStore((state) => state.feather)
  return kong && gun
}

export const usePineapple = (): boolean => {
  const kong = useChunky()
  const gun = useDonkStore((state) => state.pineapple)
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
  const music = useDonkStore((state) => state.bongos)
  return kong && music
}

export const useGuitar = (): boolean => {
  const kong = useDiddy()
  const music = useDonkStore((state) => state.guitar)
  return kong && music
}

export const useTrombone = (): boolean => {
  const kong = useLanky()
  const music = useDonkStore((state) => state.trombone)
  return kong && music
}

export const useSax = (): boolean => {
  const kong = useTiny()
  const music = useDonkStore((state) => state.sax)
  return kong && music
}

export const useTriangle = (): boolean => {
  const kong = useChunky()
  const music = useDonkStore((state) => state.triangle)
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
  const move = useDonkStore((state) => state.grab)
  return kong && move
}

export const useCharge = (): boolean => {
  const kong = useDiddy()
  const move = useDonkStore((state) => state.charge)
  return kong && move
}

export const useStand = (): boolean => {
  const kong = useLanky()
  const move = useDonkStore((state) => state.stand)
  return kong && move
}

export const useTwirl = (): boolean => {
  const kong = useTiny()
  const move = useDonkStore((state) => state.twirl)
  return kong && move
}

export const usePunch = (): boolean => {
  const kong = useChunky()
  const move = useDonkStore((state) => state.punch)
  return kong && move
}

export const useStrong = (): boolean => {
  const kong = useDk()
  const barrel = useDonkStore(useShallow((state) => state.strong))
  return kong && barrel
}

export const useRocket = (): boolean => {
  const kong = useDiddy()
  const barrel = useDonkStore(useShallow((state) => state.rocket))
  return kong && barrel
}

export const useSprint = (): boolean => {
  const kong = useLanky()
  const barrel = useDonkStore((state) => state.sprint)
  return kong && barrel
}

export const useMini = (): boolean => {
  const kong = useTiny()
  const barrel = useDonkStore((state) => state.mini)
  return kong && barrel
}

export const useHunky = (): boolean => {
  const kong = useChunky()
  const barrel = useDonkStore((state) => state.hunky)
  return kong && barrel
}

export const useBlast = (): boolean => {
  const kong = useDk()
  const pad = useDonkStore((state) => state.blast)
  return kong && pad
}

export const useSpring = (): boolean => {
  const kong = useDiddy()
  const pad = useDonkStore((state) => state.spring)
  return kong && pad
}

export const useBalloon = (): boolean => {
  const kong = useLanky()
  const pad = useDonkStore((state) => state.balloon)
  return kong && pad
}

export const useMonkeyport = (): boolean => {
  const kong = useTiny()
  const pad = useDonkStore((state) => state.port)
  return kong && pad
}

export const useGone = (): boolean => {
  const kong = useChunky()
  const pad = useDonkStore((state) => state.gone)
  return kong && pad
}

// Global moves
export const useSlam = (): boolean => {
  const slam = useDonkStore((state) => state.slam)
  return slam != 0
}

export const useSuperSlam = (): boolean => {
  const slam = useDonkStore((state) => state.slam)
  return slam > 1
}

export const useSuperDuperSlam = (): boolean => {
  const slam = useDonkStore((state) => state.slam)
  return slam > 2
}

export const useVine = (): boolean => {
  const move = useDonkStore((state) => state.vine)
  return move
}

export const useDive = (): boolean => {
  const move = useDonkStore((state) => state.dive)
  return move
}

export const useOrange = (): boolean => {
  const move = useDonkStore((state) => state.orange)
  return move
}

export const useBarrel = (): boolean => {
  const move = useDonkStore((state) => state.barrel)
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
  const move = useDonkStore((state) => state.sniper)
  return move
}

export const useHoming = (): boolean => {
  const move = useDonkStore((state) => state.homing)
  return move
}

export const useCamera = (): boolean => {
  const anyKong = useAnyKong()
  const move = useDonkStore((state) => state.camera)
  return anyKong && move
}

export const useShockwave = (): boolean => {
  const anyKong = useAnyKong()
  const move = useDonkStore((state) => state.shockwave)
  return anyKong && move
}
