import useDonkStore from '@renderer/store'
import { BananaportRange } from '@renderer/store/common'
import { useShallow } from 'zustand/react/shallow'

/**
 * How many colored bananas are expected for a check within a stage?
 * @returns the number of colored bananas to collect for a check.
 */
export const useCbCount = (): number => useDonkStore(useShallow((state) => state.settings.cbCount))

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
 * Are the rainbow coins shuffled in the pool, or always kept in dirt spots?
 * @returns true if the rainbow coins are shuffled in the pool.
 */
export const usePoolRainbowCoins = (): boolean =>
  useDonkStore(useShallow((state) => state.settings.poolRainbowCoins))

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
