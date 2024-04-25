import DropPool from '@renderer/components/pools/Drops'
import { useDefeatRoboKremling, useDefeatZinger } from '@renderer/hooks/enemies'
import { useFactoryTesting, usePlayFactory } from '@renderer/hooks/factory'
import { useAnyKong } from '@renderer/hooks/kongs'
import FactoryCheck from '../check'

const ProductionEnemies: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const anyKong = useAnyKong()
  const robo = useDefeatRoboKremling()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <FactoryCheck
        id={3309}
        name="Factory Enemy: Tunnel to Prod 0"
        region="Production Room"
        canGetLogic={testing && anyKong}
      />
      <FactoryCheck
        id={3310}
        name="Factory Enemy: Tunnel to Prod 1"
        region="Production Room"
        canGetLogic={testing && robo}
      />
      <FactoryCheck
        id={3314}
        name="Factory Enemy: Low Warp 4"
        region="Production Room"
        canGetLogic={inStage && robo}
      />
      <FactoryCheck
        id={3315}
        name="Factory Enemy: Diddy Switch"
        region="Production Room"
        canGetLogic={inStage && zinger}
      />
    </DropPool>
  )
}

export default ProductionEnemies
