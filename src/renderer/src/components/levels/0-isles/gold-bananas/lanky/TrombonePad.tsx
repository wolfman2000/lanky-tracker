import { useCheckLankyMusicPad } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const TrombonePad: React.FC = () => {
  const music = useCheckLankyMusicPad()
  return (
    <IslesCheck
      id={22}
      name="Isles Lanky Japes Instrument"
      region="Japes-Forest Lobbies"
      canGetLogic={music}
    />
  )
}

export default TrombonePad
