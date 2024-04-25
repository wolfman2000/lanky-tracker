import CenterEnemies from './Center'
import MillsEnemies from './Mills'
import MushExteriorEnemies from './MushExterior'
import MushInteriorEnemies from './MushInterior'
import OwlEnemies from './Owl'

const EnemyLocations: React.FC = () => {
  return (
    <>
      <CenterEnemies />
      <MushExteriorEnemies />
      <MushInteriorEnemies />
      <OwlEnemies />
      <MillsEnemies />
    </>
  )
}

export default EnemyLocations
