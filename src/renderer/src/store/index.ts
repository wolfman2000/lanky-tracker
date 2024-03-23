import { create, StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'

import { AllSlice } from './common'
import levelSlice from './level'
import hintSlice from './hints'
import settingSlice from './settings'
import coreSlice from './core'

const initializer: StateCreator<AllSlice, [['zustand/persist', unknown]], []> = (...d) => ({
  ...coreSlice(...d),
  ...settingSlice(...d),
  ...levelSlice(...d),
  ...hintSlice(...d)
})

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
