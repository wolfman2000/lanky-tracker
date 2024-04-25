import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useLighthouseKasplat } from '@renderer/hooks/galleon'
import GalleonCheck from '../check'

const DiddyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <GalleonCheck
        id={4051}
        name="Galleon Kasplat: Lighthouse Alcove"
        region="Lighthouse Area"
        canGetLogic={useLighthouseKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default DiddyKasplat
