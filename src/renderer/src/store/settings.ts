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
    forestOwlTree: 2
  },
  cbCount: 40,
  shuffleColoredBananas: false,
  jetpacCount: 15,
  fairyCount: 5,
  bananaportOpen: 1,
  forestTime: 0,
  galleonHighTide: false,
  poolShops: true,
  poolMisc: true,
  poolKeys: true,
  shuffleDirt: false,
  poolRainbowCoins: true,
  poolCrowns: true,
  poolBananaMedals: true,
  shuffleArenas: false,
  poolGoldBananas: true,
  poolToughBananas: true,
  poolBlueprints: true,
  shuffleKasplats: false,
  poolFairies: false,
  poolCrates: false,
  shuffleCrates: false,
  shuffleFairies: false,
  autoBonus: false,
  poolCompanyCoins: true,
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
    },
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

export default settingSlice
