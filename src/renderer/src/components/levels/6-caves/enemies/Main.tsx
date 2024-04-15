import DropPool from '@renderer/components/pools/Drops'
import { usePlayCaves } from '@renderer/hooks/caves'
import { useDefeatKosha, useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong, useMini } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const MainEnemies: React.FC = () => {
  const inStage = usePlayCaves()
  const anyKong = useAnyKong()
  const zinger = useDefeatZinger()
  const kosha = useDefeatKosha()
  const mini = useMini()
  return (
    <DropPool>
      <CavesCheck
        id={6300}
        name="Caves Enemy: Start"
        region="Main Caves Area"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6301}
        name="Caves Enemy: Near Ice Castle"
        region="Main Caves Area"
        canGetLogic={inStage && anyKong}
      />
      <CavesCheck
        id={6304}
        name="Caves Enemy: Near Funky"
        region="Main Caves Area"
        canGetLogic={inStage && zinger}
      />
      <CavesCheck
        id={6306}
        name="Caves Enemy: Near Bonus Room"
        region="Main Caves Area"
        canGetLogic={inStage && mini && kosha}
      />
      <CavesCheck
        id={6305}
        name="Caves Enemy: Near Snide"
        region="Main Caves Area"
        canGetLogic={inStage && kosha}
      />
    </DropPool>
  )
}

export default MainEnemies
