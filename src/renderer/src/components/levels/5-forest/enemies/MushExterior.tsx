import DropPool from '@renderer/components/pools/Drops'
import { useDefeatKlump, useDefeatZinger } from '@renderer/hooks/enemies'
import { useForestMushroomRoof, usePlayForest } from '@renderer/hooks/forest'
import { useAnyKong } from '@renderer/hooks/kongs'
import ForestCheck from '../check'

const MushExteriorEnemies: React.FC = () => {
  const inStage = usePlayForest()
  const roof = useForestMushroomRoof()
  const klump = useDefeatKlump()
  const zinger = useDefeatZinger()
  const anyKong = useAnyKong()
  return (
    <DropPool>
      <ForestCheck
        id={5326}
        name="Forest Enemy: Yellow Tunnel 0"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5313}
        name="Forest Enemy: Near Low Warp 5"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5314}
        name="Forest Enemy: Near Pink Tunnel"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5315}
        name="Forest Enemy: Near Mushroom Rocket Barrel"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5316}
        name="Forest Enemy: b/t Rocket & Yellow Tunnel"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5317}
        name="Forest Enemy: Near Cranky"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5332}
        name="Forest Enemy: Near Pink Tunnel"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5318}
        name="Forest Enemy: Rear Tag"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />

      <ForestCheck
        id={5319}
        name="Forest Enemy: Near Face Puzzle"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5320}
        name="Forest Enemy: Near Crown"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5321}
        name="Forest Enemy: Near High Warp 5"
        region="Giant Mushroom Exterior"
        canGetLogic={inStage && zinger}
      />
      <ForestCheck
        id={5322}
        name="Forest Enemy: Top Of Mushroom"
        region="Giant Mushroom Exterior"
        canGetLogic={roof && anyKong && klump}
      />
    </DropPool>
  )
}

export default MushExteriorEnemies
