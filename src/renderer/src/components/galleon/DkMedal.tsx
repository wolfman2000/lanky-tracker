import useDonkStore from '@renderer/store'
import GalleonCheck from './GalleonCheck'
import {
  useGalleonLighthouseArea,
  useGalleonLighthousePlatform,
  useGalleonOutskirts,
  usePlayGalleon,
  useSlamGalleon
} from '@renderer/hooks/galleon'
import { useShallow } from 'zustand/react/shallow'
import { logicBreak } from '@renderer/hooks/world'

const DkMedal: React.FC = () => {
  const inStage = usePlayGalleon()
  const canSlam = useSlamGalleon()
  const outskirts = useGalleonOutskirts()
  const lighthouseArea = useGalleonLighthouseArea()
  const lighthousePlatform = useGalleonLighthousePlatform()
  const [cbCount, coloredBananaShuffle, kong, gun, music, pad, dive, lanky] = useDonkStore(
    useShallow((state) => [
      state.cbCount,
      state.shuffleColoredBananas,
      state.dk,
      state.coconut,
      state.bongos,
      state.blast,
      state.dive,
      state.lanky
    ])
  )

  let currLogic = 0
  if (gun) {
    currLogic += 10
  }
  if (outskirts) {
    currLogic += 15
    if (music) {
      currLogic += 10
    }
  }
  if (lighthouseArea && dive && lanky) {
    currLogic += 10
  }
  let currBreak = currLogic
  if (lighthousePlatform.in) {
    if (gun) {
      currLogic += 10
    }
    if (pad) {
      currLogic += 15
    }
    if (canSlam) {
      currLogic += 20
      if (gun) {
        currLogic += 10
      }
    }
  }
  if (logicBreak(lighthousePlatform)) {
    if (gun) {
      currBreak += 10
    }
    if (pad) {
      currBreak += 15
    }
    if (canSlam) {
      currBreak += 20
      if (gun) {
        currBreak += 10
      }
    }
  }

  return (
    <GalleonCheck
      id={4100}
      name="Galleon DK Medal"
      region="Galleon Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default DkMedal
