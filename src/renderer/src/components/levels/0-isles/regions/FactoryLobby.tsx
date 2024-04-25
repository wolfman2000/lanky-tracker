import FactoryLobbyEnemies from '../enemies/FactoryLobby'
import FactoryLobbyFairy from '../fairies/FactoryLobby'
import BongosPad from '../gold-bananas/dk/BongosPad'
import TinyKasplat from '../kasplats/Tiny'

const FactoryLobbyChecks: React.FC = () => (
  <>
    <BongosPad />
    <TinyKasplat />
    <FactoryLobbyFairy />
    <FactoryLobbyEnemies />
  </>
)

export default FactoryLobbyChecks
