import CratePool from '@renderer/components/pools/Crates'
import VanillaCrate from '@renderer/components/pools/VanillaCrate'
import { useRambiCrate } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const RambiCrate: React.FC = () => (
  <CratePool>
    <VanillaCrate>
      <JapesCheck
        id={1061}
        name="Japes Crate: In the Rambi Cave"
        region="Stormy Tunnel Area"
        canGetLogic={useRambiCrate()}
      />
    </VanillaCrate>
  </CratePool>
)

export default RambiCrate
