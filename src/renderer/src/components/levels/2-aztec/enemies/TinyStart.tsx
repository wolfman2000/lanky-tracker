import DropPool from '@renderer/components/pools/Drops'
import { useAztecTinyTemple } from '@renderer/hooks/aztec'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'

const TinyStartEnemies: React.FC = () => {
  const tiny = useAztecTinyTemple()
  return (
    <DropPool>
      <AztecCheck
        id={2379}
        name="Aztec Enemy: TT Guard 0"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={logicBreak(tiny)}
      />
      <AztecCheck
        id={2380}
        name="Aztec Enemy: TT Guard 1"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={logicBreak(tiny)}
      />
      <AztecCheck
        id={2381}
        name="Aztec Enemy: TT Main 0"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={logicBreak(tiny)}
      />
      <AztecCheck
        id={2382}
        name="Aztec Enemy: TT Main 1"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={logicBreak(tiny)}
      />
      <AztecCheck
        id={2383}
        name="Aztec Enemy: TT Main 2"
        region="Tiny Temple"
        canGetLogic={tiny.in}
        canGetBreak={logicBreak(tiny)}
      />
    </DropPool>
  )
}

export default TinyStartEnemies
