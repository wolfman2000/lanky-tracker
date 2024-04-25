import DropPool from '@renderer/components/pools/Drops'
import { usePlayAztec } from '@renderer/hooks/aztec'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { useAnyKong } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const AztecLobbyEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const playAztec = usePlayAztec()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <IslesCheck
        id={312}
        name="Isles Enemy: Aztec Lobby 0"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playAztec && zinger}
      />
      <IslesCheck
        id={313}
        name="Isles Enemy: Aztec Lobby 1"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playAztec && zinger}
      />
    </DropPool>
  )
}

export default AztecLobbyEnemies
