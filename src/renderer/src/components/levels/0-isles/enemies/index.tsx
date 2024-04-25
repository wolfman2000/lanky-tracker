import CastleLobbyEnemies from './CastleLobby'
import IslesMainEnemies from './IslesMain'
import JapesForestEnemies from './JapesForest'
import KremBaseEnemies from './KremBase'
import KremLiftEnemies from './KremLift'
import NearAztecEnemies from './NearAztec'

const EnemyLocations: React.FC = () => (
  <>
    <IslesMainEnemies />
    <KremBaseEnemies />
    <NearAztecEnemies />
    <KremLiftEnemies />
    <JapesForestEnemies />
    <CastleLobbyEnemies />
  </>
)

export default EnemyLocations
