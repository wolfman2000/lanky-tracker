import { useCheckTinyGalleonLobby } from '@renderer/hooks/isles'
import IslesCheck from '../../IslesCheck'

const GalleonSwim: React.FC = () => {
  const checkTinyGalleon = useCheckTinyGalleonLobby()
  return (
    <IslesCheck
      id={33}
      name="Isles Tiny Galleon Lobby Swim"
      region="Japes-Forest Lobbies"
      canGetLogic={checkTinyGalleon.in}
      canGetBreak={checkTinyGalleon.out}
    />
  )
}

export default GalleonSwim
