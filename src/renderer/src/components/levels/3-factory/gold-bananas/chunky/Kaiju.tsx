import { useChunkyKaijuGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const ToyMonster: React.FC = () => (
  <FactoryCheck
    id={3040}
    name="Factory Chunky Toy Monster"
    region="R&D Area"
    canGetLogic={useChunkyKaijuGb()}
  />
)

export default ToyMonster
