import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { usePillarKasplat } from '@renderer/hooks/caves'
import CavesCheck from '../check'

const LankyKasplat: React.FC = () => {
  const pillar = usePillarKasplat()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <CavesCheck
          id={6052}
          name="Caves Kasplat: On the Pillar"
          region="Main Caves Area"
          canGetLogic={pillar.in}
          canGetBreak={pillar.out}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default LankyKasplat
