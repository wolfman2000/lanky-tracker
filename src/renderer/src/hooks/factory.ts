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
 * @returns true if we can enter the Testing Area in Factory.
 */
export const useFactoryTesting = (): boolean => {
  const [slam, removeBarriers] = useDonkStore(
    useShallow((state) => [state.slam, state.removeBarriers])
  )
  const inStage = usePlayFactory()
  return inStage && (removeBarriers.factoryTesting || slam != 0)
}

/**
 * Is the Production Room turned on in Factory?
 * @returns true if the Production Room is on.
 */
export const useFactoryProductionEnabled = (): boolean => {
  const inStage = usePlayFactory()
  const [dk, coconut, grab, removeBarriers] = useDonkStore(
    useShallow((state) => [state.dk, state.coconut, state.grab, state.removeBarriers])
  )
  return inStage && (removeBarriers.factoryProduction || (dk && coconut && grab))
}

/**
 * Can we reach the upper warp pad in the Production Room in Factory?
 * @returns true if we can reach the upper warp pad in the Production Room.
 */
export const useFactoryProductionTop = (): boolean => {
  const inStage = usePlayFactory()
  const factoryOn = useFactoryProductionEnabled()
  const bananaport = useDonkStore(useShallow((state) => state.bananaportOpen))
  return factoryOn || (inStage && bananaport == 2)
}
