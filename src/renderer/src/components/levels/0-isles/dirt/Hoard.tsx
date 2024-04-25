import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/components/pools/VanillaDirt'
import { useHoardDirt } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const Hoard: React.FC = () => (
  <RainbowCoinPool>
    <VanillaDirt>
      <IslesCheck
        id={71}
        name="Isles Dirt: Banana Hoard"
        region="Main Isle"
        canGetLogic={useHoardDirt()}
      />
    </VanillaDirt>
  </RainbowCoinPool>
)

export default Hoard
