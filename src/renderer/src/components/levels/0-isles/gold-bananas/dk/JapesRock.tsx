import { useCheckDkJapesRock } from '@renderer/hooks/isles'
import IslesCheck from '../../IslesCheck'

export const JapesRock: React.FC = () => {
  const japesRock = useCheckDkJapesRock()
  return (
    <IslesCheck
      id={1}
      name="Isles Japes Lobby Entrance Item"
      region="Main Isle"
      canGetLogic={japesRock}
    />
  )
}

export default JapesRock
