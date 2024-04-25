import { useHelmDoors } from '@renderer/hooks/helm'
import { useAnyKong } from '@renderer/hooks/kongs'
import HelmCheck from '../check'

const HelmDoorsEnemies: React.FC = () => {
  const helmDoors = useHelmDoors()
  const anyKong = useAnyKong()
  return (
    <>
      <HelmCheck
        id={8317}
        name="Helm Enemy: Nav Room Left"
        canGetLogic={helmDoors.in && anyKong}
        canGetBreak={helmDoors.out && anyKong}
      />
      <HelmCheck
        id={8318}
        name="Helm Enemy: Nav Room Right"
        canGetLogic={helmDoors.in && anyKong}
        canGetBreak={helmDoors.out && anyKong}
      />
    </>
  )
}

export default HelmDoorsEnemies
