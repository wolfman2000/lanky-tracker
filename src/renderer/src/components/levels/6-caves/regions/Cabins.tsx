import CabinArena from '../arenas/Cabin'
import CabinsEnemies from '../enemies/Cabins'
import CabinFairy from '../fairies/Cabin'
import ChunkyCabin from '../gold-bananas/chunky/Cabin'
import DiddyCandleCabin from '../gold-bananas/diddy/Candle'
import DiddyGauntletCabin from '../gold-bananas/diddy/Gauntlet'
import DkGauntletCabin from '../gold-bananas/dk/Gauntlet'
import RotatingCabin from '../gold-bananas/dk/Rotate'
import SprintCabin from '../gold-bananas/lanky/Cabin'
import TinyCabin from '../gold-bananas/tiny/Cabin'
import TinyKasplat from '../kasplats/Tiny'

const CabinsChecks: React.FC = () => (
  <>
    <RotatingCabin />
    <DkGauntletCabin />
    <DiddyGauntletCabin />
    <DiddyCandleCabin />
    <SprintCabin />
    <TinyCabin />
    <ChunkyCabin />
    <TinyKasplat />
    <CabinFairy />
    <CabinArena />
    <CabinsEnemies />
  </>
)

export default CabinsChecks
