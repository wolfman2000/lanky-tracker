import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useGeneralDirt } from '@renderer/hooks/japes'
import { useShuffleDirt } from '@renderer/hooks/settings'
import JapesCheck from '../check'

const Shuffled: React.FC = () => {
  return (
    <RainbowCoinPool>
      <JapesCheck id={1270} name="Japes Dirt Location #1" canGetLogic={useGeneralDirt()} />
      <JapesCheck id={1271} name="Japes Dirt Location #2" canGetLogic={useGeneralDirt()} />
    </RainbowCoinPool>
  )
}

const ShuffledDirtLocations: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default ShuffledDirtLocations
