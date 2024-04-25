import { useLanky5DoorShipGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const Lanky5Ship: React.FC = () => (
  <GalleonCheck
    id={4023}
    name="Galleon Lanky 5 Door Ship"
    region="5 Door Ship"
    canGetLogic={useLanky5DoorShipGb()}
  />
)

export default Lanky5Ship
