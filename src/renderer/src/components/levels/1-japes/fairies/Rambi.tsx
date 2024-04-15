import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useRambiFairy } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const RambiFairy: React.FC = () => (
  <FairyPool>
    <VanillaFairy>
      <JapesCheck
        id={1080}
        name="Japes Fairy (Rambi Door Pool)"
        region="Stormy Tunnel Area"
        canGetLogic={useRambiFairy()}
      />
    </VanillaFairy>
  </FairyPool>
)

export default RambiFairy
