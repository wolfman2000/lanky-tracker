import { useCheckDiddySummit } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const SummitBarrel: React.FC = () => {
  const summit = useCheckDiddySummit()
  return (
    <IslesCheck
      id={12}
      name="Isles Diddy Summit Barrel"
      region="Main Isle"
      canGetLogic={summit.in}
      canGetBreak={summit.out}
    />
  )
}

export default SummitBarrel
