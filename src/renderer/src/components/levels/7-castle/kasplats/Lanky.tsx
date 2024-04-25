import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { usePathKasplat } from '@renderer/hooks/castle'
import CastleCheck from '../check'

const LankyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <CastleCheck
        id={7052}
        name="Castle Kasplat: Near Upper Warp 2"
        region="Castle Surroundings"
        canGetLogic={usePathKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default LankyKasplat
