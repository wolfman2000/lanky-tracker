import { act, renderHook } from '@testing-library/react'

import useDonkStore from '@renderer/store'
import { resetAllSlices } from '@renderer/store/common'
import { useDkMedalInLogic, useDkMedalOutLogic } from './dk'

beforeEach(() => {
  act(() => resetAllSlices())
})

describe("The number of DK's colored bananas you can collect in Caves", () => {
  it('is zero without the stage accessible.', () => {
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('dk', true))
    const { result: check } = renderHook(() => useDkMedalInLogic())
    expect(check.current).toBeFalsy()
    const { result: out } = renderHook(() => useDkMedalOutLogic())
    expect(out.current).toBeFalsy()
  })
  it('is zero without DK accessible.', () => {
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setLevel(1, 'Caves'))
    const { result: check } = renderHook(() => useDkMedalInLogic())
    expect(check.current).toBeFalsy()
    const { result: out } = renderHook(() => useDkMedalOutLogic())
    expect(out.current).toBeFalsy()
  })
  it('is 100 (potentially) if colored bananas are shuffled.', () => {
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setLevel(1, 'Caves'))
    act(() => store.current.setMove('dk', true))
    act(() => store.current.setSetting('shuffleColoredBananas', true))
    const { result: check } = renderHook(() => useDkMedalInLogic())
    expect(check.current).toBe(100)
    const { result: out } = renderHook(() => useDkMedalOutLogic())
    expect(out.current).toBe(100)
  })
})
