import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useOwlKasplat } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const LankyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <ForestCheck
        id={5052}
        name="Forest Kasplat: Under Owl Tree"
        region="Owl Tree"
        canGetLogic={useOwlKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default LankyKasplat
