import OasisDirt from '../dirt/Oasis'
import OasisEnemies from '../enemies/Oasis'
import FreeLlama from '../gold-bananas/dk/FreeLlama'
import DiddyKasplat from '../kasplats/Diddy'

const OasisChecks: React.FC = () => (
  <>
    <FreeLlama />
    <DiddyKasplat />
    <OasisDirt />
    <OasisEnemies />
  </>
)

export default OasisChecks
