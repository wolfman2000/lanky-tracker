import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/components/pools/VanillaDirt'
import { useFactoryDirt } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const DarkRoomDirt: React.FC = () => (
  <RainbowCoinPool>
    <VanillaDirt>
      <FactoryCheck
        id={3070}
        name="Factory Dirt: Dark Room"
        region="Storage And Arcade"
        canGetLogic={useFactoryDirt()}
      />
    </VanillaDirt>
  </RainbowCoinPool>
)

export default DarkRoomDirt
