import { usePlayLevel, useSlamLevel } from './isles'
import { useBlast } from './kongs'

/**
 * Can we play in Creepy Castle?
 * @returns true if we can play in Creepy Castle.
 */
export const usePlayCastle = (): boolean => usePlayLevel('Castle')

/**
 * Can we slam down switches in Creepy Castle?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Creepy Castle.
 */
export const useSlamCastle = (): boolean => useSlamLevel('Castle')

/**
 * Can we enter the Tree in Castle?
 * @returns true if we can enter the Tree in Castle.
 */
export const useCastleTree = (): boolean => {
  const inStage = usePlayCastle()
  const blast = useBlast()
  return inStage && blast
}
