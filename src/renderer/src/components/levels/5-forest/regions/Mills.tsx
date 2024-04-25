import BarnInsideCrate from '../crates/BarnInside'
import BarnOutsideCrate from '../crates/BarnOutside'
import RaftersCrate from '../crates/Rafters'
import MillsGrassDirt from '../dirt/MillsGrass'
import MillsEnemies from '../enemies/Mills'
import BarnFairy from '../fairies/Barn'
import RaftersFairy from '../fairies/Rafters'
import ChunkyMill from '../gold-bananas/chunky/Mill'
import DarkRafters from '../gold-bananas/diddy/Rafters'
import MillWinch from '../gold-bananas/diddy/Winch'
import DkBarn from '../gold-bananas/dk/Barn'
import DkMill from '../gold-bananas/dk/Mill'
import LankyMill from '../gold-bananas/lanky/Mill'
import SpiderBoss from '../gold-bananas/tiny/Spider'
import DkKasplat from '../kasplats/Dk'

const MillsChecks: React.FC = () => (
  <>
    <MillsGrassDirt />
    <RaftersCrate />
    <DarkRafters />
    <RaftersFairy />
    <MillWinch />
    <DkMill />
    <LankyMill />
    <SpiderBoss />
    <ChunkyMill />
    <BarnOutsideCrate />
    <DkKasplat />
    <DkBarn />
    <BarnInsideCrate />
    <BarnFairy />
    <MillsEnemies />
  </>
)

export default MillsChecks
