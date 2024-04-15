import DropPool from '@renderer/components/pools/Drops'
import { usePlayCastle, useSlamCastle } from '@renderer/hooks/castle'
import { useDefeatKosha } from '@renderer/hooks/enemies'
import { useChunky } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

const MuseumEnemies: React.FC = () => {
  const inStage = usePlayCastle()
  const canSlam = useSlamCastle()
  const chunky = useChunky()
  const kosha = useDefeatKosha()
  return (
    <DropPool>
      <CastleCheck
        id={7361}
        name="Castle Enemy: Museum Start"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam && kosha}
      />
      <CastleCheck
        id={7362}
        name="Castle Enemy: Museum Main 0"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam}
      />
      <CastleCheck
        id={7363}
        name="Castle Enemy: Museum Main 1"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam}
      />
      <CastleCheck
        id={7364}
        name="Castle Enemy: Museum Main 2"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam}
      />
      <CastleCheck
        id={7365}
        name="Castle Enemy: Museum Main 3"
        region="Castle Rooms"
        canGetLogic={inStage && chunky && canSlam}
      />
    </DropPool>
  )
}

export default MuseumEnemies
