import ConnectorTunnelEnemies from '../enemies/Connector'
import TunnelBarrel from '../gold-bananas/chunky/Tunnel'
import TinyKasplat from '../kasplats/Tiny'

const ConnectorTunnelChecks: React.FC = () => (
  <>
    <TunnelBarrel />
    <TinyKasplat />
    <ConnectorTunnelEnemies />
  </>
)

export default ConnectorTunnelChecks
