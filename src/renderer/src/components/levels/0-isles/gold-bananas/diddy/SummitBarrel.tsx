import { useCheckDiddySummit } from '@renderer/hooks/isles'
import IslesCheck from '../../IslesCheck'

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
