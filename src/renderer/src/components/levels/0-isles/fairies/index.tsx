import FactoryLobbyFairy from './FactoryLobby'
import ForestLobbyFairy from './ForestLobby'
import SmallIslandFairy from './SmallIsland'
import UpperKremFairy from './UpperKrem'

const FairyLocations: React.FC = () => (
  <>
    <SmallIslandFairy />
    <FactoryLobbyFairy />
    <ForestLobbyFairy />
    <UpperKremFairy />
  </>
)

export default FairyLocations
