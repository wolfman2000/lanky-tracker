import useDonkStore from '@renderer/store'
import { usePlayLevel, useSlamLevel } from './isles'
import { useShallow } from 'zustand/react/shallow'

/**
 * Can we play in Frantic Factory?
 * @returns true if we can play in Frantic Factory.
 */
export const usePlayFactory = (): boolean => usePlayLevel('Factory')

/**
 * Can we slam down switches in Frantic Factory?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Frantic Factory.
 */
export const useSlamFactory = (): boolean => useSlamLevel('Factory')

/**
 * Can we access the Testing Area in Factory?
 * @todo Prepare for this barrier being opened at the start in the future.
 * @returns true if we can enter the Testing Area in Factory.
 */
export const useFactoryTesting = (): boolean => {
  const slam = useDonkStore(useShallow((state) => state.slam))
  const inStage = usePlayFactory()
  return slam != 0 && inStage
}

/**
 * Can we climb the Production Room in Factory?
 * @todo Handle the case if fast checks are off (dk & grab)
 * @returns true if we can climb the Production Room in Factory.
 */
export const useFactoryProductionUpper = (): boolean => {
  const inStage = usePlayFactory()
  return inStage
}
