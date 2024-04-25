import DropPool from '@renderer/components/pools/Drops'
import { useDefeatPurpleKlaptrap, useDefeatZinger } from '@renderer/hooks/enemies'
import { useJapesHive, useSlamJapes } from '@renderer/hooks/japes'
import { useMini } from '@renderer/hooks/kongs'
import JapesCheck from '../check'

const HiveInteriorEnemies: React.FC = () => {
  const hiveOut = useJapesHive()
  const hiveIn = useMini() && hiveOut
  const zinger = useDefeatZinger()
  const klaptrap = useDefeatPurpleKlaptrap()
  const canSlam = useSlamJapes()
  return (
    <DropPool>
      <JapesCheck
        id={1335}
        name="Japes Enemy: Hive First Room"
        region="Hive Tunnel Area"
        canGetLogic={hiveIn && klaptrap}
      />
      <JapesCheck
        id={1336}
        name="Japes Enemy: Hive Second Room 0"
        region="Hive Tunnel Area"
        canGetLogic={hiveIn && klaptrap && canSlam}
      />
      <JapesCheck
        id={1337}
        name="Japes Enemy: Hive Second Room 1"
        region="Hive Tunnel Area"
        canGetLogic={hiveIn && klaptrap && canSlam}
      />
      <JapesCheck
        id={1338}
        name="Japes Enemy: Hive Third Room 0"
        region="Hive Tunnel Area"
        canGetLogic={hiveIn && klaptrap && canSlam}
      />
      <JapesCheck
        id={1339}
        name="Japes Enemy: Hive Third Room 1"
        region="Hive Tunnel Area"
        canGetLogic={hiveIn && klaptrap && canSlam}
      />
      <JapesCheck
        id={1340}
        name="Japes Enemy: Hive Third Room 2"
        region="Hive Tunnel Area"
        canGetLogic={hiveIn && zinger && canSlam}
      />
      <JapesCheck
        id={1341}
        name="Japes Enemy: Hive Third Room 3"
        region="Hive Tunnel Area"
        canGetLogic={hiveIn && zinger && canSlam}
      />
      <JapesCheck
        id={1342}
        name="Japes Enemy: Hive Main Room"
        region="Hive Tunnel Area"
        canGetLogic={hiveIn && zinger}
      />
    </DropPool>
  )
}

export default HiveInteriorEnemies
