import { useCheckLankyPrison } from '@renderer/hooks/isles'
import IslesCheck from '../../IslesCheck'

export const PrisonSprint: React.FC = () => {
  const prison = useCheckLankyPrison()
  return (
    <IslesCheck
      id={21}
      name="Isles Lanky Sprint Cage"
      region="Krem Isle"
      canGetLogic={prison.in}
      canGetBreak={prison.out}
    />
  )
}

export default PrisonSprint
