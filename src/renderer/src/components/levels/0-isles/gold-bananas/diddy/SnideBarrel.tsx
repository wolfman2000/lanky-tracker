import { useCheckDiddySnide } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const SnideBarrel: React.FC = () => {
  const snide = useCheckDiddySnide()
  return (
    <IslesCheck
      id={10}
      name="Isles Diddy Snide's Spring Barrel"
      region="Krem Isle"
      canGetLogic={snide.in}
      canGetBreak={snide.out}
    />
  )
}

export default SnideBarrel
