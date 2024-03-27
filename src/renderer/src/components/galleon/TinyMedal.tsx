import useDonkStore from '@renderer/store'
import GalleonCheck from './GalleonCheck'
import {
  useGalleonCannon,
  useGalleonCavernTop,
  useGalleonHighTide,
  useGalleonLighthouseArea,
  useGalleonLowTide,
  useGalleonOutskirts,
  useGalleonTreasureRoom,
  usePlayGalleon,
  useSlamGalleon
} from '@renderer/hooks/galleon'
import { useShallow } from 'zustand/react/shallow'
import { logicBreak } from '@renderer/hooks/world'

const TinyMedal: React.FC = () => {
  const inStage = usePlayGalleon()
  const canSlam = useSlamGalleon()
  const outskirts = useGalleonOutskirts()
  const lighthouseArea = useGalleonLighthouseArea()
  const treasureRoom = useGalleonTreasureRoom()
  const cannon = useGalleonCannon()
  const highTide = useGalleonHighTide()
  const lowTide = useGalleonLowTide()
  const cavernTop = useGalleonCavernTop()
  const [cbCount, coloredBananaShuffle, kong, gun, music, crystal, dive] = useDonkStore(
    useShallow((state) => [
      state.cbCount,
      state.shuffleColoredBananas,
      state.tiny,
      state.feather,
      state.sax,
      state.mini,
      state.dive
    ])
  )

  let currLogic = 9
  if (cavernTop.in) {
    currLogic += 8
  }
  if (lighthouseArea && highTide) {
    currLogic += 5
    if (gun) {
      currLogic += 10
    }
  }
  if (lighthouseArea && lowTide && gun) {
    currLogic += 10
  }
  if (cannon && highTide) {
    currLogic += 15
  }
  if (outskirts && dive) {
    if (music) {
      currLogic += 18
    }
    if (canSlam) {
      currLogic += 10
    }
  }
  if (treasureRoom.in) {
    if (gun) {
      currLogic += 10
    }
    if (crystal) {
      currLogic += 5
    }
  }

  let currBreak = 9
  if (logicBreak(cavernTop)) {
    currBreak += 8
  }
  if (lighthouseArea) {
    currBreak += 5
    if (gun) {
      currBreak += 10
    }
  }
  if (lighthouseArea && lowTide && gun) {
    currBreak += 10
  }
  if (cannon) {
    currBreak += 15
  }
  if (outskirts && dive) {
    if (music) {
      currBreak += 18
    }
    if (canSlam) {
      currBreak += 10
    }
  }
  if (logicBreak(treasureRoom)) {
    if (gun) {
      currBreak += 10
    }
    if (crystal) {
      currBreak += 5
    }
  }

  return (
    <GalleonCheck
      id={4103}
      name="Galleon Tiny Medal"
      region="Galleon Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default TinyMedal
