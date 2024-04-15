import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useBarnFairy } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const BarnFairy: React.FC = () => {
  const barn = useBarnFairy()
  return (
    <FairyPool>
      <VanillaFairy>
        <ForestCheck
          id={5081}
          name="Forest Fairy (Thornvine Barn)"
          region="Forest Mills"
          canGetLogic={barn.in}
          canGetBreak={barn.out}
        />
      </VanillaFairy>
    </FairyPool>
  )
}

export default BarnFairy
