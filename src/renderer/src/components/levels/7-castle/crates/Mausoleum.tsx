import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useGeneralThing } from '@renderer/hooks/castle'
import CastleCheck from '../check'

const MausoleumCrate: React.FC = () => (
  <CratePool>
    <VanillaCrate>
      <CastleCheck
        id={7060}
        name="Castle Crate: Behind Mausoleum Entrance"
        region="Castle Underground"
        canGetLogic={useGeneralThing()}
      />
    </VanillaCrate>
  </CratePool>
)

export default MausoleumCrate
