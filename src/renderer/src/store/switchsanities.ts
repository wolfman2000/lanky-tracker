import { StateCreator } from 'zustand'
import { AllSlice, SwitchSlice, SwitchState, donkResetFns } from './common'

export const initialSwitches: SwitchState = {
  switchsanitySwitches: {
    freeDiddy: 0,
    freeLanky: 0,
    freeTiny: 0,
    freeChunky: 0,
    islesAztec: 3,
    islesForest: 3,
    islesHelm: 0,
    islesMonkeyport: 0,
    islesTrombone: 2,
    japesSide: 1,
    japesHive: 3,
    japesPainting: 1,
    japesRambi: 0,
    aztecBack: 1,
    aztecBlueprint: 0,
    aztecDeadEnd: 0,
    aztecLlama1: 0,
    aztecLlama3: 3,
    aztecLlama2: 2,
    galleonCannon: 4,
    galleonLighthouse: 0,
    galleonOutskirts: 1,
    forestBean1: 3,
    forestBean2: 4,
    forestOwlTree: 2
  }
}

const switchSlice: StateCreator<AllSlice, [], [], SwitchSlice> = (set) => {
  donkResetFns.add(() => set(initialSwitches))
  return {
    ...initialSwitches,
    setSwitchsanity: (id, val): void => {
      set((state) => {
        const target: Record<string, number> = {}
        target[id] = val
        state = {
          ...state,
          switchsanitySwitches: {
            ...state.switchsanitySwitches,
            ...target
          }
        }
        return state
      })
    }
  }
}

export default switchSlice
