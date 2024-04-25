import DropPool from '@renderer/components/pools/Drops'
import { useDefeatKlump, useDefeatZinger } from '@renderer/hooks/enemies'
import { useForestMushroomRoof, usePlayForest, useSlamForest } from '@renderer/hooks/forest'
import { useChunky, useLanky } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import ForestCheck from '../check'

const MushInteriorEnemies: React.FC = () => {
  const inStage = usePlayForest()
  const klump = useDefeatKlump()
  const zinger = useDefeatZinger()
  const lanky = useLanky()
  const chunky = useChunky()
  const roof = useForestMushroomRoof()
  const canSlam = useSlamForest()
  return (
    <DropPool>
      <ForestCheck
        id={5348}
        name="Forest Enemy: Mushroom Night Door"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && klump}
      />
      <ForestCheck
        id={5349}
        name="Forest Enemy: Mushroom Path 0"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5350}
        name="Forest Enemy: Mushroom Path 1"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5354}
        name="Forest Enemy: Mushroom Leap 0"
        region="Giant Mushroom Insides"
        canGetLogic={roof.in && lanky && canSlam && zinger}
        canGetBreak={logicBreak(roof) && lanky && canSlam && zinger}
      />
      <ForestCheck
        id={5355}
        name="Forest Enemy: Mushroom Leap 1"
        region="Giant Mushroom Insides"
        canGetLogic={roof.in && lanky && canSlam && zinger}
        canGetBreak={logicBreak(roof) && lanky && canSlam && zinger}
      />
      <ForestCheck
        id={5356}
        name="Forest Enemy: Face Puzzle"
        region="Giant Mushroom Insides"
        canGetLogic={inStage && chunky && canSlam && zinger}
      />
    </DropPool>
  )
}

export default MushInteriorEnemies
