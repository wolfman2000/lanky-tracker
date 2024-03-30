import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'

/**
 * How many banana medals do we actually have?
 * @returns our current banana medal count.
 */
export const useCurrentBananaMedalCount = (): number =>
  useDonkStore(useShallow((state) => state.consumables.bananaMedals))

/**
 * How many mermaid pearls do we actually have?
 * @returns our current pearl count.
 */
export const useCurrentPearlCount = (): number =>
  useDonkStore(useShallow((state) => state.consumables.pearls))

/**
 * How many banana fairies do we actually have?
 * @returns our current fairy count.
 */
export const useCurrentFairyCount = (): number =>
  useDonkStore(useShallow((state) => state.consumables.fairies))

/**
 * Do we have the one and only memetic bean?
 * @returns true if we have the bean.
 */
export const useBean = (): boolean => useDonkStore(useShallow((state) => state.consumables.bean))
