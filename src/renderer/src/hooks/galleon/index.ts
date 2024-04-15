import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { useCurrentPearlCount } from '../consumables'
import { useFastMermaid } from '../fast-checks'
import { usePlayLevel, useSlamLevel } from '../isles'
import {
  useAnyKong,
  useBalloon,
  useBlast,
  useBongos,
  useBoulderTech,
  useCamera,
  useDiddy,
  useDive,
  useDk,
  useFtaChunkyBlueprint,
  useFtaDiddyBanana,
  useFtaDiddyBlueprint,
  useFtaDkBlueprint,
  useFtaLankyBanana,
  useFtaLankyBlueprint,
  useFtaTinyBlueprint,
  useGrab,
  useGuitar,
  useHighGrab,
  useLanky,
  useMini,
  usePunch,
  useRocket,
  useSax,
  useShockwave,
  useSlam,
  useSpring,
  useTiny,
  useTriangle,
  useTrombone,
  useTwirl,
  useVine
} from '../kongs'
import { useBananaportAll, useGalleonTideStartHigh } from '../settings'
import { LogicBool, logicBreak, useSwitchsanityGun } from '../world'

/**
 * Can we play in Gloomy Galleon?
 * @returns true if we can play in Gloomy Galleon.
 */
export const usePlayGalleon = (): boolean => usePlayLevel('Galleon')

/**
 * Can we slam down switches in Gloomy Galleon?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Gloomy Galleon.
 */
export const useSlamGalleon = (): boolean => useSlamLevel('Galleon')

/**
 * Can we enter the Lighthouse area in Galleon?
 * @returns true if we can enter the Lighthouse area.
 */
export const useGalleonLighthouseArea = (): boolean => {
  const inStage = usePlayGalleon()
  const target = useSwitchsanityGun('galleonLighthouse', 0)
  const removeBarriers = useDonkStore(useShallow((state) => state.removeBarriers))
  return inStage && (target || removeBarriers.galleonLighthouse)
}

/**
 * Do we have access to High Tide in Galleon?
 * @returns true if we have access to High Tide in Galleon.
 */
export const useGalleonHighTide = (): boolean => {
  const lighthouse = useGalleonLighthouseArea()
  const dive = useDive()
  if (useGalleonTideStartHigh()) {
    return true
  }
  return lighthouse && dive
}

/**
 * Do we have access to Low Tide in Galleon?
 * @returns true if we have access to Low Tide in Galleon.
 */
export const useGalleonLowTide = (): boolean => {
  const dive = useDive()
  const inStage = usePlayGalleon()
  if (!useGalleonTideStartHigh()) {
    return true
  }
  return dive && inStage
}

/**
 * Can we land on top of the Lighthouse Platform in Galleon?
 *
 * To future developers: DO NOT call `useGalleonSeasickShip` from here without modifying the code:
 * it will cause an infinite loop!
 * @returns a truthy statement if the platform can be reached.
 */
export const useGalleonLighthousePlatform = (): LogicBool => {
  const inStage = usePlayGalleon()
  const lighthouseArea = useGalleonLighthouseArea()
  const highTide = useGalleonHighTide()
  const twirl = useTwirl()
  const warpAll = useBananaportAll()
  const [galleonSeasick] = useDonkStore(
    useShallow((state) => [state.removeBarriers.galleonSeasick])
  )

  return {
    in: (inStage && warpAll) || (lighthouseArea && (highTide || (galleonSeasick && twirl))),
    out: lighthouseArea && galleonSeasick
  }
}

export const useGalleonLighthouseInside = (): LogicBool => {
  const canSlam = useSlamGalleon()
  const lighthousePlatform = useGalleonLighthousePlatform()
  const dk = useDk()
  return {
    in: lighthousePlatform.in && canSlam && dk,
    out: lighthousePlatform.out && canSlam && dk
  }
}

/**
 * Can we board the ship summoned by turning on the Lighthouse in Galleon?
 * @returns a truthy statement if we can board the ship.
 */
export const useGalleonSeasickShip = (): LogicBool => {
  const lighthousePlatform = useGalleonLighthousePlatform()
  const lighthouseArea = useGalleonLighthouseArea()
  const canSlam = useSlamGalleon()
  const grab = useGrab()
  const [galleonSeasick] = useDonkStore(
    useShallow((state) => [state.removeBarriers.galleonSeasick])
  )
  return {
    in: (lighthouseArea && galleonSeasick) || (lighthousePlatform.in && canSlam && grab),
    out: logicBreak(lighthousePlatform) && canSlam && grab
  }
}

/**
 * Do we have access to the small platforms in the Galleon Caverns?
 *
 * In Vanilla, there is a Kasplat.
 * @returns a truthy value if we can access the thin platforms.
 */
export const useGalleonCavernTop = (): LogicBool => {
  const inStage = usePlayGalleon()
  const seasick = useGalleonSeasickShip()
  const rocket = useRocket()
  const dive = useDive()
  const vine = useVine()
  const warpAll = useBananaportAll()
  return {
    in: inStage && (vine || (warpAll && (dive || rocket))),
    out: inStage && logicBreak(seasick)
  }
}

/**
 * Do we have access to the Cannon Game area in Galleon?
 * @returns true if we have access to the Cannon Game area in Galleon.
 */
export const useGalleonCannon = (): boolean => {
  const canPlay = usePlayGalleon()
  const target = useSwitchsanityGun('galleonCannon', 4)
  return canPlay && target
}

/**
 * Do we have access to the Shipyard Outskirts in Galleon?
 * @returns true if we can access the Shipyard Outskirts in Galleon.
 */
export const useGalleonOutskirts = (): boolean => {
  const inStage = usePlayGalleon()
  const target = useSwitchsanityGun('galleonOutskirts', 1)
  const removeBarriers = useDonkStore(useShallow((state) => state.removeBarriers))
  return inStage && (target || removeBarriers.galleonOutskirts)
}

/**
 * Do we have access to the treasure room?
 * @returns true if we can access the Treasure Room.
 */
export const useGalleonTreasureRoom = (): LogicBool => {
  const outskirts = useGalleonOutskirts()
  const highTide = useGalleonHighTide()
  const inStage = usePlayGalleon()
  const lanky = useLanky()
  const dive = useDive()
  const warpAll = useBananaportAll()
  return {
    in: (inStage && warpAll) || (outskirts && lanky && dive && highTide),
    out: outskirts && lanky && dive
  }
}

export const useDkLighthouseGb = (): LogicBool => {
  const grab = useGrab()
  const inside = useGalleonLighthouseInside()
  const seasick = useDonkStore(useShallow((state) => state.removeBarriers.galleonSeasick))
  return {
    in: inside.in && (seasick || grab),
    out: inside.out && (seasick || grab)
  }
}

export const useDiddyLighthouseGb = (): LogicBool => {
  const seasick = useDonkStore(useShallow((state) => state.removeBarriers.galleonSeasick))
  const canSlam = useSlamGalleon()
  const slam = useSlam()
  const lighthouseArea = useGalleonLighthouseArea()
  const rocket = useRocket()
  const dk = useDk()
  const grab = useGrab()
  const highTide = useGalleonHighTide()
  return {
    in: lighthouseArea && (seasick || (highTide && canSlam && dk && grab)) && canSlam && rocket,
    out: lighthouseArea && (seasick || (canSlam && dk && grab)) && slam && rocket
  }
}

export const useChunkyChestGb = (): boolean => {
  const inStage = usePlayGalleon()
  const punch = usePunch()
  return inStage && punch
}

export const useChunkyCannonGb = (): LogicBool => {
  const cannon = useGalleonCannon()
  const boulder = useBoulderTech()
  const highTide = useGalleonHighTide()
  return {
    in: cannon && boulder && highTide,
    out: cannon && boulder
  }
}

export const useChunkySeasickGb = (): boolean => {
  const lighthouse = useGalleonLighthouseArea()
  const punch = usePunch()
  const slam = useSlam()
  return lighthouse && punch && slam
}

export const useChunky5DoorShipGb = (): boolean => {
  const lighthouse = useGalleonLighthouseArea()
  const outskirts = useGalleonOutskirts()
  const dive = useDive()
  const triangle = useTriangle()
  return lighthouse && outskirts && dive && triangle
}

export const useDiddyGoldGb = (): LogicBool => {
  const treasure = useGalleonTreasureRoom()
  const spring = useSpring()
  const highGrab = useHighGrab()
  return {
    in: treasure.in && spring,
    out: useFtaDiddyBanana() && logicBreak(treasure) && (spring || highGrab)
  }
}

export const useDiddyMechGb = (): LogicBool => {
  const lighthouse = useGalleonLighthouseArea()
  const outskirts = useGalleonOutskirts()
  const highTide = useGalleonHighTide()
  const dive = useDive()
  const rocket = useRocket()
  const guitar = useGuitar()
  return {
    in: lighthouse && outskirts && dive && rocket && guitar && highTide,
    out: lighthouse && outskirts && dive && rocket && guitar
  }
}

export const useDiddy5DoorShipGb = (): boolean => {
  const outskirts = useGalleonOutskirts()
  const lowTide = useGalleonLowTide()
  const guitar = useGuitar()
  const dive = useDive()
  return outskirts && lowTide && guitar && dive
}

/**
 * Can we get the golden banana from the seal via visiting the blast course in Galleon?
 * @returns true if we can get the banana from the seal.
 */
export const useDkBlastGb = (): LogicBool => {
  const lighthouse = useGalleonLighthouseArea()
  const blast = useBlast()
  const outskirts = useGalleonOutskirts()
  const highTide = useGalleonHighTide()
  return {
    in: lighthouse && blast && outskirts && highTide,
    out: lighthouse && blast && outskirts
  }
}

export const useDk5DoorShipGb = (): boolean => {
  const outskirts = useGalleonOutskirts()
  const bongos = useBongos()
  const dive = useDive()
  return outskirts && bongos && dive
}

export const useLankyChestGb = (): boolean => {
  const lighthouse = useGalleonLighthouseArea()
  const lanky = useLanky()
  const dive = useDiddy()
  return lighthouse && lanky && dive
}

export const useLankyGoldGb = (): LogicBool => {
  const treasure = useGalleonTreasureRoom()
  const balloon = useBalloon()
  const highGrab = useHighGrab()
  return {
    in: treasure.in && balloon,
    out: useFtaLankyBanana() && logicBreak(treasure) && (balloon || highGrab)
  }
}

export const useLanky2DoorShipGb = (): boolean => {
  const outskirts = useGalleonOutskirts()
  const canSlam = useSlamGalleon()
  const lanky = useLanky()
  const dive = useDive()
  return outskirts && canSlam && lanky && dive
}

export const useLanky5DoorShipGb = (): boolean => {
  const outskirts = useGalleonOutskirts()
  const trombone = useTrombone()
  const lowTide = useGalleonLowTide()
  const dive = useDive()
  return outskirts && trombone && lowTide && dive
}

export const useTinyMermaidGb = (): boolean => {
  const lighthouse = useGalleonLighthouseArea()
  const mini = useMini()
  const dive = useDive()
  const mermaid = useFastMermaid()
  const pearls = useCurrentPearlCount()
  return lighthouse && mini && dive && pearls >= (mermaid ? 1 : 5)
}

export const useTinySubGb = (): boolean => {
  const outskirts = useGalleonOutskirts()
  const mini = useMini()
  const dive = useDive()
  return outskirts && mini && dive
}

export const useTiny2DoorShipGb = (): boolean => {
  const outskirts = useGalleonOutskirts()
  const dive = useDive()
  const tiny = useTiny()
  const canSlam = useSlamGalleon()
  return tiny && canSlam && outskirts && dive
}

export const useTiny5DoorShipGb = (): boolean => {
  const outskirts = useGalleonOutskirts()
  const sax = useSax()
  const dive = useDive()
  return outskirts && sax && dive
}

export const useTinyClams = (): LogicBool => {
  const treasure = useGalleonTreasureRoom()
  const mini = useMini()
  return {
    in: treasure.in && mini,
    out: treasure.out && mini
  }
}

export const useGeneralThing = (): boolean => {
  const inStage = usePlayGalleon()
  return useAnyKong() && inStage
}

export const useArena = (): boolean => {
  const inStage = usePlayGalleon()
  return usePunch() && inStage
}

export const useGeneralOutskirts = (): boolean => {
  const inStage = useGalleonOutskirts()
  return useAnyKong() && inStage
}

export const useLighthouseDirt = (): LogicBool => {
  const inside = useGalleonLighthouseInside()
  const dirt = useShockwave()
  return {
    in: inside.in && dirt,
    out: inside.out && dirt
  }
}

export const useGeneralDirt = (): boolean => {
  const thing = useGeneralThing()
  return useShockwave() && thing
}

export const useChestFairy = (): boolean => {
  const thing = useChunkyChestGb()
  const fairy = useCamera()
  return thing && fairy
}

export const useShipFairy = (): boolean => {
  const ship = useTiny5DoorShipGb()
  const fairy = useCamera()
  return ship && fairy
}

export const useGeneralFairy = (): boolean => {
  const thing = useGeneralThing()
  return useCamera() && thing
}

export const useTreasureKasplat = (): LogicBool => {
  const treasure = useGalleonTreasureRoom()
  const spring = useSpring()
  const highGrab = useHighGrab()
  const dk = useFtaDkBlueprint()
  return {
    in: dk && treasure.in && spring,
    out: dk && logicBreak(treasure) && (spring || highGrab)
  }
}

export const useLighthouseKasplat = (): boolean => {
  const lighthouse = useGalleonLighthouseArea()
  return useFtaDiddyBlueprint() && lighthouse
}

export const useCannonKasplat = (): LogicBool => {
  const highTide = useGalleonHighTide()
  const cannon = useGalleonCannon()
  const kong = useFtaLankyBlueprint()
  return {
    in: kong && cannon && highTide,
    out: kong && cannon
  }
}

export const useVineKasplat = (): LogicBool => {
  const kasplat = useGalleonCavernTop()
  const kong = useFtaTinyBlueprint()
  return {
    in: kong && kasplat.in,
    out: kong && kasplat.out
  }
}

export const useCactusKasplat = (): boolean => {
  const outskirts = useGalleonOutskirts()
  return useFtaChunkyBlueprint() && outskirts
}
