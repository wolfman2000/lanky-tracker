import ArenaPool from '@renderer/components/pools/Arenas'
import VanillaArena from '@renderer/components/pools/VanillaArena'
import { useForestArena } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const GoneArena: React.FC = () => (
  <ArenaPool>
    <VanillaArena>
      <IslesCheck
        id={91}
        name="Isles Arena 2 (Fungi Lobby: Gone Box)"
        region="Japes-Forest Lobbies"
        canGetLogic={useForestArena()}
      />
    </VanillaArena>
  </ArenaPool>
)

export default GoneArena
