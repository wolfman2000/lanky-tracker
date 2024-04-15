import CavernArena from '../arenas/Cavern'
import CavernsEnemies from '../enemies/Caverns'
import ChestFairy from '../fairies/Chest'
import CannonGame from '../gold-bananas/chunky/Cannon'
import GalleonChest from '../gold-bananas/chunky/Chest'
import LankyKasplat from '../kasplats/Lanky'
import TinyKasplat from '../kasplats/Tiny'

const CavernsChecks: React.FC = () => (
  <>
    <LankyKasplat />
    <CannonGame />
    <TinyKasplat />
    <GalleonChest />
    <ChestFairy />
    <CavernArena />
    <CavernsEnemies />
  </>
)

export default CavernsChecks
