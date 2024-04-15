import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useLankyKasplat } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const LankyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <JapesCheck
        id={1052}
        name="Japes Kasplat: By Lanky Slope Bonus"
        region="Stormy Tunnel Area"
        canGetLogic={useLankyKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default LankyKasplat
