import LlamaInsideCrate from '../crates/LlamaInside'
import LlamaTempleEnemies from '../enemies/Llama'
import LlamaFairy from '../fairies/Llama'
import FreeLanky from '../gold-bananas/dk/FreeLanky'
import LlamaBarrel from '../gold-bananas/lanky/Llama'
import MatchGame from '../gold-bananas/lanky/Match'
import LavaPedestal from '../gold-bananas/tiny/Lava'
import LankyKasplat from '../kasplats/Lanky'

const LlamaTempleChecks: React.FC = () => (
  <>
    <FreeLanky />
    <LlamaBarrel />
    <MatchGame />
    <LavaPedestal />
    <LankyKasplat />
    <LlamaFairy />
    <LlamaInsideCrate />
    <LlamaTempleEnemies />
  </>
)

export default LlamaTempleChecks
