import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useBlockKasplat } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const ChunkyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <FactoryCheck
        id={3054}
        name="Factory Kasplat: Block Tower"
        region="Testing Area"
        canGetLogic={useBlockKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default ChunkyKasplat
