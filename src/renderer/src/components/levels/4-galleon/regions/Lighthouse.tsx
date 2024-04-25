import LighthouseDirt from '../dirt/Lighthouse'
import LighthouseEnemies from '../enemies/Lighthouse'
import SeasickShip from '../gold-bananas/chunky/Seasick'
import DiddyLighthouse from '../gold-bananas/diddy/Lighthouse'
import DkLighthouse from '../gold-bananas/dk/Lighthouse'
import EnguardeChest from '../gold-bananas/lanky/Chest'
import MermaidReward from '../gold-bananas/tiny/Mermaid'
import DiddyKasplat from '../kasplats/Diddy'

const LighthouseChecks: React.FC = () => (
  <>
    <DkLighthouse />
    <DiddyLighthouse />
    <EnguardeChest />
    <MermaidReward />
    <SeasickShip />
    <DiddyKasplat />
    <LighthouseDirt />
    <LighthouseEnemies />
  </>
)

export default LighthouseChecks
