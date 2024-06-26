import { StateCreator } from 'zustand'
import { AllSlice, PresetSlice } from './common'

import { initialBarriers } from './barriers'
import { initialChecks } from './checks'
import { initialConsumables } from './consumables'
import { initialFastChecks } from './fast-checks'
import { initialHint } from './hints'
import { initialLevel } from './level'
import { initialMoves } from './moves'
import { initialSettings } from './settings'
import { initialSwitches } from './switchsanities'
import { initialEndings } from './ending'

const blankPreset = (state: AllSlice): AllSlice => {
  return {
    ...state,
    ...initialLevel,
    ...initialEndings,
    removeBarriers: {
      ...initialBarriers.removeBarriers
    },
    settings: {
      ...initialSettings.settings
    },
    switchsanitySwitches: {
      ...initialSwitches.switchsanitySwitches
    },
    checks: {
      ...initialChecks.checks
    },
    consumables: {
      ...initialConsumables.consumables
    },
    fastChecks: {
      ...initialFastChecks.fastChecks
    },
    foolish: {
      ...initialHint.foolish
    },
    hoard: {
      ...initialHint.hoard
    },
    moves: {
      ...initialMoves.moves
    }
  }
}

const beginnerPreset = (state: AllSlice): AllSlice => {
  const startState = blankPreset(state)
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      forestTime: 0,
      galleonHighTide: false,
      cbCount: 30,
      jetpacCount: 15,
      fairyCount: 4,
      bananaportOpen: 1,
      helmAccess: 1
    },
    moves: {
      ...startState.moves,
      slam: 1,
      camera: true,
      shockwave: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      aztec5DoorTemple: true,
      aztecLlamaTemple: true,
      factoryProduction: true,
      galleonOutskirts: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key3: true,
    key6: true
  }
}

const season2Preset = (state: AllSlice): AllSlice => {
  const startState = blankPreset(state)
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      forestTime: 0,
      galleonHighTide: false,
      cbCount: 40,
      jetpacCount: 15,
      fairyCount: 5,
      bananaportOpen: 1,
      helmAccess: 1
    },
    moves: {
      ...startState.moves,
      slam: 1,
      camera: true,
      shockwave: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      aztec5DoorTemple: true,
      aztecLlamaTemple: true,
      factoryProduction: true,
      galleonOutskirts: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key3: true,
    key6: true
  }
}

const season3Preset = (state: AllSlice): AllSlice => {
  const startState = blankPreset(state)
  return {
    ...startState,
    settings: {
      ...startState.settings,
      poolCrowns: false,
      poolCrates: true,
      poolCompanyCoins: true,
      poolFairies: true,
      progressiveSlams: true,
      forestTime: 0,
      galleonHighTide: true,
      cbCount: 45,
      jetpacCount: 9,
      fairyCount: 4,
      bananaportOpen: 1,
      helmAccess: 1,
      balancedRoolPhases: true
    },
    moves: {
      ...startState.moves,
      slam: 1,
      camera: true,
      shockwave: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      japesCoconutGates: true,
      aztec5DoorTemple: true,
      aztecBack: true,
      factoryProduction: true,
      factoryTesting: true,
      galleonLighthouse: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key3: true
  }
}

const sandboxPreset = (state: AllSlice): AllSlice => {
  const startState = blankPreset(state)
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      poolCompanyCoins: true,
      forestTime: 0,
      galleonHighTide: false,
      cbCount: 40,
      jetpacCount: 15,
      fairyCount: 5,
      bananaportOpen: 1,
      helmAccess: 1,
      shuffleKasplats: true
    },
    moves: {
      ...startState.moves,
      slam: 1
    },
    removeBarriers: {
      ...startState.removeBarriers,
      aztec5DoorTemple: true,
      aztecLlamaTemple: true,
      factoryProduction: true,
      galleonOutskirts: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key6: true,
    key7: true
  }
}

const balancedLzrPreset = (state: AllSlice): AllSlice => {
  const startState = blankPreset(state)
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      poolCompanyCoins: true,
      poolFairies: true,
      poolCrates: true,
      poolDrops: true,
      forestTime: 2,
      galleonHighTide: false,
      cbCount: 40,
      jetpacCount: 8,
      fairyCount: 4,
      bananaportOpen: 1,
      helmAccess: 1
    },
    moves: {
      ...startState.moves,
      slam: 1,
      camera: true,
      shockwave: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      aztec5DoorTemple: true,
      aztecLlamaTemple: true,
      factoryProduction: true,
      galleonOutskirts: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    }
  }
}

const nsakPreset = (state: AllSlice): AllSlice => {
  const startState = blankPreset(state)
  return {
    ...startState,
    settings: {
      ...startState.settings,
      isSwitchsanity: true,
      progressiveSlams: true,
      poolFairies: true,
      poolCrates: true,
      forestTime: 0,
      galleonHighTide: false,
      cbCount: 40,
      jetpacCount: 40,
      fairyCount: 5,
      bananaportOpen: 1,
      helmAccess: 1,
      shuffleColoredBananas: true,
      shuffleKasplats: true
    },
    moves: {
      ...startState.moves,
      slam: 1,
      camera: true,
      shockwave: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      aztec5DoorTemple: true,
      aztecLlamaTemple: true,
      factoryProduction: true,
      galleonOutskirts: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key3: true,
    key6: true
  }
}

const anotherDayPreset = (state: AllSlice): AllSlice => {
  const startState = blankPreset(state)
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: false,
      poolShops: false,
      poolCrowns: false,
      poolBlueprints: false,
      poolBananaMedals: false,
      poolRainbowCoins: false,
      poolMisc: false,
      poolToughBananas: false,
      forestTime: 2,
      galleonHighTide: false,
      cbCount: 75,
      jetpacCount: 15,
      fairyCount: 20,
      bananaportOpen: 0,
      helmAccess: 0,
      shuffleColoredBananas: true,
      shuffleKasplats: true,
      shuffleArenas: true,
      shuffleCrates: true,
      shuffleDirt: true,
      shuffleFairies: true
    },
    moves: {
      ...startState.moves,
      slam: 1,
      barrel: true,
      orange: true,
      vine: true,
      dive: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      aztec5DoorTemple: false,
      aztecLlamaTemple: false,
      factoryProduction: false,
      galleonOutskirts: false,
      galleonSeasick: false,
      cavesIgloo: false
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key3: true,
    key6: true
  }
}

const hitlistPreset = (state: AllSlice): AllSlice => {
  const startState = blankPreset(state)
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      forestTime: 0,
      galleonHighTide: false,
      cbCount: 40,
      jetpacCount: 12,
      fairyCount: 5,
      bananaportOpen: 1,
      helmAccess: 1
    },
    moves: {
      ...startState.moves,
      slam: 1,
      camera: true,
      shockwave: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      aztec5DoorTemple: true,
      aztecLlamaTemple: true,
      factoryProduction: true,
      galleonOutskirts: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key2: true,
    key3: true,
    key4: true,
    key5: true
  }
}

const treasureHurryPreset = (state: AllSlice): AllSlice => {
  const startState = blankPreset(state)
  return {
    ...startState,
    settings: {
      ...startState.settings,
      isSwitchsanity: true,
      progressiveSlams: true,
      poolFairies: true,
      poolCrates: true,
      forestTime: 2,
      galleonHighTide: false,
      cbCount: 50,
      jetpacCount: 8,
      fairyCount: 5,
      bananaportOpen: 1,
      helmAccess: 1,
      shuffleColoredBananas: true,
      shuffleKasplats: true,
      shuffleFairies: true
    },
    moves: {
      ...startState.moves,
      slam: 1,
      camera: true,
      shockwave: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      aztecLlamaTemple: true,
      galleonOutskirts: true,
      galleonSeasick: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key3: true,
    key6: true
  }
}

const kevinPreset = (state: AllSlice): AllSlice => {
  const startState = blankPreset(state)
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      poolCompanyCoins: true,
      poolFairies: true,
      poolCrates: true,
      forestTime: 2,
      galleonHighTide: true,
      cbCount: 40,
      jetpacCount: 10,
      fairyCount: 5,
      bananaportOpen: 1,
      helmAccess: 1
    },
    moves: {
      ...startState.moves,
      slam: 1,
      camera: true,
      shockwave: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      aztec5DoorTemple: true,
      aztecLlamaTemple: true,
      factoryProduction: true,
      galleonOutskirts: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key3: true,
    key6: true,
    key7: true
  }
}

const bountyHunterPreset = (state: AllSlice): AllSlice => {
  const startState = blankPreset(state)
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      poolCompanyCoins: true,
      poolFairies: true,
      poolCrates: true,
      poolDrops: true,
      forestTime: 0,
      galleonHighTide: false,
      cbCount: 40,
      jetpacCount: 10,
      fairyCount: 5,
      bananaportOpen: 1,
      helmAccess: 0,
      shuffleFairies: true,
      shuffleColoredBananas: true
    },
    moves: {
      ...startState.moves
    },
    removeBarriers: {
      ...startState.removeBarriers,
      japesCoconutGates: true,
      aztec5DoorTemple: true,
      aztecLlamaTemple: true,
      factoryTesting: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true
    }
  }
}

const radicalSloPreset = (state: AllSlice): AllSlice => {
  const startState = blankPreset(state)
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      poolCrowns: false,
      poolCompanyCoins: true,
      poolFairies: true,
      poolCrates: true,
      shuffleShops: true,
      forestTime: 2,
      galleonHighTide: true,
      cbCount: 40,
      jetpacCount: 8,
      fairyCount: 4,
      bananaportOpen: 1,
      helmAccess: 1
    },
    moves: {
      ...startState.moves,
      slam: 1,
      camera: true,
      shockwave: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      japesCoconutGates: true,
      aztec5DoorTemple: true,
      aztecBack: true,
      factoryProduction: true,
      factoryTesting: true,
      galleonLighthouse: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key3: true
  }
}

const s3AllKeysPreset = (state: AllSlice): AllSlice => {
  const startState = blankPreset(state)
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      poolCrowns: false,
      poolRainbowCoins: false,
      poolCompanyCoins: true,
      poolFairies: true,
      poolCrates: true,
      forestTime: 2,
      galleonHighTide: true,
      cbCount: 40,
      jetpacCount: 8,
      fairyCount: 4,
      bananaportOpen: 1,
      helmAccess: 1
    },
    moves: {
      ...startState.moves,
      slam: 1
    },
    removeBarriers: {
      ...startState.removeBarriers,
      japesCoconutGates: true,
      aztec5DoorTemple: true,
      aztecBack: true,
      factoryProduction: true,
      factoryTesting: true,
      galleonLighthouse: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key3: true,
    key6: true
  }
}

const s3Clo = (state: AllSlice): AllSlice => {
  const startState = blankPreset(state)
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      poolBananaMedals: false,
      poolFairies: true,
      poolCrates: true,
      forestTime: 2,
      cbCount: 40,
      fairyCount: 4,
      jetpacCount: 15,
      bananaportOpen: 1,
      helmAccess: 1
    },
    moves: {
      ...startState.moves,
      slam: 1,
      vine: true,
      dive: true,
      camera: true,
      shockwave: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      japesCoconutGates: true,
      aztec5DoorTemple: true,
      aztecBack: true,
      factoryProduction: true,
      factoryTesting: true,
      galleonLighthouse: true,
      galleonOutskirts: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true
  }
}

const s3Traditionalist = (state: AllSlice): AllSlice => {
  const startState = blankPreset(state)
  return {
    ...startState,
    settings: {
      ...startState.settings,
      progressiveSlams: true,
      poolFairies: true,
      poolCrates: true,
      poolCompanyCoins: true,
      forestTime: 0,
      galleonHighTide: true,
      cbCount: 40,
      jetpacCount: 15,
      fairyCount: 5,
      bananaportOpen: 1,
      helmAccess: 1
    },
    moves: {
      ...startState.moves,
      slam: 1,
      camera: true,
      shockwave: true
    },
    removeBarriers: {
      ...startState.removeBarriers,
      japesCoconutGates: true,
      aztec5DoorTemple: true,
      aztecBack: true,
      factoryProduction: true,
      factoryTesting: true,
      galleonLighthouse: true,
      galleonSeasick: true,
      cavesIgloo: true
    },
    fastChecks: {
      ...startState.fastChecks,
      factoryArcade: true,
      galleonMermaid: true
    },
    key1: true,
    key3: true,
    key6: true
  }
}

const presetSlice: StateCreator<AllSlice, [], [], PresetSlice> = (set) => {
  return {
    setPreset(id): void {
      return set((state) => {
        switch (id) {
          case 'beginner':
            return beginnerPreset(state)
          case 's2':
            return season2Preset(state)
          case 's3':
            return season3Preset(state)
          case 'sandbox':
            return sandboxPreset(state)
          case 'balancedLzr':
            return balancedLzrPreset(state)
          case 'nsak':
            return nsakPreset(state)
          case 'anotherDay':
            return anotherDayPreset(state)
          case 'hitlist':
            return hitlistPreset(state)
          case 'treasureHurry':
            return treasureHurryPreset(state)
          case 'kevin':
            return kevinPreset(state)
          case 'bountyHunter':
            return bountyHunterPreset(state)
          case 'radicalSlo':
            return radicalSloPreset(state)
          case 's3allKeys':
            return s3AllKeysPreset(state)
          case 's3Clo':
            return s3Clo(state)
          case 's3Traditionalist':
            return s3Traditionalist(state)
          default:
            return state
        }
      })
    }
  }
}

export default presetSlice
