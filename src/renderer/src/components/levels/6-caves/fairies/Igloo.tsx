import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useIglooFairy } from '@renderer/hooks/caves'
import CavesCheck from '../check'

const IglooFairy: React.FC = () => (
  <FairyPool>
    <VanillaFairy>
      <CavesCheck
        id={6080}
        name="Caves Fairy (Tiny Igloo)"
        region="Igloo Area"
        canGetLogic={useIglooFairy()}
      />
    </VanillaFairy>
  </FairyPool>
)

export default IglooFairy
