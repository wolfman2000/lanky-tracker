import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

/**
 * How many colored bananas are expected for a check within a stage?
 * @returns the number of colored bananas to collect for a check.
 */
export const useCbCount = (): number => useDonkStore((state) => state.settings.cbCount)

/**
 * Is each check containing a bonus barrel auto completed for you?
 *
 * Note that Helm's bonus barrels are not subject to this setting.
 * @returns true if bonus barrels are automatically completed.
 */
export const useAutoBonus = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.autoBonus))
