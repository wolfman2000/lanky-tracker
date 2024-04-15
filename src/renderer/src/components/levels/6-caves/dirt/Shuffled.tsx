import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useGeneralDirt } from '@renderer/hooks/caves'
import { useShuffleDirt } from '@renderer/hooks/settings'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
  const dirt = useGeneralDirt()
  return (
    <RainbowCoinPool>
      <CavesCheck id={6270} name="Caves Dirt Location #1" canGetLogic={dirt} />
      <CavesCheck id={6271} name="Caves Dirt Location #2" canGetLogic={dirt} />
    </RainbowCoinPool>
  )
}

const ShuffledDirtLocations: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default ShuffledDirtLocations
