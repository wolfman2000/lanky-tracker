import DropPool from '@renderer/components/pools/Drops'
import { usePlayCastle } from '@renderer/hooks/castle'
import { useDefeatKosha } from '@renderer/hooks/enemies'
import { useAnyKong } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const CastleLobbyEnemies: React.FC = () => {
  const playCastle = usePlayCastle()
  const anyKong = useAnyKong()
  const kosha = useDefeatKosha()
  return (
    <DropPool>
      <IslesCheck
        id={315}
        name="Isles Enemy: Castle Lobby Left"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && kosha}
      />
      <IslesCheck
        id={316}
        name="Isles Enemy: Castle Lobby Near Right"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && kosha}
      />
      <IslesCheck
        id={317}
        name="Isles Enemy: Castle Lobby Far Right"
        region="Caves-Helm Lobbies"
        canGetLogic={anyKong && playCastle && kosha}
      />
    </DropPool>
  )
}

export default CastleLobbyEnemies
