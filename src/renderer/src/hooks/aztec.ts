import useDonkStore from '@renderer/store'
import { usePlayLevel, useSlamLevel } from './isles'
import {
  LogicBool,
  logicBreak,
  useSwitchsanityGun,
  useSwitchsanityKong,
  useSwitchsanityMusicPad
} from './world'
import { useShallow } from 'zustand/react/shallow'

/**
 * Can we play in Angry Aztec?
 * @returns true if we can play in Angry Aztec.
 */
export const usePlayAztec = (): boolean => usePlayLevel('Aztec')

/**
 * Can we slam down switches in Angry Aztec?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Angry Aztec.
 */
export const useSlamAztec = (): boolean => useSlamLevel('Aztec')

const useAztecCoconutSwitch = (): boolean => useSwitchsanityGun('aztecBlueprint', 0)

const useAztecGuitarSwitch = (): boolean => useSwitchsanityMusicPad('aztecGuitar', 1)

const useAztecLlamaCoconutSwitch = (): boolean => useSwitchsanityGun('aztecLlama1', 0)
const useAztecLlamaGrapeSwitch = (): boolean => useSwitchsanityGun('aztecLlama2', 2)
const useAztecLlamaFeatherSwitch = (): boolean => useSwitchsanityGun('aztecLlama3', 3)
const useAztecLlamaTunnelSwitch = (): boolean => useSwitchsanityKong('aztecDeadEnd', 0)

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
 * Can we access the room containing one Kasplat and 10 bananas for Donkey?
 * @returns true if we can access the room.
 */
export const useAztecFrontKasplat = (): LogicBool => {
  const aztecFront = useAztecFront()
  const kasplatSwitch = useAztecCoconutSwitch()
  return {
    in: aztecFront.in && kasplatSwitch,
    out: logicBreak(aztecFront)
  }
}

/**
 * Can we enter the back of Aztec via the tunnel beside Tiny Temple?
 * @returns true if we can access the tunnel beside Tiny Temple.
 */
export const useAztecBack = (): LogicBool => {
  const aztecFront = useAztecFront()
  const musicSwitch = useAztecGuitarSwitch()
  const [vine, diddy, tiny, rocket, bananaport] = useDonkStore(
    useShallow((state) => [state.vine, state.diddy, state.guitar, state.tiny, state.bananaportOpen])
  )
  return {
    in: aztecFront.in && (bananaport == 2 || ((vine || (diddy && rocket)) && musicSwitch)),
    out: logicBreak(aztecFront) && (bananaport == 2 || (musicSwitch && (diddy || tiny)))
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
 * @returns true if we can enter the Llama Temple.
 */
export const useAztecLlamaTemple = (): LogicBool => {
  const aztecBack = useAztecBack()
  const llama1 = useAztecLlamaCoconutSwitch()
  const llama2 = useAztecLlamaGrapeSwitch()
  const llama3 = useAztecLlamaFeatherSwitch()
  const properGun = llama1 || llama2 || llama3
  return {
    in: aztecBack.in && properGun,
    out: logicBreak(aztecBack) && properGun
  }
}

/**
 * Can we access the tucked away room with lava in the Llama Temple?
 * @returns true if we can enter the lava room in the Llama Temple.
 */
export const useAztecLlamaLava = (): LogicBool => {
  const llamaTemple = useAztecLlamaTemple()
  const [tiny, mini, bananaport] = useDonkStore(
    useShallow((state) => [state.tiny, state.mini, state.bananaportOpen])
  )
  return {
    in: llamaTemple.in && (bananaport == 2 || (tiny && mini)),
    out: logicBreak(llamaTemple) && (bananaport == 2 || (tiny && mini))
  }
}

/**
 * Can we access the dead end tunnel in Aztec that contains a bonus barrel?
 * @returns true if we can access the dead end tunnel in Aztec.
 */
export const useAztecBackTunnel = (): LogicBool => {
  const llama = useAztecLlamaTemple()
  const canSlam = useSlamAztec()
  const slamSwitch = useAztecLlamaTunnelSwitch()
  const front = useAztecFront()
  const bananaport = useDonkStore(useShallow((state) => state.bananaportOpen))
  return {
    in: (front.in && bananaport == 2) || (llama.in && slamSwitch && canSlam),
    out: (logicBreak(front) && bananaport == 2) || (logicBreak(llama) && slamSwitch && canSlam)
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
