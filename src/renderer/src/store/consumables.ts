import { StateCreator } from 'zustand'
import { AllSlice, ConsumablesSlice, ConsumablesState, donkResetFns } from './common'

export const initialConsumables: ConsumablesState = {
  consumables: {
    bean: false,
    bananaMedals: 0,
    crowns: 0,
    rainbowCoins: 0,
    fairies: 0,
    goldBananas: 0,
    nintendoCoin: false,
    pearls: 0,
    rareCoin: false
  }
}

const consumablesSlice: StateCreator<AllSlice, [], [], ConsumablesSlice> = (set) => {
  donkResetFns.add(() => set(initialConsumables))
  return {
    ...initialConsumables,
    setConsumable: (item, val) =>
      set((state) => {
        const newKey: Record<string, boolean | number> = {}
        newKey[item] = val
        state = {
          ...state,
          consumables: {
            ...state.consumables,
            ...newKey
          }
        }
        return state
      })
  }
}

export default consumablesSlice
