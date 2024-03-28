import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { usePlayLevel, useSlamLevel } from './isles'
import { useCoconut, useGrab, useSlam } from './kongs'

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
 * @returns true if we can enter the Testing Area in Factory.
 */
export const useFactoryTesting = (): boolean => {
  const inStage = usePlayFactory()
  const slam = useSlam()
  const [removeBarriers] = useDonkStore(useShallow((state) => [state.removeBarriers]))
  return inStage && (removeBarriers.factoryTesting || slam)
}

/**
 * Is the Production Room turned on in Factory?
 * @returns true if the Production Room is on.
 */
export const useFactoryProductionEnabled = (): boolean => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const coconut = useCoconut()
  const grab = useGrab()
  const [removeBarriers] = useDonkStore(useShallow((state) => [state.removeBarriers]))
  return inStage && (removeBarriers.factoryProduction || (coconut && grab && testing))
}

/**
 * Can we reach the upper warp pad in the Production Room in Factory?
 * @returns true if we can reach the upper warp pad in the Production Room.
 */
export const useFactoryProductionTop = (): boolean => {
  const inStage = usePlayFactory()
  const factoryOn = useFactoryProductionEnabled()
  const bananaport = useDonkStore(useShallow((state) => state.settings.bananaportOpen))
  return factoryOn || (inStage && bananaport == 2)
}
