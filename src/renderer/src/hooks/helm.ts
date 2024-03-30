import { useIslesHelmEntry, useIslesKremTop, usePlayLevel, useSlamLevel } from './isles'
import {
  useAnyMusic,
  useGrab,
  useMini,
  usePineapple,
  usePunch,
  useRocket,
  useStand,
  useVine
} from './kongs'
import { useHelmStartPosition } from './settings'
import { LogicBool, logicBreak } from './world'

/**
 * Can we play in Hideout Helm?
 * @returns true if we can play in Hideout Helm.
 */
export const usePlayHelm = (): boolean => usePlayLevel('Helm')

/**
 * Can we slam down switches in Hideout Helm?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Hideout Helm.
 */
export const useSlamHelm = (): boolean => useSlamLevel('Helm')

/**
 * Can we actually cross the lava to enter Helm?
 * @returns true if we can enter Helm.
 */
export const useHelmEnter = (): boolean => {
  const access = useIslesHelmEntry()
  const kremTop = useIslesKremTop()
  const vine = useVine()
  return access && kremTop && vine
}

/**
 * Can we access the heart of the machine in Helm?
 * @returns true if we can access the machine.
 */
export const useHelmMachine = (): LogicBool => {
  const entry = useHelmEnter()
  const stand = useStand()
  const pineapple = usePineapple()
  const vine = useVine()
  const mini = useMini()
  const helmAccess = useHelmStartPosition()
  return {
    in: entry && (helmAccess != 0 || (stand && pineapple && vine && mini)),
    out: entry && pineapple && vine && mini
  }
}

/**
 * Can we access the Helm doors?
 * @returns true if we can access the Helm doors.
 */
export const useHelmDoors = (): LogicBool => {
  const entry = useHelmEnter()
  const anyMusic = useAnyMusic()
  const machine = useHelmMachine()
  const grab = useGrab()
  const rocket = useRocket()
  const punch = usePunch()
  const helmAccess = useHelmStartPosition()

  return {
    in:
      entry &&
      (helmAccess == 2 ||
        (anyMusic && (helmAccess == 1 || (machine.in && grab && rocket && punch)))),
    out: entry && logicBreak(machine) && grab && rocket && punch
  }
}
