import { useChunkyDarkGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const DarkRoom: React.FC = () => (
  <FactoryCheck
    id={3041}
    name="Factory Chunky Dark Room"
    region="Storage And Arcade"
    canGetLogic={useChunkyDarkGb()}
  />
)

export default DarkRoom
