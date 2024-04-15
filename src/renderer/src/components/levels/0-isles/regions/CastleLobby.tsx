import CastleLobby from '../dirt/CastleLobby'
import CastleLobbyEnemies from '../enemies/CastleLobby'
import CastleBarrel from '../gold-bananas/lanky/CastleBarrel'
import DiddyKasplat from '../kasplats/Diddy'

const CastleLobbyChecks: React.FC = () => (
  <>
    <CastleBarrel />
    <DiddyKasplat />
    <CastleLobby />
    <CastleLobbyEnemies />
  </>
)

export default CastleLobbyChecks
