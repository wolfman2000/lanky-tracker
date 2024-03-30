import {
  useGalleonLighthouseArea,
  useGalleonLighthousePlatform,
  useGalleonOutskirts,
  usePlayGalleon,
  useSlamGalleon
} from '@renderer/hooks/galleon'
import { useBlast, useBongos, useCoconut, useDive, useDk, useLanky } from '@renderer/hooks/kongs'
import { useCbCount } from '@renderer/hooks/settings'
import { logicBreak } from '@renderer/hooks/world'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GalleonCheck from '../GalleonCheck'

const DkMedal: React.FC = () => {
  const inStage = usePlayGalleon()
  const canSlam = useSlamGalleon()
  const outskirts = useGalleonOutskirts()
  const lighthouseArea = useGalleonLighthouseArea()
  const lighthousePlatform = useGalleonLighthousePlatform()
  const cbCount = useCbCount()
  const kong = useDk()
  const gun = useCoconut()
  const music = useBongos()
  const pad = useBlast()
  const dive = useDive()
  const lanky = useLanky()
  const [coloredBananaShuffle] = useDonkStore(
    useShallow((state) => [state.settings.shuffleColoredBananas])
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
