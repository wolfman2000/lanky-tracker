import DropPool from '@renderer/components/pools/Drops'
import { useAztecBack } from '@renderer/hooks/aztec'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'

const TotemEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = useAztecBack()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <AztecCheck
        id={2313}
        name="Aztec Enemy: Outside Llama"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2314}
        name="Aztec Enemy: Outside Tower"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2316}
        name="Aztec Enemy: Around Totem"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2317}
        name="Aztec Enemy: Outside 5DT"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && zinger}
        canGetBreak={logicBreak(inStage) && zinger}
      />
      <AztecCheck
        id={2318}
        name="Aztec Enemy: Near Snoop Tunnel"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
    </DropPool>
  )
}

export default TotemEnemies
