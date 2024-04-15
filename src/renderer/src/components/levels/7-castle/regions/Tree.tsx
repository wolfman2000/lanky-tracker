import TreeEnemies from '../enemies/Tree'
import TreeFairy from '../fairies/Tree'
import ChunkyTree from '../gold-bananas/chunky/Tree'
import DkTree from '../gold-bananas/dk/Tree'
import DkKasplat from '../kasplats/Dk'

const TreeChecks: React.FC = () => (
  <>
    <TreeEnemies />
    <ChunkyTree />
    <DkKasplat />
    <DkTree />
    <TreeFairy />
  </>
)

export default TreeChecks
