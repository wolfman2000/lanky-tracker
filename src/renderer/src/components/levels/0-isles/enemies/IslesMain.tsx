import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const IslesMainEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <IslesCheck
        id={300}
        name="Isles Enemy: Pineapple Cage 0"
        region="Main Isle"
        canGetLogic={anyKong}
      />
      <IslesCheck
        id={301}
        name="Isles Enemy: Pineapple Cage 1"
        region="Main Isle"
        canGetLogic={anyKong && zinger}
      />
      <IslesCheck
        id={302}
        name="Isles Enemy: Fungi Cannon 0"
        region="Main Isle"
        canGetLogic={anyKong}
      />
      <IslesCheck
        id={303}
        name="Isles Enemy: Fungi Cannon 1"
        region="Main Isle"
        canGetLogic={anyKong && zinger}
      />
      <IslesCheck
        id={304}
        name="Isles Enemy: Japes Entrance"
        region="Main Isle"
        canGetLogic={anyKong}
      />
    </DropPool>
  )
}

export default IslesMainEnemies
