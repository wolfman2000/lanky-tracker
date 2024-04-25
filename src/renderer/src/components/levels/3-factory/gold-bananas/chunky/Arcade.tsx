import { useChunkyArcadeGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const ArcadeBarrel: React.FC = () => (
  <FactoryCheck
    id={3042}
    name="Factory Chunky Barrel by Arcade"
    region="Storage And Arcade"
    canGetLogic={useChunkyArcadeGb()}
  />
)

export default ArcadeBarrel
