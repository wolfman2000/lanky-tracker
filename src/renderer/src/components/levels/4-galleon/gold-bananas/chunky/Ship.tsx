import { useChunky5DoorShipGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const Chunky5Ship: React.FC = () => (
  <GalleonCheck
    id={4043}
    name="Galleon Chunky 5 Door Ship"
    region="5 Door Ship"
    canGetLogic={useChunky5DoorShipGb()}
  />
)

export default Chunky5Ship
