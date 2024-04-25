import ShipFairy from '../fairies/Ship'
import Chunky5Ship from '../gold-bananas/chunky/Ship'
import Diddy5Ship from '../gold-bananas/diddy/Ship'
import Dk5Ship from '../gold-bananas/dk/Ship'
import Lanky5Ship from '../gold-bananas/lanky/Ship'
import Tiny5Ship from '../gold-bananas/tiny/Ship'

const FiveShipChecks: React.FC = () => (
  <>
    <Dk5Ship />
    <Diddy5Ship />
    <Lanky5Ship />
    <Tiny5Ship />
    <ShipFairy />
    <Chunky5Ship />
  </>
)

export default FiveShipChecks
