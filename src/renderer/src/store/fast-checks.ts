import { StateCreator } from 'zustand'
import { AllSlice, FastCheckSlice, FastCheckState, donkResetFns } from './common'

export const initialFastChecks: FastCheckState = {
  fastChecks: {
    factoryArcade: true,
    galleonMermaid: true
  }
}

const fastCheckSlice: StateCreator<AllSlice, [], [], FastCheckSlice> = (set) => {
  donkResetFns.add(() => set(initialFastChecks))
  return {
    ...initialFastChecks,
    setFastCheck: (id, val): void => {
      set((state) => {
        const target: Record<string, boolean> = {}
        target[id] = val
        state = {
          ...state,
          fastChecks: {
            ...state.fastChecks,
            ...target
          }
        }
        return state
      })
    }
  }
}

export default fastCheckSlice
