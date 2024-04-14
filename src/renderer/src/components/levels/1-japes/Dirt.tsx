import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useGeneralDirt, usePaintingDirt } from '@renderer/hooks/japes'
import { useShuffleDirt } from '@renderer/hooks/settings'
import JapesCheck from './JapesCheck'

const VanillaDirtLocations: React.FC = () => {
  const dirt = usePaintingDirt()
  return (
    <>
      <JapesCheck
        id={1070}
        name="Japes Dirt: Painting Hill"
        region="Japes Hillside"
        canGetLogic={dirt.in}
        canGetBreak={dirt.out}
      />
    </>
  )
}

const ShuffledDirtLocations: React.FC = () => {
  return (
    <>
      <JapesCheck id={1270} name="Japes Dirt Location #1" canGetLogic={useGeneralDirt()} />
      <JapesCheck id={1271} name="Japes Dirt Location #2" canGetLogic={useGeneralDirt()} />
    </>
  )
}

const DirtLocations: React.FC = () => {
  const locations = useShuffleDirt() ? <ShuffledDirtLocations /> : <VanillaDirtLocations />
  return <RainbowCoinPool>{locations}</RainbowCoinPool>
}

export default DirtLocations
