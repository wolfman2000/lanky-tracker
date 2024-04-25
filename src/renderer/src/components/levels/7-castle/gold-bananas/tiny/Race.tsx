import { useTinyRoomGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const TinyRace: React.FC = () => (
  <CastleCheck
    id={7030}
    name="Castle Tiny Car Race"
    region="Castle Rooms"
    canGetLogic={useTinyRoomGb()}
  />
)

export default TinyRace
