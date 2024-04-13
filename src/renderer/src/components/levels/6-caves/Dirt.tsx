import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useGeneralDirt, useKoshaDirt } from '@renderer/hooks/caves'
import { useShuffleDirt } from '@renderer/hooks/settings'
import CavesCheck from './CavesCheck'

const VanillaDirtLocations: React.FC = () => {
  const dirt = useKoshaDirt()
  return (
    <CavesCheck
      id={6070}
      name="Caves Dirt Giant Kosha"
      region="Igloo Area"
      canGetLogic={dirt.in}
      canGetBreak={dirt.out}
    />
  )
}

const ShuffledDirtLocations: React.FC = () => {
  const dirt = useGeneralDirt()
  return (
    <>
      <CavesCheck id={6270} name="Caves Dirt Location #1" canGetLogic={dirt} />
      <CavesCheck id={6271} name="Caves Dirt Location #2" canGetLogic={dirt} />
    </>
  )
}

const DirtLocations: React.FC = () => {
  const locations = useShuffleDirt() ? <ShuffledDirtLocations /> : <VanillaDirtLocations />
  return <RainbowCoinPool>{locations}</RainbowCoinPool>
}

export default DirtLocations
