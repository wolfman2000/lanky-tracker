import DropPool from '@renderer/components/pools/Drops'
import { useDefeatRoboKremling, useDefeatZinger } from '@renderer/hooks/enemies'
import { useFactoryTesting, usePlayFactory } from '@renderer/hooks/factory'
import { useAnyKong } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'

const TestingEnemies: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const anyKong = useAnyKong()
  const robo = useDefeatRoboKremling()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <FactoryCheck
        id={3305}
        name="Factory Enemy: Block Tower 0"
        region="Testing Area"
        canGetLogic={testing && anyKong}
      />
      <FactoryCheck
        id={3306}
        name="Factory Enemy: Block Tower 1"
        region="Testing Area"
        canGetLogic={testing && anyKong}
      />
      <FactoryCheck
        id={3307}
        name="Factory Enemy: Block Tower 2"
        region="Testing Area"
        canGetLogic={testing && anyKong}
      />
      <FactoryCheck
        id={3311}
        name="Factory Enemy: Tunnel to Block Tower"
        region="Testing Area"
        canGetLogic={testing && robo}
      />
      <FactoryCheck
        id={3316}
        name="Factory Enemy: To Block Tower Tunnel"
        region="Testing Area"
        canGetLogic={inStage && zinger}
      />
    </DropPool>
  )
}

export default TestingEnemies
