import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useDkKasplat } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const DkKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <JapesCheck
        id={1050}
        name="Japes Kasplat: Hive Tunnel Lower"
        region="Hive Tunnel Area"
        canGetLogic={useDkKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default DkKasplat
