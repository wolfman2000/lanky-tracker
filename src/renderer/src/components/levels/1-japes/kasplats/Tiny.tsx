import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useTinyKasplat } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const TinyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <JapesCheck
        id={1053}
        name="Japes Kasplat: Hive Tunnel Upper"
        region="Hive Tunnel Area"
        canGetLogic={useTinyKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default TinyKasplat
