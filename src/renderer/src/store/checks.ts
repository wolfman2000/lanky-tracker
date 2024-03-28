import { StateCreator } from 'zustand'
import { AllSlice, CheckSlice, CheckState, donkResetFns } from './common'

export const initialChecks: CheckState = {
  checks: {}
}

const coreSlice: StateCreator<AllSlice, [], [], CheckSlice> = (set) => {
  donkResetFns.add(() => set(initialChecks))
  return {
    ...initialChecks,
    setCheck: (id, val) =>
      set((state) => {
        const newKey: Record<number, boolean> = {}
        newKey[id] = val
        state = {
          ...state,
          checks: {
            ...state.checks,
            ...newKey
          }
        }
        return state
      })
  }
}

export default coreSlice
