import CompanyPool from '@renderer/components/pools/Company'
import { useDkCoin } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const NintendoCoin: React.FC = () => (
  <CompanyPool>
    <FactoryCheck
      id={3005}
      name="Factory Donkey Nintendo Coin"
      region="Storage And Arcade"
      canGetLogic={useDkCoin()}
    />
  </CompanyPool>
)

export default NintendoCoin
