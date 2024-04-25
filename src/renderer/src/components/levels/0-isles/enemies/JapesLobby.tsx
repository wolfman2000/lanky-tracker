import DropPool from '@renderer/components/pools/Drops'
import { usePlayJapes } from '@renderer/hooks/japes'
import { useAnyKong } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const JapesLobbyEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const playJapes = usePlayJapes()
  return (
    <DropPool>
      <IslesCheck
        id={310}
        name="Isles Enemy: Japes Lobby 0"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playJapes}
      />
      <IslesCheck
        id={311}
        name="Isles Enemy: Japes Lobby 1"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playJapes}
      />
    </DropPool>
  )
}

export default JapesLobbyEnemies
