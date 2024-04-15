import DropPool from '@renderer/components/pools/Drops'
import { useDefeatRoboKremling, useDefeatZinger } from '@renderer/hooks/enemies'
import { useFactoryTesting } from '@renderer/hooks/factory'
import FactoryCheck from '../check'

const RNDEnemies: React.FC = () => {
  const testing = useFactoryTesting()
  const robo = useDefeatRoboKremling()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <FactoryCheck
        id={3312}
        name="Factory Enemy: Tunnel to Race 0"
        region="R&D Area"
        canGetLogic={testing && robo}
      />
      <FactoryCheck
        id={3313}
        name="Factory Enemy: Tunnel to Race 1"
        region="R&D Area"
        canGetLogic={testing && zinger}
      />
    </DropPool>
  )
}
export default RNDEnemies
