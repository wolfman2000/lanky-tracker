import { useDk5DoorShipGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const Dk5Ship: React.FC = () => (
  <GalleonCheck
    id={4004}
    name="Galleon Donkey 5 Door Ship"
    region="5 Door Ship"
    canGetLogic={useDk5DoorShipGb()}
  />
)

export default Dk5Ship
