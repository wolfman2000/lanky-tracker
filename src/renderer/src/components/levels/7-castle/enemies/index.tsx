import BallroomEnemies from './Ballroom'
import MuseumEnemies from './Museum'
import LibraryEnemies from './Library'
import SurroundingsEnemies from './Surroundings'
import TreeEnemies from './Tree'
import UndergroundEnemies from './Underground'

const EnemyLocations: React.FC = () => (
  <>
    <TreeEnemies />
    <SurroundingsEnemies />
    <MuseumEnemies />
    <BallroomEnemies />
    <LibraryEnemies />
    <UndergroundEnemies />
  </>
)

export default EnemyLocations
