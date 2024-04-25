import { useChunkySeasickGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const SeasickShip: React.FC = () => (
  <GalleonCheck
    id={4042}
    name="Galleon Chunky Seasick"
    region="Lighthouse Area"
    canGetLogic={useChunkySeasickGb()}
  />
)

export default SeasickShip
