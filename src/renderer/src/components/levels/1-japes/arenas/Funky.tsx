import ArenaPool from '@renderer/components/pools/Arenas'
import VanillaArena from '@renderer/components/pools/VanillaArena'
import { useGeneralThing } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const FunkyArena: React.FC = () => (
  <ArenaPool>
    <VanillaArena>
      <JapesCheck
        id={1090}
        name="Japes Arena (Near Funky)"
        region="Japes Hillside"
        canGetLogic={useGeneralThing()}
      />
    </VanillaArena>
  </ArenaPool>
)

export default FunkyArena
