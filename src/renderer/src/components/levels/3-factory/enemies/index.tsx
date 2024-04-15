import ProductionEnemies from './Production'
import RNDEnemies from './Research'
import StartEnemies from './Start'
import StorageEnemies from './Storage'
import TestingEnemies from './Testing'

const EnemyLocations: React.FC = () => (
  <>
    <StartEnemies />
    <TestingEnemies />
    <RNDEnemies />
    <StorageEnemies />
    <ProductionEnemies />
  </>
)

export default EnemyLocations
