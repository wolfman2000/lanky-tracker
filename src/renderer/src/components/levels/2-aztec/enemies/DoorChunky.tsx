import DropPool from '@renderer/components/pools/Drops'
import { useAztec5DoorTemple } from '@renderer/hooks/aztec'
import { useDefeatKlobber, useDefeatZinger } from '@renderer/hooks/enemies'
import { usePineapple } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'

const Chunky5Enemies: React.FC = () => {
  const door = useAztec5DoorTemple()
  const pineapple = usePineapple()
  const zinger = useDefeatZinger()
  const klobber = useDefeatKlobber()
  return (
    <DropPool>
      <AztecCheck
        id={2346}
        name="Aztec Enemy: Chunky 5DT Start Right"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber}
        canGetBreak={logicBreak(door) && pineapple && klobber}
      />
      <AztecCheck
        id={2347}
        name="Aztec Enemy: Chunky 5DT Start Left"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber}
        canGetBreak={logicBreak(door) && pineapple && klobber}
      />
      <AztecCheck
        id={2348}
        name="Aztec Enemy: Chunky 5DT Second Right"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber}
        canGetBreak={logicBreak(door) && pineapple && klobber}
      />
      <AztecCheck
        id={2349}
        name="Aztec Enemy: Chunky 5DT Second Left"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && klobber}
        canGetBreak={logicBreak(door) && pineapple && klobber}
      />
      <AztecCheck
        id={2350}
        name="Aztec Enemy: Chunky 5DT Reward"
        region="5 Door Temple"
        canGetLogic={door.in && pineapple && zinger}
        canGetBreak={logicBreak(door) && pineapple && zinger}
      />
    </DropPool>
  )
}

export default Chunky5Enemies
