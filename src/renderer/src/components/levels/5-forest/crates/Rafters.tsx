import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useGeneralThing } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const RaftersCrate: React.FC = () => (
  <CratePool>
    <VanillaCrate>
      <ForestCheck
        id={5060}
        name="Forest Crate: Behind Dark Attic"
        region="Forest Mills"
        canGetLogic={useGeneralThing()}
      />
    </VanillaCrate>
  </CratePool>
)

export default RaftersCrate
