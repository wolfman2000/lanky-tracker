import ArenaPool from '@renderer/components/pools/Arenas'
import VanillaArena from '@renderer/components/pools/VanillaArena'
import { useArena } from '@renderer/hooks/forest'
import ForestCheck from '../check'

const MushroomArena: React.FC = () => (
  <ArenaPool>
    <VanillaArena>
      <ForestCheck
        id={5090}
        name="Forest Arena (Mushroom High Platform)"
        region="Giant Mushroom Exterior"
        canGetLogic={useArena()}
      />
    </VanillaArena>
  </ArenaPool>
)

export default MushroomArena
