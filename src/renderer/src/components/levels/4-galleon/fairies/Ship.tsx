import FairyPool from '@renderer/components/pools/Fairies'
import VanillaFairy from '@renderer/components/pools/VanillaFairy'
import { useShipFairy } from '@renderer/hooks/galleon'
import GalleonCheck from '../check'

const ShipFairy: React.FC = () => (
  <FairyPool>
    <VanillaFairy>
      <GalleonCheck
        id={4081}
        name="Galleon Fairy (In Tiny's 5 Door Ship)"
        region="5 Door Ship"
        canGetLogic={useShipFairy()}
      />
    </VanillaFairy>
  </FairyPool>
)

export default ShipFairy
