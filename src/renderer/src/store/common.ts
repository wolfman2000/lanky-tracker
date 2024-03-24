// https://stackoverflow.com/a/42021203
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export interface CoreState {
  /**
   * How many pearls were found?
   */
  pearls: IntRange<0, 6>
  /**
   * How many crowns were found?
   */
  crowns: IntRange<0, 11>
  /**
   * Was the Rareware Coin found?
   */
  rareCoin: boolean
  /**
   * Was the Nintendo Coin found?
   */
  nintendoCoin: boolean
  /**
   * How many banana fairies were found?
   */
  fairies: IntRange<0, 21>
  /**
   * How many golden bananas were found?
   */
  goldBananas: IntRange<0, 202>
  /**
   * How many Banana Medals were found?
   */
  bananaMedals: IntRange<0, 41>
  /**
   * How many Rainbow Coins were found?
   */
  rainbowCoins: IntRange<0, 17>
  /**
   * Was Donkey Kong found?
   */
  dk: boolean
  /**
   * Was Diddy Kong found?
   */
  diddy: boolean
  /**
   * Was Lanky Kong found?
   */
  lanky: boolean
  /**
   * Was Tiny Kong found?
   */
  tiny: boolean
  /**
   * Was Chunky Kong found?
   */
  chunky: boolean
  /**
   * Was the Coconut Gun found?
   */
  coconut: boolean
  /**
   * Was the Peanut Popguns found?
   */
  peanut: boolean
  /**
   * Was the Grape Shooter found?
   */
  grape: boolean
  /**
   * Was the Feather Bow found?
   */
  feather: boolean
  /**
   * Was the Pineapple Launcher found?
   */
  pineapple: boolean
  /**
   * Was the Bongo Blast found?
   */
  bongos: boolean
  /**
   * Was the Guitar Gazump found?
   */
  guitar: boolean
  /**
   * Was the Trombone Tremor found?
   */
  trombone: boolean
  /**
   * Was the Saxophone Slam found?
   */
  sax: boolean
  /**
   * Was the Triangle Trample found?
   */
  triangle: boolean
  /**
   * Was the Gorilla Grab found?
   */
  grab: boolean
  /**
   * Was the Chimpy Charge found?
   */
  charge: boolean
  /**
   * Was the Orangstand found?
   */
  stand: boolean
  /**
   * Was Pony Tail Twirl found?
   */
  twirl: boolean
  /**
   * Was the Primate Punch found?
   */
  punch: boolean
  /**
   * Was the Strong Kong found?
   */
  strong: boolean
  /**
   * Was the Rocketbarrel Boost found?
   */
  rocket: boolean
  /**
   * Was Orangstand Sprint found?
   */
  sprint: boolean
  /**
   * Was Mini Monkey found?
   */
  mini: boolean
  /**
   * Was Hunky Chunky found?
   */
  hunky: boolean
  /**
   * Was Baboon Blast found?
   *
   * Some call it Barrel Blast.
   */
  blast: boolean
  /**
   * Was Simian Spring found?
   */
  spring: boolean
  /**
   * Was Baboon Balloon found?
   */
  balloon: boolean
  /**
   * Was Monkeyport found?
   */
  port: boolean
  /**
   * Was Gorilla Gone found?
   */
  gone: boolean
  /**
   * Were any slams found?
   *
   * These are progressive: value of 2 covers values of 1, and 3 covers 1 & 2.
   */
  slam: IntRange<0, 4>
  /**
   * Was the bean found?
   *
   * This is a memetic item, but it has its use.
   */
  bean: boolean
  /**
   * Was diving underwater found?
   */
  dive: boolean
  /**
   * Was orange throwing found?
   */
  orange: boolean
  /**
   * Was barrel throwing found?
   */
  barrel: boolean
  /**
   * Was vine swinging found?
   */
  vine: boolean
  /**
   * Was the sniper scope found?
   */
  sniper: boolean
  /**
   * Was homing ammo found?
   */
  homing: boolean
  /**
   * Was the camera found?
   */
  camera: boolean
  /**
   * Was the shockwave found?
   */
  shockwave: boolean
  /**
   * Which checks have been found at this point?
   */
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
  cbCount: IntRange<0, 101>
  /**
   * How many banana medals for the jetpac check?
   */
  jetpacCount: IntRange<0, 41>
  /**
   * How many fairies for the banana fairy island check?
   */
  fairyCount: IntRange<0, 21>
  /**
   * Which bananaports are open at the start?
   * 0: None
   * 1: Isles
   * 2: All
   */
  bananaportOpen: IntRange<0, 3>
  /**
   * What is the start time for Forest?
   * @todo: Change to multiple options: dawn, night, dusk (combines prev two)
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
   * @todo: See if this should be a range of three instead.
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
  setSetting: (id: string, val: boolean | number) => void
}

export type SettingSlice = SettingState & SettingActions

export interface HintState {
  /**
   * The collection of foolish hints identified within the game.
   */
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
