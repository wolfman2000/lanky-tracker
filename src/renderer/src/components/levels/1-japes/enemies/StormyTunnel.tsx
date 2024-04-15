import DropPool from '@renderer/components/pools/Drops'
import { useJapesKongGates } from '@renderer/hooks/japes'
import { useAnyKong } from '@renderer/hooks/kongs'
import JapesCheck from '../check'

const StormyTunnelEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const kongGates = useJapesKongGates()
  return (
    <DropPool>
      <JapesCheck
        id={1304}
        name="Japes Enemy: Stormy Tunnel 0"
        region="Stormy Tunnel Area"
        canGetLogic={kongGates && anyKong}
      />
      <JapesCheck
        id={1305}
        name="Japes Enemy: Stormy Tunnel 1"
        region="Stormy Tunnel Area"
        canGetLogic={kongGates && anyKong}
      />
      <JapesCheck
        id={1306}
        name="Japes Enemy: Stormy Tunnel 2"
        region="Stormy Tunnel Area"
        canGetLogic={kongGates && anyKong}
      />
      <JapesCheck
        id={1319}
        name="Japes Enemy: Middle Tunnel"
        region="Stormy Tunnel Area"
        canGetLogic={kongGates && anyKong}
      />
    </DropPool>
  )
}

export default StormyTunnelEnemies
