import FactoryLobbyEnemies from './FactoryLobby'
import JapesLobbyEnemies from './JapesLobby'

const JapesForestEnemies: React.FC = () => (
  <>
    <JapesLobbyEnemies />
    {/* The Aztec zingers are not randomized yet. */}
    <FactoryLobbyEnemies />
  </>
)

export default JapesForestEnemies
