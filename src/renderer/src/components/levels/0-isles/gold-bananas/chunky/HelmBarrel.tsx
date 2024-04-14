import { useCheckChunkyHelm } from '@renderer/hooks/isles'
import IslesCheck from '../../IslesCheck'

const HelmBarrel: React.FC = () => {
  const helm = useCheckChunkyHelm()
  return (
    <IslesCheck
      id={43}
      name="Isles Chunky Helm Lobby Barrel"
      region="Caves-Helm Lobbies"
      canGetLogic={helm.in}
      canGetBreak={helm.out}
    />
  )
}

export default HelmBarrel
