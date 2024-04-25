import ArenaPool from '@renderer/components/pools/Arenas'
import VanillaArena from '@renderer/components/pools/VanillaArena'
import { useSnideArena } from '@renderer/hooks/isles'
import IslesCheck from '../check'

const SnideArena: React.FC = () => (
  <ArenaPool>
    <VanillaArena>
      <IslesCheck
        id={90}
        name="Isles Arena 1 (Snide's Room: Under Rock)"
        region="Krem Isle"
        canGetLogic={useSnideArena()}
      />
    </VanillaArena>
  </ArenaPool>
)

export default SnideArena
