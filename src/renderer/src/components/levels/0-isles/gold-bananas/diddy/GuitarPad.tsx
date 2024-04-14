import { useCheckDiddyCaves } from '@renderer/hooks/isles'
import IslesCheck from '../../IslesCheck'

const GuitarPad: React.FC = () => {
  const cave = useCheckDiddyCaves()
  return (
    <IslesCheck
      id={13}
      name="Isles Diddy Guitar Pad"
      region="Caves-Helm Lobbies"
      canGetLogic={cave.in}
      canGetBreak={cave.out}
    />
  )
}

export default GuitarPad
