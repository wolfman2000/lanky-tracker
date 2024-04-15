import { useLankyFreeChunkyGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const FreeChunky: React.FC = () => (
  <FactoryCheck
    id={3022}
    name="Factory Free Chunky Item"
    region="Storage And Arcade"
    canGetLogic={useLankyFreeChunkyGb()}
  />
)

export default FreeChunky
