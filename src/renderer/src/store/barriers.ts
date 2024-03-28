import { StateCreator } from 'zustand'
import { AllSlice, BarrierSlice, BarrierState, donkResetFns } from './common'

export const initialBarriers: BarrierState = {
  removeBarriers: {
    japesCoconutGates: false,
    japesHiveGate: false,
    aztecBack: false,
    aztec5DoorTemple: true,
    aztecLlamaTemple: true,
    factoryProduction: true,
    factoryTesting: false,
    galleonLighthouse: false,
    galleonOutskirts: true,
    galleonSeasick: true,
    forestBeanstalk: false,
    forestOwlTree: false,
    cavesIgloo: true
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
