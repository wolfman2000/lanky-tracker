import BeforeOasisEnemies from './BeforeOasis'
import ConnectorTunnelEnemies from './Connector'
import Chunky5Enemies from './DoorChunky'
import Diddy5Enemies from './DoorDiddy'
import Dk5Enemies from './DoorDk'
import Lanky5Enemies from './DoorLanky'
import Tiny5Enemies from './DoorTiny'
import LlamaTempleEnemies from './Llama'
import OasisEnemies from './Oasis'
import TinyStartEnemies from './TinyStart'
import TinySwimEnemies from './TinySwim'
import TotemEnemies from './Totem'

const EnemyLocations: React.FC = () => (
  <>
    <BeforeOasisEnemies />
    <OasisEnemies />
    <TinyStartEnemies />
    <TinySwimEnemies />
    <ConnectorTunnelEnemies />
    <TotemEnemies />
    <Dk5Enemies />
    <Diddy5Enemies />
    <Lanky5Enemies />
    <Tiny5Enemies />
    <Chunky5Enemies />
    <LlamaTempleEnemies />
  </>
)

export default EnemyLocations
