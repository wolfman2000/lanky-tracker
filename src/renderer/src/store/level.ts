import { StateCreator } from 'zustand'
import { AllSlice, Level, LevelState, donkResetFns } from './common'

export const initialLevel: LevelState = {
  level1: '',
  level2: '',
  level3: '',
  level4: '',
  level5: '',
  level6: '',
  level7: '',
  level8: 'Helm',
  key1: false,
  key2: false,
  key3: false,
  key4: false,
  key5: false,
  key6: false,
  key7: false,
  key8: false
}

interface LevelSlice {
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
  setLevel: (index: number, name: string) => void
  setKey: (index: number, isSet: boolean) => void
}

const levelSlice: StateCreator<AllSlice, [], [], LevelSlice> = (set) => {
  donkResetFns.add(() => set(initialLevel))
  return {
    ...initialLevel,
    setLevel: (index, name) =>
      set((state) => {
        const newKey: Record<number, string> = {}
        newKey['level' + index] = name
        state = {
          ...state,
          ...newKey
        }
        return state
      }),
    setKey: (index, isSet) =>
      set((state) => {
        const newKey: Record<number, boolean> = {}
        newKey['key' + index] = isSet
        state = {
          ...state,
          ...newKey
        }
        return state
      })
  }
}

export default levelSlice
