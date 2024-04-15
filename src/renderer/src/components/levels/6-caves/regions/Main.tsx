import MainEnemies from '../enemies/Main'
import EarlyGone from '../gold-bananas/chunky/Gone'
import WaterfallBarrel from '../gold-bananas/diddy/Waterfall'
import CavesBlast from '../gold-bananas/dk/Blast'
import BeetleRace from '../gold-bananas/lanky/Beetle'
import CastleSlam from '../gold-bananas/lanky/Castle'
import MiniBarrel from '../gold-bananas/tiny/Mini'
import DiddyKasplat from '../kasplats/Diddy'
import DkKasplat from '../kasplats/Dk'
import LankyKasplat from '../kasplats/Lanky'

const MainChecks: React.FC = () => (
  <>
    <CavesBlast />
    <WaterfallBarrel />
    <CastleSlam />
    <BeetleRace />
    <MiniBarrel />
    <EarlyGone />
    <DkKasplat />
    <DiddyKasplat />
    <LankyKasplat />
    <MainEnemies />
  </>
)

export default MainChecks
