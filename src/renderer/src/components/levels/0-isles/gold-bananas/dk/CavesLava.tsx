import { useCheckDkCavesLobby } from '@renderer/hooks/isles'
import IslesCheck from '../../IslesCheck'

const CavesLava: React.FC = () => {
  const cave = useCheckDkCavesLobby()
  return (
    <IslesCheck
      id={4}
      name="Isles Donkey Caves Lava"
      region="Caves-Helm Lobbies"
      canGetLogic={cave.in}
      canGetBreak={cave.out}
    />
  )
}

export default CavesLava
