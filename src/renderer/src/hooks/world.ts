import useDonkStore from '@renderer/store'
import { KongRange, SwitchsanitySwitches } from '@renderer/store/common'
import { useShallow } from 'zustand/react/shallow'
import {
  useBongos,
  useCoconut,
  useFeather,
  useGrape,
  useGuitar,
  usePeanut,
  usePineapple,
  useSax,
  useTriangle,
  useTrombone
} from './kongs'

/**
 * A type to handle both in-logic and out-of-logic checks in a single function.
 */
export type LogicBool = {
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

export const useSwitchsanityMusicPad = (
  id: keyof SwitchsanitySwitches,
  normal: number
): boolean => {
  const bongos = useBongos()
  const guitar = useGuitar()
  const trombone = useTrombone()
  const sax = useSax()
  const triangle = useTriangle()
  const [isSwitchsanity, switches] = useDonkStore(
    useShallow((state) => [state.settings.isSwitchsanity, state.switchsanitySwitches])
  )
  const target: number = isSwitchsanity ? switches[id] : normal
  switch (target) {
    case 0:
      return bongos
    case 1:
      return guitar
    case 2:
      return trombone
    case 3:
      return sax
    default:
      return triangle
  }
}

export const useSwitchsanityGun = (id: string, normal: number): boolean => {
  const coconut = useCoconut()
  const peanut = usePeanut()
  const grape = useGrape()
  const feather = useFeather()
  const pineapple = usePineapple()
  const [isSwitchsanity, switches] = useDonkStore(
    useShallow((state) => [state.settings.isSwitchsanity, state.switchsanitySwitches])
  )
  const target: KongRange = isSwitchsanity ? switches[id] : normal
  switch (target) {
    case 0:
      return coconut
    case 1:
      return peanut
    case 2:
      return grape
    case 3:
      return feather
    default:
      return pineapple
  }
}

export const useSwitchsanityKong = (id: string, normal: number): boolean => {
  const [dk, diddy, lanky, tiny, chunky, isSwitchsanity, switches] = useDonkStore(
    useShallow((state) => [
      state.moves.dk,
      state.moves.diddy,
      state.moves.lanky,
      state.moves.tiny,
      state.moves.chunky,
      state.settings.isSwitchsanity,
      state.switchsanitySwitches
    ])
  )
  const target: KongRange = isSwitchsanity ? switches[id] : normal
  switch (target) {
    case 0:
      return dk
    case 1:
      return diddy
    case 2:
      return lanky
    case 3:
      return tiny
    default:
      return chunky
  }
}
