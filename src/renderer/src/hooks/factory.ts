import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { usePlayLevel, useSlamLevel } from './isles'
import { useCoconut, useDiddy, useGrab, useSlam, useTiny } from './kongs'
import { useBananaportAll } from './settings'
import { LogicBool } from './world'

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
 * Can we get on the top platform where the power hut resides in Factory?
 * @returns true if we can get on the platform with the power hut.
 */
export const useFactoryHut = (): LogicBool => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const diddy = useDiddy()
  const tiny = useTiny()
  return {
    in: testing,
    out: inStage && (diddy || tiny)
  }
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
  const warpAll = useBananaportAll()
  return factoryOn || (inStage && warpAll)
}
