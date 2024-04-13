import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useGeneralDirt, useLighthouseDirt } from '@renderer/hooks/galleon'
import { useShuffleDirt } from '@renderer/hooks/settings'
import GalleonCheck from './GalleonCheck'

const VanillaDirtLocations: React.FC = () => {
  const dirt = useLighthouseDirt()
  return (
    <>
      <GalleonCheck
        id={4070}
        name="Galleon Dirt Lighthouse"
        region="Lighthouse Area"
        canGetLogic={dirt.in}
        canGetBreak={dirt.out}
      />
    </>
  )
}

const ShuffledDirtLocations: React.FC = () => {
  const thing = useGeneralDirt()
  return (
    <>
      <GalleonCheck id={4270} name="Galleon Dirt Location #1" canGetLogic={thing} />
      <GalleonCheck id={4271} name="Galleon Dirt Location #2" canGetLogic={thing} />
    </>
  )
}

const DirtLocations: React.FC = () => {
  const locations = useShuffleDirt() ? <ShuffledDirtLocations /> : <VanillaDirtLocations />
  return <RainbowCoinPool>{locations}</RainbowCoinPool>
}

export default DirtLocations
