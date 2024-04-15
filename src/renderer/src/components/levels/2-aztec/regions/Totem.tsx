import GongCrate from '../crates/Gongs'
import LlamaOutsideCrate from '../crates/LlamaOutside'
import TotemEnemies from '../enemies/Totem'
import RamGongs from '../gold-bananas/diddy/Gong'
import VultureRace from '../gold-bananas/diddy/Vulture'
import BeetleRace from '../gold-bananas/tiny/Beetle'

const TotemChecks: React.FC = () => (
  <>
    <RamGongs />
    <VultureRace />
    <BeetleRace />
    <LlamaOutsideCrate />
    <GongCrate />
    <TotemEnemies />
  </>
)

export default TotemChecks
