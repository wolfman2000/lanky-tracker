import useDonkStore from '@renderer/store'
import GalleonCheck from './GalleonCheck'
import {
  useGalleonCannon,
  useGalleonCavernTop,
  useGalleonHighTide,
  useGalleonLighthouseArea,
  useGalleonOutskirts,
  useGalleonSeasickShip,
  usePlayGalleon
} from '@renderer/hooks/galleon'
import { useShallow } from 'zustand/react/shallow'
import { logicBreak } from '@renderer/hooks/world'

const ChunkyMedal: React.FC = () => {
  const inStage = usePlayGalleon()
  const outskirts = useGalleonOutskirts()
  const lighthouseArea = useGalleonLighthouseArea()
  const cannon = useGalleonCannon()
  const highTide = useGalleonHighTide()
  const seasick = useGalleonSeasickShip()
  const cavernTop = useGalleonCavernTop()
  const [cbCount, coloredBananaShuffle, kong, gun, move, dive, slam] = useDonkStore(
    useShallow((state) => [
      state.cbCount,
      state.coloredBananaShuffle,
      state.chunky,
      state.pineapple,
      state.punch,
      state.dive,
      state.slam
    ])
  )

  let currLogic = 12
  if (lighthouseArea && dive) {
    currLogic += 10
  }
  if (outskirts) {
    if (gun) {
      currLogic += 20
    }
    if (dive) {
      currLogic += 15
    }
    if (highTide) {
      currLogic += 5
    }
  }

  let currBreak = currLogic
  if (cavernTop.in) {
    currLogic += 3
  }
  if (cannon && highTide) {
    currLogic += 10
  }
  if (seasick.in && slam != 0) {
    currLogic += 20
    if (move) {
      currLogic += 5
    }
  }
  if (logicBreak(cavernTop)) {
    currBreak += 3
  }
  if (cannon) {
    currBreak += 10
  }
  if (logicBreak(seasick) && slam != 0) {
    currBreak += 20
    if (move) {
      currBreak += 5
    }
  }

  return (
    <GalleonCheck
      id={4104}
      name="Galleon Chunky Medal"
      region="Galleon Medal Rewards"
      canGetLogic={inStage && kong && (coloredBananaShuffle || currLogic >= cbCount)}
      canGetBreak={inStage && kong && (coloredBananaShuffle || currBreak >= cbCount)}
    />
  )
}

export default ChunkyMedal
