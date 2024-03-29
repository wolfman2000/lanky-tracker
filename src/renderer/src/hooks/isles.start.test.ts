import { act, renderHook } from '@testing-library/react'

import useDonkStore from '@renderer/store'
import { resetAllSlices } from '@renderer/store/common'
import { usePlayAztec } from './aztec'
import { usePlayCastle } from './castle'
import { usePlayCaves } from './caves'
import { usePlayFactory } from './factory'
import { usePlayForest } from './forest'
import { usePlayGalleon } from './galleon'
import { usePlayJapes } from './japes'

beforeEach(() => {
  act(() => resetAllSlices())
})

describe('At the start of a seed,', () => {
  it('level 1 is not accessible if no name is set to it.', () => {
    const { result: japes } = renderHook(() => usePlayJapes())
    const { result: aztec } = renderHook(() => usePlayAztec())
    const { result: factory } = renderHook(() => usePlayFactory())
    const { result: galleon } = renderHook(() => usePlayGalleon())
    const { result: forest } = renderHook(() => usePlayForest())
    const { result: caves } = renderHook(() => usePlayCaves())
    const { result: castle } = renderHook(() => usePlayCastle())
    expect(japes.current).toBeFalsy()
    expect(aztec.current).toBeFalsy()
    expect(factory.current).toBeFalsy()
    expect(galleon.current).toBeFalsy()
    expect(forest.current).toBeFalsy()
    expect(caves.current).toBeFalsy()
    expect(castle.current).toBeFalsy()
  })
  it('the Japes lobby is accessible if set to level 1.', () => {
    let { result: japes } = renderHook(() => usePlayJapes())
    expect(japes.current).toBeFalsy()

    const { result } = renderHook(() => useDonkStore())
    act(() => result.current.setLevel(1, 'Japes'))
    japes = renderHook(() => usePlayJapes()).result
    expect(japes.current).toBeTruthy()
  })
  it('the Japes lobby is not accessible if set to level 2 and missing key 1.', () => {
    const { result: japes } = renderHook(() => usePlayJapes())
    expect(japes.current).toBeFalsy()

    const { result } = renderHook(() => useDonkStore())
    act(() => result.current.setLevel(2, 'Japes'))
    expect(japes.current).toBeFalsy()
  })
  it('the Japes lobby is accessible when set to level 2 and with key 1.', () => {
    const { result: japes } = renderHook(() => usePlayJapes())
    expect(japes.current).toBeFalsy()

    const { result } = renderHook(() => useDonkStore())
    act(() => result.current.setLevel(2, 'Japes'))
    act(() => result.current.setKey(1, true))
    expect(japes.current).toBeTruthy()
  })
})
