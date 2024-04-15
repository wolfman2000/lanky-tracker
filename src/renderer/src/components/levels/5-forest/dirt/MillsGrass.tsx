import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/components/pools/VanillaDirt'
import { useGeneralDirt } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const MillsGrassDirt: React.FC = () => (
  <RainbowCoinPool>
    <VanillaDirt>
      <ForestCheck
        id={5071}
        name="Forest Dirt: Mills Grass"
        region="Forest Mills"
        canGetLogic={useGeneralDirt()}
      />
    </VanillaDirt>
  </RainbowCoinPool>
)

export default MillsGrassDirt
