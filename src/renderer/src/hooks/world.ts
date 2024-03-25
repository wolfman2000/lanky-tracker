import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { KongRange } from '@renderer/store/common'

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

export const useSwitchsanityMusicPad = (id: string, normal: number): boolean => {
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
      state.isSwitchsanity,
      state.switchsanitySwitches
    ])
  )
  const target: KongRange = isSwitchsanity ? switches[id] : normal
  switch (target) {
    case 0:
      return dk && bongos
    case 1:
      return diddy && guitar
    case 2:
      return lanky && trombone
    case 3:
      return tiny && sax
    default:
      return chunky && triangle
  }
}

export const useSwitchsanityGun = (id: string, normal: number): boolean => {
  const [
    dk,
    coconut,
    diddy,
    peanut,
    lanky,
    grape,
    tiny,
    feather,
    chunky,
    pineapple,
    isSwitchsanity,
    switches
  ] = useDonkStore(
    useShallow((state) => [
      state.dk,
      state.coconut,
      state.diddy,
      state.peanut,
      state.lanky,
      state.grape,
      state.tiny,
      state.feather,
      state.chunky,
      state.pineapple,
      state.isSwitchsanity,
      state.switchsanitySwitches
    ])
  )
  const target: KongRange = isSwitchsanity ? switches[id] : normal
  switch (target) {
    case 0:
      return dk && coconut
    case 1:
      return diddy && peanut
    case 2:
      return lanky && grape
    case 3:
      return tiny && feather
    default:
      return chunky && pineapple
  }
}

export const useSwitchsanityKong = (id: string, normal: number): boolean => {
  const [dk, diddy, lanky, tiny, chunky, isSwitchsanity, switches] = useDonkStore(
    useShallow((state) => [
      state.dk,
      state.diddy,
      state.lanky,
      state.tiny,
      state.chunky,
      state.isSwitchsanity,
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
