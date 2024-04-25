import VultureArena from '../arenas/Vulture'
import TinySwimEnemies from '../enemies/TinySwim'
import FreeTiny from '../gold-bananas/diddy/FreeTiny'
import VultureShoot from '../gold-bananas/lanky/Vulture'
import TinyKlaptrap from '../gold-bananas/tiny/Klaptrap'

const TinySwimChecks: React.FC = () => (
  <>
    <TinyKlaptrap />
    <FreeTiny />
    <VultureShoot />
    <VultureArena />
    <TinySwimEnemies />
  </>
)

export default TinySwimChecks
