import HelmDoorsEnemies from './Doors'
import HelmEntryEnemies from './Entry'
import HelmMachineEnemies from './Machine'

const EnemyLocations: React.FC = () => {
  return (
    <>
      <HelmEntryEnemies />
      <HelmMachineEnemies />
      <HelmDoorsEnemies />
    </>
  )
}

export default EnemyLocations
