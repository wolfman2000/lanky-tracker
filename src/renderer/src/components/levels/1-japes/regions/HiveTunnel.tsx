import HiveTunnelEnemies from '../enemies/HiveTunnel'
import DkKasplat from '../kasplats/Dk'
import TinyKasplat from '../kasplats/Tiny'

const HiveTunnelChecks: React.FC = () => (
  <>
    <DkKasplat />
    <TinyKasplat />
    <HiveTunnelEnemies />
  </>
)

export default HiveTunnelChecks
