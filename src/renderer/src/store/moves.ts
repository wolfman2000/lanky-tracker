import { StateCreator } from 'zustand'
import { AllSlice, MoveSlice, MoveState, donkResetFns } from './common'

export const initialMoves: MoveState = {
  moves: {
    balloon: false,
    barrel: false,
    blast: false,
    bongos: false,
    camera: false,
    charge: false,
    chunky: false,
    coconut: false,
    diddy: false,
    dive: false,
    dk: false,
    feather: false,
    gone: false,
    grab: false,
    grape: false,
    guitar: false,
    homing: false,
    hunky: false,
    lanky: false,
    mini: false,
    orange: false,
    peanut: false,
    pineapple: false,
    port: false,
    punch: false,
    rocket: false,
    sax: false,
    shockwave: false,
    slam: 0,
    sniper: false,
    spring: false,
    sprint: false,
    stand: false,
    strong: false,
    tiny: false,
    triangle: false,
    trombone: false,
    twirl: false,
    vine: false
  }
}

const moveSlice: StateCreator<AllSlice, [], [], MoveSlice> = (set) => {
  donkResetFns.add(() => set(initialMoves))
  return {
    ...initialMoves,
    setSlam: (item, val) =>
      set((state) => {
        const newKey: Record<string, number> = {}
        newKey[item] = val
        state = {
          ...state,
          moves: {
            ...state.moves,
            ...newKey
          }
        }
        return state
      }),
    setMove: (item, val) =>
      set((state) => {
        const newKey: Record<number, string> = {}
        newKey[item] = val
        state = {
          ...state,
          moves: {
            ...state.moves,
            ...newKey
          }
        }
        return state
      })
  }
}

export default moveSlice
