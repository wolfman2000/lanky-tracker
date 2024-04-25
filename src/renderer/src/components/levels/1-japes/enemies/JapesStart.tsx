import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { usePlayJapes } from '@renderer/hooks/japes'
import { useAnyKong } from '@renderer/hooks/kongs'
import JapesCheck from '../check'

const JapesStartEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayJapes()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <JapesCheck
        id={1300}
        name="Japes Enemy: Start"
        region="Japes Lowlands"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1302}
        name="Japes Enemy: Early Tunnel 0"
        region="Japes Lowlands"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1303}
        name="Japes Enemy: Early Tunnel 1"
        region="Japes Lowlands"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1312}
        name="Japes Enemy: Demo Death"
        region="Japes Lowlands"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1313}
        name="Japes Enemy: Near Underground"
        region="Japes Lowlands"
        canGetLogic={inStage && zinger}
      />
    </DropPool>
  )
}

export default JapesStartEnemies
