import PeanutGateEnemies from '../enemies/PeanutGate'
import PeanutTunnel from '../gold-bananas/diddy/PeanutTunnel'
import GrapeGate from '../gold-bananas/lanky/GrapeGate'
import FeatherGate from '../gold-bananas/tiny/FeatherGate'

const PeanutGateChecks: React.FC = () => (
  <>
    <PeanutTunnel />
    <GrapeGate />
    <FeatherGate />
    <PeanutGateEnemies />
  </>
)

export default PeanutGateChecks
