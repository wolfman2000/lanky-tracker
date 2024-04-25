import { useDkTunnelGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const QuicksandTunnel: React.FC = () => {
  const tunnelGb = useDkTunnelGb()
  return (
    <AztecCheck
      id={2002}
      name="Aztec Donkey Quicksand Tunnel Barrel"
      region="Various Aztec Tunnels"
      canGetLogic={tunnelGb.in}
      canGetBreak={tunnelGb.out}
    />
  )
}

export default QuicksandTunnel
