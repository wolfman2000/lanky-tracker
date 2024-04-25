import CactusCrate from '../crates/Cactus'
import Mechfish from '../gold-bananas/diddy/Mech'
import FreeSeal from '../gold-bananas/dk/Blast'
import SealRace from '../gold-bananas/dk/Race'
import Lanky2Ship from '../gold-bananas/lanky/Switch'
import TinySub from '../gold-bananas/tiny/Sub'
import Tiny2Ship from '../gold-bananas/tiny/Switch'
import ChunkyKasplat from '../kasplats/Chunky'

const OutskirtsChecks: React.FC = () => (
  <>
    <Lanky2Ship />
    <Tiny2Ship />
    <FreeSeal />
    <SealRace />
    <Mechfish />
    <CactusCrate />
    <TinySub />
    <ChunkyKasplat />
  </>
)

export default OutskirtsChecks
