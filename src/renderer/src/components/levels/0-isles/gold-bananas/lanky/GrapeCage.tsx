import { useCheckLankyCage } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const GrapeCage: React.FC = () => {
  const cage = useCheckLankyCage()
  return <IslesCheck id={20} name="Isles Lanky Grape Cage" region="Krem Isle" canGetLogic={cage} />
}

export default GrapeCage
