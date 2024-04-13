import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { usePlayLevel, useSlamLevel } from '../isles'
import {
  useAnyGun,
  useAnyKong,
  useBlast,
  useBongos,
  useBoulderTech,
  useCamera,
  useCharge,
  useCoconut,
  useDive,
  useFeather,
  useGrape,
  useGuitar,
  useHunky,
  useLanky,
  useMini,
  usePeanut,
  usePineapple,
  usePunch,
  useRocket,
  useSax,
  useShockwave,
  useStand,
  useStrong,
  useTriangle,
  useTrombone,
  useTwirl,
  useVine
} from '../kongs'
import { useBananaportAll } from '../settings'
import {
  LogicBool,
  logicBreak,
  useSwitchsanityGun,
  useSwitchsanityKong,
  useSwitchsanityMusicPad
} from '../world'

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
  const blast = useBlast()
  const barrier = useDonkStore(useShallow((state) => state.removeBarriers.aztecLlamaTemple))
  const entry = blast || barrier
  const properGun = llama1 || llama2 || llama3
  return {
    in: aztecBack.in && entry && properGun,
    out: logicBreak(aztecBack) && entry && properGun
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

export const useChunkyVaseGb = (): LogicBool => {
  const front = useAztecFront()
  const boulder = useBoulderTech()
  const gun = usePineapple()
  return {
    in: front.in && boulder && gun,
    out: front.out && boulder && gun
  }
}

export const useChunkyKlaptrapGb = (): LogicBool => {
  const front = useAztecFront()
  const gun = usePineapple()
  const triangle = useTriangle()
  const tinyTemple = useAztecTinyTemple()
  return {
    in: front.in && gun && triangle,
    out: logicBreak(tinyTemple) && triangle
  }
}

export const useChunkyHunkyGb = (): LogicBool => {
  const back = useAztecBack()
  const boulder = useBoulderTech()
  const hunky = useHunky()
  return {
    in: back.in && boulder && hunky,
    out: back.out && boulder && hunky
  }
}

export const useChunky5DoorGb = (): LogicBool => {
  const door = useAztec5DoorTemple()
  const pineapple = usePineapple()
  return {
    in: door.in && pineapple,
    out: door.out && pineapple
  }
}

const useFreeTinySwitch = (): boolean => {
  const charge = useCharge()
  const punch = usePunch()
  const freeTiny = useDonkStore(useShallow((state) => state.switchsanitySwitches.freeTiny))
  switch (freeTiny) {
    case 1:
      return charge
    case 2:
      return punch
    default:
      return true
  }
}

export const useDiddyFreeTinyGb = (): LogicBool => {
  const temple = useAztecTinyTemple()
  const dive = useDive()
  const free = useFreeTinySwitch()
  return {
    in: temple.in && dive && free,
    out: logicBreak(temple) && dive && free
  }
}

export const useDiddyGongGb = (): LogicBool => {
  const back = useAztecBack()
  const charge = useCharge()
  const rocket = useRocket()
  return {
    in: back.in && charge && rocket,
    out: logicBreak(back) && charge
  }
}

export const useDiddyVultureGb = (): LogicBool => {
  const back = useAztecBack()
  const rocket = useRocket()
  return {
    in: back.in && rocket,
    out: back.out && rocket
  }
}

export const useDiddy5DoorGb = (): LogicBool => {
  const door = useAztec5DoorTemple()
  const peanut = usePeanut()
  return {
    in: door.in && peanut,
    out: door.out && peanut
  }
}

export const useDkBlastGb = (): LogicBool => {
  const back = useAztecBack()
  const blast = useBlast()
  return {
    in: back.in && blast,
    out: back.out && blast
  }
}

export const useDkTunnelGb = (): LogicBool => {
  const tunnel = useAztecBackTunnel()
  const strong = useStrong()
  return {
    in: tunnel.in && strong,
    out: logicBreak(tunnel)
  }
}

export const useDk5DoorGb = (): LogicBool => {
  const door = useAztec5DoorTemple()
  const coconut = useCoconut()
  return {
    in: door.in && coconut,
    out: door.out && coconut
  }
}

const useFreeLankySwitch = (): LogicBool => {
  const coconut = useCoconut()
  const bongos = useBongos()
  const peanut = usePeanut()
  const guitar = useGuitar()
  const grape = useGrape()
  const trombone = useTrombone()
  const feather = useFeather()
  const sax = useSax()
  const pineapple = usePineapple()
  const triangle = useTriangle()
  const freeLanky = useDonkStore(useShallow((state) => state.switchsanitySwitches.freeLanky))
  switch (freeLanky) {
    case 0:
      return {
        in: coconut && bongos,
        out: bongos
      }
    case 1:
      return { in: peanut && guitar, out: guitar }
    case 2:
      return { in: grape && trombone, out: trombone }
    case 3:
      return { in: feather && sax, out: sax }
    case 4:
      return { in: pineapple && triangle, out: triangle }
  }
}

export const useDkFreeLankyGb = (): LogicBool => {
  const lanky = useFreeLankySwitch()
  const dive = useDive()
  const llama = useAztecLlamaTemple()
  return {
    in: llama.in && dive && lanky.in,
    out: logicBreak(llama) && dive && logicBreak(lanky)
  }
}

export const useLankyVultureGb = (): LogicBool => {
  const front = useAztecFront()
  const dive = useDive()
  const canSlam = useSlamAztec()
  const grape = useGrape()
  const tinyTemple = useAztecTinyTemple()
  const lanky = useLanky()
  const anyGun = useAnyGun()
  return {
    in: front.in && grape && dive && canSlam,
    out: logicBreak(tinyTemple) && dive && canSlam && lanky && anyGun
  }
}

export const useLanky5DoorGb = (): LogicBool => {
  const door = useAztec5DoorTemple()
  const grape = useGrape()
  return {
    in: door.in && grape,
    out: door.out && grape
  }
}

export const useLankySnakeGb = (): LogicBool => {
  const llama = useAztecLlamaTemple()
  const trombone = useTrombone()
  const stand = useStand()
  const twirl = useTwirl()
  return {
    in: llama.in && trombone && stand,
    out: logicBreak(llama) && trombone && (stand || twirl)
  }
}

export const useLankyMatchGb = (): LogicBool => {
  const llama = useAztecLlamaTemple()
  const grape = useGrape()
  return {
    in: llama.in && grape,
    out: llama.out && grape
  }
}

export const useTinyKlaptrapGb = (): LogicBool => {
  const front = useAztecFront()
  const feather = useFeather()
  const mini = useMini()
  const dive = useDive()
  const tinyTemple = useAztecTinyTemple()
  return {
    in: front.in && feather && mini && dive,
    out: logicBreak(tinyTemple) && mini && dive
  }
}

export const useTiny5DoorGb = (): LogicBool => {
  const door = useAztec5DoorTemple()
  const feather = useFeather()
  return {
    in: door.in && feather,
    out: door.out && feather
  }
}

export const useTinyBeetleGb = (): LogicBool => {
  const gong = useDiddyGongGb()
  const mini = useMini()
  const sax = useSax()
  return {
    in: gong.in && mini && sax,
    out: gong.out && mini && sax
  }
}

export const useTinyLavaGb = (): LogicBool => {
  const lava = useAztecLlamaLava()
  const canSlam = useSlamAztec()
  return {
    in: lava.in && canSlam,
    out: logicBreak(lava)
  }
}

export const useGeneralThing = (): LogicBool => {
  const inStage = useAztecFront()
  const anyKong = useAnyKong()
  return {
    in: inStage.in && anyKong,
    out: inStage.out && anyKong
  }
}

export const useLlamaCrate = (): LogicBool => useAztecLlamaTemple()

export const useLlamaOutsideCrate = (): LogicBool => {
  const back = useAztecBack()
  const rocket = useRocket()
  return {
    in: rocket && back.in,
    out: rocket && back.out
  }
}

export const useGeneralDirt = (): LogicBool => {
  const thing = useGeneralThing()
  const shockwave = useShockwave()
  return {
    in: shockwave && thing.in,
    out: shockwave && thing.out
  }
}

export const useTempleDirt = (): LogicBool => {
  const thing = useChunky5DoorGb()
  const shockwave = useShockwave()
  return {
    in: shockwave && thing.in,
    out: shockwave && thing.out
  }
}

export const useGeneralFairy = (): LogicBool => {
  const thing = useAztecFront()
  const camera = useCamera()
  return {
    in: camera && thing.in,
    out: camera && thing.out
  }
}

export const useLlamaFairy = (): LogicBool => {
  const thing = useAztecLlamaTemple()
  const camera = useCamera()
  return {
    in: camera && thing.in,
    out: camera && thing.out
  }
}

export const useTinyFairy = (): LogicBool => {
  const door = useAztec5DoorTemple()
  const feather = useFeather()
  const mini = useMini()
  const camera = useCamera()
  return {
    in: camera && door.in && feather && mini,
    out: camera && door.out && feather && mini
  }
}

export const useCoconutKasplat = (): LogicBool => {
  const aztecFront = useAztecFront()
  const coconut = useCoconut()
  const strong = useStrong()
  const twirl = useTwirl()
  return {
    in: aztecFront.in && coconut && (strong || twirl),
    out: aztecFront.out && coconut
  }
}

export const useOasisKasplat = (): LogicBool => {
  const thing = useAztecFront()
  const rocket = useRocket()
  return {
    in: rocket && thing.in,
    out: rocket && thing.out
  }
}
