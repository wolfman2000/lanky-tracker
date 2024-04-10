import {
  useSingleHelmCheck,
  useSingleHelmNum,
  useSingleRoolCheck,
  useSingleRoolNum
} from '../endings'
import { useIslesHelmEntry, useIslesKremTop, usePlayLevel, useSlamLevel } from '../isles'
import {
  useAllMusic,
  useAnyMusic,
  useGrab,
  useMini,
  usePineapple,
  usePunch,
  useRocket,
  useStand,
  useVine
} from '../kongs'
import { useHelmStartPosition } from '../settings'
import { LogicBool, logicBreak } from '../world'

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

export const useCanDeactivateHelm = (): boolean => {
  const allMusic = useAllMusic()
  const rocket = useRocket()
  const num1 = useSingleHelmNum(1)
  const num2 = useSingleHelmNum(2)
  const num3 = useSingleHelmNum(3)
  const num4 = useSingleHelmNum(4)
  const num5 = useSingleHelmNum(5)
  const check1 = useSingleHelmCheck(1)
  const check2 = useSingleHelmCheck(2)
  const check3 = useSingleHelmCheck(3)
  const check4 = useSingleHelmCheck(4)
  const check5 = useSingleHelmCheck(5)

  if (allMusic && rocket) {
    return true
  }

  if (num1 === 0 && num2 === 0 && num3 === 0 && num4 === 0 && num5 === 0) {
    return false
  }

  return check1 && check2 && check3 && check4 && check5
}

export const useCanFightRool = (): LogicBool => {
  const num1 = useSingleRoolNum(1)
  const num2 = useSingleRoolNum(2)
  const num3 = useSingleRoolNum(3)
  const num4 = useSingleRoolNum(4)
  const num5 = useSingleRoolNum(5)
  const check1 = useSingleRoolCheck(1)
  const check2 = useSingleRoolCheck(2)
  const check3 = useSingleRoolCheck(3)
  const check4 = useSingleRoolCheck(4)
  const check5 = useSingleRoolCheck(5)

  if (num1 === 0 && num2 === 0 && num3 === 0 && num4 === 0 && num5 === 0) {
    return {
      in: false
    }
  }

  return {
    in: check1.in && check2.in && check3.in && check4.in && check5.in,
    out: check1.in && check2.in && check3.in && check4.out && check5.in
  }
}
