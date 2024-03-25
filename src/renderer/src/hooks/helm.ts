import { usePlayLevel, useSlamLevel } from './isles'

/**
 * Can we play in Hideout Helm?
 * @returns true if we can play in Hideout Helm.
 */
export const usePlayHelm = (): boolean => usePlayLevel('Helm')

/**
 * Can we slam down switches in Hideout Helm?
 * @todo Handle both options of the progressive slam setting.
 * @returns true if we can slam switches in Hideout Helm.
 */
export const useSlamHelm = (): boolean => useSlamLevel('Helm')
