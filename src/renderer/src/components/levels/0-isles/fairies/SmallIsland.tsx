import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useGeneralFairy } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const SmallIslandFairy: React.FC = () => (
  <FairyPool>
    <VanillaFairy>
      <IslesCheck
        id={80}
        name="Isles Fairy (Small Island)"
        region="Outer Isles"
        canGetLogic={useGeneralFairy()}
      />
    </VanillaFairy>
  </FairyPool>
)

export default SmallIslandFairy
