import MushroomArena from '../arenas/Mushroom'
import MushExteriorEnemies from '../enemies/MushExterior'
import MushroomTop from '../gold-bananas/diddy/Top'
import ForestBlast from '../gold-bananas/dk/Blast'
import ChunkyKasplat from '../kasplats/Chunky'
import TinyKasplat from '../kasplats/Tiny'

const MushExteriorChecks: React.FC = () => (
  <>
    <ForestBlast />
    <MushroomTop />
    <TinyKasplat />
    <ChunkyKasplat />
    <MushroomArena />
    <MushExteriorEnemies />
  </>
)

export default MushExteriorChecks
