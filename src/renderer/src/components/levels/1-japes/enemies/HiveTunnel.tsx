import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useJapesKongGates } from '@renderer/hooks/japes'
import JapesCheck from '../check'

const HiveTunnelEnemies: React.FC = () => {
  const zinger = useDefeatZinger()
  const kongGates = useJapesKongGates()
  return (
    <DropPool>
      <JapesCheck
        id={1318}
        name="Japes Enemy: Feather Tunnel"
        region="Hive Tunnel Area"
        canGetLogic={kongGates && zinger}
      />
    </DropPool>
  )
}

export default HiveTunnelEnemies
