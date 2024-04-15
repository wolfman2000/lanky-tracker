import { StateCreator } from 'zustand'
import { AllSlice, UiSlice, UiState, donkResetFns } from './common'

export const initialUi: UiState = {
  ui: {
    groupByRegion: false
  }
}

const uiSlice: StateCreator<AllSlice, [], [], UiSlice> = (set) => {
  donkResetFns.add(() => set(initialUi))
  return {
    ...initialUi,
    setUi: (item, val) =>
      set((state) => {
        const newKey: Record<string, boolean> = {}
        newKey[item] = val
        state = {
          ...state,
          ui: {
            ...state.ui,
            ...newKey
          }
        }
        return state
      })
  }
}

export default uiSlice
