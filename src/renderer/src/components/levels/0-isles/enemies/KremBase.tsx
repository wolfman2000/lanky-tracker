import { useAnyKong } from '@renderer/hooks/kongs'
import IslesCheck from '../check'
import DropPool from '@renderer/components/pools/Drops'

const KremBaseEnemies: React.FC = () => (
  <DropPool>
    <IslesCheck
      id={305}
      name="Isles Enemy: Monkeyport Pad"
      region="Krem Isle"
      canGetLogic={useAnyKong()}
    />
  </DropPool>
)

export default KremBaseEnemies
