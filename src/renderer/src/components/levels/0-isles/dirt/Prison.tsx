import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import VanillaDirt from '@renderer/components/pools/VanillaDirt'
import { useGeneralDirt } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const PrisonDirt: React.FC = () => {
  const dirt = useGeneralDirt()
  return (
    <RainbowCoinPool>
      <VanillaDirt>
        <IslesCheck
          id={72}
          name="Isles Dirt: Back of Prison"
          region="Krem Isle"
          canGetLogic={dirt}
        />
      </VanillaDirt>{' '}
    </RainbowCoinPool>
  )
}

export default PrisonDirt
