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
        name="Factory DK Number Game"
        region="Testing Area"
        canGetLogic={useDkNumberGb()}
      />
      <FactoryCheck
        id={3002}
        name="Factory DK Power Hut"
        region="Storage And Arcade"
        canGetLogic={hutGb.in}
        canGetBreak={hutGb.out}
      />
      <FactoryCheck
        id={3003}
        name="Factory DK Blast (+ Arcade?)"
        region="Storage And Arcade"
        canGetLogic={useDkBlastGb()}
      />
      <FactoryCheck
        id={3004}
        name="Factory DK Crusher Room"
        region="Production Room"
        canGetLogic={prodGb.in}
        canGetBreak={prodGb.out}
      />
      <CompanyPool>
        <FactoryCheck
          id={3005}
          name="Factory DK Nintendo Coin"
          region="Storage And Arcade"
          canGetLogic={useDkCoin()}
        />
      </CompanyPool>
    </>
  )
}

export default DkBananas
