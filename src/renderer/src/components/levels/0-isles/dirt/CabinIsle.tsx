import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/components/pools/VanillaDirt'
import { useIslandDirt } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const CabinIsleDirt: React.FC = () => (
  <RainbowCoinPool>
    <VanillaDirt>
      <IslesCheck
        id={75}
        name="Isles Dirt: Cabin Isle"
        region="Outer Isles"
        canGetLogic={useIslandDirt()}
      />
    </VanillaDirt>
  </RainbowCoinPool>
)

export default CabinIsleDirt
