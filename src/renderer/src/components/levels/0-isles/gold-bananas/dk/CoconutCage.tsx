import { useCheckDkCoconutCage } from '@renderer/hooks/isles'
import IslesCheck from '../../IslesCheck'

const CoconutCage: React.FC = () => {
  const cage = useCheckDkCoconutCage()
  return (
    <IslesCheck id={2} name="Isles Donkey Coconut Cage" region="Krem Isle" canGetLogic={cage} />
  )
}

export default CoconutCage
