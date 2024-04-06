import { act, renderHook } from '@testing-library/react'

import useDonkStore from '@renderer/store'
import { resetAllSlices } from '@renderer/store/common'
import { usePlayAztec } from '../aztec'
import { usePlayCastle } from '../castle'
import { usePlayCaves } from '../caves'
import { usePlayFactory } from '../factory'
import { usePlayForest } from '../forest'
import { usePlayGalleon } from '../galleon'
import {
  useCheckBananaFairyIsle,
  useCheckTinyAztecLobby,
  useCheckTinyFeatherCage,
  useCheckTinyGalleonLobby,
  useCheckTinyMusicPad
} from '.'
import { usePlayJapes } from '../japes'

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

describe('The Isles Tiny Caged Banana check', () => {
  it('is inaccessible at the start.', () => {
    const { result: check } = renderHook(() => useCheckTinyFeatherCage())
    expect(check.current).toBeFalsy()
  })
  it('needs more than just Tiny alone to access.', () => {
    const { result: check } = renderHook(() => useCheckTinyFeatherCage())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('tiny', true))
    expect(check.current).toBeFalsy()
  })
  it('needs more than just Feather alone to access.', () => {
    const { result: check } = renderHook(() => useCheckTinyFeatherCage())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('feather', true))
    expect(check.current).toBeFalsy()
  })
  it('needs both Tiny and Feather to access.', () => {
    const { result: check } = renderHook(() => useCheckTinyFeatherCage())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('tiny', true))
    expect(store.current.moves.tiny).toBe(true)
    act(() => store.current.setMove('feather', true))
    expect(store.current.moves.feather).toBe(true)
    expect(check.current).toBeTruthy()
  })
})

describe('The Isles Tiny Music Pad check', () => {
  it('is inaccessible at the start.', () => {
    const { result: check } = renderHook(() => useCheckTinyMusicPad())
    expect(check.current).toBeFalsy()
  })
  it('is inaccessible with just Tiny and Sax alone.', () => {
    const { result: check } = renderHook(() => useCheckTinyMusicPad())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('tiny', true))
    act(() => store.current.setMove('sax', true))
    expect(check.current).toBeFalsy()
  })
  it('is accessible in standard settings with Tiny, Sax, and Monkeyport.', () => {
    const { result: check } = renderHook(() => useCheckTinyMusicPad())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('tiny', true))
    act(() => store.current.setMove('sax', true))
    act(() => store.current.setMove('port', true))
    expect(check.current).toBeTruthy()
  })
  it('is inaccessible with Tiny, Sax, and Monkeyport should switchsanity require Donkey Kong.', () => {
    const { result: check } = renderHook(() => useCheckTinyMusicPad())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('tiny', true))
    act(() => store.current.setMove('sax', true))
    act(() => store.current.setMove('port', true))
    act(() => store.current.setSetting('isSwitchsanity', true))
    act(() => store.current.setSwitchsanity('islesMonkeyport', 1))
    expect(check.current).toBeFalsy()
  })
  it('is accessible with Tiny & Sax should switchsanity require Donkey Kong and he has Blast.', () => {
    const { result: check } = renderHook(() => useCheckTinyMusicPad())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('tiny', true))
    act(() => store.current.setMove('sax', true))
    act(() => store.current.setMove('dk', true))
    act(() => store.current.setMove('blast', true))
    act(() => store.current.setSetting('isSwitchsanity', true))
    act(() => store.current.setSwitchsanity('islesMonkeyport', 1))
    expect(check.current).toBeTruthy()
  })
})

describe('The Isles Tiny Aztec Lobby check', () => {
  it('requires Aztec to be available.', () => {
    const { result: check } = renderHook(() => useCheckTinyAztecLobby())
    expect(check.current.in).toBeFalsy()
  })
  describe('(once we have Aztec)', () => {
    beforeEach(() => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setLevel(1, 'Aztec'))
    })
    it('is inaccessible at the start.', () => {
      const { result: check } = renderHook(() => useCheckTinyAztecLobby())
      expect(check.current.in).toBeFalsy()
    })
    it('is inaccessible with just Tiny and Twirl alone.', () => {
      const { result: check } = renderHook(() => useCheckTinyAztecLobby())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('tiny', true))
      act(() => store.current.setMove('twirl', true))
      expect(check.current.in).toBeFalsy()
    })
    it('is inaccessible with even Diddy showing up for moral support.', () => {
      const { result: check } = renderHook(() => useCheckTinyAztecLobby())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('tiny', true))
      act(() => store.current.setMove('twirl', true))
      act(() => store.current.setMove('diddy', true))
      expect(check.current.in).toBeFalsy()
    })
    it('is accessible when Diddy charges the gongs before Tiny twirls over.', () => {
      const { result: check } = renderHook(() => useCheckTinyAztecLobby())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('tiny', true))
      act(() => store.current.setMove('twirl', true))
      act(() => store.current.setMove('diddy', true))
      act(() => store.current.setMove('charge', true))
      expect(check.current.in).toBeTruthy()
    })
    it("can be grabbed after Diddy charges the gongs without Tiny's assistance.", () => {
      const { result: check } = renderHook(() => useCheckTinyAztecLobby())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('diddy', true))
      act(() => store.current.setMove('charge', true))
      expect(check.current.out).toBeTruthy()
    })
  })
})

describe('The Isles Tiny Galleon Lobby check', () => {
  it('requires Galleon to be available.', () => {
    const { result: check } = renderHook(() => useCheckTinyGalleonLobby())
    expect(check.current.in).toBeFalsy()
  })
  describe('(once we have Galleon)', () => {
    beforeEach(() => {
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setLevel(1, 'Galleon'))
    })
    it('is inaccessible at the start.', () => {
      const { result: check } = renderHook(() => useCheckTinyGalleonLobby())
      expect(check.current.in).toBeFalsy()
    })
    it('needs more than just the presence of Chunky & Tiny.', () => {
      const { result: check } = renderHook(() => useCheckTinyGalleonLobby())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('chunky', true))
      act(() => store.current.setMove('twirl', true))
      expect(check.current.in).toBeFalsy()
    })
    it('needs more than Chunky slamming down a switch.', () => {
      const { result: check } = renderHook(() => useCheckTinyGalleonLobby())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('chunky', true))
      act(() => store.current.setMove('twirl', true))
      act(() => store.current.setSlam(1))
      expect(check.current.in).toBeFalsy()
    })
    it('needs more than the ability to re-dive into the water after entering.', () => {
      const { result: check } = renderHook(() => useCheckTinyGalleonLobby())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('chunky', true))
      act(() => store.current.setMove('twirl', true))
      act(() => store.current.setSlam(1))
      act(() => store.current.setMove('dive', true))
      expect(check.current.in).toBeFalsy()
    })
    it('is accessible after Chunky slams the switch and Tiny shrinks down with Twirl & Mini.', () => {
      const { result: check } = renderHook(() => useCheckTinyGalleonLobby())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('chunky', true))
      act(() => store.current.setMove('tiny', true))
      act(() => store.current.setMove('twirl', true))
      act(() => store.current.setSlam(1))
      act(() => store.current.setMove('dive', true))
      act(() => store.current.setMove('mini', true))
      expect(check.current.in).toBeTruthy()
    })
    it('is not accessible with the basic slam if progressive slams are disabled.', () => {
      const { result: check } = renderHook(() => useCheckTinyGalleonLobby())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('chunky', true))
      act(() => store.current.setMove('tiny', true))
      act(() => store.current.setMove('twirl', true))
      act(() => store.current.setSlam(1))
      act(() => store.current.setMove('dive', true))
      act(() => store.current.setMove('mini', true))
      act(() => store.current.setSetting('progressiveSlams', false))
      expect(check.current.in).toBeFalsy()
    })
    it('requires at least the Super Simian Slam if progressive slams are disabled.', () => {
      const { result: check } = renderHook(() => useCheckTinyGalleonLobby())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('chunky', true))
      act(() => store.current.setMove('tiny', true))
      act(() => store.current.setMove('twirl', true))
      act(() => store.current.setSlam(2))
      act(() => store.current.setMove('dive', true))
      act(() => store.current.setMove('mini', true))
      act(() => store.current.setSetting('progressiveSlams', false))
      expect(check.current.in).toBeTruthy()
    })
    it('can be reached by Tiny without Twirl (after Chunky does his thing).', () => {
      const { result: check } = renderHook(() => useCheckTinyGalleonLobby())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('chunky', true))
      act(() => store.current.setMove('tiny', true))
      act(() => store.current.setSlam(1))
      act(() => store.current.setMove('dive', true))
      act(() => store.current.setMove('mini', true))
      expect(check.current.out).toBeTruthy()
    })
    it('is not expected to be grabbed by Tiny without Twirl (after Chunky does his thing).', () => {
      const { result: check } = renderHook(() => useCheckTinyGalleonLobby())
      const { result: store } = renderHook(() => useDonkStore())
      act(() => store.current.setMove('chunky', true))
      act(() => store.current.setMove('tiny', true))
      act(() => store.current.setSlam(1))
      act(() => store.current.setMove('dive', true))
      act(() => store.current.setMove('mini', true))
      expect(check.current.in).toBeFalsy()
    })
  })
})

describe('The Banana Fairy Island check', () => {
  it('is inaccessible at the start.', () => {
    const { result: check } = renderHook(() => useCheckBananaFairyIsle())
    expect(check.current).toBeFalsy()
  })
  it('is inaccessible with just Tiny and Mini.', () => {
    const { result: check } = renderHook(() => useCheckBananaFairyIsle())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('tiny', true))
    act(() => store.current.setMove('mini', true))
    expect(check.current).toBeFalsy()
  })
  it('is accessible with all 20 fairies regardless of setting.', () => {
    const { result: check } = renderHook(() => useCheckBananaFairyIsle())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('tiny', true))
    act(() => store.current.setMove('mini', true))
    act(() => store.current.setConsumable('fairies', 20))
    expect(check.current).toBeTruthy()
  })
  it('is accessible with 5 fairies in most common settings.', () => {
    const { result: check } = renderHook(() => useCheckBananaFairyIsle())
    const { result: store } = renderHook(() => useDonkStore())
    act(() => store.current.setMove('tiny', true))
    act(() => store.current.setMove('mini', true))
    act(() => store.current.setConsumable('fairies', 5))
    expect(check.current).toBeTruthy()
  })
})
