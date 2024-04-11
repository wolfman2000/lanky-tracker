import { act, renderHook } from '@testing-library/react'

import useDonkStore from '@renderer/store'
import { resetAllSlices } from '@renderer/store/common'
import { useAztecBack, useAztecFront, useGeneralFairy } from '.'
import { logicBreak } from '../world'

beforeEach(() => {
  act(() => resetAllSlices())
})

describe('The level Angry Aztec', () => {
  it('is inaccessible without a level associated with it.', () => {
    const { result: check } = renderHook(() => useAztecFront())
    expect(logicBreak(check.current)).toBeFalsy()
  })
})

describe('The front of Aztec', () => {
  beforeEach(() => {
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setLevel(1, 'Aztec'))
    act(() => store.current.setMove('diddy', true))
  })
  it('can be accessed via damage boosting.', () => {
    const { result: check } = renderHook(() => useAztecFront())
    expect(check.current.in).toBeFalsy()
    expect(check.current.out).toBeTruthy()
  })
  it('can be accessed logically with vines.', () => {
    const { result: check } = renderHook(() => useAztecFront())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('vine', true))
    expect(check.current.in).toBeTruthy()
    expect(check.current.out).toBeTruthy()
  })
})

describe('From the Aztec Oasis,', () => {
  beforeEach(() => {
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setLevel(1, 'Aztec'))
    act(() => store.current.setMove('diddy', true))
  })
  it('Diddy needs help to open the back.', () => {
    const { result: check } = renderHook(() => useAztecBack())
    expect(check.current.in).toBeFalsy()
    expect(check.current.out).toBeFalsy()
  })
  it('Diddy can sequence break to open the back with just the Guitar.', () => {
    const { result: check } = renderHook(() => useAztecBack())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('guitar', true))
    expect(check.current.in).toBeFalsy()
    expect(check.current.out).toBeTruthy()
  })
  describe('(and with Switchsanity on),', () => {
    beforeEach(() => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setSetting('isSwitchsanity', true))
    })
    it('Diddy actually needs help from Tiny to get through.', () => {
      const { result: check } = renderHook(() => useAztecBack())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setSwitchsanity('aztecBack', 3))
      act(() => store.current.setMove('guitar', true))
      expect(check.current.in).toBeFalsy()
      expect(check.current.in).toBeFalsy()
    })
    it("Diddy gets help from Tiny's Sax to get through.", () => {
      const { result: check } = renderHook(() => useAztecBack())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setSwitchsanity('aztecBack', 3))
      act(() => store.current.setMove('guitar', true))
      act(() => store.current.setMove('diddy', false))
      act(() => store.current.setMove('tiny', true))
      act(() => store.current.setMove('sax', true))
      expect(check.current.in).toBeFalsy()
      expect(check.current.out).toBeTruthy()
    })
  })
})

describe('The fairies in Aztec', () => {
  beforeEach(() => {
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setLevel(1, 'Aztec'))
    act(() => store.current.setMove('chunky', true))
  })
  describe('(when location shuffled)', () => {
    beforeEach(() => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setSetting('shuffleFairies', true))
    })
    it('require the camera no matter what.', () => {
      const { result: check } = renderHook(() => useGeneralFairy())
      expect(check.current.in).toBeFalsy()
      expect(check.current.out).toBeFalsy()
    })
    it('can be captured out of logic with a camera.', () => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('camera', true))
      const { result: check } = renderHook(() => useGeneralFairy())
      expect(check.current.in).toBeFalsy()
      expect(check.current.out).toBeTruthy()
    })
    it('can be captured in logic with a camera and vine swinging.', () => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('camera', true))
      act(() => store.current.setMove('vine', true))
      const { result: check } = renderHook(() => useGeneralFairy())
      expect(check.current.in).toBeTruthy()
      expect(check.current.out).toBeTruthy()
    })
  })
})
