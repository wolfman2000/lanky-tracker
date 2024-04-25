import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useDkBarnGb } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const BarnInsideCrate: React.FC = () => {
  const barn = useDkBarnGb()
  return (
    <CratePool>
      <VanillaCrate>
        <ForestCheck
          id={5063}
          name="Forest Crate: In Thornvine Barn"
          region="Forest Mills"
          canGetLogic={barn.in}
          canGetBreak={barn.out}
        />
      </VanillaCrate>
    </CratePool>
  )
}

export default BarnInsideCrate
