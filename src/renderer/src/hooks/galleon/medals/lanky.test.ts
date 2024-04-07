import { act, renderHook } from '@testing-library/react'

import useDonkStore from '@renderer/store'
import { resetAllSlices } from '@renderer/store/common'
import { useLankyMedalInLogic, useLankyMedalOutLogic } from './lanky'

beforeEach(() => {
  act(() => resetAllSlices())
})

describe("The number of Lanky's colored bananas you can collect in Galleon", () => {
  it('is zero without the stage accessible.', () => {
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('lanky', true))
    const { result: check } = renderHook(() => useLankyMedalInLogic())
    expect(check.current).toBeFalsy()
    const { result: out } = renderHook(() => useLankyMedalOutLogic())
    expect(out.current).toBeFalsy()
  })
  it('is zero without Lanky accessible.', () => {
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setLevel(1, 'Galleon'))
    const { result: check } = renderHook(() => useLankyMedalInLogic())
    expect(check.current).toBeFalsy()
    const { result: out } = renderHook(() => useLankyMedalOutLogic())
    expect(out.current).toBeFalsy()
  })
  it('is 100 (potentially) if colored bananas are shuffled.', () => {
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setLevel(1, 'Galleon'))
    act(() => store.current.setMove('lanky', true))
    act(() => store.current.setSetting('shuffleColoredBananas', true))
    const { result: check } = renderHook(() => useLankyMedalInLogic())
    expect(check.current).toBe(100)
    const { result: out } = renderHook(() => useLankyMedalOutLogic())
    expect(out.current).toBe(100)
  })
})
