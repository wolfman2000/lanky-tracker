import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useCavesKasplat } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const LankyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <IslesCheck
        id={52}
        name="Isles Kasplat: Caves Lobby Punch"
        region="Caves-Helm Lobbies"
        canGetLogic={useCavesKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default LankyKasplat
