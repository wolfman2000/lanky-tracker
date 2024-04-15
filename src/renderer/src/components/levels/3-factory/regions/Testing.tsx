import FunkyCrate from '../crates/Funky'
import TestingEnemies from '../enemies/Testing'
import FunkyFairy from '../fairies/Funky'
import NumberFairy from '../fairies/Number'
import BlockTower from '../gold-bananas/diddy/Block'
import NumberGame from '../gold-bananas/dk/Number'
import TestingBarrel from '../gold-bananas/lanky/Testing'
import TinyDartboard from '../gold-bananas/tiny/Dart'
import ChunkyKasplat from '../kasplats/Chunky'

const TestingChecks: React.FC = () => (
  <>
    <ChunkyKasplat />
    <FunkyCrate />
    <FunkyFairy />
    <BlockTower />
    <TinyDartboard />
    <TestingBarrel />
    <NumberFairy />
    <NumberGame />
    <TestingEnemies />
  </>
)

export default TestingChecks
