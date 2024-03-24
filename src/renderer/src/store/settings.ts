import { StateCreator } from 'zustand'
import { AllSlice, SettingState, SettingSlice, donkResetFns } from './common'

export const initialSettings: SettingState = {
  cbCount: 40,
  jetpacCount: 15,
  fairyCount: 5,
  bananaportOpen: 1,
  forestDusk: false,
  galleonHighTide: false,
  shopShuffle: true,
  dirtShuffle: false,
  rainbowCoinShuffle: true,
  crownShuffle: true,
  arenaShuffle: false,
  goldBananaShuffle: true,
  blueprintShuffle: true,
  kasplatShuffle: false,
  fairyShuffle: false,
  fairyLocationShuffle: false,
  autoBonus: false,
  companyCoinShuffle: true,
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
  },
  progressiveSwitchStrength: true,
  fastChecks: {
    factoryArcade: true,
    galleonMermaid: true
  },
  hardShooting: false
}

const settingSlice: StateCreator<AllSlice, [], [], SettingSlice> = (set) => {
  donkResetFns.add(() => set(initialSettings))
  return {
    ...initialSettings,
    setCbCount: (to) => set(() => ({ cbCount: to })),
    setSetting: (id, val): void => {
      set((state) => {
        const target: Record<string, boolean | number> = {}
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

export default settingSlice
