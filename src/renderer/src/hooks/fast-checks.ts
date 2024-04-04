import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

/**
 * Can we skip playing the arcade in Factory for the check and just complete the blast course instead?
 * @returns true if playing the arcade machine in Factory is not required for the check.
 */
export const useFastArcade = (): boolean =>
  useDonkStore(useShallow((state) => state.fastChecks.factoryArcade))

/**
 * Does the mermaid only need one pearl for her check, or five?
 * @returns true if the mermaid only needs one pearl.
 */
export const useFastMermaid = (): boolean =>
  useDonkStore(useShallow((state) => state.fastChecks.galleonMermaid))
