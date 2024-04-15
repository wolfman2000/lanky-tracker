import DropPool from '@renderer/components/pools/Drops'
import { useAztecFront } from '@renderer/hooks/aztec'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'

const OasisEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = useAztecFront()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <AztecCheck
        id={2315}
        name="Aztec Enemy: Near Candy"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && zinger}
        canGetBreak={logicBreak(inStage) && zinger}
      />
      <AztecCheck
        id={2312}
        name="Aztec Enemy: Oasis Door"
        region="Aztec Oasis And Totem Area"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
    </DropPool>
  )
}

export default OasisEnemies
