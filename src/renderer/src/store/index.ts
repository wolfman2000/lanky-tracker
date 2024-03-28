import { create, StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'

import { AllSlice } from './common'
import coreSlice from './checks'
import hintSlice from './hints'
import levelSlice from './level'
import settingSlice from './settings'
import moveSlice from './moves'
import consumablesSlice from './consumables'
import switchSlice from './switchsanities'
import barrierSlice from './barriers'

const initializer: StateCreator<AllSlice, [['zustand/persist', unknown]], []> = (...d) => ({
  ...coreSlice(...d),
  ...settingSlice(...d),
  ...levelSlice(...d),
  ...hintSlice(...d),
  ...moveSlice(...d),
  ...consumablesSlice(...d),
  ...switchSlice(...d),
  ...barrierSlice(...d)
})

/**
 * Access the Donk store to both view and manage state.
 */
const useDonkStore = create<AllSlice>()(
  persist(initializer, {
    name: 'donk-storage' /*,
    onRehydrateStorage: (state) => {
      console.log('hydration starts')

      // optional
      return (state, error): void => {
        if (error) {
          console.log('an error happened during hydration', error)
        } else {
          console.log('hydration finished')
        }
      }
    }
    */
  })
)

export default useDonkStore
