import ChunkyProduction from '../gold-bananas/chunky/Production'
import DiddyProduction from '../gold-bananas/diddy/Production'
import CrusherRoom from '../gold-bananas/dk/Crusher'
import LankyProduction from '../gold-bananas/lanky/Production'
import TinyProduction from '../gold-bananas/tiny/Production'
import DiddyKasplat from '../kasplats/Diddy'
import DkKasplat from '../kasplats/Dk'

const ProductionChecks: React.FC = () => (
  <>
    <DiddyKasplat />
    <CrusherRoom />
    <ChunkyProduction />
    <DiddyProduction />
    <DkKasplat />
    <LankyProduction />
    <TinyProduction />
  </>
)

export default ProductionChecks
