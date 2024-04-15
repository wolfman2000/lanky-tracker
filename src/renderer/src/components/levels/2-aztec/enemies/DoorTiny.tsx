import DropPool from '@renderer/components/pools/Drops'
import { useAztec5DoorTemple } from '@renderer/hooks/aztec'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useFeather } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import AztecCheck from '../check'

const Tiny5Enemies: React.FC = () => {
  const door = useAztec5DoorTemple()
  const feather = useFeather()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <AztecCheck
        id={2338}
        name="Aztec Enemy: Tiny 5DT Start Right Front"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger}
        canGetBreak={logicBreak(door) && feather && zinger}
      />
      <AztecCheck
        id={2339}
        name="Aztec Enemy: Tiny 5DT Start Left Back"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger}
        canGetBreak={logicBreak(door) && feather && zinger}
      />
      <AztecCheck
        id={2340}
        name="Aztec Enemy: Tiny 5DT Start Right Back"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger}
        canGetBreak={logicBreak(door) && feather && zinger}
      />
      <AztecCheck
        id={2341}
        name="Aztec Enemy: Tiny 5DT Start Left Front"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger}
        canGetBreak={logicBreak(door) && feather && zinger}
      />
      <AztecCheck
        id={2342}
        name="Aztec Enemy: Tiny 5DT Reward 0"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger}
        canGetBreak={logicBreak(door) && feather && zinger}
      />
      <AztecCheck
        id={2343}
        name="Aztec Enemy: Tiny 5DT Reward 1"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger}
        canGetBreak={logicBreak(door) && feather && zinger}
      />
      <AztecCheck
        id={2344}
        name="Aztec Enemy: Tiny 5DT Dead End 0"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger}
        canGetBreak={logicBreak(door) && feather && zinger}
      />
      <AztecCheck
        id={2345}
        name="Aztec Enemy: Tiny 5DT Dead End 1"
        region="5 Door Temple"
        canGetLogic={door.in && feather && zinger}
        canGetBreak={logicBreak(door) && feather && zinger}
      />
    </DropPool>
  )
}

export default Tiny5Enemies
