import { useCheckTinyFeatherCage } from '@renderer/hooks/isles'
import IslesCheck from '../../IslesCheck'

const FeatherCage: React.FC = () => {
  const checkFeatherCage = useCheckTinyFeatherCage()
  return (
    <IslesCheck
      id={30}
      name="Isles Tiny Feather Cage"
      region="Outer Isles"
      canGetLogic={checkFeatherCage}
    />
  )
}

export default FeatherCage
