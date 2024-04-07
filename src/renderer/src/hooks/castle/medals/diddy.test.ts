import { act, renderHook } from '@testing-library/react'

import useDonkStore from '@renderer/store'
import { resetAllSlices } from '@renderer/store/common'
import { useDiddyMedalInLogic, useDiddyMedalOutLogic } from './diddy'

beforeEach(() => {
  act(() => resetAllSlices())
})

describe("The number of Diddy's colored bananas you can collect in Castle", () => {
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
    act(() => store.current.setLevel(1, 'Castle'))
    const { result: check } = renderHook(() => useDiddyMedalInLogic())
    expect(check.current).toBeFalsy()
    const { result: out } = renderHook(() => useDiddyMedalOutLogic())
    expect(out.current).toBeFalsy()
  })
  it('is 100 (potentially) if colored bananas are shuffled.', () => {
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setLevel(1, 'Castle'))
    act(() => store.current.setMove('diddy', true))
    act(() => store.current.setSetting('shuffleColoredBananas', true))
    const { result: check } = renderHook(() => useDiddyMedalInLogic())
    expect(check.current).toBe(100)
    const { result: out } = renderHook(() => useDiddyMedalOutLogic())
    expect(out.current).toBe(100)
  })
})
