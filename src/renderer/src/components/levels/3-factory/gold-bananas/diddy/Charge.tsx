import { useDiddyEnemyGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const ChargeTest: React.FC = () => (
  <FactoryCheck
    id={3011}
    name="Factory Diddy Charge Enemies"
    region="R&D Area"
    canGetLogic={useDiddyEnemyGb()}
  />
)

export default ChargeTest
