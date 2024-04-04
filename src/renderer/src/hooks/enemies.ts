import { useAnyGun, useAnyMusic, useOrange, usePunch, useShockwave } from './kongs'
import { useShuffleEnemies } from './settings'

/**
 * Can you defeat a Zinger?
 * @returns true if you can defeat a Zinger.
 */
export const useDefeatZinger = (): boolean => {
  const anyGun = useAnyGun()
  const anyMusic = useAnyMusic()
  const enemyShuffle = useShuffleEnemies()
  return enemyShuffle || anyGun || anyMusic
}

export const useDefeatBat = (): boolean => useDefeatZinger()

export const useDefeatKosha = (): boolean => {
  const anyMusic = useAnyMusic()
  const shockwave = useShockwave()
  const enemyShuffle = useShuffleEnemies()
  return enemyShuffle || anyMusic || shockwave
}

export const useDefeatKlump = (): boolean => {
  const orange = useOrange()
  const shockwave = useShockwave()
  const anyMusic = useAnyMusic()
  const enemyShuffle = useShuffleEnemies()
  return enemyShuffle || orange || shockwave || anyMusic
}

export const useDefeatKlobber = (): boolean => useDefeatKlump()

export const useDefeatKaboom = (): boolean => useDefeatKlump()

export const useDefeatPurpleKlaptrap = (): boolean => {
  const orange = useOrange()
  const anyMusic = useAnyMusic()
  const enemyShuffle = useShuffleEnemies()
  return enemyShuffle || orange || anyMusic
}

export const useDefeatRoboKremling = (): boolean => {
  const klaptrap = useDefeatKlump()
  const punch = usePunch()
  return klaptrap || punch
}
