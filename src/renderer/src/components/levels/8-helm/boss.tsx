import BossPool from '@renderer/components/pools/Bosses'
import { useHelmDoors } from '@renderer/hooks/helm'
import HelmCheck from './check'

const BossCheck: React.FC = () => {
  const helmDoors = useHelmDoors()
  return (
    <BossPool>
      <HelmCheck
        id={8105}
        name="The End of Helm"
        canGetLogic={helmDoors.in}
        canGetBreak={helmDoors.out}
      />
    </BossPool>
  )
}

export default BossCheck
