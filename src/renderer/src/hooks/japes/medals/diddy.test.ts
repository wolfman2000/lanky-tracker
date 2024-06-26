import { act, renderHook } from '@testing-library/react'

import useDonkStore from '@renderer/store'
import { resetAllSlices } from '@renderer/store/common'
import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from './diddy'

beforeEach(() => {
  act(() => resetAllSlices())
})

describe("The number of Diddy's colored bananas you can collect in Japes", () => {
  describe('in the NSAK preset', () => {
    beforeEach(() => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setPreset('nsak'))
    })
    it('is zero without the stage accessible.', () => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('diddy', true))
      const { result: check } = renderHook(() => useDiddyMedalInLogic())
      expect(check.current).toBeFalsy()
      const { result: out } = renderHook(() => useDiddyMedalOutLogic())
      expect(out.current).toBeFalsy()
    })
    it('is zero without Diddy accessible.', () => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setLevel(1, 'Japes'))
      const { result: check } = renderHook(() => useDiddyMedalInLogic())
      expect(check.current).toBeFalsy()
      const { result: out } = renderHook(() => useDiddyMedalOutLogic())
      expect(out.current).toBeFalsy()
    })
    it('is 100 (potentially) if colored bananas are shuffled.', () => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setLevel(1, 'Japes'))
      act(() => store.current.setMove('diddy', true))
      act(() => store.current.setSetting('shuffleColoredBananas', true))
      const { result: check } = renderHook(() => useDiddyMedalInLogic())
      expect(check.current).toBe(100)
      const { result: out } = renderHook(() => useDiddyMedalOutLogic())
      expect(out.current).toBe(100)
    })
  })
  describe('(assuming normal locations)', () => {
    beforeEach(() => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setPreset('s2'))
      act(() => store.current.setMove('diddy', true))
      act(() => store.current.setLevel(1, 'Japes'))
    })
    it('is 32 with no additional moves.', () => {
      const { result: check } = renderHook(() => useDiddyMedalInLogic())
      expect(check.current).toBe(32)
    })
    it('is 42 with diving.', () => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('dive', true))
      const { result: check } = renderHook(() => useDiddyMedalInLogic())
      expect(check.current).toBe(42)
    })
  })
})
