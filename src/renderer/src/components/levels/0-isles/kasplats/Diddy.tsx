import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useCastleKasplat } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const DiddyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <IslesCheck
        id={51}
        name="Isles Kasplat: Castle Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={useCastleKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default DiddyKasplat
