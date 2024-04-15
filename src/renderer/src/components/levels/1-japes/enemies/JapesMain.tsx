import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { usePlayJapes } from '@renderer/hooks/japes'
import { useAnyKong } from '@renderer/hooks/kongs'
import JapesCheck from '../check'

const JapesMainEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayJapes()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <JapesCheck
        id={1314}
        name="Japes Enemy: Near Painting 0"
        region="Japes Hillside"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1315}
        name="Japes Enemy: Near Painting 1"
        region="Japes Hillside"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1316}
        name="Japes Enemy: Near Painting 2"
        region="Japes Hillside"
        canGetLogic={inStage && zinger}
      />
      <JapesCheck
        id={1317}
        name="Japes Enemy: Mountain"
        region="Japes Hillside"
        canGetLogic={inStage && anyKong}
      />
    </DropPool>
  )
}

export default JapesMainEnemies
