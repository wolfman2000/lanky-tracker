import { StateCreator } from 'zustand'
import { AllSlice, SettingSlice, SettingState, donkResetFns } from './common'

export const initialSettings: SettingState = {
  settings: {
    isSwitchsanity: false,
    cbCount: 40,
    shuffleColoredBananas: false,
    progressiveSlams: true,
    helmAccess: 1,
    jetpacCount: 15,
    fairyCount: 5,
    bananaportOpen: 1,
    forestTime: 0,
    galleonHighTide: false,
    shuffleShops: false,
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
    poolCompanyCoins: false,
    poolDrops: false,
    shuffleEnemies: true,
    hardShooting: false,
    openLobbies: false,
    freeTrade: 2,
    balancedRoolPhases: false
  }
}

const settingSlice: StateCreator<AllSlice, [], [], SettingSlice> = (set) => {
  donkResetFns.add(() => set(initialSettings))
  return {
    ...initialSettings,
    setSetting: (id, val): void => {
      set((state) => {
        const target: Record<string, boolean | number> = {}
        target[id] = val
        state = {
          ...state,
          settings: {
            ...state.settings,
            ...target
          }
        }
        return state
      })
    }
  }
}

export default settingSlice
