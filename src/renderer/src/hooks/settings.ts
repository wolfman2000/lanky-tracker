import useDonkStore from '@renderer/store'
import { BananaportRange } from '@renderer/store/common'
import { useShallow } from 'zustand/react/shallow'

/**
 * What time is it in Fungi Forest?
 * @returns The current time in Forest.
 */
export const useForestTime = (): BananaportRange =>
  useDonkStore(useShallow((state) => state.settings.forestTime))

/**
 * Does the Galleon tide start at high tide instead of the vanilla low tide?
 * @returns true if the tide starts as high tide.
 */
export const useGalleonTideStartHigh = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.galleonHighTide))

/**
 * Is Switchsanity enabled? It can cause lots of chaos with the logic!
 * @returns true if Switchsanity is enabled.
 */
export const useIsSwitchsanity = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.isSwitchsanity))

/**
 * Are the lobbies open at the start of the game, with keys only being needed for K. Rool?
 * @returns true if the lobbies are already open without needing keys.
 */
export const useOpenLobbies = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.openLobbies))

/**
 * Is the Hard Shooting flag enabled, requiring harder shots without helpful tools?
 * @returns true if harder shot tricks are expected.
 */
export const useHardShooting = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.hardShooting))

/**
 * Does each level's slam requirement get higher the further in the game we are?
 *
 * This depends on Lobby Shuffle: the lobbies in 5 onward require Super, and 7 onward require Super Duper.
 * @returns true if the slam switches get more progressive.
 */
export const useProgressiveSlams = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.progressiveSlams))

/**
 * How many colored bananas are expected for a check within a stage?
 * @returns the number of colored bananas to collect for a check.
 */
export const useCbCount = (): number => useDonkStore(useShallow((state) => state.settings.cbCount))

/**
 * How many banana fairies do we require for the Banana Fairy Island (BFI) check?
 * @returns the number of banana fairies to have for the BFI check.
 */
export const useFairyCount = (): number =>
  useDonkStore(useShallow((state) => state.settings.fairyCount))

/**
 * How many banana medals do we need for the Jetpac check?
 * @returns The number of banana medals for Jetpac.
 */
export const useJetpacCount = (): number =>
  useDonkStore(useShallow((state) => state.settings.jetpacCount))

/**
 * Is each check containing a bonus barrel auto completed for you?
 *
 * Note that Helm's bonus barrels are not subject to this setting.
 * @returns true if bonus barrels are automatically completed.
 */
export const useAutoBonus = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.autoBonus))

/**
 * What is the status of the bananaports at the beginning of the game?
 * @returns the bananaport setting value.
 */
export const useBananaport = (): BananaportRange =>
  useDonkStore(useShallow((state) => state.settings.bananaportOpen))

/**
 * Can we warp using all of the bananaports immediately upon entering a level?
 * @returns true if we can warp all over within the levels immediately.
 */
export const useBananaportAll = (): boolean => useBananaport() == 2

/**
 * Where do we start Helm?
 * @returns The starting position of Helm.
 */
export const useHelmStartPosition = (): BananaportRange =>
  useDonkStore(useShallow((state) => state.settings.helmAccess))

/**
 * Are the melon crates shuffled in this seed?
 * @returns true if the melon crates are shuffled.
 */
export const useShuffleCrates = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.shuffleCrates))

/**
 * Are the shop items in the rando pool?
 * @returns true if the shops are in the pool.
 */
export const usePoolShops = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolShops))

/**
 * Are the tough golden bananas in the rando pool?
 * @returns true if the tough golden bananas are in the pool.
 */
export const usePoolToughBananas = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolToughBananas))

/**
 * Are the miscellaneous items in the rando pool?
 * @returns true if the misc. items are in the pool.
 */
export const usePoolMisc = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolMisc))

/**
 * Are the blueprints the Kasplats hold in the rando pool?
 * @returns true if the blueprints are in the pool.
 */
export const usePoolBlueprints = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolBlueprints))

/**
 * Are the banana fairies in the rando pool?
 * @returns true if the fairies are in the pool.
 */
export const usePoolFairies = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolFairies))

/**
 * Is Dropsanity turned on? That is, can enemy drops contain checks?
 * @returns true if drops from enemies are enabled.
 */
export const usePoolDrops = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolDrops))

/**
 * Are the enemies (potentially) different from their defaults?
 *
 * @returns true if the enemies are shuffled.
 */
export const useShuffleEnemies = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.shuffleEnemies))

/**
 * Do we shuffle where each colored banana, banana bunch, and banana balloon is located?
 * @returns true if we do shuffle the colored banana locations.
 */
export const useShuffleColoredBananas = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.shuffleColoredBananas))

/**
 * Are the boss keys in the rando pool?
 * @returns true if the keys are in the pool.
 */
export const usePoolKeys = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolKeys))

/**
 * Are the melon crates in the rando pool?
 * @returns true if the crates are in the pool.
 */
export const usePoolCrates = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolCrates))

/**
 * Are the rainbow coins shuffled in the pool, or always kept in dirt spots?
 * @returns true if the rainbow coins are shuffled in the pool.
 */
export const usePoolRainbowCoins = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolRainbowCoins))

/**
 * Are the battle crowns in the rando pool?
 * @returns true if the crowns are in the pool.
 */
export const usePoolCrowns = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolCrowns))

/**
 * Are the banana medals in the rando pool?
 * @returns true if the banana medals are in the pool.
 */
export const usePoolBananaMedals = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolBananaMedals))

/**
 * Are the company coins in the rando pool?
 * @returns true if the company coins are in the pool.
 */
export const usePoolCompanyCoins = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolCompanyCoins))

/**
 * Are the dirt locations shuffled around in this seed?
 * @returns true if the dirt locations are shuffled this seed.
 */
export const useShuffleDirt = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.shuffleDirt))

/**
 * Are the fairy locations shuffled around in this seed?
 * @returns true if the fairy locations are shuffled this seed.
 */
export const useShuffleFairies = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.shuffleFairies))

/**
 * Are the Kasplat locations shuffled around in this seed?
 * @returns true if the Kasplat locations are shuffled this seed.
 */
export const useShuffleKasplats = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.shuffleKasplats))

export const useShuffledArenas = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.shuffleArenas))

export const useShuffledShops = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.shuffleShops))
