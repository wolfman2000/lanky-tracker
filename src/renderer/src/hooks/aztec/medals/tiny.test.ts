import { act, renderHook } from '@testing-library/react'

import useDonkStore from '@renderer/store'
import { resetAllSlices } from '@renderer/store/common'
import { useTinyMedalInLogic, useTinyMedalOutLogic } from './tiny'

beforeEach(() => {
  act(() => resetAllSlices())
})

describe("The number of Tiny's colored bananas you can collect in Aztec", () => {
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
    act(() => store.current.setLevel(1, 'Aztec'))
    const { result: check } = renderHook(() => useTinyMedalInLogic())
    expect(check.current).toBeFalsy()
    const { result: out } = renderHook(() => useTinyMedalOutLogic())
    expect(out.current).toBeFalsy()
  })
  it('is 100 (potentially) if colored bananas are shuffled.', () => {
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setLevel(1, 'Aztec'))
    act(() => store.current.setMove('tiny', true))
    act(() => store.current.setSetting('shuffleColoredBananas', true))
    const { result: check } = renderHook(() => useTinyMedalInLogic())
    expect(check.current).toBe(0)
    const { result: out } = renderHook(() => useTinyMedalOutLogic())
    expect(out.current).toBe(100)
  })
})
