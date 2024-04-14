import { useCheckTinyAztecLobby } from '@renderer/hooks/isles'
import IslesCheck from '../../IslesCheck'

const AztecBarrel: React.FC = () => {
  const checkTinyAztec = useCheckTinyAztecLobby()
  return (
    <IslesCheck
      id={32}
      name="Isles Tiny Aztec Lobby Barrel"
      region="Japes-Forest Lobbies"
      canGetLogic={checkTinyAztec.in}
      canGetBreak={checkTinyAztec.out}
    />
  )
}
export default AztecBarrel
