import { StateCreator } from 'zustand'
import { AllSlice, HintSlice, HintState, SelectableRegionValues, donkResetFns } from './common'

export const initialHint: HintState = {
  foolish: {},
  hoard: {}
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
          },
          hoard: {
            ...state.hoard
          }
        }
        delete state.hoard[id]
        return state
      }),
    setHoard: (id, region) =>
      set((state) => {
        const newKey: Record<string, SelectableRegionValues> = {}
        newKey[id] = region
        state = {
          ...state,
          hoard: {
            ...state.hoard,
            ...newKey
          },
          foolish: {
            ...state.foolish
          }
        }
        delete state.foolish[id]
        return state
      }),
    clearRegion: (id) =>
      set((state) => {
        state = {
          ...state,
          hoard: {
            ...state.hoard
          },
          foolish: {
            ...state.foolish
          }
        }
        delete state.hoard[id]
        delete state.foolish[id]
        return state
      })
  }
}

export default hintSlice
