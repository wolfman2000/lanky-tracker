import CabinIsleDirt from '../dirt/CabinIsle'
import SmallIslandFairy from '../fairies/SmallIsland'
import PoundX from '../gold-bananas/chunky/PoundX'
import FeatherCage from '../gold-bananas/tiny/FeatherCage'
import ReturnFairies from '../gold-bananas/tiny/ReturnFairies'

const OuterIslesChecks: React.FC = () => (
  <>
    <FeatherCage />
    <PoundX />
    <SmallIslandFairy />
    <CabinIsleDirt />
    <ReturnFairies />
  </>
)

export default OuterIslesChecks
