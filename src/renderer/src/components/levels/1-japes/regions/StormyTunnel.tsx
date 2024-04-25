import StormyTunnelEnemies from '../enemies/StormyTunnel'
import SlopeBarrel from '../gold-bananas/lanky/SlopeBarrel'
import DiddyKasplat from '../kasplats/Diddy'
import LankyKasplat from '../kasplats/Lanky'

const StormyTunnelChecks: React.FC = () => (
  <>
    <SlopeBarrel />
    <DiddyKasplat />
    <LankyKasplat />
    <StormyTunnelEnemies />
  </>
)

export default StormyTunnelChecks
