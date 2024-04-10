import { StateCreator } from 'zustand'
import { AllSlice, EndingSlice, EndingState, donkResetFns } from './common'

export const initialEndings: EndingState = {
  helm1: 0,
  helm2: 0,
  helm3: 0,
  helm4: 0,
  helm5: 0,
  rool1: 0,
  rool2: 0,
  rool3: 0,
  rool4: 0,
  rool5: 0
}

const endingSlice: StateCreator<AllSlice, [], [], EndingSlice> = (set) => {
  donkResetFns.add(() => set(initialEndings))
  return {
    ...initialEndings,
    setEnd(id, val): void {
      set((state) => {
        const target: Record<string, number> = {}
        target[id] = val
        state = {
          ...state,
          ...target
        }
        return state
      })
    }
  }
}

export default endingSlice
