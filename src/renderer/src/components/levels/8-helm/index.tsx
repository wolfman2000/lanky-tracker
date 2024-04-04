import BossPool from '@renderer/components/pools/Bosses'
import DropPool from '@renderer/components/pools/Drops'
import { useHelmDoors } from '@renderer/hooks/helm'
import ArenaLocations from './Arenas'
import EnemyLocations from './Enemies'
import FairyLocations from './Fairies'
import HelmCheck from './HelmCheck'
import MedalLocations from './Medals'

const HelmChecks: React.FC = () => {
  const helmDoors = useHelmDoors()
  return (
    <div className="grid">
      <ArenaLocations />
      <MedalLocations />
      <BossPool>
        <HelmCheck
          id={8105}
          name="Helm Key 8 Location"
          canGetLogic={helmDoors.in}
          canGetBreak={helmDoors.out}
        />
      </BossPool>
      <FairyLocations />
      <DropPool>
        <EnemyLocations />
      </DropPool>
    </div>
  )
}

export default HelmChecks
