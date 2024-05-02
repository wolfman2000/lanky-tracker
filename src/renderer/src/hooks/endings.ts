import useDonkStore from '@renderer/store'
import {
  useBarrel,
  useBlast,
  useBongos,
  useDk,
  useFeather,
  useGone,
  useGuitar,
  useHunky,
  useMini,
  useOrange,
  usePeanut,
  usePunch,
  useRocket,
  useSax,
  useSlam,
  useSuperSlam,
  useTriangle,
  useTrombone
} from './kongs'
import { useShallow } from 'zustand/react/shallow'
import { LogicBool } from './world'
import { useBalancedRoolPhase } from './settings'

export const useSingleHelmCheck = (val: number): boolean => {
  const dk = useBongos()
  const diddy = useGuitar()
  const lanky = useTrombone()
  const tiny = useSax()
  const chunky = useTriangle()
  const check = useDonkStore(useShallow((state) => state['helm' + val]))

  switch (check) {
    case 1:
      return dk
    case 2:
      return diddy
    case 3:
      return lanky
    case 4:
      return tiny
    case 5:
      return chunky
    default:
      return true
  }
}

export const useSingleHelmNum = (val: number): number => {
  const check = useDonkStore(useShallow((state) => state['helm' + val]))
  switch (check) {
    case 1:
      return 1
    case 2:
      return 2
    case 3:
      return 3
    case 4:
      return 4
    case 5:
      return 5
    default:
      return 0
  }
}

export const useSingleRoolCheck = (val: number): LogicBool => {
  const balancedRool = useBalancedRoolPhase()
  const dk = useDk()
  const blast = useBlast()
  const peanut = usePeanut()
  const diddy = useRocket() && peanut
  const barrel = useBarrel()
  const lanky = useTrombone() && barrel
  const mini = useMini()
  const orange = useOrange()
  const feather = useFeather()
  const tiny = feather && mini
  const tinyBreak = orange && mini
  const slam = useSlam()
  const superSlam = useSuperSlam()
  const gone = useGone()
  const punch = usePunch()
  const chunky = useHunky() && (balancedRool ? slam : superSlam) && gone && punch
  const check = useDonkStore(useShallow((state) => state['rool' + val]))

  switch (check) {
    case 1:
      return {
        in: dk && (!balancedRool || blast)
      }
    case 2:
      return {
        in: diddy
      }
    case 3:
      return {
        in: lanky
      }
    case 4:
      return {
        in: tiny,
        out: tinyBreak
      }
    case 5:
      return {
        in: chunky
      }
    default:
      return { in: true }
  }
}

export const useSingleRoolNum = (val: number): number => {
  const check = useDonkStore(useShallow((state) => state['rool' + val]))
  switch (check) {
    case 1:
      return 1
    case 2:
      return 2
    case 3:
      return 3
    case 4:
      return 4
    case 5:
      return 5
    default:
      return 0
  }
}
