import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useProductionBaseKasplat } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const DiddyKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <FactoryCheck
        id={3051}
        name="Factory Kasplat: Base of Production"
        region="Production Room"
        canGetLogic={useProductionBaseKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default DiddyKasplat
