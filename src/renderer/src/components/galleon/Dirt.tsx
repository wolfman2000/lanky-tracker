import {
  useGalleonHighTide,
  useGalleonLighthouseArea,
  usePlayGalleon,
  useSlamGalleon
} from '@renderer/hooks/galleon'
import GalleonCheck from './GalleonCheck'
import { useAnyKong, useDk, useShockwave } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import RainbowCoinPool from '../pools/RainbowCoins'

const VanillaDirtLocations: React.FC = () => {
  const lighthouseArea = useGalleonLighthouseArea()
  const canSlam = useSlamGalleon()
  const shockwave = useShockwave()
  const dk = useDk()
  const highTide = useGalleonHighTide()
  return (
    <>
      <GalleonCheck
        id={4070}
        name="Galleon Dirt Lighthouse"
        region="Lighthouse Area"
        canGetLogic={lighthouseArea && highTide && canSlam && dk && shockwave}
        canGetBreak={lighthouseArea && canSlam && dk && shockwave}
      />
    </>
  )
}

const ShuffledDirtLocations: React.FC = () => {
  const anyKong = useAnyKong()
  const shockwave = useShockwave()
  const inStage = usePlayGalleon()
  return (
    <>
      <GalleonCheck
        id={4270}
        name="Galleon Dirt Location #1"
        canGetLogic={inStage && anyKong && shockwave}
      />
      <GalleonCheck
        id={4271}
        name="Galleon Dirt Location #2"
        canGetLogic={inStage && anyKong && shockwave}
      />
    </>
  )
}

const DirtLocations: React.FC = () => {
  const shuffle = useDonkStore(useShallow((state) => state.shuffleDirt))
  const locations = shuffle ? <ShuffledDirtLocations /> : <VanillaDirtLocations />
  return <RainbowCoinPool>{locations}</RainbowCoinPool>
}

export default DirtLocations
