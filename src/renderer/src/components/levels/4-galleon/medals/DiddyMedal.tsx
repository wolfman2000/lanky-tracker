import {
  useGalleonLighthousePlatform,
  useGalleonOutskirts,
  useGalleonTreasureRoom,
  usePlayGalleon
} from '@renderer/hooks/galleon'
import { useDiddy, useDive, useGuitar, usePeanut, useRocket } from '@renderer/hooks/kongs'
import { useCbCount } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GalleonCheck from '../GalleonCheck'

const DiddyMedal: React.FC = () => {
  const inStage = usePlayGalleon()
  const outskirts = useGalleonOutskirts()
  const lighthousePlatform = useGalleonLighthousePlatform()
  const treasureRoom = useGalleonTreasureRoom()
  const cbCount = useCbCount()
  const kong = useDiddy()
  const gun = usePeanut()
  const music = useGuitar()
  const crystal = useRocket()
  const dive = useDive()

  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
  )

  let currLogic = 10
  if (outskirts) {
    if (gun) {
      currLogic += 10
    }
    if (dive) {
      currLogic += 36
      if (music) {
        currLogic += 14
      }
    }
  }
  let currBreak = currLogic
  if (treasureRoom.in && gun) {
    currLogic += 10
  }
  if (lighthousePlatform.in) {
    if (gun) {
      currLogic += 10
    }
    if (crystal) {
      currLogic += 10
    }
  }
  if (logicBreak(treasureRoom) && gun) {
    currBreak += 10
  }
  if (logicBreak(lighthousePlatform)) {
    if (gun) {
      currBreak += 10
    }
    if (crystal) {
      currBreak += 10
    }
  }

  return (
    <GalleonCheck
      id={4101}
      name="Galleon Diddy Medal"
      region="Galleon Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default DiddyMedal
