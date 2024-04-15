import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useGeneralOutskirts } from '@renderer/hooks/galleon'
import GalleonCheck from '../check'

const CactusCrate: React.FC = () => (
  <CratePool>
    <VanillaCrate>
      <GalleonCheck
        id={4060}
        name="Galleon Crate: Near Cactus"
        region="Shipyard Outskirts"
        canGetLogic={useGeneralOutskirts()}
      />
    </VanillaCrate>
  </CratePool>
)

export default CactusCrate
