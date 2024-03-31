import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { usePlayLevel, useSlamLevel } from './isles'
import {
  useAnyKong,
  useCamera,
  useFeather,
  useGrape,
  useMini,
  usePeanut,
  usePineapple,
  useRocket,
  useTwirl,
  useVine
} from './kongs'
import { useBananaportAll } from './settings'
import {
  LogicBool,
  logicBreak,
  useSwitchsanityGun,
  useSwitchsanityKong,
  useSwitchsanityMusicPad
} from './world'

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

const useAztecGuitarSwitch = (): boolean => useSwitchsanityMusicPad('aztecBack', 1)

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
  const vine = useVine()
  const twirl = useTwirl()
  return {
    in: aztecPlay && (vine || twirl),
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
  const vine = useVine()
  const rocket = useRocket()
  const warpAll = useBananaportAll()
  const [diddy, tiny, backGateOpen] = useDonkStore(
    useShallow((state) => [state.moves.diddy, state.moves.tiny, state.removeBarriers.aztecBack])
  )
  return {
    in: aztecFront.in && (backGateOpen || warpAll || ((vine || rocket) && musicSwitch)),
    out: logicBreak(aztecFront) && (backGateOpen || warpAll || (musicSwitch && (diddy || tiny)))
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
  const peanut = usePeanut()
  const grape = useGrape()
  const feather = useFeather()
  const pineapple = usePineapple()

  const properGun = peanut || grape || feather || pineapple
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
  const mini = useMini()
  const warpAll = useBananaportAll()
  return {
    in: llamaTemple.in && (warpAll || mini),
    out: logicBreak(llamaTemple) && (warpAll || mini)
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
  const warpAll = useBananaportAll()
  return {
    in: (front.in && warpAll) || (llama.in && slamSwitch && canSlam),
    out: (logicBreak(front) && warpAll) || (logicBreak(llama) && slamSwitch && canSlam)
  }
}

/**
 * Can we enter the 5 Door Temple?
 * @todo Handle both versions of Fast Checks.
 * @returns true if we can enter the 5 Door Temple.
 */
export const useAztec5DoorTemple = (): LogicBool => {
  const aztecBack = useAztecBack()
  const rocket = useRocket()
  const canSlam = useSlamAztec()
  const peanut = usePeanut()
  const fiveDoor = useDonkStore(useShallow((state) => state.removeBarriers.aztec5DoorTemple))

  return {
    in: aztecBack.in && (fiveDoor || (rocket && canSlam && peanut)),
    out: logicBreak(aztecBack) && (fiveDoor || (canSlam && peanut))
  }
}

/**
 * Can we capture any banana fairies in Aztec when not in their normal locations?
 * @returns true if we can capture banana fairies in Aztec when they are elsewhere.
 */
export const useAztecShuffledFairyLogic = (): LogicBool => {
  const anyKong = useAnyKong()
  const camera = useCamera()
  const inStage = useAztecFront()
  return {
    in: inStage.in && anyKong && camera,
    out: logicBreak(inStage) && anyKong && camera
  }
}
