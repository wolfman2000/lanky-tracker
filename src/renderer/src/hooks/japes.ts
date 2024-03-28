import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { usePlayLevel, useSlamLevel } from './isles'
import {
  useBoulderTech,
  useChunky,
  useDk,
  usePeanut,
  useSlam,
  useStand,
  useTiny,
  useTwirl
} from './kongs'
import { LogicBool, logicBreak, useSwitchsanityGun } from './world'

/**
 * Can we play in Jungle Japes?
 * @returns true if we can play in Jungle Japes.
 */
export const usePlayJapes = (): boolean => usePlayLevel('Japes')

/**
 * Can we slam down switches in Jungle Japes?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Jungle Japes.
 */
export const useSlamJapes = (): boolean => useSlamLevel('Japes')

/**
 * Can we open the Rambi cage with the correct gun?
 * @returns true if we can shoot the switch to use Rambi.
 */
const useJapesRambiSwitch = (): boolean => useSwitchsanityGun('japesRambi', 0)
/**
 * Do we have what we need to enter the side area with three checks?
 * @returns true if we can open the side area.
 */
const useJapesSideSwitch = (): boolean => useSwitchsanityGun('japesSide', 1)
/**
 * What do we need to access the Hive area when using a gun?
 *
 * Note that if all bananaports are active immediately, this check can be bypassed.
 * @returns true if we can access the Hive via gun.
 */
const useJapesHiveSwitch = (): boolean => useSwitchsanityGun('japesHive', 3)
/**
 * What do we need to enter the Painting Room?
 * @returns true if we can enter the Painting Room.
 */
const useJapesPaintingSwitch = (): boolean => useSwitchsanityGun('japesPainting', 1)

/**
 * Can we access the side area at the start of Japes with one free item and two gated bonus stages?
 * @returns true if we can access the side area at the start of Japes.
 */
export const useJapesSideArea = (): boolean => {
  const inStage = usePlayJapes()
  const canAccess = useJapesSideSwitch()
  return inStage && canAccess
}

/**
 * Can we access the Rambi cage in Japes?
 * @returns true if we can access the Rambi cage in Japes.
 */
export const useJapesRambi = (): boolean => {
  const canPlay = usePlayJapes()
  const rambiSwitch = useJapesRambiSwitch()
  return rambiSwitch && canPlay
}

/**
 * Can Diddy access the mines?
 *
 * There is no switchsanity here: all checks are Diddy exclusive.
 * @returns true if Diddy can access the mines.
 */
export const useJapesMine = (): boolean => {
  const peanut = usePeanut()
  const canPlay = usePlayJapes()
  return peanut && canPlay
}

/**
 * Can we access the hive area past the tunnel?
 * @returns true if we have access to the Hive area past the tunnel.
 */
export const useJapesHive = (): boolean => {
  const hiveSwitch = useJapesHiveSwitch()
  const canPlay = usePlayJapes()
  const japesMine = useJapesMine()
  const [bananaport, hiveGateOpen] = useDonkStore(
    useShallow((state) => [state.settings.bananaportOpen, state.removeBarriers.japesHiveGate])
  )
  return canPlay && (hiveGateOpen || hiveSwitch || (bananaport == 2 && japesMine))
}

/**
 * Can we get on top of Painting Hill?
 * @returns true if we can get to the top of the hill.
 */
export const useJapesPaintingOutside = (): LogicBool => {
  const inStage = usePlayJapes()
  const stand = useStand()
  const twirl = useTwirl()
  const dk = useDk()
  const tiny = useTiny()
  const chunky = useChunky()
  return {
    in: inStage && (stand || twirl),
    out: inStage && (dk || tiny || chunky)
  }
}

/**
 * Can we enter the painting room on top of the hill?
 * @returns true if we can enter the painting room on top of the hill.
 */
export const useJapesPainting = (): LogicBool => {
  const canPlay = useJapesPaintingOutside()
  const paintingSwitch = useJapesPaintingSwitch()
  return {
    in: canPlay.in && paintingSwitch,
    out: logicBreak(canPlay) && paintingSwitch
  }
}

/**
 * Can we access the underground via the power of Boulder Tech?
 * @returns true if we can access the underground.
 */
export const useJapesUnderground = (): boolean => {
  const slam = useSlam()
  const boulderTech = useBoulderTech()
  const inStage = usePlayJapes()
  return inStage && boulderTech && slam
}
