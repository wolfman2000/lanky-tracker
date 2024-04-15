import DropPool from '@renderer/components/pools/Drops'
import { useCastleTree } from '@renderer/hooks/castle'
import { useDefeatBat } from '@renderer/hooks/enemies'
import CastleCheck from '../check'

const TreeEnemies: React.FC = () => {
  const tree = useCastleTree()
  const bat = useDefeatBat()
  return (
    <DropPool>
      <CastleCheck
        id={7370}
        name="Castle Enemy: Tree Start 0"
        region="Castle Surroundings"
        canGetLogic={tree && bat}
      />
      <CastleCheck
        id={7371}
        name="Castle Enemy: Tree Start 1"
        region="Castle Surroundings"
        canGetLogic={tree && bat}
      />
    </DropPool>
  )
}

export default TreeEnemies
