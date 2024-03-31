import {
  useGalleonHighTide,
  useGalleonLighthouseArea,
  useGalleonOutskirts,
  useGalleonTreasureRoom,
  usePlayGalleon,
  useSlamGalleon
} from '@renderer/hooks/galleon'
import {
  useBalloon,
  useDiddy,
  useDive,
  useGrape,
  useHighGrab,
  useLanky,
  usePunch,
  useSpring,
  useTiny,
  useTrombone,
  useTwirl
} from '@renderer/hooks/kongs'
import { useCbCount } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GalleonCheck from '../GalleonCheck'

const LankyMedal: React.FC = () => {
  const inStage = usePlayGalleon()
  const canSlam = useSlamGalleon()
  const outskirts = useGalleonOutskirts()
  const lighthouseArea = useGalleonLighthouseArea()
  const treasureRoom = useGalleonTreasureRoom()
  const chunkyPunch = usePunch()
  const highTide = useGalleonHighTide()
  const highGrab = useHighGrab()
  const cbCount = useCbCount()
  const kong = useLanky()
  const gun = useGrape()
  const music = useTrombone()
  const pad = useBalloon()
  const dive = useDive()
  const diddy = useDiddy()
  const spring = useSpring()
  const tiny = useTiny()
  const twirl = useTwirl()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
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
