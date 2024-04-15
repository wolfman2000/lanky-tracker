import { useDiddy5DoorShipGb } from '@renderer/hooks/galleon'
import GalleonCheck from '../../check'

const Diddy5Ship: React.FC = () => (
  <GalleonCheck
    id={4013}
    name="Galleon Diddy 5 Door Ship"
    region="5 Door Ship"
    canGetLogic={useDiddy5DoorShipGb()}
  />
)

export default Diddy5Ship
