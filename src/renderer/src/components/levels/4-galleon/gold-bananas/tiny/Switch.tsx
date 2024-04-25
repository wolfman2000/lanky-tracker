import { useTiny2DoorShipGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const Tiny2Ship: React.FC = () => (
  <GalleonCheck
    id={4032}
    name="Galleon Tiny 2 Door Ship"
    region="Shipyard Outskirts"
    canGetLogic={useTiny2DoorShipGb()}
  />
)

export default Tiny2Ship
