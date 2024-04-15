import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useLonelyKasplat } from '@renderer/hooks/castle'
import CastleCheck from '../check'

const TinyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <CastleCheck
        id={7053}
        name="Castle Kasplat: On a lone platform"
        region="Castle Surroundings"
        canGetLogic={useLonelyKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default TinyKasplat
