import DropPool from '@renderer/components/pools/Drops'
import { useAztecTinyTemple } from '@renderer/hooks/aztec'
import { useDive } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'

const TinySwimEnemies: React.FC = () => {
  const tiny = useAztecTinyTemple()
  const dive = useDive()
  return (
    <DropPool>
      <AztecCheck
        id={2384}
        name="Aztec Enemy: TT Kong 0"
        region="Tiny Temple"
        canGetLogic={tiny.in && dive}
        canGetBreak={logicBreak(tiny) && dive}
      />
      <AztecCheck
        id={2385}
        name="Aztec Enemy: TT Kong 1"
        region="Tiny Temple"
        canGetLogic={tiny.in && dive}
        canGetBreak={logicBreak(tiny) && dive}
      />
      <AztecCheck
        id={2386}
        name="Aztec Enemy: TT Kong 2"
        region="Tiny Temple"
        canGetLogic={tiny.in && dive}
        canGetBreak={logicBreak(tiny) && dive}
      />
      <AztecCheck
        id={2387}
        name="Aztec Enemy: TT Kong 3"
        region="Tiny Temple"
        canGetLogic={tiny.in && dive}
        canGetBreak={logicBreak(tiny) && dive}
      />
      <AztecCheck
        id={2388}
        name="Aztec Enemy: TT Kong 4"
        region="Tiny Temple"
        canGetLogic={tiny.in && dive}
        canGetBreak={logicBreak(tiny) && dive}
      />
    </DropPool>
  )
}

export default TinySwimEnemies
