import ArenaPool from '@renderer/components/pools/Arenas'
import VanillaArena from '@renderer/components/pools/VanillaArena'
import { useLankyVultureGb } from '@renderer/hooks/aztec'
import AztecCheck from '../check'

const VultureArena: React.FC = () => {
  const vulture = useLankyVultureGb()
  return (
    <ArenaPool>
      <VanillaArena>
        <AztecCheck
          id={2090}
          name="Aztec Arena (Tiny Temple: Vulture Room)"
          region="Tiny Temple"
          canGetLogic={vulture.in}
          canGetBreak={vulture.out}
        />
      </VanillaArena>
    </ArenaPool>
  )
}

export default VultureArena
