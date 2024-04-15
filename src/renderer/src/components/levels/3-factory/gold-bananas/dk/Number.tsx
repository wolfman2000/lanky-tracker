import { useDkNumberGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const NumberGame: React.FC = () => (
  <FactoryCheck
    id={3001}
    name="Factory Donkey Number Game"
    region="Testing Area"
    canGetLogic={useDkNumberGb()}
  />
)

export default NumberGame
