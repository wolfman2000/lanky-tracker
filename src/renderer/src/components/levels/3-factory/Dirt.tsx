import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useFactoryDirt, useGeneralDirt } from '@renderer/hooks/factory'
import { useShuffleDirt } from '@renderer/hooks/settings'
import FactoryCheck from './FactoryCheck'

const VanillaDirtLocations: React.FC = () => {
  return (
    <FactoryCheck
      id={3070}
      name="Factory Dirt Dark Room"
      region="Storage And Arcade"
      canGetLogic={useFactoryDirt()}
    />
  )
}

const ShuffledDirtLocations: React.FC = () => {
  const dirt = useGeneralDirt()
  return (
    <>
      <FactoryCheck id={3270} name="Factory Dirt Location #1" canGetLogic={dirt} />
      <FactoryCheck id={3271} name="Factory Dirt Location #2" canGetLogic={dirt} />
    </>
  )
}

const DirtLocations: React.FC = () => {
  const locations = useShuffleDirt() ? <ShuffledDirtLocations /> : <VanillaDirtLocations />
  return <RainbowCoinPool>{locations}</RainbowCoinPool>
}

export default DirtLocations
