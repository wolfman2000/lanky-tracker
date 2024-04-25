import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useResearchKasplat } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const LankyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <FactoryCheck
        id={3052}
        name="Factory Kasplat: Research and Development"
        region="R&D Area"
        canGetLogic={useResearchKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default LankyKasplat
