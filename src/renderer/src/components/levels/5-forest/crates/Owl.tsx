import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useForestOwl } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const OwlCrate: React.FC = () => (
  <CratePool>
    <VanillaCrate>
      <ForestCheck
        id={5061}
        name="Forest Crate: Near Owl Tree"
        region="Owl Tree"
        canGetLogic={useForestOwl()}
      />
    </VanillaCrate>
  </CratePool>
)

export default OwlCrate
