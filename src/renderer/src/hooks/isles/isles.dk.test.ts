import { act, renderHook } from '@testing-library/react'

import { resetAllSlices } from '@renderer/store/common'
import { useCheckDkCoconutCage, useCheckDkJapesRock, useCheckDkMusicPad } from '.'
import useDonkStore from '@renderer/store'

beforeEach(() => {
  act(() => resetAllSlices())
})

describe('The Japes Rock check', () => {
  it('requires at least one Kong.', () => {
    const { result: check } = renderHook(() => useCheckDkJapesRock())
    expect(check.current).toBeFalsy()
  })
  it('can be picked up by DK.', () => {
    const { result: check } = renderHook(() => useCheckDkJapesRock())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('dk', true))
    expect(check.current).toBeTruthy()
  })
  it('can be picked up by Diddy.', () => {
    const { result: check } = renderHook(() => useCheckDkJapesRock())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('diddy', true))
    expect(check.current).toBeTruthy()
  })
  it('can be picked up by Lanky.', () => {
    const { result: check } = renderHook(() => useCheckDkJapesRock())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('lanky', true))
    expect(check.current).toBeTruthy()
  })
  it('can be picked up by Tiny.', () => {
    const { result: check } = renderHook(() => useCheckDkJapesRock())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('tiny', true))
    expect(check.current).toBeTruthy()
  })
  it('can be picked up by Chunky.', () => {
    const { result: check } = renderHook(() => useCheckDkJapesRock())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('chunky', true))
    expect(check.current).toBeTruthy()
  })
})

describe('The Isles DK Coconut Cage check', () => {
  it('cannot be picked up with nothing.', () => {
    const { result: check } = renderHook(() => useCheckDkCoconutCage())
    expect(check.current).toBeFalsy()
  })
  it('needs more than just DK.', () => {
    const { result: check } = renderHook(() => useCheckDkCoconutCage())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('dk', true))
    expect(check.current).toBeFalsy()
  })
  it('needs more than just DK and the Coconut Gun.', () => {
    const { result: check } = renderHook(() => useCheckDkCoconutCage())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('dk', true))
    act(() => store.current.setMove('coconut', true))
    act(() => store.current.setSetting('bananaportOpen', 0))
    expect(check.current).toBeFalsy()
  })
  it('needs more than just access to the Krem Isle Ascent on its own.', () => {
    const { result: check } = renderHook(() => useCheckDkCoconutCage())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setSetting('bananaportOpen', 2))
    expect(check.current).toBeFalsy()
  })
  it('needs DK with his Coconut Gun and access to the Krem Isles cage to get the check.', () => {
    const { result: check } = renderHook(() => useCheckDkCoconutCage())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('dk', true))
    act(() => store.current.setMove('coconut', true))
    act(() => store.current.setSetting('bananaportOpen', 2))
    expect(check.current).toBeTruthy()
  })
})

describe('The Isles DK Instrument Pad check', () => {
  it('needs the Factory lobby to be available.', () => {
    const { result: check } = renderHook(() => useCheckDkMusicPad())
    expect(check.current.in).toBeFalsy()
  })
  describe('(in the Factory lobby)', () => {
    beforeEach(() => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setLevel(1, 'Factory'))
    })
    it('needs more than DK alone to access.', () => {
      const { result: check } = renderHook(() => useCheckDkMusicPad())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('dk', true))
      expect(check.current.in).toBeFalsy()
    })
    it('needs more than bongos alone to access.', () => {
      const { result: check } = renderHook(() => useCheckDkMusicPad())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('bongos', true))
      expect(check.current.in).toBeFalsy()
    })
    it('needs more than Grab alone to access.', () => {
      const { result: check } = renderHook(() => useCheckDkMusicPad())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('grab', true))
      expect(check.current.in).toBeFalsy()
    })
    it('needs DK with Grab and Bongos to get the check.', () => {
      const { result: check } = renderHook(() => useCheckDkMusicPad())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('dk', true))
      act(() => store.current.setMove('bongos', true))
      act(() => store.current.setMove('grab', true))
      expect(check.current.in).toBeTruthy()
    })
    it('can by gotten out of logic with Diddy replacing Grab.', () => {
      const { result: check } = renderHook(() => useCheckDkMusicPad())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('dk', true))
      act(() => store.current.setMove('bongos', true))
      act(() => store.current.setMove('diddy', true))
      expect(check.current.out).toBeTruthy()
    })
    it('can by gotten out of logic with Tiny replacing Grab.', () => {
      const { result: check } = renderHook(() => useCheckDkMusicPad())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('dk', true))
      act(() => store.current.setMove('bongos', true))
      act(() => store.current.setMove('tiny', true))
      expect(check.current.out).toBeTruthy()
    })
  })
})
