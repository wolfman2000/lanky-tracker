import { create, StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'

import { AllSlice } from './common'

import barrierSlice from './barriers'
import coreSlice from './checks'
import consumablesSlice from './consumables'
import fastCheckSlice from './fast-checks'
import hintSlice from './hints'
import levelSlice from './level'
import moveSlice from './moves'
import settingSlice from './settings'
import switchSlice from './switchsanities'

const initializer: StateCreator<AllSlice, [['zustand/persist', unknown]], []> = (...d) => ({
  ...coreSlice(...d),
  ...settingSlice(...d),
  ...levelSlice(...d),
  ...hintSlice(...d),
  ...moveSlice(...d),
  ...consumablesSlice(...d),
  ...switchSlice(...d),
  ...barrierSlice(...d),
  ...fastCheckSlice(...d)
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
