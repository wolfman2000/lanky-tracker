import DropPool from '@renderer/components/pools/Drops'
import { useAztecFront } from '@renderer/hooks/aztec'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong, usePineapple } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'

const BeforeOasisEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = useAztecFront()
  const pineapple = usePineapple()
  const zinger = useDefeatZinger()

  return (
    <DropPool>
      <AztecCheck
        id={2300}
        name="Aztec Enemy: Vase 0"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && pineapple}
        canGetBreak={logicBreak(inStage) && pineapple}
      />
      <AztecCheck
        id={2301}
        name="Aztec Enemy: Vase 1"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && pineapple}
        canGetBreak={logicBreak(inStage) && pineapple}
      />
      <AztecCheck
        id={2308}
        name="Aztec Enemy: Starting Tunnel 0"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2309}
        name="Aztec Enemy: Starting Tunnel 1"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2310}
        name="Aztec Enemy: Starting Tunnel 2"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && zinger}
        canGetBreak={logicBreak(inStage) && zinger}
      />
      <AztecCheck
        id={2311}
        name="Aztec Enemy: Starting Tunnel 3"
        region="Various Aztec Tunnels"
        canGetLogic={inStage.in && zinger}
        canGetBreak={logicBreak(inStage) && zinger}
      />
    </DropPool>
  )
}

export default BeforeOasisEnemies
