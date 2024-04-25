import ArenaPool from '@renderer/components/pools/Arenas'
import VanillaArena from '@renderer/components/pools/VanillaArena'
import { useLankyGreenhouseGb } from '@renderer/hooks/castle'
import CastleCheck from '../check'

const GreenhouseArena: React.FC = () => (
  <ArenaPool>
    <VanillaArena>
      <CastleCheck
        id={7090}
        name="Castle Arena (Greenhouse: Center)"
        region="Castle Surroundings"
        canGetLogic={useLankyGreenhouseGb()}
      />
    </VanillaArena>
  </ArenaPool>
)

export default GreenhouseArena
