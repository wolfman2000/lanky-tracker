import ArenaPool from '@renderer/components/pools/Arenas'
import VanillaArena from '@renderer/components/pools/VanillaArena'
import { useArena } from '@renderer/hooks/galleon'
import GalleonCheck from '../check'

const CavernArena: React.FC = () => (
  <ArenaPool>
    <VanillaArena>
      <GalleonCheck
        id={4090}
        name="Galleon Arena (Under Cranky)"
        region="Galleon Caverns"
        canGetLogic={useArena()}
      />
    </VanillaArena>
  </ArenaPool>
)

export default CavernArena
