import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useProductionTopKasplat } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const DkKasplat: React.FC = () => (
  <KasplatPool>
    <VanillaKasplat>
      <FactoryCheck
        id={3050}
        name="Factory Kasplat: Upper Production Pipe"
        region="Production Room"
        canGetLogic={useProductionTopKasplat()}
      />
    </VanillaKasplat>
  </KasplatPool>
)

export default DkKasplat
