import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useBarnKasplat } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const DkKasplat: React.FC = () => {
  const barn = useBarnKasplat()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <ForestCheck
          id={5050}
          name="Forest Kasplat: Behind DK's Barn"
          region="Forest Mills"
          canGetLogic={barn.in}
          canGetBreak={barn.out}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default DkKasplat
