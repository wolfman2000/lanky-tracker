import { usePlayLevel, useSlamLevel } from '../isles'
import { useAnyMusic, useBlast, useGone, usePineapple, usePunch, useTriangle } from '../kongs'
import { LogicBool } from '../world'

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

/**
 * Can the enemies in the shed be defeated?
 * @returns true if the enemies in the shed can be defeated.
 */
export const useCastleShedEnemies = (): LogicBool => {
  const inStage = usePlayCastle()
  const punch = usePunch()
  const triangle = useTriangle()
  const gone = useGone()
  const pineapple = usePineapple()
  const anyMusic = useAnyMusic()
  return {
    in: inStage && punch && (triangle || (gone && pineapple)),
    out: inStage && punch && anyMusic
  }
}
