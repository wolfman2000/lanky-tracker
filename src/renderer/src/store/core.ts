import { StateCreator } from 'zustand'
import { AllSlice, CoreSlice, CoreState, donkResetFns } from './common'

export const initialCore: CoreState = {
  balloon: false,
  barrel: false,
  bean: false,
  blast: false,
  bongos: false,
  camera: false,
  charge: false,
  chunky: false,
  coconut: false,
  bananaMedals: 0,
  crowns: 0,
  rainbowCoins: 0,
  diddy: false,
  dive: false,
  dk: false,
  fairies: 0,
  feather: false,
  goldBananas: 0,
  gone: false,
  grab: false,
  grape: false,
  guitar: false,
  homing: false,
  hunky: false,
  lanky: false,
  mini: false,
  nintendoCoin: false,
  orange: false,
  peanut: false,
  pearls: 0,
  pineapple: false,
  port: false,
  punch: false,
  rareCoin: false,
  rocket: false,
  sax: false,
  shockwave: false,
  slam: 0,
  sniper: false,
  spring: false,
  sprint: false,
  stand: false,
  strong: false,
  tiny: false,
  triangle: false,
  trombone: false,
  twirl: false,
  vine: false,
  checks: {}
}

const coreSlice: StateCreator<AllSlice, [], [], CoreSlice> = (set) => {
  donkResetFns.add(() => set(initialCore))
  return {
    ...initialCore,
    setItem: (item, val) =>
      set((state) => {
        const newKey: Record<number, string> = {}
        newKey[item] = val
        state = {
          ...state,
          ...newKey
        }
        return state
      }),
    setCount: (item, val) =>
      set((state) => {
        const newKey: Record<number, string> = {}
        newKey[item] = val
        state = {
          ...state,
          ...newKey
        }
        return state
      }),
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
