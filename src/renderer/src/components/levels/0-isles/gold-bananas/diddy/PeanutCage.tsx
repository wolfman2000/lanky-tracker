import { useCheckDiddyCage } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

export const PeanutCage: React.FC = () => {
  const cage = useCheckDiddyCage()
  return (
    <IslesCheck
      id={11}
      name="Isles Diddy Peanut Cage"
      region="Main Isle"
      canGetLogic={cage.in}
      canGetBreak={cage.out}
    />
  )
}

export default PeanutCage
