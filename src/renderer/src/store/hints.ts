import { StateCreator } from 'zustand'
import { AllSlice, HintSlice, HintState, SelectableRegionValues, donkResetFns } from './common'

export const initialHint: HintState = {
  foolish: {}
}

const hintSlice: StateCreator<AllSlice, [], [], HintSlice> = (set) => {
  donkResetFns.add(() => set(initialHint))
  return {
    ...initialHint,
    setFool: (id, region) =>
      set((state) => {
        const newKey: Record<string, SelectableRegionValues> = {}
        newKey[id] = region
        state = {
          ...state,
          foolish: {
            ...state.foolish,
            ...newKey
          }
        }
        return state
      })
  }
}

export default hintSlice
