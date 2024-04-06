// https://stackoverflow.com/a/42021203
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

type PearlRange = IntRange<0, 6>
type BlueprintRange = IntRange<0, 9>
type CrownRange = IntRange<0, 11>
type FairyRange = IntRange<0, 21>
type ColoredBananaRange = IntRange<0, 101>
export type GoldBananaRange = IntRange<0, 202>
type BananaMedalRange = IntRange<0, 41>
type RainbowCoinRange = IntRange<0, 17>
type SlamRange = IntRange<0, 4>
export type BananaportRange = IntRange<0, 3>
export type KongRange = IntRange<0, 5>

export const nameof = <T>(name: Extract<keyof T, string>): string => name

//#region Moves
interface MoveCollection {
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
   * Were any slams found?
   *
   * These are progressive: value of 2 covers values of 1, and 3 covers 1 & 2.
   */
  slam: SlamRange
}

export interface MoveState {
  moves: MoveCollection
}

interface MoveActions {
  setMove: (item: string, val: boolean) => void
  setSlam: (val: number) => void
}

export type MoveSlice = MoveState & MoveActions
//#endregion

//#region Consumables
interface ConsumablesCollection {
  /**
   * How many pearls were found?
   */
  pearls: PearlRange
  /**
   * How many crowns were found?
   */
  crowns: CrownRange
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
  fairies: FairyRange
  /**
   * How many golden bananas were found?
   */
  goldBananas: GoldBananaRange
  /**
   * How many Banana Medals were found?
   */
  bananaMedals: BananaMedalRange
  /**
   * How many Rainbow Coins were found?
   */
  rainbowCoins: RainbowCoinRange
  /**
   * Was the bean found?
   *
   * This is a memetic item, but it has its use.
   */
  bean: boolean
  dkBp: BlueprintRange
  diddyBp: BlueprintRange
  lankyBp: BlueprintRange
  tinyBp: BlueprintRange
  chunkyBp: BlueprintRange
}

export interface ConsumablesState {
  consumables: ConsumablesCollection
}

interface ConsumablesActions {
  setConsumable: (item: string, val: boolean | number) => void
}

export type ConsumablesSlice = ConsumablesState & ConsumablesActions
//#endregion

//#region Checks
export interface CheckState {
  /**
   * Which checks have been found at this point?
   */
  checks: Record<number, boolean>
}

interface CheckActions {
  setCheck: (id: number, val: boolean) => void
}

export type CheckSlice = CheckState & CheckActions
//#endregion

//#region Switchsanity
export interface SwitchsanitySwitches {
  /**
   * What instrument is needed to reveal the Rocket barrel in Isles?
   */
  islesTrombone: KongRange
  /**
   * What instrument is needed to open the hint room in the Aztec Lobby?
   *
   * This is only relevant in kasplat or hint shuffle I think.
   */
  islesAztec: KongRange
  /**
   * What gun is needed to reveal the banana fairy in the Forest lobby?
   */
  islesForest: KongRange
  /**
   * What pad move is needed to get to the very top of Krem Isle?
   * 0: Monkeyport
   * 1: Baboon Blast
   * 2: Baboon Balloon
   */
  islesMonkeyport: BananaportRange
  /**
   * What move or instrument is needed to reveal the vines to access Helm?
   */
  islesHelm: IntRange<0, 8>
  /**
   * What gun is needed to access the hive area?
   *
   * If all bananaports are pre-activated, this check is superfluous.
   */
  japesHive: KongRange
  /**
   * What gun is needed to access the Rambi cage?
   */
  japesRambi: KongRange
  /**
   * What gun is needed to access the Painting Room?
   */
  japesPainting: KongRange
  /**
   * What gun is needed to access the side room in the Tunnel?
   */
  japesSide: KongRange
  /**
   * What gun is needed to access the early Kasplat?
   */
  aztecBlueprint: KongRange
  /**
   * What is the 1st possible gun to access the Llama Temple?
   */
  aztecLlama1: KongRange
  /**
   * What is the 2nd possible gun to access the Llama Temple?
   */
  aztecLlama2: KongRange
  /**
   * What is the 3rd possible gun to access the Llama Temple?
   */
  aztecLlama3: KongRange
  /**
   * Which Kong is necessary to access the Dead End tunnel in the back of Aztec?
   */
  aztecDeadEnd: KongRange
  /**
   * Which instrument is needed to access the back half of Aztec?
   */
  aztecBack: KongRange
  /**
   * Which gun is needed to access the lighthouse area in Galleon?
   */
  galleonLighthouse: KongRange
  /**
   * Which gun is needed to access the outskirts area in Galleon?
   */
  galleonOutskirts: KongRange
  /**
   * Which gun is needed to access the cannon game in Galleon?
   */
  galleonCannon: KongRange
  /**
   * Which gun is needed to access the Owl Tree area in Forest?
   */
  forestOwlTree: KongRange
  /**
   * What is the first gun needed to access the Beanstalk area in Forest?
   *
   * If all bananawarps are pre-activated, this check is pointless.
   */
  forestBean1: KongRange
  /**
   * What is the second gun needed to access the Beanstalk area in Forest?
   *
   * If all bananawarps are pre-activated, this check is pointless.
   */
  forestBean2: KongRange
}

export interface SwitchState {
  /**
   * The collection of switches that can be randomized.
   *
   * These are pre-filled with the normal values to keep the logic sane.
   */
  switchsanitySwitches: SwitchsanitySwitches
}

interface SwitchActions {
  setSwitchsanity: (id: keyof SwitchsanitySwitches, val: number) => void
}

export type SwitchSlice = SwitchState & SwitchActions
//#endregion

//#region Fast Checks
interface FastCheckCollection {
  /**
   * Can the arcade game be skipped for Round 1?
   */
  factoryArcade: boolean
  /**
   * Can we turn in only one Pearl instead of five?
   *
   * @todo Watch this setting in the future: some folks want three.
   */
  galleonMermaid: boolean
}

export interface FastCheckState {
  fastChecks: FastCheckCollection
}

interface FastCheckActions {
  setFastCheck: (id: string, val: boolean) => void
}

export type FastCheckSlice = FastCheckState & FastCheckActions

//#endregion

//#region Barriers to Remove
interface RemoveBarriers {
  /**
   * Are the gates leading to the hillside tunnels already opened?
   */
  japesCoconutGates: boolean
  /**
   * Is the gate leading to the hive opened?
   */
  japesHiveGate: boolean
  /**
   * Is the back of Aztec available without needing an instrument?
   */
  aztecBack: boolean
  /**
   * Is the 5 door temple already opened without feeding a totem?
   */
  aztec5DoorTemple: boolean
  /**
   * Is the Llama temple available for the three chosen Kongs?
   */
  aztecLlamaTemple: boolean
  /**
   * Is the Production room already turned on?
   */
  factoryProduction: boolean
  /**
   * Can you immediately go into Testing?
   */
  factoryTesting: boolean
  /**
   * Is accessing the Lighthouse already possible?
   */
  galleonLighthouse: boolean
  /**
   * Are the Galleon Outskirts already opened?
   */
  galleonOutskirts: boolean
  /**
   * Is the Galleon Seasick ship already out?
   */
  galleonSeasick: boolean
  /**
   * Is planting the bean immediately possible?
   */
  forestBeanstalk: boolean
  /**
   * Is the owl tree gate opened immediately?
   */
  forestOwlTree: boolean
  /**
   * Is the igloo open for music instruments right away?
   *
   * If not, Rocket is required.
   */
  cavesIgloo: boolean
}

export interface BarrierState {
  /**
   * Are any barriers removed before the seed starts?
   */
  removeBarriers: RemoveBarriers
}

interface BarrierActions {
  setBarrier: (id: string, val: boolean) => void
}

export type BarrierSlice = BarrierState & BarrierActions
//#endregion

//#region General Settings
interface SettingCollection {
  /**
   * Is Switchsanity turned on? Do we have to worry about this complex logic?
   */
  isSwitchsanity: boolean
  /**
   * How many colored bananas to get the medal check?
   */
  cbCount: ColoredBananaRange
  /**
   * How many banana medals for the jetpac check?
   */
  jetpacCount: BananaMedalRange
  /**
   * How many fairies for the banana fairy island check?
   */
  fairyCount: FairyRange
  /**
   * Which bananaports are open at the start?
   * 0: None
   * 1: Isles
   * 2: All
   */
  bananaportOpen: BananaportRange
  /**
   * What time do we start in forest?
   * 0: Day
   * 1: Night
   * 2: Dusk (power of both Day and Night)
   */
  forestTime: BananaportRange
  /**
   * What is the starting tide in Galleon?
   *
   * Note that this can be a random check.
   */
  galleonHighTide: boolean
  /**
   * How far do we start in Helm?
   * 0: Very Beginning
   * 1: Machine Area
   * 2: Doors at Top
   */
  helmAccess: BananaportRange
  /**
   * Are the slam switch strengths progressive based on the shuffled lobby location?
   */
  progressiveSlams: boolean
  /**
   * Are the shops contents shuffled?
   */
  poolShops: boolean
  /**
   * Are the colored bananas shuffled?
   */
  shuffleColoredBananas: boolean
  /**
   * Are the rainbow coins that come from dirt patches shuffled?
   */
  poolRainbowCoins: boolean
  /**
   * Are the banana medal rewards for collecting enough colored bananas shuffled?
   */
  poolBananaMedals: boolean
  /**
   * Are the dirt patches shuffled elsewhere in the levels?
   */
  shuffleDirt: boolean
  /**
   * Are the crowns won from the arenas shuffled?
   */
  poolCrowns: boolean
  /**
   * Are the misc items (pearls nad beans) shuffled?
   */
  poolMisc: boolean
  /**
   * Are the melon crate contents shuffled?
   */
  poolCrates: boolean
  /**
   * Are the physical melon crates themselves shuffled?
   */
  shuffleCrates: boolean
  /**
   * Are the arena pads shuffled elsewhere in the level?
   */
  shuffleArenas: boolean
  /**
   * Are the golden bananas shuffled?
   *
   * This does not include the tough golden bananas.
   */
  poolGoldBananas: boolean
  /**
   * Are the golden bananas considered to be tougher than normal shuffled?
   */
  poolToughBananas: boolean
  /**
   * Are the blueprints held by kasplats shuffled?
   */
  poolBlueprints: boolean
  /**
   * Are the locations of kasplats shuffled?
   *
   * @todo: See if this should be a range of three instead.
   */
  shuffleKasplats: boolean
  /**
   * Are the items on fairies shuffled?
   */
  poolFairies: boolean
  /**
   * Are the locations of fairies shuffled?
   */
  shuffleFairies: boolean
  /**
   * Are bonus barrels automatically completed?
   */
  autoBonus: boolean
  /**
   * Are the Nintendo Coin and Rareware Coin in the shuffle?
   */
  poolCompanyCoins: boolean
  /**
   * Are the boss keys shuffled?
   */
  poolKeys: boolean
  /**
   * Are enemy drops in the pool?
   */
  poolDrops: boolean
  /**
   * Are the enemies shuffled amongst themselves?
   */
  shuffleEnemies: boolean
  /**
   * Are hard shooting checks enabled?
   */
  hardShooting: boolean
  /**
   * Are the lobbies already opened without needing to find a key?
   *
   * Note that all keys are still required to fight K. Rool.
   */
  openLobbies: boolean
}

export interface SettingState {
  settings: SettingCollection
}

interface SettingActions {
  setSetting: (id: string, val: boolean | number) => void
}

export type SettingSlice = SettingState & SettingActions
//#endregion

//#region Hints
export interface HintState {
  /**
   * The collection of foolish hints identified within the game.
   */
  foolish: Record<string, SelectableRegionValues>
  hoard: Record<string, SelectableRegionValues>
}

interface HintActions {
  setFool: (id: string, region: SelectableRegionValues) => void
  setHoard: (id: string, region: SelectableRegionValues) => void
  clearRegion: (id: string) => void
}

export type HintSlice = HintState & HintActions
//#endregion

//#region Presets
export type Preset =
  | 'beginner'
  | 's2'
  | 'sandbox'
  | 'balancedLzr'
  | 'nsak'
  | 'anotherDay'
  | 'hitlist'
  | 'treasureHurry'
  | 'kevin'
  | 'bountyHunter'
  | 'radicalSlo'
  | 's3allKeys'

export type PresetSlice = {
  setPreset: (id: Preset) => void
}

//#endregion

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
  setLevel: (index: number, name: Level) => void
  setKey: (index: number, isSet: boolean) => void
}

export type LevelSlice = LevelState & LevelActions

export type AllSlice = CheckSlice &
  MoveSlice &
  ConsumablesSlice &
  SwitchSlice &
  BarrierSlice &
  SettingSlice &
  LevelSlice &
  HintSlice &
  FastCheckSlice &
  PresetSlice

export const donkResetFns = new Set<() => void>()

export const resetAllSlices = (): void => {
  donkResetFns.forEach((resetFn) => {
    resetFn()
  })
}
