import OwlCrate from '../crates/Owl'
import OwlEnemies from '../enemies/Owl'
import OwlRace from '../gold-bananas/diddy/Owl'
import RabbitRace from '../gold-bananas/lanky/Race'
import AnthillBanana from '../gold-bananas/tiny/AnthillBanana'
import AnthillBean from '../gold-bananas/tiny/AnthillBean'
import LankyKasplat from '../kasplats/Lanky'

const OwlChecks: React.FC = () => (
  <>
    <OwlRace />
    <RabbitRace />
    <AnthillBanana />
    <AnthillBean />
    <LankyKasplat />
    <OwlCrate />
    <OwlEnemies />
  </>
)

export default OwlChecks
