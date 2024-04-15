import KasplatPool from '@renderer/components/pools/Kasplats'
import VanillaKasplat from '@renderer/components/pools/VanillaKasplat'
import { useTreasureKasplat } from '@renderer/hooks/galleon'
import GalleonCheck from '../check'

const DkKasplat: React.FC = () => {
  const treasure = useTreasureKasplat()
  return (
    <KasplatPool>
      <VanillaKasplat>
        <GalleonCheck
          id={4050}
          name="Galleon Kasplat: Diddy Gold Tower"
          region="Treasure Room"
          canGetLogic={treasure.in}
          canGetBreak={treasure.out}
        />
      </VanillaKasplat>
    </KasplatPool>
  )
}

export default DkKasplat
