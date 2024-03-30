import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'

/**
 * How many banana medals do we actually have?
 * @returns our current banana medal count.
 */
export const useBananaMedalCount = (): number =>
  useDonkStore(useShallow((state) => state.consumables.bananaMedals))
