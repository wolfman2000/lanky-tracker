import useDonkStore from '@renderer/store'
import { resetAllSlices } from '@renderer/store/common'
import { act, renderHook } from '@testing-library/react'
import { useChunkyMedalInLogic, useChunkyMedalOutLogic } from './chunky'

beforeEach(() => {
  act(() => resetAllSlices())
})

describe("The number of Chunky's colored bananas you can collect in Aztec", () => {
  it('is zero without the stage accessible.', () => {
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('chunky', true))
    const { result: check } = renderHook(() => useChunkyMedalInLogic())
    expect(check.current).toBeFalsy()
    const { result: out } = renderHook(() => useChunkyMedalOutLogic())
    expect(out.current).toBeFalsy()
  })
  it('is zero without Chunky accessible.', () => {
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setLevel(1, 'Aztec'))
    const { result: check } = renderHook(() => useChunkyMedalInLogic())
    expect(check.current).toBeFalsy()
    const { result: out } = renderHook(() => useChunkyMedalOutLogic())
    expect(out.current).toBeFalsy()
  })
  it('is 100 (potentially) if colored bananas are shuffled.', () => {
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setLevel(1, 'Aztec'))
    act(() => store.current.setMove('chunky', true))
    act(() => store.current.setSetting('shuffleColoredBananas', true))
    const { result: check } = renderHook(() => useChunkyMedalInLogic())
    expect(check.current).toBe(0)
    const { result: out } = renderHook(() => useChunkyMedalOutLogic())
    expect(out.current).toBe(100)
  })
})
