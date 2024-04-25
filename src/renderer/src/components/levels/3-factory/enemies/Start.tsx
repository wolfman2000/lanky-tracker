import { useDefeatRoboKremling } from '@renderer/hooks/enemies'
import { usePlayFactory, useFactoryTesting } from '@renderer/hooks/factory'
import FactoryCheck from '../check'
import DropPool from '@renderer/components/pools/Drops'

const StartEnemies: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const robo = useDefeatRoboKremling()
  return (
    <DropPool>
      <FactoryCheck
        id={3302}
        name="Factory Enemy: Lobby Left"
        region="Factory Start"
        canGetLogic={inStage && robo}
      />
      <FactoryCheck
        id={3303}
        name="Factory Enemy: Lobby Right"
        region="Factory Start"
        canGetLogic={inStage && robo}
      />
      <FactoryCheck
        id={3308}
        name="Factory Enemy: Tunnel to Hatch"
        region="Factory Start"
        canGetLogic={testing && robo}
      />
    </DropPool>
  )
}

export default StartEnemies
