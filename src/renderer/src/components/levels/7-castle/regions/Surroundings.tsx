import GreenhouseArena from '../arenas/Greenhouse'
import TopFloorDirt from '../dirt/TopFloor'
import SurroundingsEnemies from '../enemies/Surroundings'
import ChunkyShed from '../gold-bananas/chunky/Shed'
import CastleTop from '../gold-bananas/diddy/Top'
import LankyGreenhouse from '../gold-bananas/lanky/Greenhouse'
import TinyTrash from '../gold-bananas/tiny/Trash'
import LankyKasplat from '../kasplats/Lanky'
import TinyKasplat from '../kasplats/Tiny'

const SurroundingsChecks: React.FC = () => (
  <>
    <CastleTop />
    <LankyGreenhouse />
    <TinyTrash />
    <ChunkyShed />
    <LankyKasplat />
    <TinyKasplat />
    <GreenhouseArena />
    <TopFloorDirt />
    <SurroundingsEnemies />
  </>
)

export default SurroundingsChecks
