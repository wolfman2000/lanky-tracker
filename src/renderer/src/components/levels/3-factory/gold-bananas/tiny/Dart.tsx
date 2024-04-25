import { useTinyDartGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const TinyDartboard: React.FC = () => (
  <FactoryCheck
    id={3030}
    name="Factory Tiny Dartboard"
    region="Testing Area"
    canGetLogic={useTinyDartGb()}
  />
)

export default TinyDartboard
