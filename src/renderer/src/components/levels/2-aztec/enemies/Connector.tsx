import { useAztecBack } from '@renderer/hooks/aztec'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'
import DropPool from '@renderer/components/pools/Drops'

const ConnectorTunnelEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = useAztecBack()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <AztecCheck
        id={2302}
        name="Aztec Enemy Tunnel Pad 0"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && zinger}
        canGetBreak={logicBreak(inStage) && zinger}
      />
      <AztecCheck
        id={2304}
        name="Aztec Enemy: Tunnel Cage 0"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2305}
        name="Aztec Enemy: Tunnel Cage 1"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2306}
        name="Aztec Enemy: Tunnel Cage 2"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2307}
        name="Aztec Enemy: Tunnel Cage 3"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2303}
        name="Aztec Enemy Tunnel Pad 1"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && zinger}
        canGetBreak={logicBreak(inStage) && zinger}
      />
    </DropPool>
  )
}

export default ConnectorTunnelEnemies
