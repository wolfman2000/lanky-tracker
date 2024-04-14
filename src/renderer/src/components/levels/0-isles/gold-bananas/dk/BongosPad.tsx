import { useCheckDkMusicPad } from '@renderer/hooks/isles'
import IslesCheck from '../../IslesCheck'

const BongosPad: React.FC = () => {
  const pad = useCheckDkMusicPad()
  return (
    <IslesCheck
      id={3}
      name="Isles Donkey Bongos Pad"
      region="Japes-Forest Lobbies"
      canGetLogic={pad.in}
      canGetBreak={pad.out}
    />
  )
}

export default BongosPad
