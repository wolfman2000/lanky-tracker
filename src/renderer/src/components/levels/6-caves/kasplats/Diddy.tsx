import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useFunkyKasplat } from '@renderer/hooks/caves'
import CavesCheck from '../check'

const DiddyKasplat: React.FC = () => {
  const miniFunky = useFunkyKasplat()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <CavesCheck
          id={6051}
          name="Caves Kasplat: Mini Room by Funky"
          region="Main Caves Area"
          canGetLogic={miniFunky.in}
          canGetBreak={miniFunky.out}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default DiddyKasplat
