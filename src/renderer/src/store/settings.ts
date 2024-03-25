import { StateCreator } from 'zustand'
import { AllSlice, SettingState, SettingSlice, donkResetFns } from './common'

export const initialSettings: SettingState = {
  isSwitchsanity: 0,
  switchsanitySwitches: {
    islesAztec: 3,
    islesForest: 3,
    islesHelm: 0,
    islesMonkeyport: 0,
    islesTrombone: 2,
    japesSide: 1,
    japesHive: 3,
    japesPainting: 1,
    japesRambi: 0,
    aztecBackAccess: 1,
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
    forestOwl: 2
  },
  cbCount: 40,
  coloredBananaShuffle: false,
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
  hardShooting: false,
  openLobbies: false
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
