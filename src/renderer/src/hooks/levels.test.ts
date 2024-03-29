import { act, renderHook } from '@testing-library/react'

import useDonkStore from '@renderer/store'
import { resetAllSlices } from '@renderer/store/common'
import { useLevel2, useLevel8 } from './levels'

beforeEach(() => {
  act(() => resetAllSlices())
})

describe('The store always', () => {
  it('starts with an unknown level 1.', () => {
    const { result } = renderHook(() => useDonkStore())
    expect(result.current.level1).toBe('')
  })
  it('starts with an unknown level 2.', () => {
    const { result } = renderHook(() => useLevel2())
    expect(result.current).toBe('')
  })
  it('has Helm as level 8.', () => {
    const { result } = renderHook(() => useDonkStore())
    const { result: level8 } = renderHook(() => useLevel8())
    expect(result.current.level8).toBe('Helm')
    expect(result.current.level8).toBe(level8.current)
  })
})
