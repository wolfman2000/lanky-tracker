import { useTinyArcadeGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const TinyVent: React.FC = () => (
  <FactoryCheck
    id={3032}
    name="Factory Tiny Mini by Arcade"
    region="Storage And Arcade"
    canGetLogic={useTinyArcadeGb()}
  />
)

export default TinyVent
