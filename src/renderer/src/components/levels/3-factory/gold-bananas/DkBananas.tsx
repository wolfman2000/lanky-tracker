import CompanyPool from '@renderer/components/pools/Company'
import {
  useDkBlastGb,
  useDkCoin,
  useDkHutGb,
  useDkNumberGb,
  useDkProdGb
} from '@renderer/hooks/factory'
import FactoryCheck from '../FactoryCheck'

const DkBananas: React.FC = () => {
  const hutGb = useDkHutGb()
  const prodGb = useDkProdGb()
  return (
    <>
      <FactoryCheck
        id={3001}
        name="Factory Donkey Number Game"
        region="Testing Area"
        canGetLogic={useDkNumberGb()}
      />
      <FactoryCheck
        id={3002}
        name="Factory Donkey Power Hut"
        region="Storage And Arcade"
        canGetLogic={hutGb.in}
        canGetBreak={hutGb.out}
      />
      <FactoryCheck
        id={3003}
        name="Factory Donkey Blast + Arcade Round 1"
        region="Storage And Arcade"
        canGetLogic={useDkBlastGb()}
      />
      <FactoryCheck
        id={3004}
        name="Factory Donkey Crusher Room"
        region="Production Room"
        canGetLogic={prodGb.in}
        canGetBreak={prodGb.out}
      />
      <CompanyPool>
        <FactoryCheck
          id={3005}
          name="Factory Donkey Nintendo Coin"
          region="Storage And Arcade"
          canGetLogic={useDkCoin()}
        />
      </CompanyPool>
    </>
  )
}

export default DkBananas
