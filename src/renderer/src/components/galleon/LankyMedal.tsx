import useDonkStore from '@renderer/store'
import GalleonCheck from './GalleonCheck'
import {
  useGalleonHighTide,
  useGalleonLighthouseArea,
  useGalleonOutskirts,
  useGalleonTreasureRoom,
  usePlayGalleon,
  useSlamGalleon
} from '@renderer/hooks/galleon'
import { useShallow } from 'zustand/react/shallow'
import { logicBreak } from '@renderer/hooks/world'
import { useHighGrab, usePunch } from '@renderer/hooks/kongs'

const LankyMedal: React.FC = () => {
  const inStage = usePlayGalleon()
  const canSlam = useSlamGalleon()
  const outskirts = useGalleonOutskirts()
  const lighthouseArea = useGalleonLighthouseArea()
  const treasureRoom = useGalleonTreasureRoom()
  const chunkyPunch = usePunch()
  const highTide = useGalleonHighTide()
  const highGrab = useHighGrab()
  const [cbCount, coloredBananaShuffle, kong, gun, music, pad, dive, diddy, spring, tiny, twirl] =
    useDonkStore(
      useShallow((state) => [
        state.cbCount,
        state.shuffleColoredBananas,
        state.lanky,
        state.grape,
        state.trombone,
        state.balloon,
        state.dive,
        state.diddy,
        state.spring,
        state.tiny,
        state.twirl
      ])
    )

  let currLogic = 5 // start of level
  if (chunkyPunch && gun) {
    currLogic += 20 // balloons by arena
  }
  if (lighthouseArea && dive) {
    currLogic += 25 // lighthouse underwater.
  }
  if (outskirts) {
    currLogic += 5 // bunch by cactus
    if (gun) {
      currLogic += 10 // balloon above ship
    }
    if (dive) {
      currLogic += 5 // bunch below Enguarde shipyard
      if (canSlam) {
        currLogic += 10 // two door ship
      }
      if (music) {
        currLogic += 15 // five door ship
      }
    }
  }
  let currBreak = currLogic + 1
  if (treasureRoom.in && highTide) {
    currLogic += 1
    if (pad) {
      currLogic += 4
    }
  }
  if (logicBreak(treasureRoom) && (highGrab || (diddy && spring && tiny && twirl))) {
    currBreak += 4
  }

  return (
    <GalleonCheck
      id={4102}
      name="Galleon Lanky Medal"
      region="Galleon Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default LankyMedal
