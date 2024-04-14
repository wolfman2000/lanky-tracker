import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useBeanDirt, useGeneralDirt } from '@renderer/hooks/forest'
import { useShuffleDirt } from '@renderer/hooks/settings'
import ForestCheck from './ForestCheck'

const VanillaDirtLocations: React.FC = () => {
  return (
    <>
      <ForestCheck
        id={5070}
        name="Forest Dirt: Beanstalk"
        region="Forest Center And Beanstalk"
        canGetLogic={useBeanDirt()}
      />
      <ForestCheck
        id={5071}
        name="Forest Dirt: Mills Grass"
        region="Forest Mills"
        canGetLogic={useGeneralDirt()}
      />
    </>
  )
}

const ShuffledDirtLocations: React.FC = () => {
  const dirt = useGeneralDirt()
  return (
    <>
      <ForestCheck id={5270} name="Forest Dirt Location #1" canGetLogic={dirt} />
      <ForestCheck id={5271} name="Forest Dirt Location #2" canGetLogic={dirt} />
    </>
  )
}

const DirtLocations: React.FC = () => {
  const locations = useShuffleDirt() ? <ShuffledDirtLocations /> : <VanillaDirtLocations />
  return <RainbowCoinPool>{locations}</RainbowCoinPool>
}

export default DirtLocations
