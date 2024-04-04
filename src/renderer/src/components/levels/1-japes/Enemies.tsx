import { useDefeatKlump, useDefeatPurpleKlaptrap, useDefeatZinger } from '@renderer/hooks/enemies'
import {
  useJapesHive,
  useJapesKongGates,
  useJapesMine,
  useJapesPainting,
  useJapesSideArea,
  usePlayJapes,
  useSlamJapes
} from '@renderer/hooks/japes'
import { useAnyKong, useCharge, useMini } from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import JapesCheck from './JapesCheck'

const EnemyLocations: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayJapes()
  const japesSide = useJapesSideArea()
  const paintingInside = useJapesPainting()
  const mine = useJapesMine()
  const hiveOut = useJapesHive()
  const hiveIn = useMini() && hiveOut
  const zinger = useDefeatZinger()
  const klump = useDefeatKlump()
  const klaptrap = useDefeatPurpleKlaptrap()
  const charge = useCharge()
  const canSlam = useSlamJapes()
  const kongGates = useJapesKongGates()

  return (
    <>
      <JapesCheck
        id={1300}
        name="Japes Enemy Start"
        region="Japes Lowlands"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1301}
        name="Japes Enemy Diddy Cavern"
        region="Japes Lowlands"
        canGetLogic={japesSide && anyKong}
      />
      <JapesCheck
        id={1302}
        name="Japes Enemy Early Tunnel 0"
        region="Japes Lowlands"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1303}
        name="Japes Enemy Early Tunnel 1"
        region="Japes Lowlands"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1304}
        name="Japes Enemy Stormy Tunnel 0"
        region="Stormy Tunnel Area"
        canGetLogic={kongGates && anyKong}
      />
      <JapesCheck
        id={1305}
        name="Japes Enemy Stormy Tunnel 1"
        region="Stormy Tunnel Area"
        canGetLogic={kongGates && anyKong}
      />
      <JapesCheck
        id={1306}
        name="Japes Enemy Stormy Tunnel 2"
        region="Stormy Tunnel Area"
        canGetLogic={kongGates && anyKong}
      />
      <JapesCheck
        id={1307}
        name="Japes Enemy Hive Area 0"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && zinger}
      />
      <JapesCheck
        id={1308}
        name="Japes Enemy Hive Area 1"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && zinger}
      />
      <JapesCheck
        id={1309}
        name="Japes Enemy Hive Area 2"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && zinger}
      />
      <JapesCheck
        id={1310}
        name="Japes Enemy Hive Area 3"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && anyKong}
      />
      <JapesCheck
        id={1311}
        name="Japes Enemy Hive Area 4"
        region="Hive Tunnel Area"
        canGetLogic={hiveOut && anyKong}
      />
      <JapesCheck
        id={1312}
        name="Japes Enemy Demo Death"
        region="Japes Lowlands"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1313}
        name="Japes Enemy Near Underground"
        region="Japes Lowlands"
        canGetLogic={inStage && zinger}
      />
      <JapesCheck
        id={1314}
        name="Japes Enemy Near Painting 0"
        region="Japes Hillside"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1315}
        name="Japes Enemy Near Painting 1"
        region="Japes Hillside"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1316}
        name="Japes Enemy Near Painting 2"
        region="Japes Hillside"
        canGetLogic={inStage && zinger}
      />
      <JapesCheck
        id={1317}
        name="Japes Enemy Mountain"
        region="Japes Hillside"
        canGetLogic={inStage && anyKong}
      />
      <JapesCheck
        id={1318}
        name="Japes Enemy Feather Tunnel"
        region="Hive Tunnel Area"
        canGetLogic={kongGates && zinger}
      />
      <JapesCheck
        id={1319}
        name="Japes Enemy Middle Tunnel"
        region="Stormy Tunnel Area"
        canGetLogic={kongGates && anyKong}
      />
      <JapesCheck
        id={1320}
        name="Japes Enemy Painting Gauntlet 0"
        region="Japes Caves And Mines"
        canGetLogic={paintingInside.in && zinger}
        canGetBreak={logicBreak(paintingInside) && zinger}
      />
      <JapesCheck
        id={1321}
        name="Japes Enemy Painting Gauntlet 1"
        region="Japes Caves And Mines"
        canGetLogic={paintingInside.in && zinger}
        canGetBreak={logicBreak(paintingInside) && zinger}
      />
      <JapesCheck
        id={1322}
        name="Japes Enemy Painting Gauntlet 2"
        region="Japes Caves And Mines"
        canGetLogic={paintingInside.in && zinger}
        canGetBreak={logicBreak(paintingInside) && zinger}
      />
      <JapesCheck
        id={1323}
        name="Japes Enemy Painting Gauntlet 3"
        region="Japes Caves And Mines"
        canGetLogic={paintingInside.in && zinger}
        canGetBreak={logicBreak(paintingInside) && zinger}
      />
      <JapesCheck
        id={1324}
        name="Japes Enemy Painting Gauntlet 4"
        region="Japes Caves And Mines"
        canGetLogic={paintingInside.in && zinger}
        canGetBreak={logicBreak(paintingInside) && zinger}
      />
      <JapesCheck
        id={1325}
        name="Japes Enemy Mountain Start 0"
        region="Japes Caves And Mines"
        canGetLogic={mine}
      />
      <JapesCheck
        id={1326}
        name="Japes Enemy Mountain Start 1"
        region="Japes Caves And Mines"
        canGetLogic={mine}
      />
      <JapesCheck
        id={1327}
        name="Japes Enemy Mountain Start 2"
        region="Japes Caves And Mines"
        canGetLogic={mine}
      />
      <JapesCheck
        id={1328}
        name="Japes Enemy Mountain Start 3"
        region="Japes Caves And Mines"
        canGetLogic={mine}
      />
      <JapesCheck
        id={1329}
        name="Japes Enemy Mountain Start 4"
        region="Japes Caves And Mines"
        canGetLogic={mine}
      />
      <JapesCheck
        id={1330}
        name="Japes Enemy Mountain Gate 0"
        region="Japes Caves And Mines"
        canGetLogic={mine}
      />
      <JapesCheck
        id={1331}
        name="Japes Enemy Mountain Gate 1"
        region="Japes Caves And Mines"
        canGetLogic={mine}
      />
      <JapesCheck
        id={1332}
        name="Japes Enemy Mountain Charge Switch"
        region="Japes Caves And Mines"
        canGetLogic={mine && charge && klump}
      />
      <JapesCheck
        id={1333}
        name="Japes Enemy Mountain Conveyor 0"
        region="Japes Caves And Mines"
        canGetLogic={mine && canSlam && klump}
      />
      <JapesCheck
        id={1334}
        name="Japes Enemy Mountain Conveyor 1"
        region="Japes Caves And Mines"
        canGetLogic={mine && canSlam && klump}
      />
      <JapesCheck
        id={1335}
        name="Japes Enemy Hive First Room"
        region="Hive Tunnel Area"
        canGetLogic={hiveIn && klaptrap}
      />
      <JapesCheck
        id={1336}
        name="Japes Enemy Hive Second Room 0"
        region="Hive Tunnel Area"
        canGetLogic={hiveIn && klaptrap && canSlam}
      />
      <JapesCheck
        id={1337}
        name="Japes Enemy Hive Second Room 1"
        region="Hive Tunnel Area"
        canGetLogic={hiveIn && klaptrap && canSlam}
      />
      <JapesCheck
        id={1338}
        name="Japes Enemy Hive Third Room 0"
        region="Hive Tunnel Area"
        canGetLogic={hiveIn && klaptrap && canSlam}
      />
      <JapesCheck
        id={1339}
        name="Japes Enemy Hive Third Room 1"
        region="Hive Tunnel Area"
        canGetLogic={hiveIn && klaptrap && canSlam}
      />
      <JapesCheck
        id={1340}
        name="Japes Enemy Hive Third Room 2"
        region="Hive Tunnel Area"
        canGetLogic={hiveIn && zinger && canSlam}
      />
      <JapesCheck
        id={1341}
        name="Japes Enemy Hive Third Room 3"
        region="Hive Tunnel Area"
        canGetLogic={hiveIn && zinger && canSlam}
      />
      <JapesCheck
        id={1342}
        name="Japes Enemy Hive Main Room"
        region="Hive Tunnel Area"
        canGetLogic={hiveIn && zinger}
      />
    </>
  )
}

export default EnemyLocations
