import useDonkStore from '@renderer/store'
import GalleonCheck from '../GalleonCheck'
import {
  useGalleonLighthousePlatform,
  useGalleonOutskirts,
  useGalleonTreasureRoom,
  usePlayGalleon
} from '@renderer/hooks/galleon'
import { useShallow } from 'zustand/react/shallow'
import { logicBreak } from '@renderer/hooks/world'

const DiddyMedal: React.FC = () => {
  const inStage = usePlayGalleon()
  const outskirts = useGalleonOutskirts()
  const lighthousePlatform = useGalleonLighthousePlatform()
  const treasureRoom = useGalleonTreasureRoom()

  const [cbCount, coloredBananaShuffle, kong, gun, music, crystal, dive] = useDonkStore(
    useShallow((state) => [
      state.settings.cbCount,
      state.settings.shuffleColoredBananas,
      state.moves.diddy,
      state.moves.peanut,
      state.moves.guitar,
      state.moves.rocket,
      state.moves.dive
    ])
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
