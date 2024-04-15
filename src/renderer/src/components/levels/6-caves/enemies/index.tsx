import CabinsEnemies from './Cabins'
import IglooEnemies from './Igloo'
import MainEnemies from './Main'

const EnemyLocations: React.FC = () => (
  <>
    <MainEnemies />
    <IglooEnemies />
    <CabinsEnemies />
  </>
)

export default EnemyLocations
