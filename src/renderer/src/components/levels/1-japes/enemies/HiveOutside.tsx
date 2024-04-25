import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useJapesHive } from '@renderer/hooks/japes'
import { useAnyKong } from '@renderer/hooks/kongs'
import JapesCheck from '../check'

const HiveOutsideEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const hiveOut = useJapesHive()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <JapesCheck
        id={1307}
        name="Japes Enemy: Hive Area 0"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && zinger}
      />
      <JapesCheck
        id={1308}
        name="Japes Enemy: Hive Area 1"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && zinger}
      />
      <JapesCheck
        id={1309}
        name="Japes Enemy: Hive Area 2"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && zinger}
      />
      <JapesCheck
        id={1310}
        name="Japes Enemy: Hive Area 3"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && anyKong}
      />
      <JapesCheck
        id={1311}
        name="Japes Enemy: Hive Area 4"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && anyKong}
      />
    </DropPool>
  )
}

export default HiveOutsideEnemies
