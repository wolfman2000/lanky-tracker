import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useGeneralDirt } from '@renderer/hooks/castle'
import { useShuffleDirt } from '@renderer/hooks/settings'
import CastleCheck from './CastleCheck'

const VanillaDirtLocations: React.FC = () => {
  return (
    <>
      <CastleCheck
        id={7070}
        name="Castle Dirt: Top Floor"
        region="Castle Surroundings"
        canGetLogic={useGeneralDirt()}
      />
    </>
  )
}

const ShuffledDirtLocations: React.FC = () => {
  const dirt = useGeneralDirt()
  return (
    <>
      <CastleCheck id={7270} name="Castle Dirt Location #1" canGetLogic={dirt} />
      <CastleCheck id={7271} name="Castle Dirt Location #2" canGetLogic={dirt} />
    </>
  )
}

const DirtLocations: React.FC = () => {
  const locations = useShuffleDirt() ? <ShuffledDirtLocations /> : <VanillaDirtLocations />
  return <RainbowCoinPool>{locations}</RainbowCoinPool>
}

export default DirtLocations
