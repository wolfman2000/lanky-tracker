import { act, renderHook } from '@testing-library/react'

import useDonkStore from '@renderer/store'
import { resetAllSlices } from '@renderer/store/common'
import { useTinyMedalInLogic, useTinyMedalOutLogic } from './tiny'

beforeEach(() => {
  act(() => resetAllSlices())
})

describe("The number of Tiny's colored bananas you can collect in Forest", () => {
  it('is zero without the stage accessible.', () => {
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('tiny', true))
    const { result: check } = renderHook(() => useTinyMedalInLogic())
    expect(check.current).toBeFalsy()
    const { result: out } = renderHook(() => useTinyMedalOutLogic())
    expect(out.current).toBeFalsy()
  })
  it('is zero without Tiny accessible.', () => {
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setLevel(1, 'Forest'))
    const { result: check } = renderHook(() => useTinyMedalInLogic())
    expect(check.current).toBeFalsy()
    const { result: out } = renderHook(() => useTinyMedalOutLogic())
    expect(out.current).toBeFalsy()
  })
  it('is 100 (potentially) if colored bananas are shuffled.', () => {
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setLevel(1, 'Forest'))
    act(() => store.current.setMove('tiny', true))
    act(() => store.current.setSetting('shuffleColoredBananas', true))
    const { result: check } = renderHook(() => useTinyMedalInLogic())
    expect(check.current).toBe(100)
    const { result: out } = renderHook(() => useTinyMedalOutLogic())
    expect(out.current).toBe(100)
  })
  describe('on Season 2 Settings', () => {
    beforeEach(() => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setPreset('s2'))
      act(() => store.current.setMove('tiny', true))
      act(() => store.current.setLevel(1, 'Forest'))
    })
    it('is 10 with no moves.', () => {
      const { result: check } = renderHook(() => useTinyMedalInLogic())
      expect(check.current).toBe(10)
    })
    it('is 27 with diving.', () => {
      const { result: check } = renderHook(() => useTinyMedalInLogic())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('dive', true))
      expect(check.current).toBe(27)
    })
    it('is 34 with the feather bow alone.', () => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('feather', true))
      const { result: check } = renderHook(() => useTinyMedalInLogic())
      expect(check.current).toBe(34)
    })
    it('is 42 with feather and owl tree access.', () => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('feather', true))
      act(() => store.current.setMove('lanky', true))
      act(() => store.current.setMove('grape', true))
      const { result: check } = renderHook(() => useTinyMedalInLogic())
      expect(check.current).toBe(42)
    })
    it('is 47 with feather and owl tree access (assuming logic breaks).', () => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('feather', true))
      act(() => store.current.setMove('lanky', true))
      act(() => store.current.setMove('grape', true))
      const { result: check } = renderHook(() => useTinyMedalOutLogic())
      expect(check.current).toBe(47)
    })
    it('is 57 with feather, sax, mini, and owl tree access.', () => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('feather', true))
      act(() => store.current.setMove('mini', true))
      act(() => store.current.setMove('sax', true))
      act(() => store.current.setMove('lanky', true))
      act(() => store.current.setMove('grape', true))
      const { result: check } = renderHook(() => useTinyMedalInLogic())
      expect(check.current).toBe(57)
    })
    it('is 50 with both feather and pineapple together.', () => {
      const { result: check } = renderHook(() => useTinyMedalInLogic())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('feather', true))
      act(() => store.current.setMove('chunky', true))
      act(() => store.current.setMove('pineapple', true))
      expect(check.current).toBe(50)
    })
  })
  describe('on Radical SLO Settings', () => {
    beforeEach(() => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setPreset('s2'))
      act(() => store.current.setMove('tiny', true))
      act(() => store.current.setLevel(1, 'Forest'))
      act(() => store.current.setSetting('forestTime', 2))
    })
    it('is 10 with no moves.', () => {
      const { result: check } = renderHook(() => useTinyMedalInLogic())
      expect(check.current).toBe(10)
    })
    it('is 42 with dive and mini thanks to dusk.', () => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('dive', true))
      act(() => store.current.setMove('mini', true))
      const { result: check } = renderHook(() => useTinyMedalInLogic())
      expect(check.current).toBe(42)
    })
  })
})
