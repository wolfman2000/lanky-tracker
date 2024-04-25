import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useCabinFairy } from '@renderer/hooks/caves'
import CavesCheck from '../check'

const CabinFairy: React.FC = () => {
  const cabin = useCabinFairy()
  return (
    <FairyPool>
      <VanillaFairy>
        <CavesCheck
          id={6081}
          name="Caves Fairy (Diddy Candles Cabin)"
          region="Cabins Area"
          canGetLogic={cabin.in}
          canGetBreak={cabin.out}
        />
      </VanillaFairy>
    </FairyPool>
  )
}

export default CabinFairy
