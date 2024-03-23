type ParseInt<T extends `t${number}`> = T extends unknown
  ? T extends `t${infer Digit extends number}`
    ? Digit
    : never
  : never

export interface CoreState {
  pearls: number
  crowns: number
  rareCoin: boolean
  nintendoCoin: boolean
  fairies: number
  goldBananas: number
  dk: boolean
  diddy: boolean
  lanky: boolean
  tiny: boolean
  chunky: boolean
  coconut: boolean
  peanut: boolean
  grape: boolean
  feather: boolean
  pineapple: boolean
  bongos: boolean
  guitar: boolean
  trombone: boolean
  sax: boolean
  triangle: boolean
  grab: boolean
  charge: boolean
  stand: boolean
  twirl: boolean
  punch: boolean
  strong: boolean
  rocket: boolean
  sprint: boolean
  mini: boolean
  hunky: boolean
  blast: boolean
  spring: boolean
  balloon: boolean
  port: boolean
  gone: boolean
  slam: number
  bean: boolean
  dive: boolean
  orange: boolean
  barrel: boolean
  vine: boolean
  sniper: boolean
  homing: boolean
  camera: boolean
  shockwave: boolean
  checks: Record<number, boolean>
}

interface CoreActions {
  setItem: (item: string, val: boolean) => void
  setCount: (item: string, val: number) => void
  setCheck: (id: number, val: boolean) => void
}

export type CoreSlice = CoreState & CoreActions

export interface SettingState {
  /**
   * How many colored bananas to get the medal check?
   */
  cbCount: number
  /**
   * How many banana medals for the jetpac check?
   */
  jetpacCount: number
  /**
   * How many fairies for the banana fairy island check?
   */
  fairyCount: number
  /**
   * Which bananaports are open at the start?
   * 0: None
   * 1: Isles
   * 2: All
   */
  bananaportOpen: ParseInt<'t0' | 't1' | 't2'>
  /**
   * What is the start time for Forest?
   *
   * TODO: Change to multiple options: dawn, night, dusk (combines prev two)
   */
  forestDusk: boolean
  /**
   * What is the starting tide in Galleon?
   *
   * Note that this can be a random check.
   */
  galleonHighTide: boolean
  /**
   * Are the shops contents shuffled?
   */
  shopShuffle: boolean
  /**
   * Are the rainbow coins that come from dirt patches shuffled?
   */
  rainbowCoinShuffle: boolean
  /**
   * Are the dirt patches shuffled elsewhere in the levels?
   */
  dirtShuffle: boolean
  /**
   * Are the crowns won from the arenas shuffled?
   */
  crownShuffle: boolean
  /**
   * Are the arena pads shuffled elsewhere in the level?
   */
  arenaShuffle: boolean
  /**
   * Are the gold bananas shuffled?
   */
  goldBananaShuffle: boolean
  /**
   * Are the blueprints held by kasplats shuffled?
   */
  blueprintShuffle: boolean
  /**
   * Are the locations of kasplats shuffled?
   *
   * TODO: See if this should be a range of three instead.
   */
  kasplatShuffle: boolean
  /**
   * Are the items on fairies shuffled?
   */
  fairyShuffle: boolean
  /**
   * Are the locations of fairies shuffled?
   */
  fairyLocationShuffle: boolean
  /**
   * Are bonus barrels automatically completed?
   */
  autoBonus: boolean
  /**
   * Are the Nintendo Coin and Rareware Coin in the pool?
   */
  companyCoinShuffle: boolean
  /**
   * Are any barriers removed before the seed starts?
   */
  removeBarriers: boolean | Record<string, boolean>
  /**
   * Are switches progressive with each level?
   *
   * This depends on level shuffle.
   */
  progressiveSwitchStrength: boolean
  /**
   * Which fast checks are enabled?
   *
   * Only the ones that affect logic should be placed in here.
   */
  fastChecks: boolean | Record<string, boolean>
  /**
   * Are hard shooting checks enabled?
   */
  hardShooting: boolean
}

interface SettingActions {
  setCbCount: (to: number) => void
}

export type SettingSlice = SettingState & SettingActions

export interface HintState {
  foolish: Record<string, SelectableRegionValues>
}

interface HintActions {
  setFool: (id: string, region: SelectableRegionValues) => void
}

export type HintSlice = HintState & HintActions

export type Level =
  | ''
  | 'Isles'
  | 'Japes'
  | 'Aztec'
  | 'Factory'
  | 'Galleon'
  | 'Forest'
  | 'Caves'
  | 'Castle'
  | 'Helm'

export const SelectableRegions = [
  '',
  'Main Isle',
  'Krem Isle',
  'Outer Isles',
  'Japes-Forest Lobbies',
  'Caves-Helm Lobbies',
  'Rareware Banana Room',
  'Isles Shops',
  'Japes Lowlands',
  'Japes Hillside',
  'Japes Caves And Mines',
  'Hive Tunnel Area',
  'Stormy Tunnel Area',
  'Japes Medal Rewards',
  'Japes Shops',
  'Various Aztec Tunnels',
  'Aztec Oasis And Totem Area',
  'Tiny Temple',
  'Llama Temple',
  '5 Door Temple',
  'Aztec Medal Rewards',
  'Aztec Shops',
  'Factory Start',
  'Storage And Arcade',
  'Testing Area',
  'R&D Area',
  'Production Room',
  'Factory Medal Rewards',
  'Factory Shops',
  'Galleon Caverns',
  'Lighthouse Area',
  'Shipyard Outskirts',
  'Treasure Room',
  '5 Door Ship',
  'Galleon Medal Rewards',
  'Galleon Shops',
  'Forest Center And Beanstalk',
  'Forest Mills',
  'Giant Mushroom Exterior',
  'Giant Mushroom Insides',
  'Owl Tree',
  'Forest Medal Rewards',
  'Forest Shops',
  'Main Caves Area',
  'Igloo Area',
  'Cabins Area',
  'Caves Medal Rewards',
  'Caves Shops',
  'Castle Surroundings',
  'Castle Underground',
  'Castle Rooms',
  'Castle Medal Rewards',
  'Castle Shops',
  'Hideout Helm',
  "Troff 'N' Scoff",
  'Jetpac'
] as const

export type SelectableRegionValues = (typeof SelectableRegions)[number]

export interface LevelState {
  level1: Level
  level2: Level
  level3: Level
  level4: Level
  level5: Level
  level6: Level
  level7: Level
  level8: Level
  key1: boolean
  key2: boolean
  key3: boolean
  key4: boolean
  key5: boolean
  key6: boolean
  key7: boolean
  key8: boolean
}

interface LevelActions {
  setLevel: (index: number, name: string) => void
  setKey: (index: number, isSet: boolean) => void
}

export type LevelSlice = LevelState & LevelActions

export type AllSlice = CoreSlice & SettingSlice & LevelSlice & HintSlice

export const donkResetFns = new Set<() => void>()

export const resetAllSlices = (): void => {
  donkResetFns.forEach((resetFn) => {
    resetFn()
  })
}
