import DropPool from '@renderer/components/pools/Drops'
import { useDefeatZinger } from '@renderer/hooks/enemies'
import { usePlayFactory } from '@renderer/hooks/factory'
import { useAnyKong } from '@renderer/hooks/kongs'
import IslesCheck from '../check'

const FactoryLobbyEnemies: React.FC = () => {
  const anyKong = useAnyKong()
  const playFactory = usePlayFactory()
  const zinger = useDefeatZinger()
  return (
    <DropPool>
      <IslesCheck
        id={314}
        name="Isles Enemy: Factory Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={anyKong && playFactory && zinger}
      />
    </DropPool>
  )
}
export default FactoryLobbyEnemies
