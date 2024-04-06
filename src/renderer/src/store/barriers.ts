import { StateCreator } from 'zustand'
import { AllSlice, BarrierSlice, BarrierState, donkResetFns } from './common'

export const initialBarriers: BarrierState = {
  removeBarriers: {
    japesCoconutGates: false,
    japesHiveGate: false,
    aztecBack: false,
    aztec5DoorTemple: false,
    aztecLlamaTemple: false,
    factoryProduction: false,
    factoryTesting: false,
    galleonLighthouse: false,
    galleonOutskirts: false,
    galleonSeasick: false,
    forestBeanstalk: false,
    forestOwlTree: false,
    cavesIgloo: false
  }
}

const barrierSlice: StateCreator<AllSlice, [], [], BarrierSlice> = (set) => {
  donkResetFns.add(() => set(initialBarriers))
  return {
    ...initialBarriers,
    setBarrier: (id, val): void => {
      set((state) => {
        const target: Record<string, boolean> = {}
        target[id] = val
        state = {
          ...state,
          removeBarriers: {
            ...state.removeBarriers,
            ...target
          }
        }
        return state
      })
    }
  }
}

export default barrierSlice
