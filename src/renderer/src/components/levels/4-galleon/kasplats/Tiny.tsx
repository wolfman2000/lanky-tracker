import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useVineKasplat } from '@renderer/hooks/galleon'
import GalleonCheck from '../check'

const TinyKasplat: React.FC = () => {
  const galleonTop = useVineKasplat()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <GalleonCheck
          id={4053}
          name="Galleon Kasplat: Past Vines"
          region="Galleon Caverns"
          canGetLogic={galleonTop.in}
          canGetBreak={galleonTop.out}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default TinyKasplat
