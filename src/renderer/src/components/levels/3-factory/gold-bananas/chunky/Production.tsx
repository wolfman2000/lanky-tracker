import { useChunkyProductionGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const ChunkyProduction: React.FC = () => (
  <FactoryCheck
    id={3043}
    name="Factory Chunky Production Timer"
    region="Production Room"
    canGetLogic={useChunkyProductionGb()}
  />
)

export default ChunkyProduction
